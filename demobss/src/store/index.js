import { createStore } from "vuex";

export default createStore({
  state: {
    navOn: true,
    menuId: "cont_01",
  },
  getters: {
    getMenuId(state) {
      return state.menuId;
    },
  },
  mutations: {
    setNavOn(state, value) {
      state.navOn = value;
    },
    setMenuId(state, value) {
      state.menuId = value;
    },
  },
  actions: {},
  modules: {},
});
