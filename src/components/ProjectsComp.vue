<template lang="">

  <div id="container" >
   <h1 class="display-2 d-flex justify-content start" id="assign" :style="{marginTop:'20px',color:'#fad0f9',borderLeftColor:'#bb0761e7',borderLeftStyle:'solid',borderLeftWidth:'2px',borderLeftSize:'20px',height:'200px',marginLeft:'2px'}" >Projects</h1>
   <div id="prod">
    <div class="card" v-for="project in projectData" :key="project.name" style="width: 18rem;">
  <img :src="project.image" class="card-img-top" alt="" :style="{filter:'blur(2px)'}">
  <div class="card-body">
    <h5 class="card-title" :style="{borderBottomColor:'#0a0406',borderBottomWidth:'2px',borderBottomStyle:'dotted',}">{{project.name }}</h5>
    <p class="card-text">{{project.decription}}</p>
  </div>
  <div class="card-body">
    <a :href="project.github" class="card-link" target="_blank">Github</a>
    <a :href="project.vercel" class="card-link" target="_blank">Vercel</a>
  </div>
</div>
   </div>
     </div>   
       

</template>
<script>
export default {
  computed: {
    projectData() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("getProjects");
  },
};
</script>
<style scoped>
@media (min-width:300px){
  #prod{
    width:75%;
    
  }
}
.card-body{
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
#assign{
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
#projects {
  background-color: #33051cf9;
  background-clip: border-box;
}
#prod {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
#container{
  padding-top:62px;
  
  /* margin-bottom: 80px; */
  background:linear-gradient(#FF00FF,pink)
  
  
}
.card{
  margin-bottom: 50px;
  border-color: black;
  border-width: 4px;
  margin-left:150px;
  align-content: center;
}

.poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>