<template>
  <div class="home-page">
    <NavBar />

    <!-- HERO -->
    <section class="hero">
      <img src="../assets/hero.jpg" alt="Hero" class="hero-img" />
      <div class="hero-overlay">

        <div class="hero-body">
          <p class="hero-eyebrow">HANDCRAFTED BOBA TEA</p>
          <h1 class="hero-title">Every sip tells<br/>a story.</h1>
          <p class="hero-sub">Seasonal specials, premium ingredients, made fresh daily.</p>

          <div class="hero-actions">
            <router-link to="/Order" class="btn-primary">ORDER NOW</router-link>
            <router-link to="/About" class="btn-ghost">OUR STORY</router-link>
          </div>

          <!-- Instagram -->
          <a href="https://instagram.com/thepawboba" target="_blank" rel="noopener" class="insta-badge">
            <svg class="insta-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span>@thepawboba</span>
          </a>
        </div>

        <!-- scroll hint -->
        <div class="scroll-hint">
          <span>SCROLL</span>
          <div class="scroll-line"></div>
        </div>

      </div>
    </section>

    <!-- TICKER -->
    <div class="ticker">
      <div class="ticker-track">
        <span v-for="i in 3" :key="i">
          OKINAWA MILK TEA &nbsp;·&nbsp; TARO MILK TEA &nbsp;·&nbsp; MATCHA LATTE &nbsp;·&nbsp;
          BROWN SUGAR BOBA &nbsp;·&nbsp; MANGO GREEN TEA &nbsp;·&nbsp; HONEY MATCHA CLOUD &nbsp;·&nbsp;
          PASSION FRUIT TEA &nbsp;·&nbsp; LYCHEE BLOSSOM &nbsp;·&nbsp;
        </span>
      </div>
    </div>

    <!-- INTRO -->
    <section class="intro">
      <div class="intro-inner">
        <div class="intro-text">
          <p class="section-eyebrow">WELCOME TO THE PAW BOBA</p>
          <h2 class="intro-heading">More than a drink.<br/>It's a moment.</h2>
          <p>
            We craft every cup with care — from our house-made syrups to our handpicked
            teas. Whether you're a Milk Tea loyalist or a Fruit Tea adventurer, there's
            something here for everyone.
          </p>
          <router-link to="/About" class="link-arrow">
            Read our story
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </router-link>
        </div>
        <div class="intro-stats">
          <div class="stat">
            <span class="stat-num">21+</span>
            <span class="stat-label">Drinks on the menu</span>
          </div>
          <div class="stat">
            <span class="stat-num">3</span>
            <span class="stat-label">Categories</span>
          </div>
          <div class="stat">
            <span class="stat-num">100%</span>
            <span class="stat-label">Made fresh daily</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED SPECIALS -->
    <section class="specials">
      <div class="specials-header">
        <p class="section-eyebrow">THIS MONTH</p>
        <h2 class="specials-heading">Seasonal Specials</h2>
        <router-link to="/Order" class="view-all">View all &rarr;</router-link>
      </div>
      <div class="specials-grid">
        <div
          v-for="drink in featured"
          :key="drink.id"
          class="special-card"
          @click="goToDrink(drink.id)"
        >
          <div class="card-img-wrap">
            <img :src="drink.image" :alt="drink.name" class="card-img" @error="(e) => e.target.src = fallbackImg" />
            <span class="card-tag">{{ drink.category }}</span>
          </div>
          <div class="card-body">
            <h3>{{ drink.name }}</h3>
            <p>{{ drink.description }}</p>
            <span class="card-price">${{ drink.price.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- INSTAGRAM CTA -->
    <section class="insta-cta">
      <div class="insta-cta-inner">
        <svg class="insta-cta-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
        <div>
          <p class="insta-cta-label">FOLLOW US ON INSTAGRAM</p>
          <p class="insta-cta-handle">@thepawboba</p>
        </div>
        <a href="https://instagram.com/thepawboba" target="_blank" rel="noopener" class="insta-cta-btn">FOLLOW</a>
      </div>
    </section>

    <!-- FULL MENU -->
    <div class="order-section">
      <Order />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import Order from '../components/Order.vue'
import Footer from '../components/Footer.vue'
import allDrinks from '../data/drinks.json'
import fallbackImg from '../assets/sampleImg.svg'

const router = useRouter()

const featured = allDrinks.filter(d => d.category === 'Special').slice(0, 3)

function goToDrink(id) {
  router.push(`/drink/${id}`)
}
</script>

<style scoped>
.home-page {
  background: #ffffff;
  min-height: 100vh;
}

/* ── HERO ─────────────────────────────── */
.hero {
  position: relative;
  height: 100vh;
  min-height: 560px;
  overflow: hidden;
}

.hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 8% 48px;
  background: linear-gradient(105deg, rgba(48,23,254,0.85) 38%, rgba(48,23,254,0.25) 100%);
}

.hero-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5.5em;
}

