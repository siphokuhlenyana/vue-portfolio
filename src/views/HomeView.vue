<template>
  <div class="container">
    
    <section class="row" id="homepage">
      <home-comp/>
    </section>
    <section class="row" id="aboutpage">
      <about-comp/>
    </section>

  <section class="row" id="resumepage">
    <resume-comp/>
  </section>
  <section class="row" id="projectspage">
    <projects-comp/>
  </section>
  <section class="row" id="contactpage">
    <contact-comp/>
  </section>
  

    
  
  </div>
</template>

<script>

import AboutComp from '../components/AboutComp.vue'
import HomeComp from '../components/HomeComp.vue'
import ResumeComp from '../components/ResumeComp.vue'
import ProjectsComp from '../components/ProjectsComp.vue'
import ContactComp from '../components/ContactComp.vue'
export default {
  name: 'HomeView',
  components: {
    HomeComp,
    
    AboutComp,
    ResumeComp,
    ProjectsComp,
    ContactComp
   
  }
}
</script>
