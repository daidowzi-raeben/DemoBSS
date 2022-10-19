import { createStore } from "vuex";

export default createStore({
  state: {
    navOn: false,
  },
  getters: {},
  mutations: {
    setNavOn(state, value) {
      state.navOn = value;
    },
  },
  actions: {},
  modules: {},
});
