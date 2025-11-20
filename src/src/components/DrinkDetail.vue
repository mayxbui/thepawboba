<template>
    <div class="container">
        <div class="back-btn">
            <span class="pi pi-chevron-left"></span>
            <router-link to="/">Back</router-link>
        </div>
        <Counter :quantity="quantity" @update="quantity = $event"/>
    </div>
</template>

<script>
import Counter from "./Counter.vue"
import { PrimeIcons } from '@primevue/core/api';

export default{
    components:{
        Counter
    },
    data(){
        return{
            quantity:1,
            icons: PrimeIcons.
        }
    }
}
</script>

<style scoped>
.container{
    background: var(--color-background);
}
</style>
