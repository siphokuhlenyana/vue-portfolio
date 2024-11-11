<template lang="">
<div id="container-fluid" :style="{backgroundColor:'#33051c'}">
  <h2 class="display-2 d-flex justify-content start" id="resume" :style="{color:'#fad0f9',borderLeftColor:'#bb0761e7',borderLeftStyle:'solid',borderLeftWidth:'4px',borderLeftSize:'20px',height:'80px'}">Education</h2>
  <div class="row">
    <div id="container"  :style="{marginLeft:'2rem'}">
      
        <!-- <h1 id="headedu"  :style="{marginTop:'10px'}">Education</h1>
        <button id="view" v-if="createView === false" @click="createViewIf()" :style="{width:'300px' ,height:'30px',borderRadius:'10%'}">View Description</button>
           <button id="hide" v-if="createView" @click="createViewIf()" :style="{width:'300px' ,height:'30px',borderRadius:'10%',marginTop:'50px'}">Hide Description </button> -->
        <div id="data" :style="{marginLeft:'1rem'}" >
            <div id="education" v-for="education,  in educationData" :key="education.placeOfInstitution" :style="{borderWidth:'5px',borderColor:'#ff00ff',
                borderStyle:'solid',borderRadius:'50%',
                backgroundImage:'url(https://www.right-to-education.org/sites/right-to-education.org/files/rm373batch13-081_0.jpg)',backgroundRepeat:'no repeat',backgroundSize:'cover',marginLeft:'2rem'}">
                    <h4 id="edu" :style="{fontWeight:'bold'}">{{education.placeOfInstitution}} </h4>
                    <h3 id="year" :style="{fontWeight:'bold'}">{{education.year}}</h3>
            
           <div id="view"> 
            
                <!-- <div v-show="createView" :style="{marginTop:'100px'}"> -->
                  <div  :style="{marginTop:'100px',width:'600px'}" >
                <p :style="{width:'600px',fontWeight:'bold'}"> {{education.description}}</p>
            </div>
            
        </div>
        
        
        
    </div>
       <!-- <img id='agile' src="https://siphokuhlenyana.github.io/Vue_projectImages/Screenshot%202024-06-25%20092556.png" width='300px' height='300px'>      -->
        </div>
      </div>
    
      <div id="ski" :style="{width:'600px',height:'108vh',borderRadius:'10%'}" >
        <h1 class="display-2 mx-auto" :style="{color:'#fad0f9',marginTop:'10px',paddingBottom:'15px',paddingRight:'100px'}">
        <div id="indication"><h2 :style="{color:'#ff00ff',marginTop:'10px',marginRight:'1rem'}">   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chat-quote" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
  <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
</svg> Soft Skills </h2><h2 :style="{color:'#fad0f9',marginTop:'10px'}"> Hard Skills</h2></div></h1>
     
        <div id="skill" :style="{width:'50px',height:'450px',marginLeft:'200px'}">
        <div id="skills" v-for="skill in skillsData" :key="skill.name"
        :style="{borderBottomColor:skill.type =='soft'? '#ff00ff':'#fad0f9',borderBottomStyle:'solid',marginLeft:'4rem',paddingBottom:'1rem',borderBottomWidth:'3px'}">
            <img :src="skill.image" width="200px" height="80px" :style="{borderColor:'#91074a',borderWidth:'3px',borderStyle:'dotted',borderRadius:'50%'}">
            <h4 id="name">{{skill.name}}</h4>
            
            <h6 id="level">{{skill.level}}</h6>
            
        </div> 
           </div>
       </div>
       </div>
      </div>

      
      <div id="work" :style="{backgroundColor:'#FF00FF',height:'74vh',backgroundColor:'#33051c'}">
        <h2 class="display-2 d-flex justify-content start" id="workExp" :style="{color:'#fad0f9',borderLeftColor:'#bb0761e7',borderLeftStyle:'solid',borderLeftWidth:'4px',borderLeftSize:'20px',height:'80px',marginBottom:'1rem'}">Work Experience</h2>
<!-- 
        <h1 id="workExp"  :style="{marginTop:'20px',color:'#fad0f9'}" >Work Experience</h1> -->
        
        <!-- <div id="carouselExample" class="carousel slide">
        <div id="workExperience" v-for="workExp in workExpData" :key="workExp.placeOfWork">
            <h2>{{workExp.placeOfWork}}</h2
                ></div> 
    </div> -->

    <div id="carouselExample" class="carousel slide mx-auto" :style="{backgroundColor:'#91074a',borderColor:'#fad0f9',borderRadius:'5px',borderWidth:'4px',borderStyle:'solid',paddingTop:'10px',width:'1200px',marginTop:'2rem'}">
  <div class="carousel-inner">
    <div class="carousel-item" :class="{active: workExp.id == 1}"  v-for="workExp in workExpData" :key="workExp.placeOfWork" :style="{backgroundColor:'#91074a' ,color:'black'}">
      <img :src="workExp.contact.image" class="" alt="" width="200px" height="150px" >
      <h2 :style="{color:'#fad0f9'}">{{workExp.placeOfWork}}</h2>
      
      <p :style="{color:'#fad0f9'}">{{workExp.description}}</p>
      <!-- <h3>{{workExp.contact.image}}</h3> -->
      <h3 :style="{color:'#fad0f9'}">{{workExp.year}}</h3>
      
    </div>
  </div>
  <button  class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span id="caro" class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button  class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span id="caros" class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<a href="https://siphokuhlenyana.github.io/ImagesPortfolio/Siphokuhle%20Nyana%20-%20Resume.pdf" download> <button id="but"
      type="button"
      class="btn btn-outline-secondary"
      :style="{ backgroundColor: '#fa5ee2',textDecoration:'none',paddingRight:'5px',paddingLeft:'5px',color:'#fad0f9' }"
    >Download Resume </button></a>
    <br />
    
