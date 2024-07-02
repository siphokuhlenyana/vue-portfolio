<template lang="">
    <div>
        <h1>Reviews</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4" >
  <div class="col">
    <div class="card" v-for="testimonial in testimonialsData" :key="testimonial.name">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{testimonial.name}} {{testimonial.surname}}</h5>
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
<style lang="">
    
</style>