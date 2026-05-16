<template>
  <div class="page">
    <NavBar />

    <div class="page-wrap" v-if="drink">

      <!-- Breadcrumb -->
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <router-link to="/Home" class="crumb">Home</router-link>
        <span class="crumb-sep">›</span>
        <router-link to="/Order" class="crumb">Our Menu</router-link>
        <span class="crumb-sep">›</span>
        <span class="crumb crumb-current">{{ drink.name }}</span>
      </nav>

      <div class="layout">

        <!-- LEFT: image + description -->
        <div class="drink-left">
          <div class="img-wrap">
            <img
              :src="drinkImg"
              :alt="drink.name"
              class="drink-img"
              @error="drinkImg = fallbackImg"
            />
            <span class="category-badge">{{ drink.category }}</span>
          </div>
          <div class="description">
            <h2>Description</h2>
            <p>{{ drink.description }}</p>
          </div>
        </div>

        <!-- RIGHT: options -->
        <div class="drink-right">
          <h1 class="drink-name">{{ drink.name }}</h1>

          <div class="price-row">
            <span class="base-price">${{ lineTotal.toFixed(2) }}</span>
            <span class="price-note" v-if="quantity > 1">(${{ unitTotal.toFixed(2) }} × {{ quantity }})</span>
          </div>

          <!-- Size -->
          <div class="option-group">
            <h3>Size</h3>
            <div class="pills">
              <button
                v-for="s in drink.sizes"
                :key="s"
                class="pill"
                :class="{ active: selectedSize === s }"
                @click="selectedSize = s"
              >{{ s }}</button>
            </div>
          </div>

          <!-- Sweetness -->
          <div class="option-group">
            <h3>Sweetness</h3>
            <div class="pills">
              <button
                v-for="sw in drink.sweetness"
                :key="sw"
                class="pill"
                :class="{ active: selectedSweet === sw }"
                @click="selectedSweet = sw"
              >{{ sw }}</button>
            </div>
          </div>

          <!-- Ice -->
          <div class="option-group">
            <h3>Ice Level</h3>
            <div class="pills">
              <button
                v-for="ic in drink.ice"
                :key="ic"
                class="pill"
                :class="{ active: selectedIce === ic }"
                @click="selectedIce = ic"
              >{{ ic }}</button>
            </div>
          </div>

          <!-- Milk -->
          <div class="option-group" v-if="drink.milk?.length">
            <h3>Milk</h3>
            <div class="pills">
              <button
                v-for="m in drink.milk"
                :key="m"
                class="pill"
                :class="{ active: selectedMilk === m }"
                @click="selectedMilk = m"
              >{{ m }}</button>
            </div>
          </div>

          <!-- Toppings -->
          <div class="option-group">
            <h3>Toppings <span class="optional-tag">optional</span></h3>
            <div class="toppings-list">
              <label
                v-for="(t, i) in drink.toppings"
                :key="i"
                class="topping-card"
                :class="{ active: isToppingSelected(t) }"
              >
                <input
                  type="checkbox"
                  :value="t"
                  v-model="selectedToppings"
                  class="topping-check"
                />
                <span class="topping-name">{{ t.name }}</span>
                <span class="topping-price">+${{ t.price.toFixed(2) }}</span>
              </label>
            </div>
          </div>

          <!-- Quantity -->
          <div class="option-group qty-group">
            <h3>Quantity</h3>
            <Counter :quantity="quantity" @update:quantity="quantity = $event" />
          </div>

          <!-- Summary -->
          <div class="summary">
            <p class="summary-title">YOUR ORDER</p>
            <p>{{ drink.name }} — {{ selectedSize }}</p>
            <p class="summary-detail">Sweetness: {{ selectedSweet }}</p>
            <p class="summary-detail">Ice: {{ selectedIce }}</p>
            <p class="summary-detail" v-if="selectedMilk">Milk: {{ selectedMilk }}</p>
            <p v-for="t in selectedToppings" :key="t.name" class="summary-topping">+ {{ t.name }}</p>
          </div>

          <!-- Actions -->
          <div class="actions">
            <button class="btn-cart" @click="addToCart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61H19a2 2 0 001.99-1.74L22 7H6"/>
              </svg>
              Add to Cart
            </button>
            <button class="btn-buy" @click="buyNow">Buy Now</button>
          </div>

        </div>
      </div>
    </div>

    <!-- Not found -->
    <div v-else class="not-found">
      <p>Drink not found.</p>
      <router-link to="/Order" class="btn-back">← Back to Menu</router-link>
    </div>

    <!-- Toast -->
    <transition name="toast">
      <div v-if="toastVisible" class="toast">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="toast-icon">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        {{ toastMsg }}
      </div>
    </transition>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
import Counter from './Counter.vue'
import allDrinks from '../data/drinks.json'
import fallbackImg from '../assets/sampleImg.svg'
import { useCart } from '../store/cart.js'

const route = useRoute()
const router = useRouter()
const { addItem } = useCart()

const drink = ref(null)
const drinkImg = ref(fallbackImg)

const selectedSize = ref('')
const selectedSweet = ref('')
const selectedIce = ref('')
const selectedMilk = ref('')
const selectedToppings = ref([])
const quantity = ref(1)

const toastVisible = ref(false)
const toastMsg = ref('')

onMounted(() => {
  const id = Number(route.params.id)
  drink.value = allDrinks.find(d => d.id === id) || null
  if (drink.value) {
    drinkImg.value = drink.value.image
    selectedSize.value = drink.value.sizes[1] ?? drink.value.sizes[0]
    selectedSweet.value = drink.value.sweetness.find(s => s.includes('default')) ?? drink.value.sweetness[3] ?? drink.value.sweetness[0]
    selectedIce.value = drink.value.ice[drink.value.ice.length - 1]
    selectedMilk.value = drink.value.milk?.[0] ?? ''
  }
})

