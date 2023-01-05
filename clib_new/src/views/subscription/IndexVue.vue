<script>
import { createNamespacedHelpers } from "vuex";
const storeName = "L01M01S00";
// const { mapState, mapActions } = createNamespacedHelpers("L01M01S00");
const commonHelpers = createNamespacedHelpers("common");
const clibHelpers = createNamespacedHelpers("L01M01S00");
console.log(clibHelpers);
export default {
  name: "IndexPage",
  layout: "index",
  data() {
    return {};
  },
  computed: {
    // ...clibHelpers.mapState(["counter"]),
    ...clibHelpers.mapState(["msg"]),
  },
  mounted() {
    console.log(this.$route.params.menuId);
    // this.ACTION_AXIOS_GET();
  },
  methods: {
    // ...clibHelpers.mapActions(["ACTION_AXIOS_GET"]),
  },
};
</script>

<template>
  <div>index {{ msg }}</div>
</template>

<style></style>
