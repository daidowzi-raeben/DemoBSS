<template>
  <div class="title_area" :style="!this.navOn ? 'margin-left:1.3%;' : ''">
    <label
      :class="[stateOfBookMark ? 'bookMarkIcon' : 'icon']"
      @click="clickBookMark()"
    />
    <label style="display: inline-block"> {{ currentMenu.menuNm }} </label>
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";
import menu from "../../../public/menu.json";
import { mapMutations, mapState } from "vuex";

export default {
  components: { ButtonComponent },
  name: "TitleArea",
  data() {
    return {
      menuDepth2: {},
    };
  },
  props: {
    currentMenu: Object,
    stateOfBookMark: Boolean,
  },
  watch: {
    currentMenu() {
      this.menuDepth2 = menu.menu.filter((menu) => {
        return menu.menuId == this.currentMenu.upMenuId;
      })[0];
    },
  },
  methods: {
    ...mapMutations(["addBookMark", "delBookMark"]),
    clickBookMark() {
      if (this.stateOfBookMark) {
        this.delBookMark(this.currentMenu.menuNm);
        this.$emit("stateOfBookMark", false);
      } else {
        this.addBookMark(this.currentMenu.menuNm);
        this.$emit("stateOfBookMark", true);
      }
    },
  },
  computed: {
    navOn() {
      return this.$store.state.navOn;
    },
  },
};
</script>

<style scoped>
.title_area {
  overflow: hidden;
  margin: 10px 0 15px 0;
  display: flex;
  align-items: center;
}
.bookMarkIcon {
  height: 25px;
  width: 25px;
  content: url(../../assets/img/bookmarkedstar.png);
  margin-right: 8px;
  cursor: pointer;
}
.icon {
  height: 25px;
  width: 25px;
  content: url(../../assets/img/star.png);
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
</style>
