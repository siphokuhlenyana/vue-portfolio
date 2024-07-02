<template lang="">
    <div>
        <h1 >Reviews</h1>
        <div id="test"  >
  <div  class="row row-cols-1 row-cols-md-3 g-4" >
    <div class="card" v-for="testimonial in testimonialsData" :key="testimonial.name" >
      <img :src="testimonial.image" class="card-img-top" alt="" >
      <div class="card-body">
        <h2 class="card-title">{{testimonial.name}} {{testimonial.surname}} </h2>
        <p class="card-text">{{testimonial.description}}</p>
      </div>
    </div>
  </div>
  
    </div>
  </div>
  


</template>
<script>
export default {
    computed:{
       
       testimonialsData()
    {
     return this.$store.state.testimonials
    } 
   },
   mounted() {
      this.$store.dispatch('getTestimonials')
   }
}
</script>
<style scoped>
    /* #test{
       display: grid;
      grid-template-columns: repeat ( 2,1fr);
      gap:30px; 
      width:100%;
      height:150px;
    } */
</style>