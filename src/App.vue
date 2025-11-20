<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import DrinkPage from './components/DrinkPage.vue';
</script>
