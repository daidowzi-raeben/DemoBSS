<template>
    <a class="link" :href="destination" target="_blank"> <strong> {{ linkNm }} </strong> </a>
</template>

<script>
export default {
  props: {
    destination: String,
    linkNm: {
      type: String,
      default: "링크 이름",
    },
    textsize: {
      type: String,
      default: "10pt",
    },
  },
};
</script>

<style>
.link {
  display: inline-block;
  font-size: v-bind("textsize");
  font-weight: normal;
  cursor: pointer;
}

.link:hover {
  color: blue;
  text-decoration: underline;
}
</style>
