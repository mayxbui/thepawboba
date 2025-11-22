<template>
    <div v-if="drink">
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
    </div>
    <div v-else>Loading...</div>
    

    
</template>

<script>
import fallbackImg from '../assets/sampleImg.svg'
import drinks from '../data/drinks.json'
import Image from 'primevue/image'


export default{
    components:{ Image },
    props:{
        drinkId: Number
    },
    data(){
        return{
            drinks,
            drink:null,
            drinkImg: fallbackImg
        }
    },
    mounted(){
        this.drink = this.drinks.find(d => d.id === Number(this.drinkId));
        if(this.drink){
            try{
                this.drinkImg=this.drink.image;
            } catch(e){
                this.drinkImg=fallbackImg;
            }
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