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
        alert(e);
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
        alert(e);
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
        alert(e);
      }
    },
    async getProjects(context){
      try{
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/portdata/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    console.log("Data fetched successfully");
    context.commit('setProjects',converted.projects)
      } catch(e){
        alert(e)
      }
    },
    async getWorkExperience(context){
      try{
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/portdata/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    console.log("Data fetched successfully");
    context.commit('setWorkExperience',converted.workExp)
      }catch(e){
        alert(e)
      }
    },
    async getTestimonials(context){
      try{
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/portdata/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    console.log("Data fetched successfully");
    context.commit('setTestimonials',converted.testimonials)
      }catch(e){
        alert(e)
      }
    },
  },
  modules: {
  }
})
