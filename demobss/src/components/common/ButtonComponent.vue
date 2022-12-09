<template>
  <button
  :class="btnClass"
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
    menu: null,
    btnWidth: {
      type: String,
      default: '25px'
    },
    btnFontWeight:{
      type:String,
      default:'normal'
    },
    btnHeight: {
      type: String,
      default: '25px'
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
  font-size: 12pt;
  border: rgb(231, 231, 231) 1px solod;
  border-radius: 3px;
  color: #000;
  margin: 0px 0px 0px 3px;
  background-color: rgb(251, 251, 251);
}
.btnClass2 {
  background-color: rgb(119, 146, 176);
  border: rgb(231,231,231) 1px solid;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  float: right;
  font-size: 12pt;
  margin: 0px 0px 0px 3px;
  padding: 2px;
}
.btnClass1:hover, .btnClass2:hover {
  background-color: rgb(27,114,212);
  color: white;
}
.btnClass3 {
  background-color: rgb(114, 148, 187);
  border-radius: 3px;
  border: 0.5px solid #dbdbdb;
  color: white;
  cursor: pointer;
  font-size: 9pt;
  font-weight: normal;
  height: v-bind('btnHeight');
}
.btnClass3:hover{
  background-color: rgb(28, 113, 209);
}
.btnClass3:active {
  background-color: rgb(28, 113, 209);
}
.btnClass4 {
  width: v-bind('btnWidth');
  height: v-bind('btnHeight');
  font-size: 10pt;
  background-color: rgb(27,114,212);
  font-weight: v-bind('btnFontWeight');
  cursor: pointer;
  color: white;
  border: 0.5px solid #bdbdbd;
}
.btnClass4:hover{
  background-color: rgba(154, 42, 218, 0.967);
}

.btnClass5 {
  height: v-bind('btnHeight');
  width: v-bind('btnWidth');
  font-size: 9pt;
  color: black;
  font-weight: v-bind('btnFontWeight');
  cursor: pointer;
  background: linear-gradient( to bottom, #ffffff, rgb(240, 240, 240) );
  border: 0.5px solid #dbdbdb;
  border-radius: 3px;
}
.btnClass5:hover {
  color: grey;
}
.btnClass5:active {
  color: grey;
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
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
  content: url(../../img/arrow_left_white.png);
}
.btnRightImgClass {
  /* background-color: #5ad3cd; */
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: v-bind('btnWidth');
  height: v-bind('btnHeight');
  display: flex;
  content: url(../../img/arrow_right_white.png);
}
.btnDeleteImgClass {
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: v-bind('btnWidth');
  height: v-bind('btnHeight');
  display: flex;
  margin-top: 2px;
  content: url(../../img/delete_white.png);
}

.btnLeftImgClass:hover{
  content: url(../../img/arrow_left_black.png);
}
.btnRightImgClass:hover{
  content: url(../../img/arrow_right_black.png);
}
.btnDeleteImgClass:hover{
  content: url(../../img/delete_black.png);
}

</style>
