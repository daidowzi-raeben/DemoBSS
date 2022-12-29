<template>
  <button :class="btnClass" type="button" >
    {{ btnName }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      comp: "",
    };
  },
  props: {
    btnClass: null,
    btnName: String,
    btnWidth: {
      type: String,
      default: "25px",
    },
    btnFontWeight: {
      type: String,
      default: "normal",
    },
    btnHeight: {
      type: String,
      default: "25px",
    },
  },
};
</script>

<style scoped>
.btn-type {
  float: right;
  padding: 2px;
  font-size: 12pt;
  border: rgb(231, 231, 231) 1px solid;
  border-radius: 3px;
  color: #000;
  margin: 0px 0px 0px 3px;
  background-color: rgb(251, 251, 251);
}
.btn-type:hover {
  background-color: rgb(27, 114, 212);
  color: white;
}
.btn-type2 {
  height: v-bind("btnHeight");
  width: v-bind("btnWidth");
  font-size: 9pt;
  color: black;
  font-weight: v-bind("btnFontWeight");
  cursor: pointer;
  background: linear-gradient(to bottom, #ffffff, rgb(240, 240, 240));
  border: 0.5px solid #dbdbdb;
  border-radius: 3px;
}
.btn-type2:hover {
  color: grey;
}
.btn-type2:active {
  color: grey;
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
}


.btn-type3 {
  background-color: rgb(114, 148, 187);
  border-radius: 3px;
  border: 0.5px solid #dbdbdb;
  color: white;
  cursor: pointer;
  font-size: 9pt;
  font-weight: normal;
  height: v-bind("btnHeight");
}
.btn-type3:hover {
  background-color: rgb(28, 113, 209);
}
.btn-type3:active {
  background-color: rgb(28, 113, 209);
}
.btn-type4 {
  width: v-bind("btnWidth");
  height: v-bind("btnHeight");
  font-size: 10pt;
  background-color: rgb(27, 114, 212);
  font-weight: v-bind("btnFontWeight");
  cursor: pointer;
  color: white;
  border: 0.5px solid #bdbdbd;
}
.btn-type4:hover {
  background-color: rgb(27, 114, 212, 0.7);
}
.btn-type4:active {
  color: rgb(27, 114, 212);
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
}

.btnLeftImgClass {
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-position: top 10px;
  width: v-bind("btnWidth");
  height: v-bind("btnHeight");
  display: flex;
  content: url(../../assets/img/arrow_left_white.png);
}
.btnRightImgClass {
  /* background-color: #5ad3cd; */
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: v-bind("btnWidth");
  height: v-bind("btnHeight");
  display: flex;
  content: url(../../assets/img/arrow_right_white.png);
}
.btnDeleteImgClass {
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: v-bind("btnWidth");
  height: v-bind("btnHeight");
  display: flex;
  margin-top: 2px;
  content: url(../../assets/img/delete_white.png);
}

.btnLeftImgClass:hover {
  content: url(../../assets/img/arrow_left_black.png);
}
.btnRightImgClass:hover {
  content: url(../../assets/img/arrow_right_black.png);
}
.btnDeleteImgClass:hover {
  content: url(../../assets/img/delete_black.png);
}
</style>
