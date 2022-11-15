<template>
  <header>
    <div id="brand">
      <div id="ham" @click="openNav">≡</div>
      <div class="brand_name" @click="GoHome">ktds 영업전산시스템</div>
    </div>
    <div id="menu" :style=" !this.navOn ? 'width:100%;' : 'width: calc(100% + 97px );'">
      <div class="area">
        <ul>
          <li v-for="(menu, idx) in menuDepth1" :key="idx">
            <span
              @click="setMenuId(menu.menuId)"
              :class="[menuId == menu.menuId ? 'clicked' : '']"
            >
              {{ menu.menuNm }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import menu from "../../public/menu.json";
import {mapState} from 'vuex' 
export default {
  name: "Header",
  data() {
    return { menuId: "cont_01", menuDepth1: [] };
  },
  computed: {
    ...mapState(["navOn"]),
  },
  created() {
    this.menuDepth1 = menu.menu.filter((menu) => {
      return menu.upMenuId == null;
    });
  },
  methods: {
    GoHome() {
      this.$router.push("/");
    },
    openNav() {
      this.$store.commit("setNavOn", !this.$store.state.navOn);
    },
    setMenuId(val) {
      this.menuId = val;
      this.$store.commit("setMenuId", this.menuId);
      if (!this.$store.state.navOn) this.$store.commit("setNavOn", true);
    },
  },
};
</script>

<style scoped></style>
