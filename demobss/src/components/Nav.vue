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
      <div id="navTitle">{{ menuDepth1Nm }}</div>
      <ul id="depth2_list">
        <li v-for="(menu2, idx) in menuDepth2" :key="idx" :value="menu2.menuId">
          <div id="depth2" @click="setMenu2(menu2.menuId)">
            {{ selectedMenuId == menu2.menuId ? "- " : "+" }}
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
    <div class="area" v-else></div>
  </div>

</template>

<script>
import menu from "../../public/menu.json";

export default {
  name: "Nav",
  data() {
    return {
      menuDepth1Nm: "",
      menuDepth2: [],
      menuDepth3: [],
      selectedMenuId: "cont_01_01",
      tabIndex: 0,
    };
  },
  computed: {
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
      console.log(val);
      this.$emit('input',val);
    },
  },
};
</script>

<style scoped>

#nav {
  border-right: #afafaf solid 1px;
}

#nav > .tab {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}

#nav > .tab > #nav_tab1 {
  width: 49.7%;
  height: 30px;
  float: left;
  cursor: pointer;
}

#nav > .tab > #nav_tab2 {
  width: 49.7%;
  height: 30px;
  float: left;
  cursor: pointer;
}

#nav > .tab .tabon {
  /* 탭 선택되었을 때 */
  background-color: #ffffff;
  color: #444444;
}

#nav > .tab .taboff {
  /* 탭 선택x */
  background-color: #444444;
  color: #aeaeae;
}

#nav > .area {
  width: 245px;
  padding: 70px 0 0 0;
}

#nav > .area > #navTitle {
  font-size: 20px;
  padding: 10px 15px;
  font-weight: 600;
}

#nav > .area > ul#depth2_list {
  display: grid;
}

#nav > .area > ul#depth2_list > li #depth2 {
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 600;
  color: #606060;
  cursor: pointer;
}

#nav > .area > ul > li #depth2:hover {
  color: #2dbdb6 !important;
}

#nav > .area > ul#depth2_list > li > ul#depth3_list {
  display: grid;
}

#nav > .area > ul#depth2_list > li > ul#depth3_list > li#depth3 {
  float: left;
  padding: 10px 15px 10px 40px;
  font-weight: 600;
  color: #949494;
  cursor: pointer;
}

#nav > .area > ul#depth2_list > li > ul#depth3_list > li#depth3:hover {
  color: #000000;
  background-color: #dcdcdc;
}
</style>
