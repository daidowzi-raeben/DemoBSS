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

<style scoped></style>
