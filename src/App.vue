<template>
  <div>
    <NavBar />
    <div class="container">
        <router-view />
    </div>
    
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style scoped>
.container{
    padding-top: 3.3rem;
}
</style>