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
    padding: 20px 60px 10px;
    gap:50px;
}

img{
    width: 120px;
    height: auto;
}

.navbar {
    display: flex;
    gap: 50px;
    font-size: 1em;
    font-weight: 400;
    padding: 10px 10px 0px;
}

.navbar li{
    font-family: var(--font-header);
    list-style: none;
    font-size: 1.2em;
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
  color: var(--color-secondary-accent-1) !important;
}
    
</style>