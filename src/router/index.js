import { createRouter, createWebHistory } from 'vue-router'
import Order from '../components/Order.vue'
import DrinkPage from '../components/DrinkPage.vue'
import LogIn from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
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
    path: '/login',
    name: 'Login',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/cart",
    name:"Your Cart",
    component: Cart
  }
]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router