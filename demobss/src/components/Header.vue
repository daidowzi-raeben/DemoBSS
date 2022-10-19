<template>
  <header>
    <div id="brand">
      <div id="ham" @click="openNav">=</div>
      <div class="brand_name">ktds 영업전산시스템</div>
    </div>
    <div id="menu">
      <div class="area">
        <ul>
          <li>
            <span
              @click="setMenuId(1, 'menuCont')"
              :class="[menuId == 1 ? 'clicked' : '']"
            >
              계약
            </span>
          </li>
          <li>
            <span
              @click="setMenuId(2, 'menuCont')"
              :class="[menuId == 2 ? 'clicked' : '']"
              >고객</span
            >
          </li>
          <li>
            <span
              @click="setMenuId(3, 'menuBill')"
              :class="[menuId == 3 ? 'clicked' : '']"
              >청구</span
            >
          </li>
          <li>
            <span
              @click="setMenuId(4, 'menuCont')"
              :class="[menuId == 4 ? 'clicked' : '']"
              >영업관리</span
            >
          </li>
          <li>
            <span
              @click="setMenuId(5, 'menuCont')"
              :class="[menuId == 5 ? 'clicked' : '']"
              >정산관리</span
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return { menuId: 1 };
  },
  computed: {},
  methods: {
    openNav() {
      this.$store.commit("setNavOn", !this.$store.state.navOn);
    },
    setMenuId(val, menuNm) {
      this.menuId = val;
      this.$store.commit("setMenuId", menuNm);
      if (!this.$store.state.navOn) this.$store.commit("setNavOn", true);
    },
  },
};
</script>

<style scoped></style>
