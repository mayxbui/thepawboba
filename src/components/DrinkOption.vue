<template>
    <div v-if="drink" class="container">
        <h1>{{ drink.name }}</h1>
        <p class="drink-price">${{ drink.price.toFixed(2) }}</p>
        <Counter
            :quantity="quantity"
            @update:quantity="quantity = $event"
            class="quantity"
        />
        <h2>Toppings</h2>
        <div
            v-for="(topping,i) in drink.toppings"
            :key="i"
            class="topping-item"
        >
            <div class="topping-left">
                <input
                    type="checkbox"
                    :id="'topping' + i"
                    :value="topping"
                    v-model="selectTopping"
                />
                <label :for="'topping' + i">{{ topping.name }}</label>
            </div>
            <span class="topping-price">${{ topping.price.toFixed(2) }}</span>
            
        </div>

        <h2>Size</h2>
        <div>
            <Dropdown
                :options="drink.sizes"
                v-model="selectSize"
                placeholder="Select Size"
            />
        </div>

        <h2>Sweetness</h2>
        <div>
            <Dropdown
                :options="drink.sweetness"
                v-model="selectSweet"
                placeholder="Select Sweetness"
            />
        </div>

        <h2>Ice Level</h2>
        <div>
            <Dropdown
                :options="drink.ice"
                v-model="selectIce"
                placeholder="Select Ice"
            />
        </div>

        <h2>Milk</h2>
        <div>
            <Dropdown
                :options="drink.milk"
                v-model="selectMilk"
                placeholder="Select Milk"
            />
        </div>
    </div>
    <div v-else>Loading...</div>
</template>

<script>
import Counter from "./Counter.vue"
import drinks from '../data/drinks.json'
import Checkbox from 'primevue/checkbox';
import Dropdown from './Dropdown.vue'
import { PrimeVue } from "@primevue/core";

export default {
    components: {
        Counter,
        Dropdown,
        Checkbox,
        PrimeVue
    },
    props: {
        drinkId: Number
    },
    data() {
        return {
            drinks,
            drink: null,
            quantity: 1,
            selectTopping: [],
            selectSize: "",
            selectSweet: "",
            selectIce: "",
            selectMilk: ""
        }
    },
    mounted() {
        this.drink = this.drinks.find(d => d.id === Number(this.drinkId));

        if (this.drink) {
            this.selectSize = this.drink.sizes[0];
            this.selectSweet = this.drink.sweetness[3];
            this.selectIce = this.drink.ice[2];
            this.selectMilk = this.drink.milk[0];
        }
    }

}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: start;
    padding: 0px 20px;
}


.container.quantity{
    display: flex;
    flex-direction: row;
    padding: 15px 0px;
    margin-bottom: 0px;
}


h1{
    margin: 0px 0px;
}

h2 {
  margin: 25px 0px 20px;
}

.drink-price{
    font-size:25px;
    margin: 15px 0px;
}

.p-checkbox{
    transform: scale(1.2)
}

.topping-item{
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 70%;
    padding: 0px 0px 10px;
}

.topping-left{
    display: flex;
    align-content: start;
    align-items: start;
    gap: 10px;
}

.topping-price{
    min-width: 50px;
    justify-content: end !important;
}
</style>