.hero-eyebrow {
  font-family: var(--font-header);
  font-size: 12px;
  letter-spacing: 0.22em;
  color: rgba(255,255,255,0.6);
  margin: 0 0 20px;
}

.hero-title {
  font-size: clamp(44px, 7.5vw, 96px);
  font-weight: 900;
  color: #ffffff;
  line-height: 1.05;
  margin: 0 0 24px;
}

.hero-sub {
  font-size: clamp(14px, 1.6vw, 18px);
  color: rgba(255,255,255,0.75);
  margin: 0 0 36px;
  max-width: 400px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.btn-primary {
  display: inline-block;
  background: #ffffff;
  color: #3017FE;
  text-decoration: none;
  font-family: var(--font-header);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 14px 32px;
  border: 2px solid #ffffff;
  transition: background 0.2s, color 0.2s;
}

.btn-primary:hover {
  background: transparent;
  color: #ffffff;
}

.btn-ghost {
  display: inline-block;
  background: transparent;
  color: #ffffff;
  text-decoration: none;
  font-family: var(--font-header);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 14px 32px;
  border: 2px solid rgba(255,255,255,0.5);
  transition: border-color 0.2s;
}

.btn-ghost:hover {
  border-color: #ffffff;
}

.insta-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(0,0,0,0.4);
  border: 1px solid rgba(255,255,255,0.35);
  padding: 9px 16px;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  align-self: flex-start;
  transition: background 0.2s;
}

.insta-badge:hover {
  background: rgba(0,0,0,0.55);
}

.insta-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.scroll-hint {
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(255,255,255,0.5);
  font-size: 11px;
  letter-spacing: 0.18em;
  font-family: var(--font-header);
}

.scroll-line {
  width: 48px;
  height: 1px;
  background: rgba(255,255,255,0.4);
}

/* ── TICKER ───────────────────────────── */
.ticker {
  background: #3017FE;
  overflow: hidden;
  white-space: nowrap;
  padding: 14px 0;
  border-top: 2px solid rgba(255,255,255,0.15);
}

.ticker-track {
  display: inline-block;
  animation: ticker 28s linear infinite;
  font-family: var(--font-header);
  font-size: 13px;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.85);
}

@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

/* ── INTRO ────────────────────────────── */
.intro {
  padding: 80px 8%;
  background: #ffffff;
}

.intro-inner {
  display: flex;
  align-items: center;
  gap: 80px;
}

.section-eyebrow {
  font-family: var(--font-header);
  font-size: 11px;
  letter-spacing: 0.22em;
  color: #3017FE;
  margin: 0 0 14px;
}

.intro-heading {
  font-family: var(--font-header);
  font-size: clamp(28px, 4vw, 46px);
  color: #3017FE;
  line-height: 1.15;
  margin: 0 0 20px;
}

.intro-text p {
  font-size: 15px;
  color: #555;
  line-height: 1.8;
  margin: 0 0 28px;
  max-width: 480px;
}

.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #3017FE;
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  border-bottom: 2px solid #3017FE;
  padding-bottom: 2px;
  transition: gap 0.2s;
}

