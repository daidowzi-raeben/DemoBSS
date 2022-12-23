<template>
  <div>
    <label
      class="radioContainer"
      v-for="radioOpt in radioOptions"
      :key="radioOpt"
    >
      <input
        type="radio"
        :id="radioOpt.cdId"
        :value="radioOpt.cdId"
        v-model="radioValue"
        @change="updateValue(radioValue)"
      />{{ radioOpt.cdNm }}
    </label>
  </div>
</template>

<script>
import radioSelect from "../../../public/radioOption.json";

export default {
  props: {
    RadioOption: {
      type: String,
      default: "defaultRadio",
    },
    selectedRadio: {
      type: String,
      default: "",
    },
    defaultcdId: String,
  },
  data() {
    return {
      radioValue: "",
      radioOptions: [],
    };
  },
  beforeMount() {
    this.radioOptions = radioSelect[this.RadioOption];
    if (this.defaultcdId != null) {
      for (let i = 0; i < this.radioOptions.length; i++) {
        if (this.radioOptions[i].cdId == this.defaultcdId) {
          this.radioValue = this.defaultcdId;
          break;
        }
      }
    }
  },
  methods: {
    updateValue(radioValue) {
      this.$emit("radioEmit", radioValue);
    },
  },
  watch: {
    selectedRadio(newselectedRadio) {
      // 해당 라디오 옵션 중 선택 된 값이 있다면 처음 출력 값을 선택 값으로 출력
      this.radioValue = this.radioOptions
        .map((n) => n.cdId)
        .includes(newselectedRadio)
        ? newselectedRadio
        : "";
    },
    radioValue(newValue) {
      this.radioValue = newValue;
    },
  },
};
</script>

<style scoped>
.radioContainer {
  text-align: center;
  vertical-align: center;
  cursor: pointer;
  margin-right: 20px;
}

.radioContainer > input {
  cursor: pointer;
}

</style>
