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

<style scoped></style>
