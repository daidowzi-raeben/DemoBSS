<template>
  <div class="title_area" :style=" !this.navOn ? 'margin-left:1.3%;':''" >
    <label class="icon"> </label>    <!-- 클릭 시, 즐겨찾기 method 적용해야함 -->
    <label style="display:inline-block;"> {{ currentMenu.menuNm }} </label>
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
  created() {},
  watch: {
    currentMenu() {
      this.menuDepth2 = menu.menu.filter((menu) => {
        return menu.menuId == this.currentMenu.upMenuId;
      })[0];
    },
  },
  methods: {},
  computed:{
    navOn() {
      return this.$store.state.navOn;
    },}
};
</script>

<style scoped>
.title_area {
  overflow: hidden;
  margin: 10px 0 15px 0;
  display: flex;
  align-items: center;
}

.icon {
  height: 25px;
  width: 25px;
  content: url(../../img/star.png);
  margin-right: 8px;
  cursor: pointer;
}

.title_area h1 {
  margin-bottom: 20px;
  display: inline-block;
  color: #949494;
}

.title_area label {
  color: #000;
  font-size: 18pt;
  font-weight: bold;
}
/* 
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
} */
</style>
