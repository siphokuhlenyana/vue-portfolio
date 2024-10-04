<template>
  <div id="nav" class="sticky-top">
    <nav class="navbar bg sticky-top">
       
      <div class="container-fluid">
        
        <a href="#homepage" ><img id="homeicon" src="https://siphokuhlenyana.github.io/ImagesPortfolio/home.png" alt="" height="50px" ><br><span id="home">Home</span></a>
        <a href="#aboutpage"><img id="abouticon" src="https://siphokuhlenyana.github.io/ImagesPortfolio/information.png" alt="" height="50px" ><br><span id="about">About</span></a>
        <a href="#resumepage"><img id="eduicon" src="https://siphokuhlenyana.github.io/ImagesPortfolio/college.png" alt="" height="50px" ><br><span id="edu">Education & Experience</span></a>
        <a href="#projectspage"><img id="projicon" src="https://siphokuhlenyana.github.io/ImagesPortfolio/layers.png" alt="" height="50px" ><br><span id="pro">Projects</span></a>
        <a href="#contactme"><img id="emailicon" src="https://siphokuhlenyana.github.io/ImagesPortfolio/email.png" alt="" height="50px" ><br><span id="co">Contact</span></a>
      
        <a class="navbar-brand" href="#"
          ><img
            id="logo"
            src="https://github.com/siphokuhlenyana/ImagesPortfolio/blob/main/sn.png?raw=true"
            width="300px"
            height="200px"
        /></a>
       
        <h1 id="hi">SIPHOKUHLE NYANA</h1><br><br>
       
        <!-- <button
          id="toogle"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <!-- <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          :style="{
            backgroundImage: 'url(https://pngimg.com/d/capricorn_PNG35.png)',
            backgroundRepeat: 'no repeat',
            backgroundSize: 'contain',
            backgroundColor: '#91074a',
          }"
        >
          <div class="offcanvas-header">
            <h2 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h2>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body" id="offcanva" :style="{color:'#33051c'}">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#homepage"><h2>Home</h2></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#aboutpage"><h2>About</h2></a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="#resumepage"><h2>Resume</h2></a>
              </li>
              
              
              <li class="nav-item">
                <a class="nav-link" href="#projectspage"><h2>Project</h2></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#testimonials"><h2>Reviews</h2></a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#contactme"><h2>Reach Out</h2></a>
              </li>
            </ul>

          </div>
        </div>
      </div> -->
    </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style >

/* @media only screen and (max-width: 961px){
  span{
    font-size:large;
    /* font-weight:700;
    font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  }
  #hi{
    margin-right:6rem;
  }
  #homeicon,#home{
  margin-right:10rem;
   /* margin-right: 10px; */ 
 

/* #abouticon,#about{
  margin-left:-10rem;
}
#eduicon,#edu{
  margin-right:2rem;
}
#projicon,#pro{
  margin-right: 4rem;
  margin-left: -6rem; 
 }
#emailicon,#co{
  margin-left: -6rem;
  margin-right: 1rem;  */

   /* #homeicon,#home{
    margin-left:-50px;
  }  */
 */ */

span{
  text-decoration: none;
  color:#fad0f9 ;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
 
}
a{
  text-decoration: none;
  color:#fad0f9 ;
}
a:active{
  border-bottom: #fad0f9;
  border-bottom-width:2px ;
  border-bottom-style: solid;
}
#nav {
  background-color: #91074a;
  width: 100%;
  height: 12rem;
  
}
#logo {
  display:flex;
  justify-self:center;
  padding: 0;
  /* width: 200; */
  height: 15rem;
}

#hi {
  display: flex;
  justify-content: center;
  color: pink;
  background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
  background-size: cover;
  color: transparent;
  background-clip: text;
  /* z-index: 10000; */
  text-transform: uppercase;
  font-size: 50px;
  margin:0;
  font-family: "Poppins",sans-serif;
  font-weight: 800;
  font-style: italic;
  /* margin: 10px 0; */
  margin-right:2rem;
  
}

#toogle {
  background-color: pink;
}
#offcanva :hover {
  color: fuchsia;
  border: 2px fuchsia solid;
}
.nav-item{
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style:bold;
text-decoration: none;

}
/* #homeicon,#home{
  margin-right:10rem;
  /* margin-right: 10px; */
/* }
#abouticon,#about{
  margin-left:-10rem;
}
#eduicon,#edu{
  margin-right:2rem;
}
#projicon,#pro{
  margin-right: 4rem;
  /* margin-left: -6rem; */
/* }
#emailicon,#co{
  margin-left: -6rem;
  margin-right: 1rem; 

}  */

</style>
<!-- <template lang="">
    <div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style> -->