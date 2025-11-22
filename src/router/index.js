import { createRouter, createWebHistory } from 'vue-router'
import DrinkPage from '../components/DrinkPage.vue'
import DrinkOption from '../components/DrinkOption.vue'

const routes = [
  { path: '/', component: DrinkPage },
  {
    path: '/drink/:id',
    name: 'drink',
    component: DrinkOption,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router