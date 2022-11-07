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
    buttonValue: "",
      comp:"",
    }
  },
  props: {
    btnClass: null,
    btnName: String,
    menu : null,
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
  padding: 4px;
  font-size: 10px;
  border: solid thin;
  font-weight: bold;
  cursor: pointer;
  margin: 3px 3px 0px 3px;
  background-color: rgb(255, 255, 255);
}
.btnclass2:hover {
  background-color: rgba(188, 213, 62, 0.842);
}
.btnClass3 {
  height: 30px;
  font-weight: bold;
  margin-right: 5px;
  cursor: pointer;
}
.btnClass3:hover {
  background-color: #70707077;
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
  border: none;
}
.btnSearchImgClass:hover {
  background-color: rgba(114, 99, 99, 0.47);
}
.btnLeftImgClass {
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-position: top 10px;
  width: 25px;
  height: 25px;
  display: flex;
  content: url(../../img/icon_form_left.png);
}
.btnRightImgClass {
  /* background-color: #5ad3cd; */
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  content: url(../../img/icon_form_right.png);
}
.btnDeleteImgClass {
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 35px;
  height: 25px;
  display: flex;
  content: url(../../img/icon_delete.png);
}
</style>
