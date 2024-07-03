<template lang="">
  <div id="container" >
   <h1 class="display-2" :style="{marginTop:'20px',color:'black'}" >Projects</h1>
   <div id="prod">
    <div class="card" v-for="project in projectData" :key="project.name" style="width: 18rem;">
  <img :src="project.image" class="card-img-top" alt="" :style="{filter:'blur(2px)'}">
  <div class="card-body">
    <h5 class="card-title" :style="{borderBottomColor:'#0a0406',borderBottomWidth:'2px',borderBottomStyle:'dotted'}">{{project.name }}</h5>
    <p class="card-text">{{project.decription}}</p>
  </div>
  <div class="card-body">
    <a :href="project.github" class="card-link">Github</a>
    <a :href="project.vercel" class="card-link">Vercel</a>
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
#projects {
  background-color: #33051cf9;
  background-clip: border-box;
}
#prod {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
#container{
  margin-top:60px;
  padding-left:80px;
  margin-bottom: 150px;
  gap: 5px;
}

</style>