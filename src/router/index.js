import { createRouter, createWebHistory } from 'vue-router'
import Order from '../components/Order.vue'
import DrinkPage from '../components/DrinkPage.vue'
// import LogIn from '../components/LogIn.vue'

const routes = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/Order',
    name: 'Order',
    component: Order
  },
  {
    path: '/drink/:id',
    name: 'Drink',
    component: DrinkPage,
    props: true
  },
  {
    path: "/",
    redirect: "/Order" //Change to Home after
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router