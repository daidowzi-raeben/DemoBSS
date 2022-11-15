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

<style scoped>
select {
  font-family: 맑은 고딕;
  font-size: 12px;
  color: #343434;
}
.select_input {
  border: 1px solid #c1c1c1;
  font-size: 11px;
  height: 36px;
  color: #000000;
  padding: 1px 22px 0 9px;
  background: #fff url(../../img/icon_form_arrow_02.png) no-repeat;
  background-position: right 11px center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.select_input2 {
  border: 1px solid #c1c1c1;
  font-size: 13px;
  height: 36px;
  width: 50px;
  color: #000000;
  padding: 1px 22px 0 9px;
  background: #fff url(../../img/icon_form_arrow_02.png) no-repeat;
  background-position: right 11px center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.select_input3 {
  width: 120px;
  height: 20px;
  margin-left: 10px;
  border: 1px solid #c1c1c1;
  font-size: 10px;
  /* height: 36px; */
  /* width: 50px; */
  color: #000000;
  padding: 1px 22px 0 9px;
  background: #fff url(../../img/icon_form_arrow_02.png) no-repeat;
  background-position: right 11px center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

</style>
