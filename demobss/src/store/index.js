import { createStore } from "vuex";

export default createStore({
  state: {
    navOn: true,
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
