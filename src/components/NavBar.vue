<template>
  <nav class="navbar-container">

    <!-- Logo -->
    <router-link to="/" class="logo-link">
      <img src="../assets/hivetea2-dark.svg" alt="logo" class="logo" />
    </router-link>

    <!-- Desktop links -->
    <ul class="navbar">
      <li v-for="link in links" :key="link.to">
        <router-link :to="link.to" class="nav-link" :class="{ active: isActive(link.to) }">
          {{ link.label }}
          <span class="underline"></span>
        </router-link>
      </li>

      <!-- CTA button -->
      <li>
        <router-link to="/Order" class="order-btn">ORDER NOW</router-link>
      </li>

      <!-- Cart icon -->
      <li class="cart-icon-wrap">
        <router-link to="/Cart" class="cart-icon-link" :class="{ active: isActive('/cart') }" aria-label="Cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61H19a2 2 0 001.99-1.74L22 7H6"/>
          </svg>
          <span v-if="totalItems > 0" class="cart-badge">{{ totalItems }}</span>
        </router-link>
      </li>

      <!-- Login icon -->
      <li>
        <router-link to="/Login" class="cart-icon-link" :class="{ active: isActive('/login') }" aria-label="Log in">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </router-link>
      </li>
    </ul>

    <!-- Mobile hamburger -->
    <button class="hamburger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Toggle menu">
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
    </button>

    <!-- Mobile drawer -->
    <div class="mobile-menu" :class="{ open: menuOpen }" @click.self="menuOpen = false">
      <ul>
        <li v-for="link in links" :key="link.to">
          <router-link :to="link.to" class="mobile-link" :class="{ active: isActive(link.to) }" @click="menuOpen = false">
            {{ link.label }}
          </router-link>
        </li>
        <li>
          <router-link to="/Cart" class="mobile-link" :class="{ active: isActive('/cart') }" @click="menuOpen = false">CART</router-link>
        </li>
        <li>
          <router-link to="/Login" class="mobile-link" :class="{ active: isActive('/login') }" @click="menuOpen = false">LOG IN</router-link>
        </li>
        <li>
          <router-link to="/Order" class="mobile-order-btn" @click="menuOpen = false">ORDER NOW</router-link>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCart } from '../store/cart.js'
const { totalItems } = useCart()

const route = useRoute()
const menuOpen = ref(false)

const links = [
  { to: '/Home', label: 'HOME' },
  { to: '/About', label: 'ABOUT' },
]

function isActive(path) {
  return route.path.toLowerCase() === path.toLowerCase()
}
</script>

<style scoped>
.navbar-container {
  background: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 5.5em;
  padding: 0 5%;
  box-sizing: border-box;
  border-bottom: 3px solid rgba(255,255,255,0.15);
}

/* Logo */
.logo-link {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo {
  width: clamp(80px, 10vw, 120px);
  height: auto;
  transition: opacity 0.2s;
}

.logo-link:hover .logo {
  opacity: 0.8;
}

/* Desktop nav */
.navbar {
  display: flex;
  align-items: center;
  gap: clamp(12px, 2.5vw, 36px);
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  position: relative;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-family: var(--font-header);
  font-size: clamp(0.8em, 1.3vw, 1.05em);
  letter-spacing: 0.06em;
  padding-bottom: 4px;
  transition: color 0.2s;
}

.nav-link .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.25s ease;
}

.nav-link:hover {
  color: white;
}

.nav-link:hover .underline {
  width: 100%;
}

.nav-link.active {
  color: white;
  font-weight: 700;
}

.nav-link.active .underline {
  width: 100%;
}

/* CTA button */
.order-btn {
  display: inline-block;
  background: white;
  color: var(--color-primary);
  text-decoration: none;
  font-family: var(--font-header);
  font-size: clamp(0.75em, 1.2vw, 0.95em);
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 8px 18px;
  border: 2px solid white;
  transition: background 0.2s, color 0.2s;
}

.order-btn:hover {
  background: transparent;
  color: white;
}

/* Cart icon */
.cart-icon-wrap {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -7px;
  right: -8px;
  background: white;
  color: var(--color-primary);
  font-size: 10px;
  font-weight: 800;
  min-width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  line-height: 1;
  padding: 0 3px;
}

.cart-icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.8);
  transition: color 0.2s;
}

.cart-icon-link svg {
  width: 22px;
  height: 22px;
}

.cart-icon-link:hover,
.cart-icon-link.active {
  color: white;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: transform 0.25s, opacity 0.25s;
}

.hamburger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger span.open:nth-child(2) { opacity: 0; }
.hamburger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile drawer */
.mobile-menu {
  display: none;
  position: fixed;
  top: 5.5em;
  left: 0;
  width: 100%;
  background: var(--color-primary);
  padding: 20px 5% 30px;
  box-sizing: border-box;
  border-top: 1px solid rgba(255,255,255,0.15);
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
  pointer-events: all;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mobile-link {
  display: block;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-family: var(--font-header);
  font-size: 1.1em;
  letter-spacing: 0.06em;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  transition: color 0.2s, padding-left 0.2s;
}

.mobile-link:hover,
.mobile-link.active {
  color: white;
  padding-left: 8px;
}

.mobile-order-btn {
  display: inline-block;
  margin-top: 16px;
  background: white;
  color: var(--color-primary);
  text-decoration: none;
  font-family: var(--font-header);
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 10px 24px;
  border: 2px solid white;
  transition: background 0.2s, color 0.2s;
}

.mobile-order-btn:hover {
  background: transparent;
  color: white;
}

/* Responsive */
@media (max-width: 640px) {
  .navbar {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }
}
</style>
