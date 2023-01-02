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
      <div v-show="index === this.cur_num" >
      <component
          v-bind:is="this.compm2[index]"
          @input="AddComponent"
      ></component>
      </div>
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
      cur_num: 0,   //현재 컴포넌트의 index
      compm2:[],    //컴포넌트 주소를 넣는 배열
      compm:[],     //컴포넌트 값를 넣는 배열
      component:"", //컴포넌트 주소
    };
  },
  props:{
    menuType:{        //AddComponent의 defineAsyncComponent에서 컴포넌트를 호출할 위치를 지정하기 위한 변수
      type:String,
      default:"Cont",
    },
    compArray:{     //컴포넌트배열
      type:Array,
      default:null,
    },
    compValue:null, //컴포넌트 주소
    compName:{      //컴포넌트의 menuId
      type:String,
      default:null,
    }
  },
  watch: {
    cur_num: function (newVal, oldVal) {      //탭의 이동을 감지하여 컴포넌트를 변경하는 함수
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
    ChageComponent: function (componentName, index) {             //클릭된 컴포넌트로 이동
      this.comp = componentName;
      this.cur_num = index;
    },
    AllDeleteComponent() {                                        //탭을 전체 삭제
      var component_length = this.compm.length;
      this.compm.splice(1, component_length - 1);
      this.compm2.splice(1, component_length - 1);
      this.cur_num = 0;
    },
    DeleteComponent: function (index) {                     // 탭을 삭제하는 함수.
      if (index != 0) {
        this.compm.splice(index, 1);              //splic를 통해 현재 삭제할 컴포넌트의 인덱스를 기준으로 삭제
        this.compm2.splice(index, 1);
        if (                                                //삭제 후 현재 보여줄 탭을 지정하기 위한 조건
            index == this.cur_num ||
            (index < this.cur_num && index <= this.compm.length)
        ) {
          this.cur_num = this.cur_num - 1;
        }
      }
    },
    AddComponent: function (param) {                          //탭에 컴포넌트를 추가하는 함수
      // console.log(param);
      if (param.menuId != "" && param.menuId != null) {
        const st = this.compm.find(                           //동일한 컴포넌트가 탭내에 존재하는지 확인
            (element) => element.menuId === param.menuId
        );
        // console.log(st);
        if (st != null) {                                     //동일한 컴포넌트가 존재할시 해당 컴포넌트의 탭으로 이동.
          var i = this.compm.indexOf(st);
          this.cur_num = i;


        } else {                                              //동일한 컴포넌트가 존재하지 않을 경우 컴포넌트 추가
          if (this.compm.length < 10) {
            this.compm.push(param);                           //클릭된 컴포넌트의 정보를 compm 변수에 넣는다.
            this.cur_num = this.compm.length - 1;             //현재 추가되는 컴포넌트의 index 번호를 지정
            let componentAddr = this.compm[this.cur_num].cmpnId;
            if(componentAddr.search('/')!=-1){                // 05/컴포넌트명 인 경우 05/를 삭제 처리
              componentAddr = componentAddr.substring(3);
            }
            // cmpnId 가공하기 
            this.component = markRaw(                         //추가될 컴포넌트를 import를 통해 불러온다. 고정된 컴포넌트의 경우 이방식을 통해 사전에 불러와야한다.
                defineAsyncComponent(() =>
                    import("@/components/" +this.menuType +"/" + componentAddr + ".vue")
                )
            );
            this.compm2.push(this.component);                  //불러온 컴포넌트를 compm2 배열에 넣는다.
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