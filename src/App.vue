<template>
 
<nav-bar-comp/>
<home-view/>
</template>
<script>
import NavBarComp from './components/NavBarComp.vue'
import HomeView from './views/HomeView.vue'

export default{
  components:{
   NavBarComp,
   HomeView
  }
}








</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
