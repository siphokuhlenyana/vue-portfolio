import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe:null,
   skills:null,
   workExperience:null,
   projects:null,
   education:null,
   testimonials:null
   

  },
  getters: {
  },
  mutations: {
    setAboutMe(state ,hohoho){
      state.aboutMe=hohoho
    },
    setSkills(state ,hohoho){
      state.skills=hohoho
    },
    
    setWorkExperience(state ,hohoho){
      state.workExp  =hohoho
    },
    setProjects(state ,hohoho){
      state.projects=hohoho
    },
    setEducation(state ,hohoho){
      state.education=hohoho
    },
    setTestimonials(state,hohoho){
      state.testimonials=hohoho
    }
  },
  actions: {
    async getAbout(context){
      try{
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/portdata/data.json')
    let converted =await fetchedInfo.json()
    console.log("Data fetched successfully");
    console.log(converted);
    context.commit('setAboutMe',converted.aboutMe)
      } catch(e){
        alert("ERR_2.0");
      }
    },

    async getSkills(context){
      try{
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/portdata/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    console.log("Data fetched successfully ");
    context.commit('setSkills',converted.skills)
      } catch(e){
        alert("ERR_2.0");
      }
    },
    async getEducation(context){
      try{
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/portdata/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    console.log("Data fetched successfully ");
    context.commit('setEducation',converted.education)
      } catch(e){
        alert("ERR_2.0");
      }
    },
    async getProjects(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/portdata/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setProjects',converted.projects)
    },
    async getWorkExperience(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/portdata/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setWorkExperience',converted.workExp)
    },
    async getTestimonials(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/portdata/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setTestimonials',converted.testimonials)
    },
  },
  modules: {
  }
})
