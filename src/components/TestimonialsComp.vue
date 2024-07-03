<template lang="">
  <div class="container-fluid">
       <h1 class="display-2" :style="{color:'black'}">Reviews</h1>
    <div class="d-flex justify-content-center">
        
     

        <div class="container" id="container">
        <!-- <div class="col gap-2 justify-content-center "> -->
            <div class="card" v-for="testimonial in testimonialsData" :key="testimonial.name" :style="{backgroundColor:'#0a0406',color:'#fad0f9',}">
                <h3 >{{ testimonial.name }} {{testimonial.surname }}</h3>
                <img :src="testimonial.image" width="200px" height="200px" class="mx-auto">
              <span>{{testimonial.description}}</span>
            </div>
        </div>
    </div>
  </div>

<!-- </div> -->
  


</template>
<script>

export default {
    component:{

    },
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
      height:10px;
    } */
     #container{

        display: grid;
        grid-template-columns: repeat (3,1fr);
       justify-content: center;

       gap: 10px;
       margin-top:10px;
     }
     .container-fluid{
      margin-top:79px;
     }
</style>