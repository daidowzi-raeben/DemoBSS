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
  font-size: 10pt;
  color: #000;
}
.class1 {
  background-color: #dcdcdc;
  border-radius: 2px;
  font-weight: bold;
}
.class2 {
  background-color: black;
  font-weight: bold;
  color: red;
}
<<<<<<< Updated upstream
=======
.class3 {
  font-weight: bold;
  width:100%;
  height:100%;
  border:1px solid #bdbdbd
}
>>>>>>> Stashed changes


</style>