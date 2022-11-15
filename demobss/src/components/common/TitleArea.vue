<template>
  <div class="title_area">
    <div class="icon"></div>
    <h1>
      {{ menuDepth1.menuNm }} > {{ menuDepth2.menuNm }} >
      <span> {{ currentMenu.menuNm }} [{{ currentMenu.menuId }}]</span>
    </h1>
    <div class="right">
      <button-component
        :btnClass="'btnClass1'"
        :btnName="'홈화면설정'"
      ></button-component>
      <button-component
        :btnClass="'btnClass1'"
        :btnName="'화면초기화'"
      ></button-component>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";
import menu from "../../../public/menu.json";

export default {
  components: { ButtonComponent },
  name: "TitleArea",
  data() {
    return {
      menuDepth1: {},
      menuDepth2: {},
    };
  },
  props: {
    currentMenu: Object,
  },
  created() {
    this.menuDepth2 = menu.menu.filter((menu) => {
      return menu.menuId == this.currentMenu.upMenuId;
    })[0];

    this.menuDepth1 = menu.menu.filter((menu) => {
      return menu.menuId == this.menuDepth2.upMenuId;
    })[0];
  },
  watch: {
    currentMenu() {
      this.menuDepth2 = menu.menu.filter((menu) => {
        return menu.menuId == this.currentMenu.upMenuId;
      })[0];

      this.menuDepth1 = menu.menu.filter((menu) => {
        return menu.menuId == this.menuDepth2.upMenuId;
      })[0];
    },
  },
  methods: {},
};
</script>

<style scoped>
 .title_area {
  overflow: hidden;
  width:91%;
  background-color: #ffffff;
  height: 30px;
  margin: 10px 0 5px 0;
  font-size: 15px;
  padding: 0 10px;
}

.title_area > .icon {
  float: left;
  width: 15px;
  height: 15px;
  background-color: #707070;
  border-radius: 30px;
  margin: 3px;
}

.title_area h1 {
  margin-bottom: 20px;
  display: inline-block;
  color: #949494;
}

.title_area span {
  color: #444444;
}

.title_area > .right {
  float: right;
  margin: 0 15px;
}

 .title_area > .right .home_menu {
  float: left;
  padding: 5px;
  margin-right: 10px;
  background-color: #707070;
  color: #aeaeae;
  cursor: pointer;
}

 .title_area > .right .view_reset {
  float: right;
  padding: 5px;
  background-color: #707070;
  color: #aeaeae;
  cursor: pointer;
}
</style>
