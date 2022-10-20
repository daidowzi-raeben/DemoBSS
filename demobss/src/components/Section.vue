<template>
  <section>
    <Nav v-show="navOn" />
    <div class="wrap">
      <div class="menu_tab_line">
        <div v-for="(item, index) in compm" v-bind:key="index">
          <div
            :class="{
              'tabon': this.comp === item.file,
              'taboff': this.comp !== item.file,
              'menu_tab' : true
            }"
            @click="ChageComponent(item.file, index)"
          >
            {{ item.value }}
            <span class="tab_x" @click="Com_delete(index)">x</span>
          </div>
        </div>
      </div>
      <button @click="com_add">추가</button>
      <keep-alive>
        <component v-bind:is="comp"></component>
      </keep-alive>
    </div>
  </section>
</template>

<script>
import Nav from "./Nav.vue";
import ChageInfoRetv from "../pages/ChageInfoRetv.vue";
import ContMgt from "../pages/ContMgt.vue";
import dummy from "../pages/dummy.vue";
import CommonView from "../pages/CommonView.vue";
export default {
  name: "Section",
  components: { Nav, ChageInfoRetv, ContMgt, dummy, CommonView },
  data() {
    return {
      comp : 'ChageInfoRetv',
      cur_num:0,
      compm : [{file:'ChageInfoRetv',value:'청구관리'},
        {file:'ContMgt',value:'계약관리'},
        {file:'CommonView',value:'공통'},
      ],
      test: "ChageInfoRetv",
    };
  },
  watch : {
    cur_num :function (newVal, oldVal){
      this.comp = this.compm[newVal].file;
    },
  },
  computed: {
    navOn() {
      return this.$store.state.navOn;
    },
  },
  methods: {
    ChageComponent: function (componentName, index) {
      this.comp = componentName;
      this.cur_num = index;
      console.log(this.cur_num);
    },
    Com_delete: function (index) {
      if (index != 0) {
        this.compm.splice(index, 1);
        if (index == this.cur_num || (index < this.cur_num && index <= this.compm.length)) {
          console.log(index);
          console.log(this.cur_num);
          this.cur_num = this.cur_num  - 1;
        }


      }
    },
    com_add: function (){
      this.compm.push({file:'dummy',value:'더미'});
    }
  }
};
</script>

<style scoped>
</style>
