import { createStore } from "vuex";

// import createPersistedState from "vuex-persistedstate";

import L01Store from "@/store/modules/L01Store";
import L02Store from "@/store/modules/L02Store";
import L03Store from "@/store/modules/L03Store";
import L04Store from "@/store/modules/L04Store";
import L05Store from "@/store/modules/L05Store";

export default createStore({
  state: {          //변수 지정
    navOn: true,
    menuId: "L01",
    bookMark: ["고객 360 View"],
  },
  getters: {        //변수 getter
    getMenuId(state) {
      return state.menuId;
    },
  },
  mutations: {      //변수 setter
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
  actions: {},    //변수 setter 호출하는 곳
  modules: { //모듈 지정하는 곳
    L01Store,
    L02Store,
    L03Store,
    L04Store,
    L05Store
  },
  // plugins: [createPersistedState()],
});