const sizeUpcharge = computed(() => {
  const s = selectedSize.value
  if (s?.toLowerCase().includes('small')) return -0.5
  if (s?.toLowerCase().includes('large')) return 0.75
  return 0
})

const toppingTotal = computed(() =>
  selectedToppings.value.reduce((sum, t) => sum + t.price, 0)
)

const unitTotal = computed(() =>
  (drink.value?.price ?? 0) + sizeUpcharge.value + toppingTotal.value
)

const lineTotal = computed(() => unitTotal.value * quantity.value)

function isToppingSelected(t) {
  return selectedToppings.value.some(s => s.name === t.name)
}

function showToast(msg) {
  toastMsg.value = msg
  toastVisible.value = true
  setTimeout(() => { toastVisible.value = false }, 2800)
}

function addToCart() {
  addItem(drink.value, {
    qty: quantity.value,
    unitPrice: unitTotal.value,
    size: selectedSize.value,
    sweetness: selectedSweet.value,
    ice: selectedIce.value,
    milk: selectedMilk.value,
    toppings: selectedToppings.value,
  })
  showToast(`${drink.value.name} added to cart!`)
}

function buyNow() {
  addToCart()
  setTimeout(() => router.push('/Cart'), 800)
}
</script>

<style scoped>
.page {
  background: #ffffff;
  min-height: 100vh;
}

.page-wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 90px 5% 60px;
  box-sizing: border-box;
}

/* Breadcrumb */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.crumb {
  font-size: 13px;
  color: #3017FE;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.crumb:hover { opacity: 0.65; }

.crumb-sep {
  color: #aaa;
  font-size: 14px;
}

.crumb-current {
  color: #888;
  font-weight: 400;
  cursor: default;
}

.crumb-current:hover { opacity: 1; }

/* Layout */
.layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: flex-start;
}

/* Left */
.drink-left {
  position: sticky;
  top: 90px;
}

.img-wrap {
  position: relative;
}

.drink-img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
  border: 2px solid #3017FE;
}

.category-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #3017FE;
  color: white;
  font-family: var(--font-header);
  font-size: 11px;
  letter-spacing: 0.1em;
  padding: 4px 10px;
}

.description {
  margin-top: 24px;
}

.description h2 {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #3017FE;
  margin: 0 0 10px;
}

.description p {
  font-size: 14px;
  color: #555;
  line-height: 1.75;
  margin: 0;
}

/* Right */
.drink-name {
  font-size: clamp(26px, 4vw, 38px);
  color: #3017FE;
  margin: 0 0 10px;
  line-height: 1.1;
}

.price-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 28px;
}

.base-price {
  font-size: 26px;
  font-weight: 800;
  color: #3017FE;
}

.price-note {
  font-size: 13px;
  color: #888;
}

/* Option groups */
.option-group {
  margin-bottom: 24px;
}

.option-group h3 {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #3017FE;
  margin: 0 0 12px;
  text-transform: uppercase;
}

.optional-tag {
  font-size: 11px;
  font-weight: 400;
  color: #aaa;
  letter-spacing: 0.05em;
  text-transform: none;
  margin-left: 6px;
}

/* Pills */
.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pill {
  padding: 7px 14px;
  border: 2px solid #3017FE;
  background: transparent;
  color: #3017FE;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 0;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
}

.pill:hover { background: #F0EDFF; }

.pill.active {
  background: #3017FE;
  color: white;
}

/* Toppings */
.toppings-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.topping-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border: 2px solid rgba(48,23,254,0.2);
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.topping-card:hover { border-color: #3017FE; }

.topping-card.active {
  border-color: #3017FE;
  background: #F0EDFF;
}

.topping-check {
  accent-color: #3017FE;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.topping-name {
  flex: 1;
  font-size: 14px;
  color: #333;
}

.topping-price {
  font-size: 13px;
  font-weight: 600;
  color: #3017FE;
}

/* Quantity */
.qty-group {
  padding-top: 4px;
}

/* Summary */
.summary {
  background: #F0EDFF;
  border-left: 3px solid #3017FE;
  padding: 14px 16px;
  margin-bottom: 20px;
  font-size: 13px;
  color: #444;
  line-height: 1.7;
}

.summary-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #3017FE;
  margin: 0 0 6px;
}

.summary p { margin: 0; }

.summary-detail { color: #555; }
.summary-topping { color: #3017FE; font-weight: 600; }

/* Actions */
.actions {
  display: flex;
  gap: 14px;
  margin-top: 24px;
}

.btn-cart, .btn-buy {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  font-family: var(--font-header);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.07em;
  cursor: pointer;
  border: 2px solid #3017FE;
  transition: background 0.2s, color 0.2s;
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.btn-cart {
  background: transparent;
  color: #3017FE;
}

.btn-cart:hover {
  background: #F0EDFF;
}

.btn-buy {
  background: #3017FE;
  color: white;
}

.btn-buy:hover {
  background: #2010C8;
}

/* Not found */
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 120px 5%;
  text-align: center;
  color: #888;
}

.btn-back {
  color: #3017FE;
  text-decoration: none;
  font-weight: 700;
}

/* Toast */
.toast {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: #3017FE;
  color: white;
  padding: 14px 24px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 9999;
  box-shadow: 0 4px 20px rgba(48,23,254,0.35);
  white-space: nowrap;
}

.toast-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.toast-enter-active, .toast-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(12px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(12px);
}

/* Responsive */
@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .drink-left {
    position: static;
  }

  .actions {
    flex-direction: column;
  }
}
</style>
