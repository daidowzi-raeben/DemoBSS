<template>
  <input
    type="type"
    :class="inputClass"
    :style="{ width: width + 'px', height: height + 'px' }"
    v-model="value"
    :placeholder="placeholder"
    :input="updateValue(value)"
  />
</template>

<script>
export default {
  name: "InputComponent",
  data() {
    return {
      value: "",
    };
  },
  props: {
    placeholder: String,
    type: String,
    width: Number,
    height: Number,
    inputClass: null,
  },

  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
input {
  font-family: 맑은 고딕;
  font-size: 14px;
  color: #343434;
}
</style>