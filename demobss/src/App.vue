<template>
  <div id="wrap">
    <Header />
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
