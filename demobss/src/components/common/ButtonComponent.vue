<template>
  <button
  :class="btnClass"
  :style="'width:'+btnWidth+'px;height:'+btnHeight+'px;'"
  type="button"
  @click="setCmpn(comp)"
  >
  {{btnName}}
  </button>
</template>

<script>
import menu from "../../../public/menu.json";
export default {
  data(){
    return{
      comp:"",
    }
  },
  props: {
    btnClass: null,
    btnName: String,
    menu : null,
    btnWidth: {
      type:String,
      default:'25'
      },

    btnHeight: {
      type:String,
      default:'25'
      },
  },
  created(){
    this.comp = menu.menu.filter((menu)=>{
      return menu.menuId == this.menu;
    });
  },
  methods:{
    setCmpn(param){
      this.$emit('input',param[0]);
    }
  },
};
</script>

<style scoped>
.btnClass1 {
  float: right;
  padding: 2px;
  font-size: 8px;
  border: rgb(231,231,231) 1px solod;
  color: #000;
  margin: 0px 0px 0px 3px;
  background-color: rgb(251, 251, 251);
}
.btnClass2 {
  float: right;
  padding: 2px;
  font-size: 8px;
  border: rgb(231,231,231) 1px solid;
  font-weight: bold;
  cursor: pointer;
  color: white;
  margin: 0px 0px 0px 3px;
  background-color: rgb(119, 146, 176);
}
.btnClass1:hover, .btnClass2:hover {
  background-color: rgb(27,114,212);
  color: white;
}
.btnClass3 {
  height: v-bind('btnHeight');
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
}
.btnClass3:hover {
  background-color: #70707077;
}
.btnClass4 {
  width: v-bind('btnWidth');
  height: v-bind('btnHeight');
  font-size: 10pt;
  background-color: rgb(27,114,212);
  font-weight: bold;
  cursor: pointer;
  color: white;
  border: 0.5px solid #bdbdbd;
}
.btnClass4:hover{
  background-color: rgba(154, 42, 218, 0.967);
}
.btnSearchImgClass {
  float: left;
  padding: 5px;
  margin-right: 10px;
  width: 100%;
  height: 100%;
  background-color: #707070;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
}
.btnSearchImgClass:hover {
  background-color: rgba(114, 99, 99, 0.47);
  border:3px solid red; margin:-3px; border-radius:5px;
}
.btnLeftImgClass {
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-position: top 10px;
  width: v-bind('btnWidth');
  height: v-bind('btnHeight');
  display: flex;
  content: url(../../img/icon_form_left.png);
}
.btnRightImgClass {
  /* background-color: #5ad3cd; */
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: v-bind('btnWidth');
  height: v-bind('btnHeight');
  display: flex;
  content: url(../../img/icon_form_right.png);
}
.btnDeleteImgClass {
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: v-bind('btnWidth');
  height: v-bind('btnHeight');
  display: flex;
  content: url(../../img/icon_delete.png);
}
</style>
