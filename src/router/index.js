import { createRouter, createWebHistory } from 'vue-router'
import DrinkPage from '../components/DrinkPage.vue'

const routes = [
  { path: '/', component: DrinkPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
