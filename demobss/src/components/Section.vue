<template>
  <section>
    <Nav v-show="navOn" />
    <div class="wrap">
      <div style="display: inline-flex" v-for="(item,index) in compm" v-bind:key="index">
          <div  :class="{'test':this.comp ===item.file,'test2':this.comp!==item.file}" @click="ChageComponent(item.file,index)">{{item.value}}</div>
          <button @click="Com_delete(index)">X</button>
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
  components: { Nav, ChageInfoRetv, ContMgt,dummy, CommonView },
  data() {
    return {
      comp : 'ChageInfoRetv',
      cur_num:0,
      compm : [{file:'ChageInfoRetv',value:'청구관리'},
        {file:'ContMgt',value:'계약관리'},
        {file:'CommonView',value:'공통'},
      ],
      test : 'ChageInfoRetv'
    };
  },
  computed: {
    navOn() {
      return this.$store.state.navOn;
    },
  },
  methods:{
    ChageComponent: function (componentName,index){
      this.comp = componentName;
      this.cur_num = index;
    },
    Com_delete: function (index){
      if(index!=0) {
        this.compm.splice(index, 1);
        if(index==this.cur_num) {
          this.comp = this.compm[index - 1].file;
          this.cur_num = index-1;
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
