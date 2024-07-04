<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <h2 class="display-2 d-flex justify-content start" :style="{color:'#0a0406'}">About</h2>
            <img  id="aboutimg" src="https://siphokuhlenyana.github.io/Vue_projectImages/20240422_122000.jpg" alt="" :style="{borderRadius:'20%',paddingBottom:'20px'}">
            
        </div>
               {{aboutMe}}

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
#aboutimg{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items:center;

    
}
.container{
  /* background-color: ; */
  background-color:#33051c ;
  background: linear-gradient(#33051c, #FF00FF);
    text-align: center;
    color: #fad0f9;
    height: 105vh;
    padding-top: 7%;
    padding-bottom: 50px;
}
</style>