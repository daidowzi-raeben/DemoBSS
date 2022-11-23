<template>
  <header>
    <div id="brand">
      <div id="ham" @click="openNav">≡</div>
      <div class="brand_name" @click="GoHome"><img :src="iconLogo" /></div>
    </div>
    <div id="menu" >
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
          <li class="menu_serch">
            <div>
              &nbsp;&nbsp;
              <input-component
                  :width="150"
                  :height="10"
                  :placeholder="'메뉴검색'"
                  :input-class="'class3'"
              />
              &nbsp;
              <img :src="iconSerch" />
            </div>
          </li>
          <li style="color: rgb(86,143,207); padding-left: 30px">
            <img :src="iconUser"/>
            홍길동님, 환영합니다.
          </li>
          <li class="menu_logout">
              <img :src="logoLogout" />
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import menu from "../../public/menu.json";
import {mapState} from 'vuex'
import InputComponent from "@/components/common/InputComponent";
export default {
  name: "Header",
  components: {InputComponent},
  data() {
    return {
      menuId: "cont_01",
      menuDepth1: [],
      iconLogo:require('../img/icon_logo_cloud.png'),
      iconSerch:require('../img/icon_small_search.png'),
      iconUser:require('../img/icon_user.png'),
      logoLogout:require('../img/logo_logout.png')
    };
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
.brand_name > img{
  margin-top: 9px;
  background-color: black;
  object-fit: cover;
  width: 70px;
  height: 20px;
}
.menu_serch{
  padding-left: calc(100% - 1100px);
  color: white;
}
.menu_serch img{
  width: 15px;
  height: 15px;
  margin-bottom:7px;
  object-fit: contain;
}
.menu_serch > div{
  margin-top: 10px;
  background-color: rgb(28,42,57);
  width: 200px;
  height: 20px;
  border-radius:3em;
}
.menu_logout img{
  margin-top:5px;
  width:40px;
  height:30px;
  object-fit: contain
}
.menu_user_name{
  color:#0074d9;
}
</style>
