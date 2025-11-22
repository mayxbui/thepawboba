<template>
  <div class="menu-container">
    <h1>OUR MENU</h1>
    <div class="menu-filter">
      <p class="pi pi-search"></p>
      <p>All</p>
      <p>Special</p>
      <p>Milk Tea</p>
      <p>Fruit Tea</p>
    </div>
    <div class="menu-item-box">
      <div
      v-for="drink in drinks"
      :key="drink.id"
      class="menu-item"
      @click="goToDrink(drink.id)"
      >
      <div class="menu-item-left">
        <h3>{{ drink.name }}</h3>
        <p>{{ drink.description }}</p>
        <p class="item-price">${{ drink.price.toFixed(2) }}</p>
      </div>
      <div class="menu-item-right">
        <img 
        :src="drink.image" 
        class="drink-img"
        alt="Drink"
        @error="onError"/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import drinks from '../data/drinks.json';
import fallbackImg from '../assets/sampleImg.svg'

export default {
  data() {
    return {
      drinks
    }
  },
  methods: {
    goToDrink(id) {
      this.$router.push(`/drink/${id}`);
    },
    onError(){
      this.drinks.image=fallbackImg;
    }
  }
}
</script>

<style>
.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
}
h1{
  padding-top: 10px;
}

.menu-filter{
  display:flex;
  width: 50%;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
}

.menu-item-box{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 75%;
  gap: 30px;
}

.menu-item {
  display: grid;
  grid-template-columns: 70% 30%;
  border: 2px solid var(--color-primary);
  padding: 10px 20px;
  padding-right: 0px;
  cursor: pointer;
  align-items: center;
}

h3{
  color: var(--color-primary)
}
p{
  width: 90%;
}

.item-price{
  font-weight: 500;
}

.menu-item-right{
  display: flex;
}

.drink-img{
  width: 80%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>
