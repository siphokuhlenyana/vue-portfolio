<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <h2 class="display-2">About</h2>
            <img  id="aboutimg" src="https://siphokuhlenyana.github.io/Vue_projectImages/20240422_122000.jpg" alt="" :style="{borderRadius:'20%'}">
            
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
    background-color: #33051cf9 ;
    text-align: center;
    color: #fad0f9;
    height: 105vh;
    padding-top: 7%;
}
</style>