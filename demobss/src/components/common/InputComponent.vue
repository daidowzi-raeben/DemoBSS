<template>
  <input
    :type="type"
    :class="inputClass"
    v-model="value"
    :placeholder="placeholder"
    :disabled="disabled"
    :input="updateValue(value)"
  />
</template>

<script>
export default {
  name: "InputComponent",
  data() {
    return {
      value: "",
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
      default:'150px'
    },
    longWidth :{
      type: String,
      default:'330px'
    },
    height: {
      type:String,
      default: '20px',
    },
    inputClass: {
      type:String,
      default:"class1",
    },
    disabled:{
      type:Boolean,
      default:false,
    },
    value:{
      type:String,
    }
  },

  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
input {
  font-size: 10pt;
  color: #000;
}
/*정보 스타일*/
.class1 {
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
.class2 {
  background-color: black;
  font-weight: bold;
  color: red;
  width: v-bind('width');
  height: v-bind('height');
}
/*상단 메뉴 스타일 */
.class3{
  margin-top: 7px;
  font-size: 12px;
  vertical-align: top;
  background-color: rgb(184,208,235);
  border: 0;
  font-weight: bold;
  color: white;
}
.class3:focus{
  outline:none;
}
.class4 {
  width:100%;
  height:28px;
  border:1px solid #bdbdbd;
}

.class5{
  width: 140px;
  /* font-size: 12pt; */
  font-size: 10pt;
  font-weight: normal;
  color: #000;
  background-color: rgb(251, 253, 255);
  border: 1px solid #e4e4e4;
  margin-right: 11px;
  height: 24px;
}

.class5_short1{
  width: 80px;
  margin-right: 3px;

}

.class5_short2{
  width: 64px;
  margin-right: 3px;

}

.class5_long1{
  width: v-bind('longWidth');
}
</style>
