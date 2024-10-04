<template>
 
    <div :style="{height:'1px',marginBottom:'1rem'}">
     <div class="loader mx-auto"  :style="{paddingTop:'150px',marginBottom:'1rem'}"></div> 
     <!-- <img id="spinner" src="https://siphokuhlenyana.github.io/dlozify-pics/Dual%20Ball@1x-3.2s-200px-200px.gif" alt="" width="100px" height="200px"> -->
     <!-- <onBeforeMount/> -->
    </div>
</template>

<script>
// import {onMounted, onBeforeUnmount ,ref} from "vue";
// const timer=ref();


// export default {
//   components:{
//     onBeforeUnmount
//   },
//     data(){
//     return{
//       loading :null
//     }
//   },
 
//     mounted:{
//       showSpinner(){
//         this.loading= setInterval(() =>{
//           this.countDown()
//         },6000) 
//     }
//   }
// }
  
//    onBeforeUnmount();{
// clearInterval(this.loading)
//   }




</script>
<style scoped>


.loader {
  width: 5px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: rgba(255, 0, 255, 0.692);
  background: radial-gradient(circle closest-side at 50% 40%, 94%, #000);
  transform-origin: 50% 40%;
  animation: l25 2s  linear;
  
}
@keyframes l25 {
  100% {transform: rotate(1turn)}
}
</style>
