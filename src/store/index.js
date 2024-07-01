import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe:null,
   skills:null,
   workExperience:null,
   projects:null,
   education:null,
   

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
    }
  },
  actions: {
    async getAbout(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/portdata/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setAboutMe',converted.aboutMe)
    },
    async getSkills(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/portdata/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setSkills',converted.skills)
    },
    async getEducation(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/portdata/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setEducation',converted.education)
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
    }
  },
  modules: {
  }
})
