import { createStore } from "vuex";

export default createStore({
  state: {
    navOn: true,
    menuId: "L01",
    bookMark: ["고객 360 View"],
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
    addBookMark(state, thisMenu) {
      state.bookMark.push(thisMenu);
    },
    delBookMark(state, thisMenu) {
      state.bookMark.splice(state.bookMark.indexOf(thisMenu), 1);
    },
  },
  actions: {},
  modules: {},
});
