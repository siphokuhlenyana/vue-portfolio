<template lang="">
    <div class="container d-flex justify-content-start">
        
        <h1 id="thoughts" class="display-2 d-flex justify-content start" :style="{marginTop:'20px',color:'#fad0f9',borderLeftColor:'#E5C29C',borderLeftStyle:'solid',borderLeftWidth:'2px',borderLeftSize:'20px',height:'200px'}">
       Reach Out </h1>

<div id="contactme">


    <form action="https://formcarry.com/s/SOO9YHCHw2J"
  method="POST"
  enctype="multipart/form-data">

    <label for="Name" >Name:</label><br>
    <input type="text" id="Name" name="Name" value="" required><br>
    <label for="Surname" >Surname:</label><br>
    <input type="text" id="lname" name="Surname" value="" required><br><br>
    <label for="Message" >Message:</label><br>
    <textarea name="Message"  id="message" value="" required  placeholder="Your enquiry" ></textarea><br><br>
    <label for="appo">Set Appointment:</label><br>
    <input type="date" id="appoD" name="appoD" value="" ><br><br>


    <input type="submit" value="Send" id="submit">
  </form> 




</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

#submit{
    /* margin-right: 10rem; */
    text-shadow: 3px 2px  #fa5ee2;
}
    #message{
        height:150px;
        align-items: flex-start;
    }
    #contactme{
        border: 1px #F163AB solid;
        box-shadow: #0a040692 16px 20px;
        width:400px;
        height:250px;
        /* margin-bottom: 100px; */
        padding-bottom: 150px;
        padding-right:-100px;
        margin-left: 200px;
        font-weight: 500;
        margin-top:170px;
        justify-content: center;
       
    }
    .container{
        height:140vh;
         /* padding-top: 50px;  */
        /* margin-top: 250px;   */
        background-image: url("https://gifdb.com/images/high/pink-aesthetic-neon-night-road-v4bhs8sbgu5sp60p.gif");
        background-size: cover;
        background-repeat: no-repeat;
        
        color:fuchsia;
        font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
        
    }
    #thoughts{
        text-shadow:2px 2px pink ;
    }
    .poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
    }
</style>