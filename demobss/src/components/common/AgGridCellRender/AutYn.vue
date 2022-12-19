<template>
<div style="display: flex">
  <span><input type="radio" v-model="value" value="use"> 적용</span>
  <span><input type="radio" v-model="value" value="unuse"> 제외</span>
</div>
</template>

<script>
export default {
  name: "AutYn",
  data(){
    return{
      value:null
    }
  },
  beforeMount() {
    console.log(this.params);
  },
  watch:{
    value(){
      this.params.clicked(this.value);
    }
  }

}
</script>

<style scoped>

</style>