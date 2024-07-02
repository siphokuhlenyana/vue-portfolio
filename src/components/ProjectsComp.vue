<template lang="">
    
   
        
        <div id="projects">
            <h1 class="display-2">Projects</h1>
             <div id="prod">
        <div   class="card " v-for="project in projectData" :key="project.name" style="width: 18rem;">
  <div class="card-body" >
    <h5 class="card-title">{{project.name }}</h5>
    <p class="card-text">{{project.description}}</p>
    <a href="#" class="card-link">Github</a>
    <a href="#" class="card-link">vercel</a>
  </div>
</div>
    </div>
</div>
</template>
<script>
export default {
    computed:{
       
       projectData()
    {
     return this.$store.state.projects
    } 
   },
   mounted() {
      this.$store.dispatch('getProjects')
   }
}
</script>
<style scoped>
#projects{
      background-color: #33051cf9 ;
      background-clip: border-box;
      
      
}
#prod{
    display: grid;
    grid-template-columns: repeat( 4,1fr);
}
   
</style>