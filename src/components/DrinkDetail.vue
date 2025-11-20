<template>
    <div class="container">
    <Image
        :src="drinkImg"
        alt="Drink Image"
        class="img-fit"
        @error="onError"
        preview/>
    </div>

    <h2>Description</h2>
    <p>{{ drink.description }}</p>
</template>

<script>
import Image from 'primevue/image';
import fallbackImg from '../assets/sampleImg.svg'
import drinks from '../data/drink.json'

export default{
    components:{ Image },
    data(){
        return{
            drink:drinks[0],
            drinkImg: drinks[0].image || fallbackImg
        }
    },
    methods:{
        onError(){
            this.drinkImg=fallbackImg
        }
    }
}
</script>

<style scoped>
.container{
    padding: 0px;
}

h2{
    padding: 20px 0px 0px;
}

.img-fit{
    height: 200px;
    width: 200px;
    object-fit: cover;
}

</style>