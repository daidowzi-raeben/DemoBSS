<template>
  <div id="wrap">
    <button style="
    position: absolute;
    top: 10px;
    left: 30px; z-index: 3"
            v-on:click="check_num"><img style="width: 20px; height: 20px; object-fit: fill;" src="@/img/icon_list.png"></button>
    <div style="position: absolute; top: 10px; left: 80px; z-index:3"><img style=" width: 70px; height: 30px; object-fit: fill;" src="@/images/logo_main.png"></div>
    <Header style="z-index: 2"/>
    <div style="
         position: absolute;
         top: 80px;
         " v-show="check==0"><Menu /></div>
    <Section />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu";
import Section from "./components/Section.vue";

export default {
  name: "App",
  components: {
    Header,
    Section,
    Menu,
  },
  data() {
    return {
      check : 0,

    }
  },
  methods :{
    check_num(){
      if(this.check==0)this.check=1;
      else this.check=0;
    }
  }
};
</script>

<style>
@import "./css/common.css";
</style>
