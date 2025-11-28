<template>
  <div class="page">
    <button class="back-btn">&lt; Continue Shopping</button>

    <h2 class="cart-title">YOUR CART</h2>
    <hr class="divider" />

    <div class="layout">
      <div class="cart-left">
        <div
          v-for="(item, index) in cart"
          :key="index"
          class="cart-item"
        >
          <div class="photo-box">Photo</div>

          <div class="item-info">
            <div class="item-top">
              <h3>{{ item.name }}</h3>
              <p class="item-price">${{ item.price.toFixed(2) }}</p>
            </div>

            <p class="item-desc">{{ item.description }}</p>

            <div class="qty-box">
              <Counter/>
            </div>
          </div>
        </div>
      </div>

      <div class="cart-right">
        <div>
          <p class="pickup-title">Pickup: 408 S Locust St</p>
          <p>Tomorrow at 11:35 AM</p>
        </div>
        <hr class="divider" />
        <div class="tip-section">
          <h3>Add a tip</h3>

          <div class="tip-buttons">
            <button v-for="t in [1, 5, 10]" :key="t" @click="setTip(t)">
              +${{ t }}
            </button>
          </div>

          <div class="custom-tip">
            <p>Custom Tips</p>
            <input
              type="number"
              v-model.number="tip"
              min="0"
              placeholder="Enter amount"
            />
          </div>
        </div>

        <hr class="divider" />

        <button class="coupon-btn">Add coupon or gift card</button>

        <hr class="divider" />

        <div class="totals">
          <div class="row">
            <span>Subtotal</span>
            <span>${{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="row">
            <span>Taxes</span>
            <span>${{ taxes.toFixed(2) }}</span>
          </div>
          <div class="row">
            <span>Tips</span>
            <span>${{ tip.toFixed(2) }}</span>
          </div>

          <div class="row total-row">
            <strong>Estimated order total</strong>
            <strong>${{ total.toFixed(2) }}</strong>
          </div>
        </div>

        <button class="pay-btn">Continue to payment</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Counter from './Counter.vue';

const cart = ref([
  {
    name: "Okinawa",
    description: "Roasted Brown Sugar based Black Milk Tea",
    price: 5.99,
    qty: 1,
  },
  {
    name: "Matcha Latte",
    description: "Premium Japanese matcha whisked to perfection, layered with creamy milk.",
    price: 6.49,
    qty: 1,
  },
]);

const tip = ref(2.0);

const setTip = (value) => (tip.value = value);

const subtotal = computed(() =>
  cart.value.reduce((s, item) => s + item.price * item.qty, 0)
);

const taxes = computed(() => Number((subtotal.value * 0.088).toFixed(2)));

const total = computed(() => subtotal.value + taxes.value + tip.value);
</script>

<style scoped>
.page {
  background: var(--color-background);
  min-height: 100vh;
  padding: 50px 40px;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 10px;
}

.back-btn {
  background: none;
  border: none;
  padding: 0;
  margin-bottom: 15px;
  font-size: 14px;
  cursor: pointer;
}

.cart-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.divider {
  margin: 30px 0 40px;
  border: none;
  border-top: 1px solid var(--color-primary);
;
}

.cart-item {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
}

.photo-box {
  width: 90px;
  height: 90px;
  background: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-info {
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
}

.item-top {
  justify-content: space-between;
}

.item-price {
  font-weight: bold;
}

.item-desc {
  font-size: 14px;
}

.qty-box {
  margin-top: 10px;
  font-weight: 300 !important;
}

.pickup-title {
  font-weight: bold;
}

.tip-section h3 {
  margin-bottom: 5px;
}

.tip-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 15px;
}

.tip-buttons button {
  background: var(--color-primary);
  border: none;
  padding: 6px 10px;
  cursor: pointer;
  color: var(--color-text-light);
  font-weight: 400;
}

.custom-tip input {
  width: 100%;
  padding: 8px;
  border: 1px solid var(--color-primary);
  margin-top: 5px;
}

.coupon-btn {
  width: 100%;
  background: lightgrey;
  border: none;
  padding: 12px;
  cursor: pointer;
}

.totals .row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.total-row {
  font-size: 17px;
  margin-top: 15px;
}

.pay-btn {
  background: var(--color-primary);
  color: var(--color-text-light);
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

</style>
