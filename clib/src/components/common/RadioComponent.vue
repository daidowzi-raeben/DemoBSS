<template>
  <div>
    <label
      class="radioContainer"
      v-for="radioOpt in radioOptions"
      :key="radioOpt"
    >
      <input
        type="radio"
        :id="radioOpt"
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
    seletedRadio: {
      type: String,
      default: "",
    },
    defaultcdId: String,
    RadioOption: {
      type: String,
      default: "defaultRadio",
    },
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
    seletedRadio(newseletedRadio) {
      // 해당 셀렉트박스 옵션 중 선택 된 값이 있는지 판단 후,
      // 있다면 해당 값을 선택 값으로 올림, 그렇지 않으면 empty 문자열 반환하여 placeholder(disabled, hidden) 반환
      this.radioValue = this.radioOptions
        .map((n) => n.cdId)
        .includes(newseletedRadio)
        ? newseletedRadio
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

.container {
  display: inline-block;
  position: relative;
  /* padding-left: 35px;
  margin-bottom: 12px; */
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.radiomark {
  position: absolute;
  /* top: 0;
  left: 0; */
  /* margin:auto; */
  height: 15px;
  width: 15px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .radiomark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .radiomark {
  background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.radiomark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .radiomark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .radiomark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>
