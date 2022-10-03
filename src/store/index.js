import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabname:'upload'
  },
  mutations: {
    changeTabname(state, val){
      state.tabname = val
    }
  },
  actions:{
    callChangeTabname({state, commit}, {tabname}){
      commit('changeTabname', tabname)
    }
  },
  getters:{
    getTabname(state) {
      return `${state.tabname}`
    }
  }
})
