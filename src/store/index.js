import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    butype: 'All',
    allBu: null
  },
  mutations: {
    getButype (state, val) {
      state.butype = val
    },
    getallBu (state, budata) {
      state.allBu = budata
    }
  },
  actions: {
  },
  modules: {
  }
})
