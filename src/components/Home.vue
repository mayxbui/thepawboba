<template>
  <div class="home-page">
    <NavBar />

    <!-- poster section -->
    <section class="poster">
      <img src="../assets/hero.jpg" alt="Hero" class="hero-img" />
      <div class="hero-overlay">
        <h1 class="title">Seasonal Specials</h1>
        <div class="dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    </section>

    <!-- about -->
    <section class="about">
      <h1>WELCOME TO</h1>

      <p class="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id volutpat augue.
        Quisque tincidunt leo vel commodo rhoncus. Donec quam mauris, gravida ut mauris sed,
        vestibulum molestie purus. Praesent varius egestas facilisis. Cras aliquet, velit id
        pellentesque malesuada, est sem condimentum ligula, ac tempor sapien turpis a ante.
        Proin vestibulum dignissim lacus.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id volutpat augue.
        Quisque tincidunt leo vel commodo rhoncus. Donec quam mauris, gravida ut mauris sed,
        vestibulum molestie purus. Praesent varius egestas facilisis. Cras aliquet, velit id
        pellentesque malesuada, est sem condimentum ligula, ac tempor sapien turpis a ante.
        Proin vestibulum dignissim lacus.
      </p>
     <div class="divider"></div>
    </section>

    <div class="order">
      <Order/>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Order from '../components/Order.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.home-page {
  background-color: #ffffff;
  min-height: 100vh;
}

.poster {
  position: relative;
  min-height: 55vh;
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
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 5% 60px;
  background: linear-gradient(to right, rgba(48, 23, 254, 0.72) 40%, rgba(48, 23, 254, 0.2));
}

.title {
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 900;
  color: #ffffff;
  margin: 0;
}

.dots {
  display: flex;
  gap: 14px;
  margin-top: 32px;
}

.dots span {
  width: 12px;
  height: 12px;
  background: #ffffff;
  border-radius: 50%;
}

.about {
  background: #ffffff;
  padding: 60px 5%;
  text-align: center;
}

.about-text {
  font-size: clamp(14px, 1.5vw, 16px);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  color: #555;
}

.divider {
  width: 50%;
  height: 4px;
  background-color: #3017FE;
  margin: 40px auto;
}

.order {
  padding-bottom: 80px;
}

@media (max-width: 768px) {
  .poster, .hero-overlay {
    min-height: 45vh;
  }

  .hero-overlay {
    padding: 90px 6% 50px;
  }

  .about {
    padding: 40px 6%;
  }
}

@media (max-width: 480px) {
  .poster, .hero-overlay {
    min-height: 40vh;
  }

  .hero-overlay {
    padding: 80px 6% 40px;
  }

  .dots span {
    width: 10px;
    height: 10px;
  }
}
</style>
