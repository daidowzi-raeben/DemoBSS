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
    menu : null,
    btnWidth: {
      type:String,
      default:'25px'
      },

    btnHeight: {
      type:String,
      default:'25px'
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
  float: left;
  padding: 5px;
  margin-right: 10px;
  background-color: #707070;
  color: #aeaeae;
  cursor: pointer;
  border: none;
}
.btnClass1:hover {
  background-color: #70707098;
}
.btnclass2 {
  float: right;
  padding: 2px;
  font-size: 10px;
  border: solid thin;
  font-weight: bold;
  cursor: pointer;
  margin: 0px 0px 0px 3px;
  background-color: rgb(255, 255, 255);
}
.btnclass2:hover {
  background-color: rgba(188, 213, 62, 0.842);
}
.btnClass3 {
  height: v-bind('btnHeight');
  color: white;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  height: 24px;
  background-color: rgb(114, 148, 187);
  border: 0.5px solid #dbdbdb;
}
.btnClass3:hover {
  /* background-color: #70707077; */
  background-color: rgb(28, 113, 209);
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


.btnClass5 {
  height: v-bind('btnHeight');
  color: grey;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  height: 24px;
  background-color: rgb(252,252,252);
  border: 0.5px solid #dbdbdb;
  box-shadow: 2px 2px 2px #dbdbdb;
}
.btnClass5:hover {
  /* background-color: #70707077; */
  background-color: rgb(28, 113, 209);
  color: black;
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
