<template>
  <div>
    <NavBar v-if="route.path !== '/login'" />

    <div :class="route.path !== '/login' ? 'container' : ''">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const hideOn = ['Login', 'SignUp']
const showNav = !hideOn.includes(route.name)
</script>

<style scoped>
.container {
  padding-top: 4.3rem;
}
</style>
