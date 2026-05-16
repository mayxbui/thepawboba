<template>
  <div class="page">
    <NavBar />

    <div class="cart-wrap">

      <!-- Empty state -->
      <div v-if="cart.length === 0" class="empty-cart">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="empty-icon">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61H19a2 2 0 001.99-1.74L22 7H6"/>
        </svg>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <router-link to="/Order" class="browse-btn">BROWSE MENU</router-link>
      </div>

      <!-- Cart with items -->
      <template v-else>
        <div class="cart-header">
          <router-link to="/Order" class="back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Continue Shopping
          </router-link>
          <h2 class="cart-title">YOUR CART</h2>
        </div>

        <hr class="divider" />

        <div class="layout">

          <!-- LEFT: items -->
          <div class="cart-left">
            <div v-for="item in cart" :key="item.key" class="cart-item">

              <img
                :src="item.image"
                :alt="item.name"
                class="item-img clickable"
                @error="(e) => e.target.src = fallbackImg"
                @click="router.push(`/drink/${item.id}`)"
              />

              <div class="item-info">
                <div class="item-top">
                  <h3 class="clickable" @click="router.push(`/drink/${item.id}`)">{{ item.name }}</h3>
                  <button class="remove-btn" @click="removeItem(item.key)" aria-label="Remove item">✕</button>
                </div>

                <p class="item-desc">
                  {{ item.size }} · {{ item.sweetness }} · {{ item.ice }}
                  <span v-if="item.milk"> · {{ item.milk }}</span>
                </p>
                <p class="item-toppings" v-if="item.toppings?.length">
                  + {{ item.toppings.map(t => t.name).join(', ') }}
                </p>

                <div class="item-bottom">
                  <div class="item-actions">
                    <Counter
                      :quantity="item.qty"
                      @update:quantity="updateQty(item.key, $event)"
                    />
                    <button class="edit-btn" @click="router.push(`/drink/${item.id}`)">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="edit-icon">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                      Edit order
                    </button>
                  </div>
                  <span class="item-line-total">${{ (item.price * item.qty).toFixed(2) }}</span>
                </div>
              </div>

            </div>
          </div>

          <!-- RIGHT: summary -->
          <div class="cart-right">

            <!-- Pickup / Delivery toggle -->
            <div class="fulfillment-section">
              <div class="fulfillment-tabs">
                <button
                  class="fulfillment-tab"
                  :class="{ active: fulfillment === 'pickup' }"
                  @click="fulfillment = 'pickup'"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="tab-icon">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                  </svg>
                  Pickup
                </button>
                <button
                  class="fulfillment-tab"
                  :class="{ active: fulfillment === 'delivery' }"
                  @click="fulfillment = 'delivery'"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="tab-icon">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm11 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                  </svg>
                  Delivery
                </button>
              </div>

              <!-- Pickup details -->
              <div v-if="fulfillment === 'pickup'" class="fulfillment-body">
                <p class="fulfillment-label">LOCATION</p>
                <p class="fulfillment-value">408 S Locust St</p>

                <p class="fulfillment-label" style="margin-top:16px">PICKUP TIME</p>
                <div class="time-slots">
                  <button
                    v-for="slot in timeSlots"
                    :key="slot.value"
                    class="time-slot"
                    :class="{ active: pickupTime === slot.value }"
                    @click="pickupTime = slot.value"
                  >
                    <span class="slot-day">{{ slot.day }}</span>
                    <span class="slot-time">{{ slot.time }}</span>
                  </button>
                </div>
              </div>

              <!-- Delivery details -->
              <div v-else class="fulfillment-body">
                <p class="fulfillment-label">DELIVERY ADDRESS</p>
                <input
                  type="text"
                  v-model="deliveryStreet"
                  placeholder="Street address"
                  class="delivery-input"
                />
                <div class="delivery-row">
                  <input
                    type="text"
                    v-model="deliveryCity"
                    placeholder="City"
                    class="delivery-input"
                  />
                  <input
                    type="text"
                    v-model="deliveryZip"
                    placeholder="ZIP"
                    class="delivery-input delivery-zip"
                  />
                </div>
                <p v-if="deliveryError" class="field-error">{{ deliveryError }}</p>
                <p class="delivery-fee-note">Delivery fee: <strong>+$3.00</strong></p>
              </div>
            </div>

            <hr class="divider" />

            <!-- Tip -->
            <div class="tip-section">
              <h3>Add a tip</h3>
              <div class="tip-buttons">
                <button
                  v-for="t in tipPresets"
                  :key="t"
                  class="tip-btn"
                  :class="{ active: tip === t && !customTipActive }"
                  @click="selectPresetTip(t)"
                >+${{ t }}</button>
                <button
                  class="tip-btn"
                  :class="{ active: customTipActive }"
                  @click="activateCustomTip"
                >Custom</button>
              </div>
              <div v-if="customTipActive" class="custom-tip">
                <input
                  type="number"
                  v-model.number="tip"
                  min="0"
                  step="0.5"
                  placeholder="0.00"
                  class="tip-input"
                  ref="tipInputRef"
                />
              </div>
            </div>

            <hr class="divider" />

            <!-- Coupon -->
            <div class="coupon-section">
              <button class="coupon-toggle" @click="couponOpen = !couponOpen">
                <span>Add coupon or gift card</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="chevron" :class="{ rotated: couponOpen }">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div v-if="couponOpen" class="coupon-input-row">
                <input
                  type="text"
                  v-model="couponCode"
                  placeholder="Enter code"
                  class="coupon-input"
                  @keyup.enter="applyCoupon"
                />
                <button class="apply-btn" @click="applyCoupon">APPLY</button>
              </div>
              <p v-if="couponMsg" class="coupon-msg" :class="{ success: couponApplied }">{{ couponMsg }}</p>
            </div>

            <hr class="divider" />

            <!-- Totals -->
            <div class="totals">
              <div class="row">
                <span>Subtotal ({{ totalItems }} item{{ totalItems !== 1 ? 's' : '' }})</span>
                <span>${{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="row" v-if="discount > 0">
                <span class="discount-label">Coupon discount</span>
                <span class="discount-label">-${{ discount.toFixed(2) }}</span>
              </div>
              <div class="row" v-if="fulfillment === 'delivery'">
                <span>Delivery fee</span>
                <span>$3.00</span>
              </div>
              <div class="row">
                <span>Taxes (8.8%)</span>
                <span>${{ taxes.toFixed(2) }}</span>
              </div>
              <div class="row">
                <span>Tip</span>
                <span>${{ tipDisplay }}</span>
              </div>
              <hr class="divider thin" />
              <div class="row total-row">
                <strong>Estimated total</strong>
                <strong>${{ total.toFixed(2) }}</strong>
              </div>
            </div>

            <button class="pay-btn" @click="checkout">CONTINUE TO PAYMENT</button>
          </div>

        </div>
      </template>

    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
import Counter from './Counter.vue'
import fallbackImg from '../assets/sampleImg.svg'
import { useCart } from '../store/cart.js'

const router = useRouter()
const { items: cart, removeItem: removeFromStore, updateQty } = useCart()

// ── Fulfillment ────────────────────────────────
const fulfillment = ref('pickup')

const timeSlots = [
  { day: 'Today',    time: '12:00 PM', value: 'today-1200' },
  { day: 'Today',    time: '12:30 PM', value: 'today-1230' },
  { day: 'Today',    time:  '1:00 PM', value: 'today-1300' },
  { day: 'Today',    time:  '1:30 PM', value: 'today-1330' },
  { day: 'Today',    time:  '2:00 PM', value: 'today-1400' },
  { day: 'Tomorrow', time: '10:00 AM', value: 'tmrw-1000' },
  { day: 'Tomorrow', time: '11:00 AM', value: 'tmrw-1100' },
  { day: 'Tomorrow', time: '12:00 PM', value: 'tmrw-1200' },
]
const pickupTime = ref('today-1200')

const deliveryStreet = ref('')
const deliveryCity = ref('')
const deliveryZip = ref('')
const deliveryError = ref('')

const deliveryFee = computed(() => fulfillment.value === 'delivery' ? 3 : 0)

// ── Tip ───────────────────────────────────────
const tipPresets = [1, 2, 5]
const tip = ref(2)
const customTipActive = ref(false)
const tipInputRef = ref(null)

function selectPresetTip(val) {
  tip.value = val
  customTipActive.value = false
}

async function activateCustomTip() {
  customTipActive.value = true
  tip.value = 0
  await nextTick()
  tipInputRef.value?.focus()
}

const tipDisplay = computed(() => (tip.value || 0).toFixed(2))

// ── Coupon ────────────────────────────────────
const couponOpen = ref(false)
const couponCode = ref('')
const couponMsg = ref('')
const couponApplied = ref(false)
const discount = ref(0)

const VALID_COUPONS = { PAWS10: 0.1, BOBA5: 5 }

function applyCoupon() {
  const code = couponCode.value.trim().toUpperCase()
  if (!code) { couponMsg.value = 'Please enter a code.'; return }
  if (couponApplied.value) { couponMsg.value = 'A coupon is already applied.'; return }
  const val = VALID_COUPONS[code]
  if (val === undefined) {
    couponMsg.value = 'Invalid code. Try PAWS10 or BOBA5.'
  } else {
    discount.value = val < 1 ? subtotal.value * val : val
    couponApplied.value = true
    couponMsg.value = 'Coupon applied!'
  }
}

// ── Items ─────────────────────────────────────
function removeItem(key) {
  removeFromStore(key)
  if (couponApplied.value) discount.value = recalcDiscount()
}

function recalcDiscount() {
  const code = couponCode.value.trim().toUpperCase()
  const val = VALID_COUPONS[code]
  if (!val) return 0
  return val < 1 ? subtotal.value * val : val
}

// ── Totals ────────────────────────────────────
const totalItems = computed(() => cart.reduce((s, i) => s + i.qty, 0))
const subtotal = computed(() => cart.reduce((s, i) => s + i.price * i.qty, 0))
const taxes = computed(() => Number(((subtotal.value - discount.value + deliveryFee.value) * 0.088).toFixed(2)))
const total = computed(() => Math.max(0, subtotal.value - discount.value) + deliveryFee.value + taxes.value + (tip.value || 0))

// ── Checkout ──────────────────────────────────
function checkout() {
  if (fulfillment.value === 'delivery') {
    if (!deliveryStreet.value.trim() || !deliveryCity.value.trim() || !deliveryZip.value.trim()) {
      deliveryError.value = 'Please fill in your full delivery address.'
      return
    }
  }
  deliveryError.value = ''
  alert('Proceeding to payment — connect your payment provider here.')
}
</script>

<style scoped>
.page {
  background: var(--color-background);
  min-height: 100vh;
}

.cart-wrap {
  padding: 100px 6% 60px;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
}

/* Empty state */
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 80px 0;
  text-align: center;
  color: #888;
}

.empty-icon {
  width: 64px;
  height: 64px;
  color: #3017FE;
  opacity: 0.4;
}

.empty-cart h2 { color: #3017FE; margin: 0; }
.empty-cart p  { margin: 0; font-size: 15px; }

.browse-btn {
  margin-top: 8px;
  display: inline-block;
  background: #3017FE;
  color: white;
  text-decoration: none;
  font-family: var(--font-header);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 12px 28px;
  border: 2px solid #3017FE;
  transition: background 0.2s, color 0.2s;
}
.browse-btn:hover { background: transparent; color: #3017FE; }

/* Header */
.cart-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 8px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  font-size: 14px;
  color: #3017FE;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  padding: 0;
  white-space: nowrap;
}
.back-btn svg { width: 16px; height: 16px; }
.back-btn:hover { opacity: 0.7; }

.cart-title {
  font-size: 22px;
  font-weight: 800;
  color: #3017FE;
  margin: 0;
  letter-spacing: 0.06em;
}

/* Dividers */
.divider {
  border: none;
  border-top: 1px solid #3017FE;
  margin: 24px 0;
  opacity: 0.2;
}
.divider.thin { margin: 12px 0; opacity: 0.15; }

/* Layout */
.layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  align-items: flex-start;
}

/* Cart items */
.cart-item {
  display: flex;
  gap: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(48,23,254,0.1);
  margin-bottom: 24px;
}
.cart-item:last-child { border-bottom: none; margin-bottom: 0; }

.item-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  flex-shrink: 0;
  border: 1px solid rgba(48,23,254,0.15);
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.item-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.item-top h3 {
  color: #3017FE;
  margin: 0;
  font-size: 16px;
}

.remove-btn {
  background: none;
  border: none;
  color: #aaa;
  font-size: 14px;
  cursor: pointer;
  padding: 0 2px;
  line-height: 1;
  transition: color 0.2s;
  flex-shrink: 0;
}
.remove-btn:hover { color: #e44; }

.clickable { cursor: pointer; }
.clickable:hover { opacity: 0.75; }
h3.clickable:hover { text-decoration: underline; opacity: 1; }

.item-desc { font-size: 13px; color: #666; margin: 0; line-height: 1.5; }

.item-toppings {
  font-size: 12px;
  color: #3017FE;
  font-weight: 600;
  margin: 0;
}

.item-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.edit-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: #3017FE;
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 2px;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.edit-btn:hover { opacity: 1; }
.edit-icon { width: 13px; height: 13px; }

.item-line-total { font-weight: 700; font-size: 16px; color: #3017FE; }

/* Right panel */
.cart-right {
  position: sticky;
  top: 100px;
  border: 2px solid #3017FE;
  padding: 24px;
}

/* Fulfillment */
.fulfillment-section { display: flex; flex-direction: column; gap: 16px; }

.fulfillment-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px solid #3017FE;
}

.fulfillment-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 10px;
  background: transparent;
  border: none;
  color: #3017FE;
  font-family: var(--font-header);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.fulfillment-tab:first-child { border-right: 2px solid #3017FE; }

.fulfillment-tab.active {
  background: #3017FE;
  color: white;
}

.tab-icon { width: 16px; height: 16px; flex-shrink: 0; }

.fulfillment-body { display: flex; flex-direction: column; gap: 8px; }

.fulfillment-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #3017FE;
  margin: 0;
}

.fulfillment-value {
  font-size: 14px;
  color: #333;
  font-weight: 600;
  margin: 0;
}

/* Time slots */
.time-slots {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  margin-top: 4px;
}

.time-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 6px;
  border: 2px solid rgba(48,23,254,0.25);
  background: transparent;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  gap: 2px;
}
.time-slot:hover { border-color: #3017FE; }
.time-slot.active { background: #3017FE; border-color: #3017FE; }

.slot-day {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #888;
  text-transform: uppercase;
}
.time-slot.active .slot-day { color: rgba(255,255,255,0.7); }

.slot-time {
  font-size: 13px;
  font-weight: 700;
  color: #3017FE;
}
.time-slot.active .slot-time { color: white; }

/* Delivery inputs */
.delivery-input {
  width: 100%;
  padding: 9px 12px;
  border: 2px solid rgba(48,23,254,0.3);
  font-size: 14px;
  font-family: inherit;
  color: #333;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.delivery-input:focus { border-color: #3017FE; }

.delivery-row {
  display: grid;
  grid-template-columns: 1fr 90px;
  gap: 8px;
}

.delivery-zip { width: 100%; }

.field-error { font-size: 12px; color: #e44; margin: 0; }

.delivery-fee-note {
  font-size: 12px;
  color: #666;
  margin: 4px 0 0;
}

/* Tip */
.tip-section h3 {
  font-size: 15px;
  font-weight: 700;
  color: #3017FE;
  margin: 0 0 12px;
}

.tip-buttons { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }

.tip-btn {
  padding: 7px 14px;
  border: 2px solid #3017FE;
  background: transparent;
  color: #3017FE;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.tip-btn:hover, .tip-btn.active { background: #3017FE; color: white; }

.custom-tip { margin-top: 4px; }

.tip-input {
  width: 100%;
  padding: 8px 12px;
  border: 2px solid #3017FE;
  font-size: 15px;
  font-family: inherit;
  color: #3017FE;
  outline: none;
  box-sizing: border-box;
}

/* Coupon */
.coupon-section { display: flex; flex-direction: column; gap: 10px; }

.coupon-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  color: #3017FE;
  cursor: pointer;
  padding: 0;
}

.chevron { width: 18px; height: 18px; transition: transform 0.2s; }
.chevron.rotated { transform: rotate(180deg); }

.coupon-input-row { display: flex; gap: 8px; }

.coupon-input {
  flex: 1;
  padding: 8px 12px;
  border: 2px solid #3017FE;
  font-size: 14px;
  font-family: inherit;
  color: #3017FE;
  outline: none;
}

.apply-btn {
  background: #3017FE;
  color: white;
  border: none;
  padding: 8px 16px;
  font-family: var(--font-header);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: opacity 0.2s;
}
.apply-btn:hover { opacity: 0.85; }

.coupon-msg { font-size: 13px; color: #e44; margin: 0; }
.coupon-msg.success { color: #2ba84a; }

/* Totals */
.totals { display: flex; flex-direction: column; gap: 10px; }

.row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #444;
}

.discount-label { color: #2ba84a; font-weight: 600; }
.total-row { font-size: 16px; color: #3017FE; }

.pay-btn {
  width: 100%;
  background: #3017FE;
  color: white;
  border: 2px solid #3017FE;
  padding: 14px;
  font-family: var(--font-header);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.08em;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.2s, color 0.2s;
}
.pay-btn:hover { background: transparent; color: #3017FE; }

/* Responsive */
@media (max-width: 768px) {
  .layout { grid-template-columns: 1fr; }
  .cart-right { position: static; }
}

@media (max-width: 480px) {
  .cart-wrap { padding: 90px 4% 40px; }
  .item-img { width: 76px; height: 76px; }
  .time-slots { grid-template-columns: 1fr 1fr; }
}
</style>
