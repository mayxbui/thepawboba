<template>
    <div id="app" class="navbar-container">
        <router-link to="/">
            <img src="../assets/hivetea2-dark.svg" alt="logo"/>
        </router-link>
        <ul class="navbar">
            <li><router-link to="/Home">HOME</router-link></li>
            <li><router-link to="/Order">ORDER</router-link></li>
            <li><router-link to="/Cart">CART</router-link></li>
            <li><router-link to="/Login">LOG IN</router-link></li>
        </ul>
    </div>
</template>

<script>
</script>

<style scoped>
.navbar-container{
    background: var(--color-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0 !important;
    z-index:1000;
    height: 5.5em;
    width: 100%;
    padding: 20px 5% 10px;
    gap: 50px;
    box-sizing: border-box;
}

img{
    width: clamp(80px, 10vw, 120px);
    height: auto;
}

.navbar {
    display: flex;
    gap: clamp(16px, 3vw, 50px);
    font-size: 1em;
    font-weight: 400;
    padding: 10px 10px 0px;
    flex-wrap: wrap;
}

.navbar li{
    font-family: var(--font-header);
    list-style: none;
    font-size: clamp(0.85em, 1.5vw, 1.2em);
}

.navbar a {
    color: var(--color-text-light);
    text-decoration: none;
    font-family: var(--font-header);
}

.navbar a:visited {
    color: var(--color-text-light);
}

.navbar a:hover{
  color: rgba(255, 255, 255, 0.65) !important;
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 10px 4% 10px;
    gap: 10px;
    height: auto;
    min-height: 4em;
  }

  .navbar {
    gap: 12px;
    padding: 0;
  }
}
</style>
