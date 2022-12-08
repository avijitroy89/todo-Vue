import { createStore } from "vuex";

export default createStore({
  state: {    
    projectList: []
  },
  mutations: {
    UPDATE_PROJECT_STATUS(state, payload) {
      let item = state.projectList.filter(e => e.id === payload);
      if(item[0].completed){
        item[0].completed = false
      }else{        
        item[0].completed = true
      }
    },
    DELETE_PROJECT(state, payload) {
      let item = state.projectList.findIndex(x => x.id === payload);    
      state.projectList.splice(item, 1);
    },
    ADD_PROJECT(state, payload) {
      state.projectList.push(payload);
      console.log(state)
    },
  },
  getters: {
    getProjectList: (state) => {
      return state.projectList
    }
  },
  actions: {},
  modules: {},
});
