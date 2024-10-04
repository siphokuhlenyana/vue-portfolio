<template lang="">
    <div class="container d-flex justify-content-start" >
        
        <h2 id="thoughts" class="display-2 d-flex justify-content start" :style="{marginTop:'20px',color:'#fad0f9',borderLeftColor:'#bb0761e7',borderLeftStyle:'solid',borderLeftWidth:'4px',borderLeftSize:'20px',height:'80px'}">
       Reach Out </h2>
       <a href="https://www.google.co.za/maps/place/Samora+Machel,+Weltevreden+Valley+North,+Cape+Town,+7784/@-34.0207739,18.576536,17z/data=!3m1!4b1!4m6!3m5!1s0x1dcc45c82b1273bd:0x7f65235b214a6cd3!8m2!3d-34.0207739!4d18.5791109!16s%2Fg%2F1wk3pxyy?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D" target="blank"><img id="location" src="https://siphokuhlenyana.github.io/icons/Screenshot%202024-09-19%20102353.png"  ></a><br><br>
<p class="animate-flicker" :style="{color:'#fad0f9'}" >Find Me Here  !</p>
      

<div id="contactme">


    <form action="https://formcarry.com/s/SOO9YHCHw2J"
  method="POST"
  enctype="multipart/form-data">

    <label for="Name" :style="{color:'#fad0f9'}" >Name:</label><br><br>
    <input type="text" id="Name" name="Name" value="" required><br><br>
    <label for="Surname" :style="{color:'#fad0f9'}" >Surname:</label><br><br>
    <input type="text" id="lname" name="Surname" value="" required><br><br>
    <label for="Message" :style="{color:'#fad0f9'}" >Message:</label><br><br>
    <textarea name="Message"  id="message" value="" required  placeholder="Your enquiry" :style="{color:'#fad0f9'}"  ></textarea><br><br>
    <label for="appo" :style="{color:'#fad0f9'}" >Set Appointment:</label><br><br>
    <input type="date" id="appoD" name="appoD" value="" :style="{color:'#fad0f9'}"  ><br><br>


    <input type="submit" value="Send" id="submit" :style="{color:'#fad0f9'}" >
    
  </form> 
</div>




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
    margin-left:2rem;
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
#r{
    margin-right:1rem;
}
p{
    font-family: "Poppins", sans-serif;
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
    background-color: #91074a;
}
#lname{
    width: 380px;
    background-color: #91074a;
}
#appoD{
    width: 380px;
    background-color: #91074a;
}
#message{
    width: 380px;
    background-color: #91074a;
}

#submit{
    
    text-shadow: 3px 2px  #fa5ee2;
    background-color: #91074a;
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
        padding-right:-100px;
       
        font-weight: 500;
        margin-top:170px;
        padding-top: 4rem;
       
       
    }
    .container{
        height:160vh;
        background-color: #33051c;
       
        
        color:fuchsia;
        font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
        
    }
    img#location {
    margin-left: -1rem;
}
   
    .poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
    }
</style>