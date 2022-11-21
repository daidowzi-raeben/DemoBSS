<template>
  <header>
    <div id="brand">
      <div id="ham" @click="openNav">≡</div>
      <div class="brand_name" @click="GoHome">ktds 영업전산시스템</div>
    </div>
    <div id="menu" :style=" !this.navOn ? 'width:100%;' : 'width: calc(100% + 45px ); '">
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

<style scoped>
header {
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 20;


  /* position: relative;
  width: 100%;
  z-index: 20;
  background-color: #fff; */
}

#brand {
  position: relative;
  float: left;
  width: 245px;
}

#brand > .brand_name {
  float: left;
  font-size: 15px;
  color: #ffffff;
  line-height: 45px;
  cursor: pointer;
}

#brand > #ham {
  float: left;
  font-size: 30px;
  line-height: 39px;
  padding: 0 15px;
  color: #ffffff;
  cursor: pointer;
}

#menu {
  background-color: #2dbdb6;
  border-top: #cfcfcf solid 1px;
  height: 45px;
}
#menu > .area {
  width: 80%;
  z-index: 2;
  margin: 0 auto;
}
#menu > .area > ul {
  height: 35px;
  overflow: hidden;
}

#menu > .area > ul > li {
  float: left;
  padding: 0 15px;
  font-size: 13px;
  color: #ffffff;
  font-weight: 500;
  line-height: 40px;
  cursor: pointer;
}

#menu > .area > ul > li > span {
  padding: 2px 14px;
}

#menu > .area > ul > li > span.clicked {
  border: #ffffff solid 1px;
  border-radius: 50px;
  margin: -1px;
}

#menu > .area > ul > li > span:hover {
  border: #ffffff solid 1px;
  border-radius: 50px;
  margin: -1px;
}


</style>
