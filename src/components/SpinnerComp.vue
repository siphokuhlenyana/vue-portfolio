<template >
    <div>
     <div class="loader"></div> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #514b8204;
  background: radial-gradient(circle closest-side at 50% 40%,#0000 94%, #000);
  transform-origin: 50% 40%;
  animation: l25 1s infinite linear;
}
@keyframes l25 {
  100% {transform: rotate(1turn)}
}
</style>