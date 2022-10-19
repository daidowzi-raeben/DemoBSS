<template>
  <section>
    <Nav v-show="navOn" />
    <div class="wrap">
      <router-view />
    </div>
  </section>
</template>

<script>
import Nav from "./Nav.vue";

export default {
  name: "Section",
  components: { Nav },
  data() {
    return {};
  },
  computed: {
    navOn() {
      return this.$store.state.navOn;
    },
  },
};
</script>

<style scoped></style>
