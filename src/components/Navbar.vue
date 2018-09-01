<template>
    <div id="navbar">
        <nav>
            <div class="nav-wrapper">
            <!-- <a class="left"><i class="fab fa-pied-piper-alt"></i>Logger<router-link to="/home"></router-link></a> -->
            <router-link class="brand-logo left" to="/home"><i class="fab fa-pied-piper-alt"></i>B-Logger   </router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/design" exact>Design</router-link></li>
                <li><router-link to="/android">Android</router-link></li>
                <li><router-link to="/uiux">UI/UX</router-link></li>
                <li><router-link to="/javaScript">JavaScript</router-link></li>
                <li><router-link to="/seo">SEO</router-link></li>
                <li><router-link to="/humor">HUMOR</router-link></li>
                <li><router-link to="hillarious">Hillarious</router-link></li>
            </ul>
            </div>
        </nav>
    </div>
</template>

<style scoped>
/* .router-link-active{
    background: rgb(214, 214, 214);
    color: rgb(9, 23, 98);    
} */
</style>

<script>

</script>