<template>
    <div>
       {{$store.state.aboutMe}}
    </div>
</template>
<script>
export default {
    methods: {
        aboutMe()
     {
      return this.$store.state.aboutMe
     } 
    },
    computed:{
        getAbout(){
           return this.$store.dispatch('getAbout')
        }
        
    }
    }
    

</script>
<style scoped>

</style>