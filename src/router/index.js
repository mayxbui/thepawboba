import { createRouter, createWebHistory } from 'vue-router'
import Order from '../components/Order.vue'
import DrinkPage from '../components/DrinkPage.vue'
import LogIn from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
import About from '../components/About.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
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
    routes,
    scrollBehavior() {
      return { top: 0, behavior: 'instant' }
    }
  })

export default router