import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    user: {
      first_name: 'Jon',
      age: 24,
      email: 'jon@snow.com'
    }
  },
  getters: {
  },
  mutations: {
    saveFirstName(state, payload) {
      state.user.first_name = payload;
    },
    saveAge(state, payload) {
      state.user.age = payload;
    },
    saveEmail(state, payload) {
      state.user.email = payload;
    }
  },
  actions: {
    saveFirstName(context, payload) {
      context.commit('saveFirstName', payload);
    },
    saveAge(context, payload) {
      context.commit('saveAge', payload);
    },
    saveEmail(context, payload) {
      context.commit('saveEmail', payload);
    }
  },
  modules: {
  }
})
