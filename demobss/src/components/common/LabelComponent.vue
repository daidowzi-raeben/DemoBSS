<template>
  <label :class="labelClass"> {{ labelNm }}</label>
</template>

<script>
export default {
  props:{
    labelNm:{
      type:String,
      required: true
    },
    labelClass:{
      type:String,
      default:"class1"
    }
  }

}
</script>

<style>

@font-face {
  font-family: 'noto-sans-kr';
  src: url('../../../public/fonts/NotoSansKR-Regular.otf');
}
*{
  font-family: 'noto-sans-kr';
}

.class1{
  width: 89px;
  font-size: 12pt;
  font-weight: bold;
  text-align: left;
  color: #000;
  height: 28px;
}

</style>