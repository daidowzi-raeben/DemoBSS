<template>
  <header>
    <div id="brand">
      <div id="ham" @click="openNav">≡</div>
      <div class="brand_name" @click="GoHome"><img :src="iconLogo" /></div>
    </div>
    <div id="menu" >
      <div class="area">
        <div>
          <span v-for="(menu, idx) in menuDepth1" :key="idx">
            <span
              @click="setMenuId(menu.menuId)"
              :class="[menuId == menu.menuId ? 'clicked' : '']"
            >
              {{ menu.menuNm }}
            </span>
            <span v-show="menu.menuNm !='공통'" style="color: rgb(67,111,162)">|</span>
          </span>
          <span class="menu_search">
            <div>
              &nbsp;&nbsp;
              <input-component
                :width="150"
                :height="10"
                :placeholder="'메뉴검색'"
                :input-class="'input-type3'"
                :value="menuSearch"
                v-model="menuSearch"/>
              &nbsp;
              <img :src="iconSerch"  />
            </div>
          </span>
          <span class="headerUserInfo">
            <img :src="iconUser"/>
            홍길동님, 환영합니다.
          </span>
          <span class="menu_logout">
              <img :src="logoLogout" />
          </span>
        </div>
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
      menuId: "L01",
      menuSearch:"",
      menuDepth1: [],
      iconLogo:require('../assets/img/icon_logo_cloud.png'),
      iconSerch:require('../assets/img/search_icon.svg'),
      iconUser:require('../assets/img/icon_user2.png'),
      logoLogout:require('../assets/img/logo_logout.png')
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
  margin-top: 5px;
  background-color: rgb(113,156,205);
  object-fit: cover;
  width: 100px;
  height: 30px;
}
.menu_search{
  padding-left: calc(100% - 1140px);
  color: rgb(231,231,231);
}
.menu_search img{
  width: 15px;
  height: 15px;
  padding-right: 6px;
  object-fit: contain;
}
.menu_search > div{
  margin-top: 4px;
  background-color: rgb(184,208,235);
  width: 200px;
  height: 35px;
  border-radius:3em;
}
.menu_search > div > input{
  padding-left:20px; 
  width:135px; 
  color:black;
}
.menu_logout img{
  margin:5px 0 0 10px;
  width:40px;
  height:30px;
  object-fit: contain
}
.menu_user_name{
  color:#0074d9;
}
.area > div > span {
  height: 40px;
}
.headerUserInfo{
  color:white; 
  padding-left: 30px; 
  display:flex; 
  align-content: center;
}
.headerUserInfo > img {
  margin:auto; 
  width:30px; 
  height:20px;
  object-fit: contain;
}
</style>
