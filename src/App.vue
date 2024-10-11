<template>
<!--  
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
 -->
  <div class="wrapper">
    <NavBarComp/>
    
    <main >
      <SpinnerComp/>
      <router-view/>
    </main>
    <FooterComp/>
  </div>


</template>
<script>
import FooterComp from './components/FooterComp.vue'
import NavBarComp from './components/NavBarComp.vue'
// import SpinnerComp  from './components/SpinnerComp.vue';



export default{
  components:{
   NavBarComp,
    FooterComp,
    // SpinnerComp

  }
}




    



</script>
<style>
*{
  margin: 0px;
  /* width:100% */
  max-width:inherit;

}
#app {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
  
}
.wrapper {
  display: grid;
  grid-template-rows: auto minmax(100dvh, 100%) auto;
}

::-webkit-scrollbar {
  width: 10px; /* width of the scrollbar */
  height: 10px; /* height of the scrollbar */
  background-color:purple; /* background color of the scrollbar */
}

::-webkit-scrollbar-thumb {
  background-color:#33051c; /* color of the scrollbar thumb */
  border-radius: 10px; /* rounded corners of the scrollbar thumb */
}

::-webkit-scrollbar-thumb:hover {
  background-color:#fff; /* hover color of the scrollbar thumb */
}

::-webkit-scrollbar-track {
  background-color:#91074a; /* background color of the scrollbar track */
  border-radius: 10px; /* rounded corners of the scrollbar track */
}
</style>
