<template>
  <select
    :class="selectClass"
    :style="{ width: width + 'px' }"
    v-model="value"
    :input="updateValue(value)"
  >
    <option v-if="defaultValue != null" :value="''">
      {{ defaultValue }}
    </option>
    <option v-for="(option, idx) in options" :key="idx" :value="option.cdId">
      {{ option.cdNm }}
    </option>
  </select>
</template>

<script>
import select from "../../../public/selectBoxOption.json";

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
    selectClass: null,
    defaultNum: null,
    defaultValue: String,
  },
  beforeMount() {
    this.options = select[this.cdGroup];

    if (this.defaultNum != null) {
      this.value = this.options[this.defaultNum].cdId;
    }
  },
  watch: {},
  methods: {
    updateValue(value) {
      // console.log(value, this.value);
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped></style>
