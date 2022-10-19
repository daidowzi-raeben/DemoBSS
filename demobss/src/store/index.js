import { createStore } from "vuex";

export default createStore({
  state: {
    navOn: true,
    menuId: "menuCont",
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
