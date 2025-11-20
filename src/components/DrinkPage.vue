<template>
    <div class="container">
        <div class="back-btn">
            <font-awesome-icon icon="fa-solid fa-chevron-left" size="xs" color="#081f5c"/>
            <router-link to="/">Back</router-link>
        </div>
        <div class="col">
            <div class="row drink-detail">
                <DrinkDetail/>
            </div>
            <div class="row">
                <Counter :quantity="quantity" @update:quantity="quantity = $event" />
            </div>
        </div>
    
    </div>
</template>

<script>
import Counter from "./Counter.vue"
import DrinkDetail from "./DrinkDetail.vue";

export default{
    components:{
        Counter,
        DrinkDetail,
    },
    data(){
        return{
            quantity:1,
        }
    },
}
</script>

<style scoped>
.container{
    background: var(--color-background);
    padding: 20px;
}

.col{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 50px;
}

.row{
    display: flexbox;
}

.drink-detail{
    justify-content:start;
}

.back-btn{
    display: flex;
    gap: 10px;
    align-items: baseline;
    padding: 10px 50px;
    width: fit-content;
}

.back-btn a{
    text-decoration: none;
    color: var(--color-text) !important; 
    font-weight: 500;
    font-size: 1.3rem;
}
</style>
