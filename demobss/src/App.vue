<template>
  <div v-if="this.$route.path == '/login'" id="Login">
    <login />
  </div>
  <div v-else id="wrap">
    <Header />
    <Section />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Section from "./components/Section.vue";
import Login from "./pages/Login/Login.vue";

export default {
  name: "App",
  components: {
    Header,
    Section,
    Login,
  },
};
</script>

<style>
@import "./css/common.css";
</style>
