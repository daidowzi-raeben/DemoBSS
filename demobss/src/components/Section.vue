<template>
  <section>
    <Nav v-show="navOn" />
    <div class="wrap">
      <button :class="{'test':this.comp ==='ChageInfoRetv','test2':this.comp==='ContMgt'}" @click="ChageComponent('ChageInfoRetv')">청구관리</button>
      <button :class="{'test':this.comp ==='ContMgt','test2':this.comp==='ChageInfoRetv'}" @click="ChageComponent('ContMgt')">계약관리</button>
      <component v-bind:is="comp"></component>
    </div>
  </section>
</template>

<script>
import Nav from "./Nav.vue";
import ChageInfoRetv from "../pages/ChageInfoRetv.vue";
import ContMgt from "../pages/ContMgt";

export default {
  name: "Section",
  components: { Nav, ChageInfoRetv, ContMgt },
  data() {
    return {
      comp : 'ChageInfoRetv',
      test : 'ChageInfoRetv'
    };
  },
  computed: {
    navOn() {
      return this.$store.state.navOn;
    },
  },
  methods:{
    ChageComponent: function (componentName){
      this.comp = componentName;
    }
  }
};
</script>

<style scoped>
.test2{
  width: 100px;
  height: 30px;
  background-color: #444444;
  color: #ffffff;
}
.test{
  width: 100px;
  height: 30px;
  background-color: #ffffff;
  color: #444444;
}
</style>
