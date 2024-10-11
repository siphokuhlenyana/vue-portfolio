<template>
    <div class="container">
        <div id="ab" ><h2 class="display-2 d-flex justify-content start " id="about" :style="{color:'#fad0f9',borderLeftColor:'#bb0761e7',borderLeftStyle:'solid',borderLeftWidth:'4px',borderLeftSize:'20px'}">About</h2>
            <div id="aboutdiv">
            
    <img  id="aboutimg" src="https://siphokuhlenyana.github.io/Vue_projectImages/20240422_122000.jpg" alt="" :style="{paddingBottom:'20px',marginTop:'2rem'}">
            <!-- <img src="https://siphokuhlenyana.github.io/ImagesPortfolio/rhombus.png" alt=""> -->
           
   <p :style="{width:'1000px',marginTop:'6rem'}">{{aboutMe}}</p></div>
    <div class="box"></div>
        </div>
       
              

    </div>
</template>
<script>

export default {
    computed:{
       
        aboutMe()
     {
      return this.$store.state.aboutMe
     } 
    },
    mounted() {
       this.$store.dispatch('getAbout')
    }
    }
    

</script>
<style scoped>
.box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px; /* adjust the height of the box */
  background-color: #fff;
  transform: translateY(100%);
  transition: transform 0.5s ease-in-out;
}

.container:hover .box {
  transform: translateY(0);
}


@media only screen and (max-width: 961px){
  p{
   
  
  margin-left: -150px;
  
  }
  #ab{
    height:400vh;
  }
}
#about{
    /* font-family: "Poppins", sans-serif; */
  font-weight: 400;
  font-style: normal;
  

}
#aboutimg{
    width: 800px;
    
    height: 450px;

    position: relative;
    animation:alternate-reverse;
    animation-name: run;
    animation-duration: 1s linear infinite;
  }
  @keyframes run {
    0% {
      left: 0;
    }
    48% {
      transform: rotateY(0deg);
    }
    50% {
      
      transform: rotateY(180deg);
    }
    98% {
      transform: rotateY(180deg);
    }
    100% {
      left: 0;
       transform: rotateY(0deg);
    }
  }

    

.container{
  
  background-color:#33051c ;
  background: linear-gradient(#33051c);
    text-align: center;
    color: #fad0f9;
    height: 110vh;
    padding-top: 7%;
    padding-bottom: 50px;
    /* font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal; */
  font-size: 20px !important;
 
  display:grid;
  grid-template-columns: repeat(2,1fr );
  
}
#aboutdiv{
    height:180px;
    margin-left:200px;
    display:flex;
    justify-content: center;
    gap: 160px;
    
  
  
}
/* .poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
 
    } */
</style>