<template>
  <input
    :type="type"
    :class="inputClass"
    :placeholder="placeholder"
    :disabled="disabled"
    v-model="inputValue"
  />
</template>

<script>

export default {
  name: "InputComponent",
  data() {
    return {
      inputValue:""
    };
  },
  props: {
    placeholder: String,
    type: {
      type:String,
      default:"text",
    },
    width: {
      type:String,
      default:'140px'
    },
    height: {
      type:String,
      default: '20px',
    },
    inputType2BackgroundColor:{
      default:'white'
    },
    inputType5MarginRight:{
      type:String,
      default:'11px'
    },
    inputClass: {
      type:String,
      default:"input-type",
    },
    disabled:{
      type:Boolean,
      default:false,
    },
    value:{
      type:String,
    },
  },
  beforeUpdate() {
    this.inputValue = this.value;
  },
  beforeMount() {
    this.inputValue = this.value;
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'noto-sans-kr';
  src: url('@/assets/fonts/NotoSansKR-Regular.otf');
}
input {
  font-size: 10pt;
  color: #000;
  font-family: 'noto-sans-kr';
}
/*정보 스타일*/
.input-type {
  background-color: #f2f2f2;
  border : #e4e4e4 1px solid;
  font-size: 12pt;
  font-weight: 400;
  align-items: center;
  text-align: left;
  color: #000;
  width: v-bind('width');
  height: v-bind('height');
}
.input-type2{
  width: v-bind("width");
  height: 24px;
  font-size: 10pt;
  font-weight: normal;
  color: #000;
  background-color: v-bind("inputType2BackgroundColor");
  border: 1px solid #e4e4e4;
  margin-right: 11px;
}
/*상단 메뉴 스타일 */
.input-type3{
  margin-top: 7px;
  font-size: 10pt;
  vertical-align: top;
  background-color: rgb(184,208,235);
  border: 0;
  font-weight: normal;
  color: white;
}
.input-type3:focus{
  outline:none;
}
.input-type4 {
  width:100%;
  height:28px;
  border:1px solid #bdbdbd;
}

.input-type5{
  width: v-bind('width');
  /* font-size: 12pt; */
  font-size: 10pt;
  font-weight: normal;
  color: #000;
  background-color: rgb(251, 253, 255);
  border: 1px solid #e4e4e4;
  margin-right: v-bind('inputType5MarginRight');
  height: 24px;
}

</style>
