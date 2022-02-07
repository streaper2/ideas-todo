import { createStore } from 'vuex'

export default createStore({
  state: {
    // on charge les données du local storage, si il y en a pas on initialise un tableau vide
    ideas: JSON.parse(localStorage.getItem('ideas')) || [],
  },
  mutations: {
    CREATE_IDEAS(state, payload){
      //on crée un id avec la date du jour
      const id = Date.now();
      //on push dans le tableau les données du payload
      state.ideas.push({
        id,
        title: payload.title,
        description: payload.description,
        done: false
      });
      //on sauvegarde dans le local storage
      localStorage.setItem("ideas", JSON.stringify(state.ideas) );
      
    },
    DELETE_IDEAS(state, payload){
      console.log("MUTATION / delete idea");
      let index = state.ideas.findIndex(idea => idea.id === payload);
      state.ideas.splice(index, 1);
      localStorage.setItem("ideas", JSON.stringify(state.ideas) );
    },
    DONE_IDEAS(state, payload){
      console.log("MUTATION / done idea");
      let index = state.ideas.findIndex(idea => idea.id === payload);
      state.ideas[index].done = true;
      localStorage.setItem("ideas", JSON.stringify(state.ideas) );
    },
  },
  actions: {
    createIdea( {commit} , payload){
      console.log("ACTION / create idea");
      commit('CREATE_IDEAS', payload);
    },
    deleteIdea( {commit} , payload){
      console.log("ACTION / delete idea");
      commit('DELETE_IDEAS', payload);
    },
    doneIdea({commit}, payload){
      console.log("ACTION / done idea");
      commit('DONE_IDEAS', payload);
    }
  },
  getters: {
    allIdeas(state){
      const allIdeas = Object.keys(state.ideas).map(key => state.ideas[key]);
      return allIdeas;
    },
    thisIdea: state => id => {
      return state.ideas.find(idea => idea.id === id)
    },
    ideasDones: state => {
      return state.ideas.filter(idea => idea.done)
    },
    ideasNotDone: state => {
      return state.ideas.filter(idea => !idea.done)
    },
  },
  modules: {
  }
})
