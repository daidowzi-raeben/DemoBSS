<template>
  <label :class="labelClass"> {{ labelNm }}</label>
</template>

<script>
export default {
  props: {
    labelNm: {
      type: String,
      required: true,
    },
    labelClass: {
      type: String,
      default: "label-type",
    },
  },
};
</script>

<style>
@font-face {
  font-family: "noto-sans-kr";
  src: url("@/assets/fonts/NotoSansKR-Regular.otf");
}
* {
  font-family: "noto-sans-kr";
}

.label-type {
  width: 100%;
  font-size: 10pt;
  font-weight: bold;
  text-align: left;
  color: #000;
  height: 28px;
}
</style>
