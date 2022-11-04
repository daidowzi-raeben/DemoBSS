<template>
  <div id="wrap">
    <Header />
    <Section />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Section from "./components/Section.vue";

export default {
  name: "App",
  components: {
    Header,
    Section,
  }
};
</script>

<style>
@import "./css/common.css";
</style>
