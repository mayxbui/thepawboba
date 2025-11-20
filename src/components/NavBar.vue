<template>
    <div id="app" class="navbar">
        <router-link to="/">
            <img src="../assets/hivetea2-dark.svg" alt="logo"/>
        </router-link>
        <ul class="menu">
            <li><router-link to="/">ABOUT US</router-link></li>
            <li><router-link to="/">ORDER</router-link></li>
            <li><router-link to="/">CART</router-link></li>
            <li><router-link to="/">LOG IN</router-link></li>
        </ul>
    </div>
</template>

<script>
</script>

<style scoped>
.navbar{
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

.menu {
    display: flex;
    gap: 50px;
    font-size: 1em;
    font-weight: 400;
    padding: 10px 10px 0px;
}

.menu li{
    font-family: var(--font-header);
    list-style: none;
    font-size: 1.2em;
}

.menu a {
    color: var(--color-text-light); 
    text-decoration: none;                    
    font-family: var(--font-header);
}

.menu a:visited {
    color: var(--color-text-light); 
}

a:hover{
  color: var(--color-secondary-accent-1) !important;
}
    
</style>