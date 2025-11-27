<template>
  <div class="home-page">
    <NavBar />

    <!-- poster section -->
    <section class="poster">
      <h1 class="title">Seasonal Specials</h1>

      <div class="dots">
        <span></span><span></span><span></span>
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

    <Order/>
    <DrinkPage />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Order from '../components/Order.vue'
import DrinkPage from '../components/DrinkPage.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.home-page {
  background-color: #f4f0e9;
  min-height: 100vh;
}
.poster {
  background-color: #F5C857;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
}

.title {
  font-size: 48px;
  font-weight: 900;
  color: #061857;
}

.dots {
  display: flex;
  gap: 14px;
  margin-top: 40px;
}

.dots span {
  width: 12px;
  height: 12px;
  background: #091a55;
  border-radius: 50%;
}

.about {
  background: #f4f0e9;
  padding: 50px 40px;
  text-align: center;
}

.about-text {
  font-size: 16px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  color: #555;
}

.divider {
  width: 50%;
  height: 4px;
  background-color: #091a55; 
  margin: 40px auto;
}
</style>
