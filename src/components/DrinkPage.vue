<template>
    <div class="container">
        <div class="back-btn">
            <font-awesome-icon icon="fa-solid fa-chevron-left" size="xs" color="#081f5c"/>
            <router-link to="/Order">Back</router-link>
        </div>
        <div class="col">
            <div class="row drink-detail">
                <DrinkDetail :drinkId="$route.params.id" />
            </div>
            <div class="row option">
                <DrinkOption :drinkId="$route.params.id"/>
            </div>
        </div>
        <div class="order-btn">
            <button class="cart">Add To Cart</button>
            <button class="buy">Buy Now</button>
        </div>
    </div>
</template>

<script>
import drinks from '../data/drinks.json'
import DrinkDetail from "./DrinkDetail.vue";
import DrinkOption from "./DrinkOption.vue"

export default{
    components: {
        DrinkDetail,
        DrinkOption
    },
    data() {
        return {
            drink: null
        }
    },
    mounted() {
        const id = this.$route.params.id;
        this.drink = drinks.find(d => d.id === id);
    }
}
</script>

<style scoped>
.container{
    background: var(--color-background);
}

.col{
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 10%;
    padding: 20px 0px;
    
}

.row{
    display: flex;
    flex-direction: column;

}

.drink-detail{
    justify-content:start;
    width: 30%;
}

.option{
    justify-content: start;
    width: 45%;
    margin-bottom: 15px;
}

.back-btn{
    display: flex;
    gap: 10px;
    align-items: baseline;
    padding: 10px 60px;
    width: fit-content;
}

.back-btn a{
    text-decoration: none;
    color: var(--color-text) !important; 
    font-weight: 500;
    font-size: 1.3rem;
}

.order-btn{
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 15px 0px;
    
}

.order-btn .cart{
    background-color: none;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 3px;
    width: 20%;
    cursor: pointer;
}

.order-btn .buy{
    background-color: var(--color-primary);
    color: white;
    border-radius: 3px;
    border: 2px solid var(--color-primary);
    width: 20%;
    cursor: pointer;
}


</style>
