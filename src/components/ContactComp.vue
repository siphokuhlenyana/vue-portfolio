<template lang="">
    <div class="container d-flex justify-content-center ">
        <h1 id="thoughts" class="display-2" :style="{marginTop:'20px',color:'#0a0406'}"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="150" fill="currentColor" class="bi bi-ear" id="thoughts" viewBox="0 0 16 16">
  <path d="M8.5 1A4.5 4.5 0 0 0 4 5.5v7.047a2.453 2.453 0 0 0 4.75.861l.512-1.363a5.6 5.6 0 0 1 .816-1.46l2.008-2.581A4.34 4.34 0 0 0 8.66 1zM3 5.5A5.5 5.5 0 0 1 8.5 0h.16a5.34 5.34 0 0 1 4.215 8.618l-2.008 2.581a4.6 4.6 0 0 0-.67 1.197l-.51 1.363A3.453 3.453 0 0 1 3 12.547zM8.5 4A1.5 1.5 0 0 0 7 5.5v2.695q.168-.09.332-.192c.327-.208.577-.44.72-.727a.5.5 0 1 1 .895.448c-.256.513-.673.865-1.079 1.123A9 9 0 0 1 7 9.313V11.5a.5.5 0 0 1-1 0v-6a2.5 2.5 0 0 1 5 0V6a.5.5 0 0 1-1 0v-.5A1.5 1.5 0 0 0 8.5 4"/>
</svg>Thoughts ...</h1>

<div id="contactme">


    <form action="https://formcarry.com/s/SOO9YHCHw2J"
  method="POST"
  enctype="multipart/form-data">

    <label for="Name">Name:</label><br>
    <input type="text" id="Name" name="Name" value=""><br>
    <label for="Surname">Surname:</label><br>
    <input type="text" id="lname" name="Surname" value=""><br><br>
    <label for="Message">Message:</label><br>
    <textarea name="Message"  id="message" value="" placeholder="Your enquiry"></textarea><br><br>
    <label for="appo">Set Appointment:</label><br>
    <input type="date" id="appoD" name="appoD" value=""><br><br>


    <input type="submit" value="Submit" id="submit">
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
    margin-right: 30rem;
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
        font-weight: 500;
        margin-top:170px;
       
    }
    .container{
        height:140vh;
         /* padding-top: 50px;  */
        /* margin-top: 250px;   */
        background-image: url("https://cdn-images-1.medium.com/max/1600/1*3fSbM56prlEHMbd106MbqQ.gif");
        background-size: cover;
        background-repeat: no-repeat;
        
        color:fuchsia;
        
    }
    #thoughts{
        text-shadow:2px 2px pink ;
    }
</style>