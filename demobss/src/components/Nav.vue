<template>
  <div id="nav">
    <div class="tab">tab</div>
    <div class="area">
      <div id="navTitle">{{ menuNm }}</div>
      <ul>
        <li v-for="(menu, idx) in menuList" :key="idx" :value="menu.menuId">
          {{ menu.menuNm }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import menu from "../../public/menu.json";

export default {
  name: "Nav",
  data() {
    return {
      menuNm: "",
      menuList: [],
      selectedMenu: "",
    };
  },
  computed: {
    getMenu() {
      return this.$store.getters.getMenuId;
    },
  },
  created() {
    this.menuNm = menu[this.$store.state.menuId].menuNm;
    this.menuList = menu[this.$store.state.menuId].subMenuList;
  },
  watch: {
    getMenu(val) {
      this.menuNm = menu[this.$store.state.menuId].menuNm;
      this.menuList = menu[this.$store.state.menuId].subMenuList;
    },
  },
  methods: {},
};
</script>

<style scoped></style>
