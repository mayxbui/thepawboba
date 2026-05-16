<template>
  <div class="about-page">
    <NavBar />

    <!-- Hero banner -->
    <section class="about-hero">
      <div class="hero-text">
        <p class="hero-eyebrow">OUR STORY</p>
        <h1>Made with love,<br/>one cup at a time.</h1>
        <p class="hero-sub">
          The Paw Boba was born from a simple idea — great tea should feel like a warm hug.
        </p>
      </div>
    </section>

    <!-- Story section -->
    <section class="section story">
      <div class="section-inner">
        <div class="section-text">
          <h2>HOW IT STARTED</h2>
          <p>
            What started as a weekend passion project turned into something much bigger.
            We've always believed that boba is more than a drink — it's a moment to slow
            down, share something sweet, and feel at home. Every recipe we craft is
            inspired by that feeling.
          </p>
          <p>
            From our signature Okinawa Milk Tea to seasonal specials that rotate with the
            flavors of each month, we put care into every layer, every pearl, every sip.
          </p>
        </div>
        <div class="section-visual blue-block">
          <span>EST. 2024</span>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section values">
      <h2 class="section-heading">WHAT WE STAND FOR</h2>
      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 21C12 21 3 14 3 8a9 9 0 0118 0c0 6-9 13-9 13z"/>
            </svg>
          </div>
          <h3>Community First</h3>
          <p>We're a local spot built for the neighborhood. Every cup supports something bigger.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3>Quality Ingredients</h3>
          <p>No shortcuts. We source premium teas and make our own syrups in-house.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <h3>Made Fresh Daily</h3>
          <p>Everything is prepared fresh each morning. No reheats, no leftovers.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </div>
          <h3>Made with Care</h3>
          <p>Every order is personal. We remember regulars, and we love meeting new faces.</p>
        </div>
      </div>
    </section>

    <!-- Visit us -->
    <section class="section visit">
      <div class="visit-inner">
        <div class="visit-text">
          <h2>COME VISIT US</h2>
          <div class="visit-detail">
            <svg viewBox="0 0 24 24" fill="currentColor" class="detail-icon">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
            <div>
              <p class="detail-label">ADDRESS</p>
              <p>408 S Locust St</p>
            </div>
          </div>
          <div class="visit-detail">
            <svg viewBox="0 0 24 24" fill="currentColor" class="detail-icon">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
            </svg>
            <div>
              <p class="detail-label">HOURS</p>
              <p>Mon – Fri: 9 AM – 8 PM</p>
              <p>Sat – Sun: 10 AM – 9 PM</p>
            </div>
          </div>
          <div class="visit-detail">
            <svg viewBox="0 0 24 24" fill="currentColor" class="detail-icon">
              <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8.868l8 5 8-5V18z"/>
            </svg>
            <div>
              <p class="detail-label">EMAIL</p>
              <p>thepawboba@gmail.com</p>
            </div>
          </div>
          <router-link to="/Order" class="cta-btn">SEE OUR MENU</router-link>
        </div>
        <div class="visit-accent">
          <div class="accent-box">
            <p class="accent-quote">"Every sip should feel like home."</p>
            <p class="accent-sig">— The Paw Boba Team</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
.about-page {
  background: #ffffff;
  min-height: 100vh;
}

/* Hero */
.about-hero {
  background: #3017FE;
  min-height: 55vh;
  display: flex;
  align-items: flex-end;
  padding: 100px 8% 60px;
  box-sizing: border-box;
}

.hero-eyebrow {
  font-family: var(--font-header);
  font-size: 13px;
  letter-spacing: 0.2em;
  color: rgba(255,255,255,0.65);
  margin: 0 0 16px;
}

.about-hero h1 {
  font-size: clamp(36px, 6vw, 68px);
  font-weight: 900;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 20px;
}

.hero-sub {
  font-size: clamp(15px, 1.8vw, 18px);
  color: rgba(255,255,255,0.75);
  max-width: 480px;
  line-height: 1.6;
  margin: 0;
}

/* Shared section styles */
.section {
  padding: 80px 8%;
  box-sizing: border-box;
}

.section-heading {
  font-family: var(--font-header);
  font-size: clamp(20px, 2.5vw, 28px);
  color: #3017FE;
  margin: 0 0 48px;
  text-align: center;
  letter-spacing: 0.08em;
}

/* Story */
.story {
  background: #ffffff;
}

.section-inner {
  display: flex;
  align-items: center;
  gap: 60px;
}

.section-text {
  flex: 1;
}

.section-text h2 {
  font-family: var(--font-header);
  font-size: clamp(18px, 2.2vw, 24px);
  color: #3017FE;
  letter-spacing: 0.08em;
  margin: 0 0 20px;
}

.section-text p {
  font-size: 15px;
  color: #444;
  line-height: 1.8;
  margin: 0 0 16px;
}

.blue-block {
  flex-shrink: 0;
  width: clamp(160px, 22vw, 260px);
  aspect-ratio: 1;
  background: #3017FE;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blue-block span {
  font-family: var(--font-header);
  font-size: clamp(22px, 4vw, 42px);
  color: white;
  letter-spacing: 0.1em;
}

/* Values */
.values {
  background: #F0EDFF;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.value-card {
  background: #ffffff;
  border: 2px solid #3017FE;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.value-icon {
  width: 40px;
  height: 40px;
  color: #3017FE;
}

.value-icon svg {
  width: 100%;
  height: 100%;
}

.value-card h3 {
  font-family: var(--font-header);
  font-size: 16px;
  color: #3017FE;
  margin: 0;
  letter-spacing: 0.04em;
}

.value-card p {
  font-size: 14px;
  color: #555;
  line-height: 1.7;
  margin: 0;
}

/* Visit */
.visit {
  background: #ffffff;
}

.visit-inner {
  display: flex;
  align-items: flex-start;
  gap: 60px;
}

.visit-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.visit-text h2 {
  font-family: var(--font-header);
  font-size: clamp(18px, 2.2vw, 24px);
  color: #3017FE;
  letter-spacing: 0.08em;
  margin: 0;
}

.visit-detail {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.detail-icon {
  width: 22px;
  height: 22px;
  color: #3017FE;
  flex-shrink: 0;
  margin-top: 2px;
}

.detail-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #3017FE;
  margin: 0 0 4px;
}

.visit-detail p {
  font-size: 15px;
  color: #444;
  margin: 0;
  line-height: 1.6;
}

.cta-btn {
  display: inline-block;
  background: #3017FE;
  color: white;
  text-decoration: none;
  font-family: var(--font-header);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 14px 32px;
  border: 2px solid #3017FE;
  transition: background 0.2s, color 0.2s;
  align-self: flex-start;
}

.cta-btn:hover {
  background: transparent;
  color: #3017FE;
}

.visit-accent {
  flex-shrink: 0;
  width: clamp(200px, 30vw, 340px);
}

.accent-box {
  background: #3017FE;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.accent-quote {
  font-family: var(--font-header);
  font-size: clamp(18px, 2.2vw, 24px);
  color: white;
  line-height: 1.4;
  margin: 0;
}

.accent-sig {
  font-size: 13px;
  color: rgba(255,255,255,0.65);
  margin: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-inner,
  .visit-inner {
    flex-direction: column;
  }

  .blue-block,
  .visit-accent {
    width: 100%;
    aspect-ratio: auto;
    padding: 40px 0;
  }

  .accent-box {
    width: 100%;
    box-sizing: border-box;
  }
}

@media (max-width: 560px) {
  .section {
    padding: 60px 6%;
  }

  .about-hero {
    padding: 90px 6% 50px;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
