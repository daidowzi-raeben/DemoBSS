<template>
  <div :class="classWrapper" :style="{ width: width + 'px' }">
    <datepicker
      v-model="date"
      :class="classInput"
      :locale="lang"
      :minimumView="type"
      :inputFormat="dateFormat"
      :typeable="true"
      :placeholder="pPlaceholder"
      :input="updateDate(date)"
      :clearable="true"
      ref="datepicker"
    >
    </datepicker>
  </div>
</template>

<script>
import Datepicker from "vue3-datepicker";
import { ko } from "date-fns/locale";
// import { calToday } from "@/service/CommonService.js";

export default {
  name: "DatePickerComponent",
  data() {
    return {
      date: null,
    };
  },
  props: {
    pDate: null,
    width: Number,
    classWrapper: null,
    classInput: null,
    type: {
      //일력 월력
      type: String,
      default: "day",
    },
    dateFormat: {
      type: String,
      default: "yyyy.MM.dd",
    },
    // pPlaceholder: {
    //   //부모에서 받아올 placeholder
    //   type: String,
    //   default: new Date(),
    // },
    pPlaceholder: String,
  },
  components: {
    Datepicker,
  },
  computed: {
    lang() {
      // 달력 언어
      return ko;
    },
  },
  created() {
    this.date = this.pDate;
    // console.log(this.date);
  },
  watch: {
    pdate: function () {
      this.date = this.pdate;
    },
  },
  methods: {
    updateDate(value) {
      this.$emit("input", value);
    },
    setDate(value) {
      //부모에서 date셋팅
      this.date = value;
    },
  },
};
</script>

<style>
.calender_input {
  border: #b6b6b6 solid 1px;
  font-size: 13px;
  height: 34px;
  color: #494949;
  padding: 0 22px 0 9px;
  background: url(../../img/icon_form_calender.png) no-repeat;
  background-position: right 9px center;
  cursor: pointer;
}

.v3dp__datepicker {
  /* datepicker 상세 스타일 */
  --vdp-hover-bg-color: #434343;
  --vdp-selected-bg-color: #2dbdb6;
  box-sizing: border-box;
}

.datepicker_class_in {
  height: 34px;
  width: 85%;
  border: 0;
  line-height: 34px;
  background-color: transparent;
}
</style>