</div>

</template>
<script>
export default {
  data() {
    return {
      createView: false,
    };
  },
  methods: {
    createViewIf() {
      this.createView = !this.createView;
    },
  },
  props: ["image"],
  computed: {
    educationData() {
      return this.$store.state.education;
    },
    workExpData() {
      return this.$store.state.workExp;
    },
    skillsData() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("getEducation");
    this.$store.dispatch("getWorkExperience");
    this.$store.dispatch("getSkills");
  },
};
</script>
<style scoped>
#name,#level{
  color: #fad0f9;
}
#but{
  /* font-family: "Poppins", sans-serif; */
  font-weight: 400;
  font-style: normal;
}
.carousel-item{
  /* font-family: "Poppins", sans-serif; */
  font-weight: 400;
  font-style: normal;
}
#ski{
  /* font-family: "Poppins", sans-serif; */
  font-weight: 400;
  font-style: normal;
  padding: 0;
  margin: 0;
  margin-top: 15rem;
  
  
}
#workExp{
  /* font-family: "Poppins", sans-serif; */
  /* font-weight: 400; */
  font-family: "Poppins", sans-serif;

  font-style: normal;
  display: flex;
  justify-content: flex-start;
 
  
}
#headedu{
  /* font-family: "Poppins", sans-serif; */
  font-weight: 400;
  font-style: normal;
}
#resume{
  /* font-family: "Poppins", sans-serif; */
  font-weight: 400;
  font-style: normal;
}
#combo {
  display: grid;
  grid-template-columns: repeat (2, 1fr);
}

#education {
  /* display: flex;
    justify-content: center; */
  width: 450px;
  height: 200px;
  color: #fad0f9;
  /* text-align: center; */
  /* margin-top: 70px; */
  /* font-family: "Poppins", sans-serif; */
  
  width: 200px;
  height: 200px;
  color: #fad0f9;
 
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
 margin-top: 3rem;
 margin-left: 30rem;
 margin-bottom: 10rem;
}
@media only screen and (max-width: 961px) {
 #data{
  margin-left: 15rem;
  height: 200px;
  gap:2px;
 }
 #ski{
  margin-top:20rem;
 margin-bottom: 20rem;
 }
 #work{
  padding-bottom:30rem;
 }
 #education{
    width:10%;
    margin-right:-5rem;
    gap: 2px;
    /* margin-left:2rem; */
    /* padding-bottom:10rem; */
    margin-right:-10rem;
    gap: 1px;
  }
 }
  #container{
    margin-left:0;
  }

@media (min-width:300px){
 
  #education{
    width:40%;
    
  }
}
@media (min-width:300px){
#edu,#year,#view{
  font-size: large;
  width:75%;
}
}

@media (min-width:300px){
  #skill {
    width:70%;
    height:50%;
  }
}
@media(min-width:300px){
  #level,#name{
    font-size: medium;
  }
}
#data{
  width:400px;
  /* margin-bottom: 200rem; */
}

 @media(max-width: 400px){
  #education{
    margin-bottom:250px;
  }
  #ski{
    margin-top:30rem;
    height:130vh;
  
  }
 }


@media (min-width: 1222px){
#data{

 display:grid;
 grid-template-columns: repeat (1,1fr );

}
}

#edu {
  margin-top: 50px;
}

#data {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  /* background-image: url('https://i.pinimg.com/originals/7d/d1/30/7dd1305bf92447d37e81c573440b2580.gif');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height:100vh */
        /* margin-left: 800px; */
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
 
  width:200px
  
}
#container {

  background-repeat: no-repeat;
  background-size: cover;
  width: 59%;
  height: 80vh;
  color: #fad0f9;
 
  border-radius: 10%;
  
  padding-top: 10px;
  /* font-family: "Poppins", sans-serif; */
  font-weight: 400;
  font-style: normal;
  margin-left:149px;
}

#skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
 
  gap: 20px;
  
  color: black;
  width: 100%;
  /* font-family: "Poppins", sans-serif; */
  font-weight: 400;
  font-style: normal;
  margin-right:2px;
  margin-left:10px;
  

}
#skill{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-right:2rem ;
}


#indication {
  display: flex;
  justify-content: flex-end;

}



#view {
  width: 500px;
  /* height: 300px; */
  width: 800px;
  border-radius:10%;
 
  font-style: normal;
  font-size: 18px;
 
  
}

#view,
#hide {
  border-left-color: black;
  color: #fad0f9;

  /* width:250px; */
  background-color: #91074a;
  
}

#caro,
#caros {
  background-color: #91074a;
  color: #91074a;
}

#caro,
#caros :active {
  background-color: #91074a;
}
#container-fluid {
  background-color: #ff00ff;
  padding-top: 100px;
 
}
/* .poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
} */
</style>