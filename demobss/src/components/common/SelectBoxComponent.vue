<template>
  <select
    :class="selectClass"
    :style="{ width: width + 'px' }"
    v-model="value"
    :input="updateValue(value)"
  >
    <option v-if="defaultValue != '' && defaultValue !=null" :value="''">{{ placeholder }}</option>
    <option v-else :value="''">{{ placeholder }}</option>
    <option v-for="items in options" :value="items.key" :key="items.key">
      {{ items.value }}
    </option>
  </select>
</template>

<script>
import select from "../../../../../PortalSolution/PortalSolution/vue-cli/src/assets/select.json";

export default {
  name: "SelectBoxComponent",
  data() {
    return {
      options: [],
      value: "",
    };
  },
  props: {
    cdGroup: String,
    width: Number,
    pValue: null,
    placeholder: String,
    selectClass: null,
    defaultNum: {
      type: Number,
      default: 0,
    },
    defaultValue: String,
  },
  async beforeMount() {
    this.options = select.selectbox[this.cdGroup];
    if (this.pValue != null) {
      this.value = this.pValue;
      return;
    }
  },
  watch: {
    pValue(val) {
      this.value = val;
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped></style>