.link-arrow:hover { gap: 14px; }

.link-arrow svg {
  width: 18px;
  height: 18px;
}

.intro-stats {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: 3px solid #3017FE;
}

.stat {
  display: flex;
  flex-direction: column;
  padding: 20px 32px;
  border-bottom: 1px solid #E8E4FF;
}

.stat:last-child { border-bottom: none; }

.stat-num {
  font-family: var(--font-header);
  font-size: clamp(32px, 4vw, 48px);
  color: #3017FE;
  line-height: 1;
}

.stat-label {
  font-size: 13px;
  color: #888;
  margin-top: 4px;
}

/* ── SPECIALS ─────────────────────────── */
.specials {
  padding: 80px 8%;
  background: #F0EDFF;
}

.specials-header {
  display: flex;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 36px;
}

.specials-heading {
  font-family: var(--font-header);
  font-size: clamp(24px, 3.5vw, 36px);
  color: #3017FE;
  margin: 0;
  flex: 1;
}

.view-all {
  color: #3017FE;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid #3017FE;
}

.view-all:hover { opacity: 0.7; }

.specials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.special-card {
  background: #ffffff;
  border: 2px solid #3017FE;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.special-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(48,23,254,0.15);
}

.card-img-wrap {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s;
}

.special-card:hover .card-img {
  transform: scale(1.05);
}

.card-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #3017FE;
  color: white;
  font-family: var(--font-header);
  font-size: 11px;
  letter-spacing: 0.1em;
  padding: 4px 10px;
}

.card-body {
  padding: 18px 20px 22px;
}

.card-body h3 {
  font-family: var(--font-header);
  font-size: 17px;
  color: #3017FE;
  margin: 0 0 8px;
}

.card-body p {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 14px;
}

.card-price {
  font-size: 16px;
  font-weight: 700;
  color: #3017FE;
}

/* ── INSTAGRAM CTA ────────────────────── */
.insta-cta {
  background: #3017FE;
  padding: 36px 8%;
}

.insta-cta-inner {
  display: flex;
  align-items: center;
  gap: 24px;
}

.insta-cta-icon {
  width: 36px;
  height: 36px;
  color: white;
  flex-shrink: 0;
}

.insta-cta-label {
  font-family: var(--font-header);
  font-size: 11px;
  letter-spacing: 0.18em;
  color: rgba(255,255,255,0.6);
  margin: 0;
}

.insta-cta-handle {
  font-family: var(--font-header);
  font-size: clamp(18px, 2.5vw, 26px);
  color: white;
  margin: 4px 0 0;
}

.insta-cta-btn {
  margin-left: auto;
  display: inline-block;
  background: white;
  color: #3017FE;
  text-decoration: none;
  font-family: var(--font-header);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 12px 28px;
  border: 2px solid white;
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s;
}

.insta-cta-btn:hover {
  background: transparent;
  color: white;
}

/* ── FULL MENU ────────────────────────── */
.order-section {
  padding-bottom: 60px;
}

/* ── RESPONSIVE ───────────────────────── */
@media (max-width: 900px) {
  .specials-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .intro-inner {
    flex-direction: column;
    gap: 48px;
    align-items: flex-start;
  }

  .intro-stats {
    flex-direction: row;
    border-left: none;
    border-top: 3px solid #3017FE;
    width: 100%;
  }

  .stat {
    flex: 1;
    padding: 16px 20px;
    border-bottom: none;
    border-right: 1px solid #E8E4FF;
  }

  .stat:last-child { border-right: none; }
}

@media (max-width: 600px) {
  .hero-overlay {
    padding: 0 6% 36px;
  }

  .specials-grid {
    grid-template-columns: 1fr;
  }

  .insta-cta-inner {
    flex-wrap: wrap;
  }

  .insta-cta-btn {
    margin-left: 0;
  }

  .intro { padding: 60px 6%; }
  .specials { padding: 60px 6%; }
  .insta-cta { padding: 28px 6%; }
}
</style>
