<template>
  <button
  :class="btnClass"
  type="button">
  {{btnName}}
  </button>
</template>

<script>
export default {
  data(){
    return{
    buttonValue: "",
    }
  },
  props:{
    btnClass : null,
    btnName: String,
  },
}
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
.btnClass2 {
  float: left;
  padding: 5px;
  margin-right: 10px;
  background-color: #707070;
  color: #aeaeae;
  cursor: pointer;
  border: none;
}
.btnClass3 {
  height: 30px;
  font-weight: bold;
  margin-right: 5px;
  cursor: pointer;
}

.btnClass4 {
  float: right;
  padding: 4px;
  font-size: 10px;
  border: solid thin;
  font-weight: bold;
  cursor: pointer;
  margin: 3px 3px 0px 3px;
  background-color: rgb(255, 255, 255);
}
.btnLeftImgClass {
  background-color: #5ad3cd;
  border: none;
  cursor: pointer;
  background-position: top 10px;
  width: 25px;
  height: 25px;
  display: flex;
  content: url(../../img/icon_form_left.png);
}
.btnRightImgClass {
  background-color: #5ad3cd;
  border: none;
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  content: url(../../img/icon_form_right.png);
}
.btnDeleteImgClass {
  background-color: #5ad3cd;
  border: none;
  cursor: pointer;
  width: 35px;
  height: 25px;
  display: flex;
  content: url(../../img/icon_delete.png);
}

</style>
