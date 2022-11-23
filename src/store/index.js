import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    increaseCounter(state) {
      state.counter++
    },
    decreaseCounter(state) {
      state.counter--
    }
  },
  actions: {
    increaseCounter() {
      
    }
  },
  getters: {
  },
  modules: {
  }
})
