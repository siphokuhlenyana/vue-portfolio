<template>
 
<nav-bar-comp/>
<section class="row" id="homepage">
  <home-view/>
</section>
<section class="row" id="aboutpage">
  <about-comp/>
</section>



</template>
<script>
import AboutComp from './components/AboutComp.vue'
import NavBarComp from './components/NavBarComp.vue'

export default{
  components:{
   NavBarComp
  }
}





    



</script>
<style>
*{
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
