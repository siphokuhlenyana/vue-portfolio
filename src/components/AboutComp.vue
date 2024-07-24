<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div id="aboutdiv">
            <h2 class="display-2 d-flex justify-content start" id="about" :style="{color:'#fad0f9',borderLeftColor:'#bb0761e7',borderLeftStyle:'solid',borderLeftWidth:'2px',borderLeftSize:'20px'}">About</h2></div>
    <img  id="aboutimg" src="https://siphokuhlenyana.github.io/Vue_projectImages/20240422_122000.jpg" alt="" :style="{borderRadius:'50%',paddingBottom:'20px'}">
            <!-- <img src="https://siphokuhlenyana.github.io/ImagesPortfolio/rhombus.png" alt=""> -->
           
  
        </div>
        <div> {{aboutMe}}</div>
              

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
#about{
    font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
#aboutimg{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items:center;
    height: 250px;

    
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
      /* left: calc(100% - 100px); */
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
  /* background-color: ; */
  background-color:#33051c ;
  background: linear-gradient(#33051c);
    text-align: center;
    color: #fad0f9;
    height: 120vh;
    padding-top: 7%;
    padding-bottom: 50px;
    font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  /* margin-left:25px; */
}
#aboutdiv{
    height:200px;
    margin-left:25px;
}
#aboutimg{
  background-image:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtavVPUcO2YE5QrJyLqSaGjEv2C-d7pZZ_Q&s") ;
}
</style>