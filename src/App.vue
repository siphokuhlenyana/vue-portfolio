<template>
 
<nav-bar-comp/>
<section id="homepage">
   <home-view/>
</section>
 <section id="aboutpage">
    <about-comp/>
 </section>
<section id="resumepage">
   <resume-comp/>
</section>
<section id="testimonials">
    <testimonials-comp/>
</section>
<section id="projectspage">
  <projects-comp/>
</section>
<section id="contactpage">
  <contact-comp/>
</section>
  
<footer-comp/>




</template>
<script>
import HomeView from './views/HomeView.vue'
import AboutComp from './components/AboutComp.vue'
import ContactComp from './components/ContactComp.vue'
import FooterComp from './components/FooterComp.vue'
import NavBarComp from './components/NavBarComp.vue'
import ProjectsComp from './components/ProjectsComp.vue'
import ResumeComp from './components/ResumeComp.vue'
import TestimonialsComp from './components/TestimonialsComp.vue'



export default{
  components:{
   NavBarComp,
   AboutComp,
  ResumeComp,
  TestimonialsComp,
  ProjectsComp,
  ContactComp,
    FooterComp,
    HomeView
  }
}




    



</script>
<style>
*{
  margin: 0px;
  /* width:100% */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
