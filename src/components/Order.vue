<template>
  <div class="menu-container">
    <h1>OUR MENU</h1>

    <!-- Search -->
    <div class="search-bar">
      <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input
        type="text"
        v-model="search"
        placeholder="Search drinks..."
        class="search-input"
      />
      <button v-if="search" class="clear-btn" @click="search = ''">✕</button>
    </div>

    <!-- Filter tabs -->
    <div class="menu-filter">
      <button
        v-for="cat in categories"
        :key="cat"
        class="filter-btn"
        :class="{ active: activeCategory === cat }"
        @click="activeCategory = cat"
      >{{ cat }}</button>
    </div>

    <!-- Results -->
    <div v-if="filteredDrinks.length" class="menu-item-box">
      <div
        v-for="drink in filteredDrinks"
        :key="drink.id"
        class="menu-item"
        @click="goToDrink(drink.id)"
      >
        <div class="menu-item-left">
          <span class="category-tag">{{ drink.category }}</span>
          <h3>{{ drink.name }}</h3>
          <p>{{ drink.description }}</p>
          <p class="item-price">${{ drink.price.toFixed(2) }}</p>
        </div>
        <div class="menu-item-right">
          <img
            :src="drink.image"
            class="drink-img"
            :alt="drink.name"
            @error="(e) => e.target.src = fallbackImg"
          />
        </div>
      </div>
    </div>

    <div v-else class="no-results">
      <p>No drinks found for "<strong>{{ search }}</strong>"</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import allDrinks from '../data/drinks.json'
import fallbackImg from '../assets/sampleImg.svg'

const router = useRouter()

const categories = ['All', 'Special', 'Milk Tea', 'Fruit Tea']
const activeCategory = ref('All')
const search = ref('')

const filteredDrinks = computed(() => {
  let list = allDrinks
  if (activeCategory.value !== 'All') {
    list = list.filter(d => d.category === activeCategory.value)
  }
  if (search.value.trim()) {
    const q = search.value.toLowerCase()
    list = list.filter(d => d.name.toLowerCase().includes(q))
  }
  return list
})

function goToDrink(id) {
  router.push(`/drink/${id}`)
}
</script>

<style scoped>
.menu-container {
  background: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 40px;
}

h1 {
  padding-top: 10px;
}

/* Search */
.search-bar {
  position: relative;
  width: min(500px, 75%);
  margin-bottom: 20px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: var(--color-primary);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 10px 36px 10px 38px;
  border: 2px solid var(--color-primary);
  border-radius: 0;
  font-size: 15px;
  font-family: inherit;
  color: var(--color-primary);
  box-sizing: border-box;
  outline: none;
}

.search-input::placeholder {
  color: #9080FF;
}

.search-input:focus {
  background: #F0EDFF;
}

.clear-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 14px;
  color: var(--color-primary);
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

/* Filter tabs */
.menu-filter {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: 8px 20px;
  border: 2px solid var(--color-primary);
  background: transparent;
  color: var(--color-primary);
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0;
  transition: background 0.15s, color 0.15s;
}

.filter-btn:hover {
  background: var(--color-primary);
  color: white;
}

.filter-btn.active {
  background: var(--color-primary);
  color: white;
}

/* Grid */
.menu-item-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 75%;
  gap: 24px;
}

.menu-item {
  display: grid;
  grid-template-columns: 65% 35%;
  border: 2px solid var(--color-primary);
  padding: 16px 16px 16px 20px;
  cursor: pointer;
  align-items: center;
  transition: background 0.15s;
}

.menu-item:hover {
  background: #F0EDFF;
}

.menu-item-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-right: 10px;
}

.category-tag {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-primary);
  opacity: 0.6;
}

h3 {
  color: var(--color-primary);
  margin: 0;
  font-size: 16px;
}

p {
  margin: 0;
  font-size: 13px;
  color: #555;
  width: 90%;
}

.item-price {
  font-weight: 700;
  font-size: 15px;
  color: var(--color-primary);
  margin-top: 6px !important;
}

.menu-item-right {
  display: flex;
  justify-content: flex-end;
}

.drink-img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.no-results {
  margin-top: 40px;
  color: #888;
  font-size: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .menu-item-box {
    grid-template-columns: 1fr;
    width: 90%;
  }

  .search-bar {
    width: 90%;
  }
}
</style>
