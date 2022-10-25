<template>
<input
  type="type"
  :class ="inputClass"
  :style="{width: width+'px', height: height + 'px'}"
  v-model="value"
  :input="updateValue(value)"

>

</template>

<script>
export default {
  name: "InputComponent",
  data(){
    return{
      value:"",
    };
  },
  props:{
    type: String,
    widht : Number,
    height: Number,
    inputClass : null,
  },

  methods: {
    updateValue(value){
      this.$emit("input",value);
    },
  }

}
</script>

<style scoped>

</style>