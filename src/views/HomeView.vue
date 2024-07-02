<template>
    <div class="container-fluid">
      <section class="row" id="homepage">
        <HomeComp/>
       
      </section>
      <section class="row" id="aboutpage">
        <AboutComp/>
      </section>
      <section class="row" id="resumepage">
        <ResumeComp/>
      </section>
      <section class="row" id="testimonials">
        <TestimonialsComp/>
      </section>
      <section class="row" id="projectspage">
        <ProjectsComp/>
      </section>
      <section class="row" id="contactpage">
        <ContactComp/>
      </section>
    </div>

    <!-- <section class="row" id="navbar">
      <nav-bar-comp/>
    </section> -->
    
    <!-- <div class="home"> -->
   <!-- <h1 id="hi">SIPHOKUHLE NYANA </h1> -->
     
      <!-- <img id="kuhle" src="https://github.com/siphokuhlenyana/ImagesPortfolio/blob/main/MYPIC.jpg?raw=true" alt="" width="420px" :style="{borderRadius:'10%',borderWidth:'25px',borderStyle:'solid',borderColor:'#33051c'}">
      <img id="sipho"  src="https://github.com/siphokuhlenyana/ImagesPortfolio/blob/main/MYPIC.jpg?raw=true" alt="" width="350px" height="300px" :style="{borderRadius:'10%',borderWidth:'20px',borderStyle:'solid',borderColor:'#33051c'}"> -->
      <!-- <img id="horoscope" src="https://pngimg.com/d/capricorn_PNG35.png" alt="" width="250px" height="150px"> -->
      <!-- <home-comp-vue/>
      <button type="button" class="btn btn-outline-secondary" :style="{backgroundColor:'#fa5ee2'}">Download Resume</button><br>
     <div class="socials">
       <div id="1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
  </svg></div>
  <div id="2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
  </svg></div>
  <div id="3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-slack" viewBox="0 0 16 16">
    <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111.756 8.43 1.68 8.43h1.682zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682zm6.749 1.682c0-.926.755-1.682 1.68-1.682S16 4.964 16 5.889s-.756 1.681-1.68 1.681h-1.681zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68s.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681z"/>
  </svg></div>
      <div id="text-intro"  :style="{borderColor:'#fa5ee2',borderWidth:'2px',borderStyle:'dotted',boxShadow:'16px 16px 25px #fa5ee2',borderRadius:'10px '}"><h2 >Hi👋,<br> I am  a Software Designer & Developer <br>have a look on my portfolio ...</h2></div>
       </div>
        </div>
         -->
        <!-- <svg id="caret" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
    <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
  </svg> -->
    
<!-- </section>

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
   -->

   
  
 
</template>

<script>
import HomeComp from '@/components/HomeComp.vue';
import AboutComp from '@/components/AboutComp.vue';
import ResumeComp from '@/components/ResumeComp.vue';
import TestimonialsComp from '@/components/TestimonialsComp.vue';
import ProjectsComp from '@/components/ProjectsComp.vue';
import ContactComp from '@/components/ContactComp.vue';


export default {
  name: 'HomeView',
  components: {
    HomeComp,
    AboutComp,
    ResumeComp,
    TestimonialsComp,
    ProjectsComp,
    ContactComp
    
  }
}
</script>
<style >

    .home{
      background-image: url("https://github.com/siphokuhlenyana/ImagesPortfolio/blob/main/MYPIC.jpg?raw=true");
      background-repeat:no-repeat;
      background-size: contain;
      width: 100%;
      height: 75vh;
      background-color:#33051c;
      
    }
    
    /* #hi{
      display: flex;
      justify-content: center;
      color: pink;
      background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
    background-size: cover;
    color: transparent;
    background-clip: text;
    background-clip: text;
    text-transform: uppercase;
    font-size: 80px;
    /* margin: 10px 0; */
    /* } */ 
    /* #horoscope{
      
      padding-top: 0;
    } */
    #sipho{
      margin-right:10px;
      margin-left: -180px;
      padding-left: 0;
    }
    #kuhle{
      margin-left: -100px;
    }
    #text-intro{
      display: grid;
      grid-row: center;
      padding-bottom: 100px;
      margin-left: 1050px;
      margin-bottom: 100%;
      color: #fad0f9;
      width: 400px;
      height: 200px;
      position: absolute;
      top: 25%;
      right:1rem;
      
  
    }
  
    #caret{
      width: 50px;
      height: 50px;
      /* display:flex;
      justify-content:center */
      margin-left: 20rem;
  
    }
    .socials{
      color: #fad0f9;
    }
    /* #3{
  margin-left:20px
    } */
     .home{
      position: relative;
     }
  
  
  </style>
  