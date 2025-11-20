<template>
    <div class="container">
        <h1>{{ drink.name }}</h1>
        <p class="drink-price">${{ drink.price.toFixed(2) }}</p>
        <Counter
            :quantity="quantity"
            @update:quantity="quantity = $event"
            class="quantity"
        />
        <h2>Toppings</h2>
        <div
            v-for="(topping,index) in drink.toppings"
            :key="index"
            class="topping-item"
        >
            <div class="topping-left">
                <Checkbox 
                    v-model="selectTopping"
                    :input-id="'topping'+index"
                    :value="topping"
                    binary/>
                <input
                    type="checkbox"
                    :id="'topping' + index"
                    :value="topping"
                    v-model="selectTopping"
                />
                <label :for="'topping' + index">{{ topping.name }}</label>
            </div>
            <span class="topping-price">${{ topping.price.toFixed(2) }}</span>
            
        </div>

        <h2>Size</h2>
        <div>
            <select v-model="selectSize">
                <option 
                    v-for="size in drink.sizes"
                    :key="size"
                    :value="size"
                >{{ size }}</option>
            </select>
        </div>

        <h2>Sweetness</h2>
        <div>
            <select v-model="selectSweet">
                <option
                    v-for="sweet in drink.sweetness"
                    :key="sweet"
                    :value="sweet"
                    >{{sweet}}</option>
            </select>
        </div>

        <h2>Ice Level</h2>
        <div>
            <select v-model="selectIce">
                <option
                    v-for="ice in drink.ice"
                    :key="ice"
                    :value="ice"
                    >{{ ice }}</option>
            </select>
        </div>

        <h2>Milk</h2>
        <div>
            <select v-model="selectMilk">
                <option
                    v-for="milk in drink.milk"
                    :key="milk"
                    :value="milk"
                    >{{ milk }}</option>
            </select>
        </div>
    </div>
</template>

<script>
import Counter from "./Counter.vue"
import drinks from '../data/drinks.json'
import Checkbox from 'primevue/checkbox';
import CheckboxGroup from 'primevue/checkboxgroup';


export default{
    components:{
        Counter,
        Checkbox,
        CheckboxGroup
    },
    data(){
        return{
            quantity:1,

            drink: drinks[0],
            selectTopping:[],
            selectSize:drinks[0].sizes[0],
            selectSweet:drinks[0].sweetness[3],
            selectIce:drinks[0].ice[2],
            selectMilk:drinks[0].milk[0]
        }
    },

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