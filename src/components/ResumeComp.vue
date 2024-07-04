<template lang="">
<div id="container-fluid">
  <h1 class="display-2 d-flex justify-content start" :style="{color:'#0a0406'}">Resume</h1>
  <div class="row">
    <div id="container" class="col">
      
        <h1  :style="{marginTop:'30px'}">Education</h1>
        <button id="view" v-if="createView === false" @click="createViewIf()" :style="{width:'150px' ,height:'30px',borderRadius:'10%'}">View Description</button>
           <button id="hide" v-if="createView" @click="createViewIf()" :style="{width:'150px' ,height:'30px',borderRadius:'10%',marginTop:'50px'}">Hide Description </button>
        <div id="data">
            <div id="education" v-for="education,  in educationData" :key="education.placeOfInstitution" :style="{borderWidth:'5px',borderColor:'#a300a3',
                borderStyle:'solid',borderRadius:'50%',
                backgroundImage:'url(https://www.right-to-education.org/sites/right-to-education.org/files/rm373batch13-081_0.jpg)',backgroundRepeat:'no repeat',backgroundSize:'cover'}">
                    <h3 id="edu">{{education.placeOfInstitution}} </h3>
                    <h2>{{education.year}}</h2>
            
           <div id="view" >
            
                <div v-show="createView" :style="{borderWidth:'5px',borderColor:'#a300a3',
                    borderStyle:'solid',
                    backgroundImage:'url(https://siphokuhlenyana.github.io/Vue_projectImages/education.jpg)',backgroundRepeat:'no repeat',backgroundSize:'cover',marginTop:'50px'}">
                <h5> {{education.description}}</h5>
            </div>
            
        </div>
        
        
        
    </div>
       <!-- <img id='agile' src="https://siphokuhlenyana.github.io/Vue_projectImages/Screenshot%202024-06-25%20092556.png" width='300px' height='300px'>      -->
        </div>
      </div>
    
      <div :style="{width:'30%',height:'102vh'}" class="col">
        <h1 class="display-2 mx-auto" :style="{color:'black',marginTop:'10px',paddingBottom:'15px'}">
        <div id="indication"><h2 :style="{color:'#91074a'}">   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chat-quote" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
  <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
</svg> Soft Skills </h2><h2 :style="{color:'#fad0f9'}"> Hard Skills</h2></div></h1>
     
        <div id="skills">
        <div id="skills" v-for="skill in skillsData" :key="skill.name"
        :style="{borderBottomColor:skill.type =='soft'? '#91074a':'#fad0f9',borderBottomStyle:'solid',}">
            <h4>{{skill.name}}</h4>
            <h6>{{skill.level}}</h6>
        </div> 
           </div>
       </div>
       </div>
      </div>

      
      <div :style="{backgroundColor:'#FF00FF',height:'74vh'}">
        <h1  :style="{marginTop:'20px',color:'#fad0f9'}" >Work Experience</h1>
        
        <!-- <div id="carouselExample" class="carousel slide">
        <div id="workExperience" v-for="workExp in workExpData" :key="workExp.placeOfWork">
            <h2>{{workExp.placeOfWork}}</h2
                ></div> 
    </div> -->

    <div id="carouselExample" class="carousel slide mx-auto" :style="{backgroundColor:'#FF00FF',borderColor:'#fad0f9',borderRadius:'5px',borderWidth:'4px',borderStyle:'solid',paddingTop:'10px',width:'400px'}">
  <div class="carousel-inner">
    <div class="carousel-item" :class="{active: workExp.id == 1}"  v-for="workExp in workExpData" :key="workExp.placeOfWork" :style="{backgroundColor:'#FF00FF'}">
      <img :src="workExp.contact.image" class="" alt="" width="200px" height="150px" >
      <h2>{{workExp.placeOfWork}}</h2>
      
      <p>{{workExp.description}}</p>
      <!-- <h3>{{workExp.contact.image}}</h3> -->
      <h3>{{workExp.year}}</h3>
      
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
<button
      type="button"
      class="btn btn-outline-secondary"
      :style="{ backgroundColor: '#fa5ee2' }"
    ><a href="https://siphokuhlenyana.github.io/Vue_projectImages/kuhle cv-1.docx" download> Download Resume</a></button
    ><br />
    
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
#combo {
  display: grid;
  grid-template-columns: repeat (2, 1fr);
}
/* #skool{
  width:400px;
} */
#education {
  /* display: flex;
    justify-content: center; */
  width: 300px;
  height: 200px;
  color: #fad0f9;
  /* text-align: center; */
  margin-top: 70px;
}

#edu {
  margin-top: 50px;
}

#data {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* background-image: url('https://i.pinimg.com/originals/7d/d1/30/7dd1305bf92447d37e81c573440b2580.gif');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height:100vh */
}

#container {
  background-image: url("https://siphokuhlenyana.github.io/Vue_projectImages/moonwalk.gif");
  background-repeat: no-repeat;
  background-size: cover;
  width: 62%;
  height: 140vh;
  color: #fad0f9;
  background-color: white;
  /* margin-top: 3%; */
  padding-top: 50px;
}

#skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  background-color: #ff00ff;
  color: black;
  width: 100%;
}

#indication {
  display: flex;
  justify-content: flex-end;
}

/* #agile {
  display: flex;
  justify-content: center;
  margin-top: 200px;
} */

/* #view {
  width: 300px;
  height: 300px;
} */

#view,
#hide {
  border-left-color: black;
  color: #fad0f9;
  background-color: #a300a3;
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
</style>