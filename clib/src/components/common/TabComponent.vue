<template>
  <div class="wrap">
    <div class="menu_tab_line">
      <div class="menu_tab_line_detail">
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
            <span v-if="this.comp ===item.menuId" class="tab_x_on" @click.prevent.stop="DeleteComponent(index)"
            >x</span>
            <span v-else class="tab_x_off" @click.prevent.stop="DeleteComponent(index)"
            >x</span>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(item, index) in compm2" :key="item">
      <component
          v-bind:is="this.compm2[index]"
          v-show="index === this.cur_num"
          @input="AddComponent"
      ></component>
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent, markRaw} from "vue";
export default {
  name: "TabComponent",
  data() {
    return {
      comp: "",     //컴포넌트 이름
      cur_num: 0,
      compm2:[],    //컴포넌트 주소를 넣는 배열
      compm:[],     //컴포넌트 값를 넣는 배열
      component:"", //컴포넌트 주소
    };
  },
  props:{
    menuType:{
      type:String,
      default:"Cont",
    },
    compArray:{     //컴포넌트배열
      type:Array,
      default:null,
    },
    compValue:null, //컴포넌트 주소
    compName:{      //컴포넌트 값
      type:String,
      default:null,
    }
  },
  watch: {
    cur_num: function (newVal, oldVal) {
      this.comp = this.compm[newVal].menuId;
      this.component = this.compm2[this.cur_num];
    },
  },
  created() {
    this.comp = this.compName;
    this.component = this.compValue;
    this.compm = this.compArray;
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
    ChageComponent: function (componentName, index) {
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
    AddComponent: function (param) {
      if (param.menuId != "" && param.menuId != null) {
        const st = this.compm.find(
            (element) => element.menuId === param.menuId
        );
        console.log(st);
        if (st != null) {
          var i = this.compm.indexOf(st);
          this.cur_num = i;


        } else {
          if (this.compm.length < 10) {
            this.compm.push(param);
            this.cur_num = this.compm.length - 1;
            this.component = markRaw(
                defineAsyncComponent(() =>
                    import("../" +this.menuType +"/" + this.compm[this.cur_num].cmpnId + ".vue")
                )
            );
            console.log("../" +this.menuType +"/" + this.compm[this.cur_num].cmpnId + ".vue");
            this.compm2.push(this.component);
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
.menu_tab_line .menu_tab_line_detail {
  width: 94%;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
}

.menu_tab_line .menu_tab_line_detail_on {
  width: calc(100% - 400px);
  overflow: hidden;
  padding-left: 258px;
  position: fixed;
  white-space: nowrap;
  flex-grow: 0;
  display: flex;
  z-index: 4;
}

div.tabon {
  /* 탭 선택되었을 때 */
  background-color: rgb(27,114,212);
  border-radius: 5px 5px 0 0;
  color: white;
}

div.taboff {
  /* 탭 선택x */
  background-color: rgb(184,208,235);
  border-right: rgb(113,156,205) 1px solid;
  color: black;
  border-radius: 5px 5px 0 0;
}
div.taboff:hover {
  background-color: rgb(204,228,250);
}
.menu_tab_line {
  height: 25px;
  width: 100%;
}

.menu_tab {
  float: left;
  width: 130px;
  height: inherit;
  padding: 0px 5px;
  line-height: 30px;
  cursor: pointer;
}
.menu_tab > span.tab_x_off {
  color: #444444;
  font-size: 15px;
  float: right;
  width: 15px;
  text-align: right;
}
.menu_tab > span.tab_x_off:hover{
  color: white;
}
.menu_tab > span.tab_x_on {
  color: white;
  font-size: 15px;
  float: right;
  width: 15px;
  text-align: right;
}
.menu_tab > span.tab_x_on:hover {
  color: black;
}
.menu_tab > span#tab_nm {
  display: block;
  float: left;
  width: 100px;
  font-size: 10pt;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.menu_tab > span.tab_x {
  color: #aeaeae;
  font-size: 15px;
  float: right;
}

.menu_tab_line .menu_tab_buttons {
  width: 5%;
  padding-top: 2px;
  float: right;
  display: flex;
}

.menu_tab_line .menu_button {
  float: right;
  color: #ffffff;
  padding: 0 10px;
  font-size: 20px;
  cursor: pointer;
  width: 5%;
  display: flex;
}
</style>