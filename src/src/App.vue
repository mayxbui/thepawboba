<template>
    <div>
        <NavBar/>
        <DrinkDetail/>
    </div>
</template>

<script>

import NavBar from "./components/NavBar.vue";
import DrinkDetail from "./components/DrinkDetail.vue";


export default{
    name: "HiveTea",
    components:{
        NavBar,
        DrinkDetail,

    }
}
</script>

<style>
.container{

}
</style>
