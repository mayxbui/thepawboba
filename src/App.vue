<template>
  <div>
    <NavBar />
    <div class="container">
        <router-view />
    </div>
    <!-- <Footer/> -->
    
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
// import Footer from './components/Footer.vue'
</script>

<style scoped>
.container{
    padding-top: 5.3rem;
}
</style>