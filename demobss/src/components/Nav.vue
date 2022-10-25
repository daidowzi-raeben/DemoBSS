<template>
  <div id="nav">
    <div class="tab">
      <div
        id="nav_tab1"
        :class="[tabIndex == 0 ? 'tabon' : 'taboff']"
        @click="tabIndex = 0"
      >
        . . .
      </div>
      <div
        id="nav_tab2"
        :class="[tabIndex == 1 ? 'tabon' : 'taboff']"
        @click="tabIndex = 1"
      >
        ★
      </div>
    </div>
    <div class="area" v-if="tabIndex == 0">
      <div id="navTitle">{{ menuNm }}</div>
      <ul>
        <li v-for="(menu, idx) in menuList" :key="idx" :value="menu.menuId" @click="moveToComponent(menu)" >
          {{ menu.menuNm }}
        </li>
      </ul>
    </div>
    <div class="area" v-else></div>
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
      tabIndex: 0,
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
  methods: {
    moveToComponent(param){
      this.$emit('input',param);
    }
  },
};
</script>

<style scoped></style>
