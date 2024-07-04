<template lang="">
  <div class="container-fluid">
       <h1 class="display-2 d-flex justify-content start" :style="{color:'#0a0406'}">Reviews</h1>
    <div class="d-flex justify-content-center">
        
     

        <div class="container" id="container">
        <!-- <div class="col gap-2 justify-content-center "> -->
            <div class="card" v-for="testimonial in testimonialsData" :key="testimonial.name" :style="{backgroundColor:'#0a0406',color:'#fad0f9',transition:'transform'}">
                <h3 >{{ testimonial.name }} {{testimonial.surname }}</h3>
                <img :src="testimonial.image" width="200px" height="200px" class="mx-auto" :style="{marginBottom:'20px'}">
              <span :style="{marginBottom:'10px',marginLeft:'25px',marginRight:'25px'}">"{{testimonial.description}}"</span>
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
       /* margin-top:10px; */
     }
     .container-fluid{
      /* margin-top:79px; */
      /* margin-bottom:150px; */
      background-color:pink ;
      padding-bottom: 80px;
      padding-top:100px;
      
     }
     .card :hover{
      box-shadow: 0px 5px 8px #bb0761e7;
      transform: rotateY(-20px);
     }
</style>