<template lang="">
  <div class="container-fluid">
       <h1 class="display-2 d-flex justify-content start" :style="{color:'#fad0f9',borderLeftColor:'#bb0761e7',borderLeftStyle:'solid',borderLeftWidth:'2px',borderLeftSize:'20px',height:'200px'}">Reviews</h1>
    <div class="d-flex justify-content-center">
        
     

        <div class="container" id="container">
        <!-- <div class="col gap-2 justify-content-center "> -->
         <div class="card-container" :style="{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}">
            <div class="card" v-for="testimonial in testimonialsData" :key="testimonial.name" :style="{backgroundColor:'#fad0f9',color:'black',transition:'transform 0.5 ease-in-out',borderRadius:'10%',width:'300px',margin :'10px',marginBottom:'35px'}">
                <h3 >{{ testimonial.name }} {{testimonial.surname }}</h3>
                <img :src="testimonial.image" width="200px" height="200px" class="mx-auto" :style="{marginBottom:'20px'}">
              <span :style="{marginBottom:'10px',marginLeft:'25px',marginRight:'25px'}">"{{testimonial.description}}"</span>
            </div>
         </div>
        </div>
    </div>
  </div>

<!-- </div> -->
  


</template>
<script>

export default {
   component: {

   },
   computed: {

      testimonialsData() {
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
    .card {
  transition: all 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
#container {

   display: grid;
   grid-template-columns: repeat (3, 1fr);
   justify-content: center;

   gap: 10px;
   /* margin-top:10px; */
}

.container-fluid {
   /* margin-top:79px; */
   /* margin-bottom:150px; */
   background-color: #33051cf9;
   padding-bottom: 80px;
   padding-top: 100px;
   font-family: "Poppins", sans-serif;
   font-weight: 400;
   font-style: normal;

}

.card :hover {
   box-shadow: 0px 5px 8px #bb0761e7;
   transform: rotateY(-10px);
}

.poppins-regular {
   font-family: "Poppins", sans-serif;
   font-weight: 400;
   font-style: normal;
}


</style>