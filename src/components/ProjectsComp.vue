<template lang="">

  <div id="container"  >
   <h2 class="display-2 d-flex justify-content start" id="assign" :style="{marginTop:'20px',color:'#fad0f9',borderLeftColor:'#bb0761e7',borderLeftStyle:'solid',borderLeftWidth:'4px',borderLeftSize:'20px',height:'80px',marginLeft:'2px'}" >Projects</h2>
   <div id="prod" :style="{paddingTop:'2rem'}">
    <div class="card" v-for="project in projectData" :key="project.name" style="width: 18rem;">
  <img :src="project.image" class="card-img-top" alt="" :style="{filter:'blur(2px)',height:'10rem'}">
  <div class="card-body">
    <h5 class="card-title" :style="{borderBottomColor:'#fad0f9',borderBottomWidth:'2px',borderBottomStyle:'dotted',color:'#fad0f9'}">{{project.name }}</h5>
    <p class="card-text" :style="{color:'#fad0f9'}">{{project.decription}}</p>
  </div>
  <div class="card-body" >
    <a :href="project.github" class="card-link" target="_blank" :style="{color:'#fad0f9'}">Github</a>
    <a :href="project.vercel" class="card-link" target="_blank" :style="{color:'#fad0f9'}">Vercel</a>
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
  transition: all 0.3s ease-in-out;
  
}
.card-body:hover{
  box-shadow: 16px 16px 25px 25px #fa5ee2;
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
    transition:all ease-in-out 0.5;
 
  background-color:  #33051c;
  
  
}
.card{
  margin-bottom: 50px;
  border-color:#fad0f9;
  border-width: 4px;
  margin-left:100px;
  align-content: center;
  background-color: #33051cf9;
 

}
.card :hover {
        border-color: '#fa5ee2';
          border-width: 2px;
          border-style: 'dotted';
          box-shadow: 16px 16px 25px 25px #fa5ee2;
          border-radius: 10px ;
   
   transform: rotateY(-10px);
}
.container :hover{
 width :2px;
}

.poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>