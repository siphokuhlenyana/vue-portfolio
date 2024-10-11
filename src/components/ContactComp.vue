<template lang="">
    <div class="container d-flex justify-content-start" >
        
        <h2 id="thoughts" class="display-2 d-flex justify-content start" :style="{marginTop:'20px',color:'#fad0f9',borderLeftColor:'#bb0761e7',borderLeftStyle:'solid',borderLeftWidth:'4px',borderLeftSize:'20px',height:'80px'}">
       Reach Out </h2>
       <div id="r"><h3><br><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg><br>0832432798</h3><br><br>
<h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
</svg><br>mamitagruesa@gmail.com</h3></div>

<div id="contactme">


    <form action="https://formcarry.com/s/SOO9YHCHw2J"
  method="POST"
  enctype="multipart/form-data">

    <label for="Name" >Name:</label><br><br>
    <input type="text" id="Name" name="Name" value="" required><br><br>
    <label for="Surname" >Surname:</label><br><br>
    <input type="text" id="lname" name="Surname" value="" required><br><br>
    <label for="Message" >Message:</label><br><br>
    <textarea name="Message"  id="message" value="" required  placeholder="Your enquiry" ></textarea><br><br>
    <label for="appo">Set Appointment:</label><br><br>
    <input type="date" id="appoD" name="appoD" value="" ><br><br>


    <input type="submit" value="Send" id="submit">
  </form> 
</div>
<a href="https://www.google.co.za/maps/place/Samora+Machel,+Weltevreden+Valley+North,+Cape+Town,+7784/@-34.0207739,18.576536,17z/data=!3m1!4b1!4m6!3m5!1s0x1dcc45c82b1273bd:0x7f65235b214a6cd3!8m2!3d-34.0207739!4d18.5791109!16s%2Fg%2F1wk3pxyy?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D" target="blank"><img id="location" src="https://siphokuhlenyana.github.io/icons/Screenshot%202024-09-19%20102353.png" width="350px" ></a>
<p class="animate-flicker">Find Me Here  !</p>



    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#r{
    padding-top: 25rem;
    padding-right:2rem;
    font-size: medium;
}
.animate-flicker{
    -webkit-animation: flickerAnimation .5s infinite;
   -moz-animation: flickerAnimation .5s infinite;
   -o-animation: flickerAnimation .5s infinite;
    animation: flickerAnimation .5s infinite;
}

@keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-o-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-moz-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
p{
    /* font-family: "Poppins", sans-serif; */
    font-weight: 400;
    font-style: normal;
    font-size: x-large;
    padding-top: 30rem;
}
#location{
    padding-top: 25rem;
    padding-left:5rem;
    border-radius:15%;
}
#Name{
    width: 380px;
}
#lname{
    width: 380px;
}
#appoD{
    width: 380px;
}
#message{
    width: 380px;
}

#submit{
    
    text-shadow: 3px 2px  #fa5ee2;
}
    #message{
        height:150px;
        align-items: flex-start;
    }
    #contactme{
        border: 1px #F163AB solid;
        box-shadow: #0a040692 16px 20px;
        width:600px;
        height:650px;
       
        padding-bottom: 150px;
<<<<<<< HEAD
        padding-right:-80px;
        /* margin-left: 200px; */
=======
        padding-right:-100px;
       
>>>>>>> 4f818ee8349dbf5ba7a5c8655319fc5d64533ebb
        font-weight: 500;
        margin-top:170px;
        padding-top: 4rem;
       
       
    }
    .container{
<<<<<<< HEAD
        height:140vh;
=======
        height:160vh;
>>>>>>> 4f818ee8349dbf5ba7a5c8655319fc5d64533ebb
        background-color: #33051c;
       
        
        color:fuchsia;
        /* font-family: "Poppins", sans-serif; */
    font-weight: 400;
    font-style: normal;
        
    }
<<<<<<< HEAD
    /* #thoughts{
        text-shadow:2px 2px pink ;
    } */
    /* .poppins-regular {
=======
    img#location {
    margin-left: -1rem;
}
   
    .poppins-regular {
>>>>>>> 4f818ee8349dbf5ba7a5c8655319fc5d64533ebb
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
    } */
</style>