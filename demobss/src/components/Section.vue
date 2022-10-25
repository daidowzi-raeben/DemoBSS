<template>
  <section>
    <Nav v-show="navOn"
         @input="AddComponent"
    />
    <div class="wrap">
      <div class="menu_tab_line">
        <div v-for="(item, index) in compm" v-bind:key="index">
          <div
            :class="{
              tabon: this.comp === item.cmpnId,
              taboff: this.comp !== item.cmpnId,
              menu_tab: true,
            }"
            @click="ChageComponent(item.cmpnId, index)"
          >
            {{ item.menuNm }}
            <span class="tab_x" @click.prevent.stop="DeleteComponent(index)">x</span>
          </div>
        </div>

        <div class="menu_close">x</div>
      </div>

      <title-area :menuNm="menuNm" />
      <keep-alive class="view_wrap" :max="10" >
        <component v-bind:is="comp"></component>
      </keep-alive>
    </div>
  </section>
</template>

<script>
import TitleArea from "./common/TitleArea.vue";
import Nav from "./Nav.vue";
import ChageInfoRetv from "../pages/ChageInfoRetv.vue";
import ContMgt from "../pages/ContMgt.vue";
import dummy from "../pages/dummy.vue";
import CommonView from "../pages/CommonView.vue";
export default {
  name: "Section",
  components: { TitleArea, Nav, ChageInfoRetv, ContMgt, dummy, CommonView },
  data() {
    return {
      comp: "ChageInfoRetv",
      cur_num: 0,
      compm: [
        { cmpnId: "ChageInfoRetv", menuNm: "청구관리" },
        { cmpnId: "ContMgt", menuNm: "계약관리" },
        { cmpnId: "CommonView", menuNm: "공통" },
      ],
      compm2:[],
      test: "ChageInfoRetv",
    };
  },
  watch: {
    cur_num: function (newVal, oldVal) {
      this.comp = this.compm[newVal].cmpnId;
    },
  },
  computed: {
    navOn() {
      return this.$store.state.navOn;
    },
    menuNm() {
      return this.compm[this.cur_num].menuNm;
    },
  },
  methods: {
    ChageComponent: function (componentName, index) {
      this.comp = componentName;
      this.cur_num = index;
    },
    DeleteComponent: function (index) {
      if (index != 0) {
        this.compm.splice(index, 1);
        if (index == this.cur_num || (index < this.cur_num && index <= this.compm.length)) {
          this.cur_num = this.cur_num - 1;
        }
      }
    },
    AddComponent: function (param) {
      if(param.cmpnId!="" && param.cmpnId != null) {
        const st = this.compm.find(element => element.cmpnId === param.cmpnId);
        if (st != null) {
          var i = this.compm.indexOf(st);
          this.cur_num = i;
        } else {
          if (this.compm.length <= 10) {
            this.compm.push({cmpnId: param.cmpnId, menuNm: param.menuNm});
            this.cur_num = this.compm.length - 1;
          } else {
            console.log("10개를 넘었습니다.");
          }
        }
      }
    },
  },
};
</script>

<style scoped>
</style>
