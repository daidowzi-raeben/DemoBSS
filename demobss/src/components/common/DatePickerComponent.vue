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

<style scoped>
</style>