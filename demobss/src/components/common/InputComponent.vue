<template>
  <input
    type="type"
    :class="inputClass"
    :style="{ width: width + 'px', height: height + 'px' }"
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
      type:Number,
      default:150,
    },
    height: {
      type:Number,
      default: 20,
    },
    inputClass: {
      type:String,
      default:"class1",
    },
    disabled:{
      type:Boolean,
      default:false,
    },
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
  font-family: 맑은 고딕;
  font-size: 11px;
  color: #343434;
}
.class1 {
  background-color: #f2f2f2;
  border : #efefef 1px;
  border-radius: 2px;
  font-size: 12pt;
  color: #000;
}
.class2 {
  background-color: black;
  font-weight: bold;
  color: red;
}
.class3{
  margin-top: 3px;
  font-size: 12px;
  vertical-align: top;
  background-color: rgb(28,42,57);
  border: 0;
  font-weight: bold;
  color: white;
}

</style>
