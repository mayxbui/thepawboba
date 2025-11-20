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
            <div class="row option">
                <DrinkOption/>
            </div>
        </div>
    
    </div>
</template>

<script>
import DrinkDetail from "./DrinkDetail.vue";
import DrinkOption from "./DrinkOption.vue"

export default{
    components:{
        DrinkDetail,
        DrinkOption
    },
}
</script>

<style scoped>
.container{
    background: var(--color-background);
    top: 5.5rem;
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

</style>
