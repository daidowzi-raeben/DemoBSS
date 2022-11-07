<template>
  <div class="menu_tab_line">
  <div :class="menu_tab_class">
    <div v-for="(item, index) in compm" v-bind:key="index">
      <div
          :class="{
              tabon: this.comp === item.menuId,
              taboff: this.comp !== item.menuId,
              menu_tab: true,
            }"
          @click="ChageComponent(item.menuId, index)"
      >
            <span id="tab_nm">
              {{ item.menuNm }}
            </span>
        <span class="tab_x" @click.prevent.stop="DeleteComponent(index)">x</span>
      </div>
    </div>
  </div>
  </div>
  <div class="menu_tab_buttons">
    <ButtonComponent :btnClass="'btnLeftImgClass'" @click="moveScrollLeft"/>
    <ButtonComponent :btnClass="'btnRightImgClass'" @click="moveScrollRight"/>
    <ButtonComponent :btnClass="'btnDeleteImgClass'" @click="AllDeleteComponent"/>
  </div>
</template>

<script>
import {defineAsyncComponent, markRaw} from "vue";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
export default {
  name: "TabComponent",
  components:{
    ButtonComponent,
  },
  data(){
    return{
      comp: "bill_01_01_01",
      cur_num: 0,
      component: markRaw(
          defineAsyncComponent(() => import("../../pages/ChageInfoRetv.vue"))
      ),
    }
  },
  props:{
    menu_tab_class:null,
    compm:[],
    compm2:[],
  },
  watch: {
    cur_num: function (newVal, oldVal) {
      this.comp = this.compm[newVal].menuId;
      this.component = this.compm2[this.cur_num];
      this.$emit('setComp',this.comp);
      this.$emit('setCurNum',newVal);
    },
    compm:function(newVal,oldVal){
      this.$emit('setCompm',newVal);
    },
    compm2:function(newVal,oldVal){
      this.$emit('setCompm2',newVal);
    },
  },
  created() {
    this.compm2.push(this.component);
  },
  computed: {
    navOn() {
      return this.$store.state.navOn;
    },
    currentMenu() {
      return this.compm[this.cur_num];
    },
  },
  methods: {
    moveScrollRight: function () {
      let menuTabScroll = document.querySelector(".menu_tab_line_detail_on");
      menuTabScroll.scrollLeft += 100;
    },
    moveScrollLeft: function () {
      let menuTabScroll = document.querySelector(".menu_tab_line_detail_on");
      menuTabScroll.scrollLeft -= 100;
    },
    setComp:function (param){
      this.comp=param;
    },
    setCompm: function(param){
      this.compm = param;
    },
    setCurNum:function (param){
      this.cur_num = param;
    },
    setCompm2:function (param){
      this.compm2 = param;
    },
    ChageComponent: function (componentName, index) {
      console.log(this.index);
      this.comp = componentName;
      this.cur_num = index;
    },
    AllDeleteComponent() {
      var component_length = this.compm.length;
      this.compm.splice(1, component_length - 1);
      this.compm2.splice(1, component_length - 1);
      this.cur_num = 0;
    },
    DeleteComponent: function (index) {
      if (index != 0) {
        this.compm.splice(index, 1);
        this.compm2.splice(index, 1);
        if (
            index == this.cur_num ||
            (index < this.cur_num && index <= this.compm.length)
        ) {
          this.cur_num = this.cur_num - 1;
        }
      }
    },
  }
}

</script>



<style scoped>
.menu_tab_line {
  height: 30px;
  display: inline-flex;
  width: 100%;
  background-color: #5ad3cd;
  /* overflow-x: scroll; */
}
div.tabon {
  /* 탭 선택되었을 때 */
  background-color: #ffffff;
  color: #444444;
}

div.taboff {
  /* 탭 선택x */
  background-color: #707070;
  color: #aeaeae;
  border-right: #343434 solid 1px;
}
.menu_tab {
  float: left;
  width: 160px;
  height: 30px;
  padding: 0 10px;
  line-height: 30px;
  cursor: pointer;
}

.menu_tab > span#tab_nm {
  display: block;
  float: left;
  width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.menu_tab > span.tab_x {
  color: #aeaeae;
  font-size: 20px;
  float: right;
}

.menu_tab_line .menu_tab_buttons {
  width: 5vw;
  padding-top: 2px;
  float: right;
  display: flex;
}
</style>