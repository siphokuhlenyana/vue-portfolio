<template>
  <div id="nav" class="sticky-top">
    <nav class="navbar bg sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img
            id="logo"
            src="https://github.com/siphokuhlenyana/ImagesPortfolio/blob/main/sn.png?raw=true"
            width="250px"
            height="100px"
        /></a>
        <h1 id="hi">SIPHOKUHLE NYANA</h1>
        <button
          id="toogle"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
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
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body" id="offcanva">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#homepage">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#aboutpage">About</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="#resumepage">Resume</a>
              </li>
              
              
              <li class="nav-item">
                <a class="nav-link" href="#projectspage">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#testimonials">Reviews</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#contactme">Reach Out</a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style >
#nav {
  background-color: #91074a;
  width: 100%;
  height: 6rem;
}
#logo {
  display: flex;
  justify-self: center;
  padding: 0;
  width: 100%;
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
  margin: 0;
  /* margin: 10px 0; */
}
#toogle {
  background-color: pink;
}
#offcanva :hover {
  color: fuchsia;
  border: 2px fuchsia solid;
}
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