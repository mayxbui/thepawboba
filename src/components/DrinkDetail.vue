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
import drinks from '../data/drinks.json'

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
    display: flex;
    justify-content: start;
    padding: 0px;
}

h2{
    padding: 20px 0px 0px;
    margin: 20px 0px 00px;
}


:deep(.p-image) {
  width: 100%;
  aspect-ratio: 1 / 1;
  display: block;
}

:deep(.p-image img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>