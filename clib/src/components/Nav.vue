<template>
  <div id="nav">
    <div class="tab">
      <div
        id="nav_tab1"
        :class="[tabIndex == 0 ? 'tabon' : 'taboff']"
        @click="tabIndex = 0"
      >
        <img
          src="../assets/img/arrow_left2.png"
          alt=""
          style="margin-top: 5px; width: 25px"
        />
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
      <div id="navTitle">{{ menuDepth1Nm }}</div>
      <ul id="depth2_list">
        <li v-for="(menu2, idx) in menuDepth2" :key="idx" :value="menu2.menuId">
          <div
            id="depth2"
            @click="setMenu2(menu2.menuId)"
            :style="[
              selectedMenuId == menu2.menuId
                ? { color: 'rgb(27,114,212)' }
                : '',
            ]"
          >
            <span v-if="selectedMenuId == menu2.menuId">
              <img :src="menuIcon1"
            /></span>
            <span v-else><img :src="menuIcon3" /></span>
            {{ menu2.menuNm }}
          </div>
          <ul id="depth3_list" v-if="selectedMenuId == menu2.menuId">
            <li
              id="depth3"
              v-for="(menu3, idx) in menuDepth3"
              :key="idx"
              :value="menu3.menuId"
              @click="setCmpn(menu3)"
            >
              {{ menu3.menuNm }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="area" v-else>
      <div id="navTitle">즐겨찾기</div>
      <ul id="depth2_list">
        <li
          v-for="staredMenu in bookMark"
          :key="staredMenu"
          :value="staredMenu"
        >
          {{ staredMenu }}
        </li>
        <!-- <li v-for="(menu2, idx) in menuDepth2" :key="idx" :value="menu2.menuId">
          <div id="depth2" @click="setMenu2(menu2.menuId)"  :style="[ selectedMenuId == menu2.menuId  ? { 'color': 'rgb(27,114,212)' } : '']" >
            <span v-if="selectedMenuId == menu2.menuId"> <img :src="menuIcon1" /></span>
            <span v-else><img :src="menuIcon3" /></span>
            {{ menu2.menuNm }}
          </div> -->
      </ul>
    </div>
  </div>
</template>

<script>
import menu from "../../public/menu.json";
import { mapState } from "vuex";

export default {
  name: "Nav",
  props: {
    bookmarkMenu: String,
  },
  data() {
    return {
      menuDepth1Nm: "",
      menuDepth2: [],
      menuDepth3: [],
      selectedMenuId: "L01",
      tabIndex: 0,
      menuIcon1: require("../assets/img/menu_type_1.png"),
      menuIcon2: require("../assets/img/menu_type_2.png"),
      menuIcon3: require("../assets/img/menu_type_3.png"),
    };
  },
  computed: {
    ...mapState(["bookMark"]),
    getMenu() {
      return this.$store.getters.getMenuId;
    },
  },
  created() {
    this.menuDepth1Nm = menu.menu.filter((menu) => {
      return menu.menuId == this.$store.state.menuId;
    })[0].menuNm;
    this.menuDepth2 = menu.menu.filter((menu) => {
      return menu.upMenuId == this.$store.state.menuId;
    });
    this.menuDepth3 = menu.menu.filter((menu) => {
      return menu.upMenuId == this.selectedMenuId;
    });
  },
  watch: {
    getMenu() {
      this.menuDepth1Nm = menu.menu.filter((menu) => {
        return menu.menuId == this.$store.state.menuId;
      })[0].menuNm;
      this.menuDepth2 = menu.menu.filter((menu) => {
        return menu.upMenuId == this.$store.state.menuId;
      });
    },
    selectedMenuId(val) {
      this.menuDepth3 = menu.menu.filter((menu) => {
        return menu.upMenuId == val;
      });
    },
  },
  methods: {
    setMenu2(val) {
      if (this.selectedMenuId == val) this.selectedMenuId = "";
      else this.selectedMenuId = val;
    },
    setCmpn(val) {
      this.$emit("emitValue", val);
    },
  },
};
</script>

<style scoped>
#nav {
  padding-top: 17px;
  position: fixed;
  height: 100%;
  z-index: 6;
}
img {
  width: 20px;
  height: 20px;
}
#nav > .tab {
  background-color: rgb(113, 156, 205);
  width: 258px;
  height: 28px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}

#nav > .tab > #nav_tab1 {
  width: 50%;
  height: 30px;
  float: left;
  line-height: 28px;
  cursor: pointer;
  border-radius: 10px 10px 0 0;
}

#nav > .tab > #nav_tab2 {
  width: 50%;
  height: 30px;
  float: left;
  line-height: 28px;
  cursor: pointer;
  border-radius: 10px 10px 0 0;
}

#nav > .tab .tabon {
  /* 탭 선택되었을 때 */
  background-color: rgb(231, 231, 231);
  color: rgb(0, 0, 0);
}

#nav > .tab .taboff {
  /* 탭 선택x */
  background-color: rgb(72, 87, 104);
  color: rgb(255, 255, 255);
}

#nav > .area {
  border-right: rgb(229, 231, 234) solid 1px;
  width: 223px;
  padding: 33px 0 0 35px;
  height: 80vh;
  background-color: white;
  overflow: auto;
}

#nav > .area > #navTitle {
  font-size: 16pt;
  padding: 10px 15px;
  font-weight: bold;
}

#nav > .area > ul#depth2_list {
  display: grid;
}

#nav > .area > ul#depth2_list > li #depth2 {
  padding: 10px 15px;
  font-size: 12pt;
  font-weight: bold;
  color: #000;
  cursor: pointer;
}

#nav > .area > ul > li #depth2:hover {
  color: rgb(27, 114, 212) !important;
}
#nav > .area > ul > li #depth2:hover > img {
  content: url("../assets/img/menu_type_1.png");
}

#nav > .area > ul#depth2_list > li > ul#depth3_list {
  display: grid;
}

#nav > .area > ul#depth2_list > li > ul#depth3_list > li#depth3 {
  float: left;
  font-size: 10pt;
  padding: 0 10px 10px 40px;
  color: #000;
  cursor: pointer;
}

#nav > .area > ul#depth2_list > li > ul#depth3_list > li#depth3:hover {
  color: rgb(27, 114, 212);
}
</style>
