<template>
  <datepicker
    v-model="date"
    :style="{ width: width + 'px' }"
    :class="classWrapper"
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
  <select v-show="timeShow">
    <option v-for="ho in hour()" :key="ho">
      {{ho}}시
    </option>
  </select>
  <select v-show="timeShow">
    <option v-for="min in minutes()" :key="min">
      {{min}}분
    </option>
  </select>
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
      hour: function (){
        var hour=[];
        for(var i = 1; i<=12;i+=1)hour.push(i);
        return hour;
      },
      minutes: function (){
        var minutes = [];
        for(var i = 1; i<=59;i++)minutes.push(i);
        return minutes;
      },
    };
  },
  props: {
    pDate: null,
    width: Number,
    classWrapper: null,
    type: {
      //일력 월력 시분
      type: String,
      default: "day",
    },
    timeShow:{
      type:Boolean,
      default:false,
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
  box-sizing: border-box;
  min-width: 130px;
  border: #b6b6b6 solid 1px;
  font-size: 12px;
  height: 34px;
  color: #494949;
  padding: 0 22px 0 9px;
  background: url(../../img/icon_form_calender.png) no-repeat;
  background-position: right 9px center;
  cursor: pointer;
}
select{
  border: #b6b6b6 solid 1px;
  color: #494949;
  font-size: 12px;
}
.v3dp__datepicker {
  /* datepicker 상세 스타일 */
  --vdp-hover-bg-color: #434343;
  --vdp-selected-bg-color: #2dbdb6;
  box-sizing: border-box;
}
.v3dp__clearable {
  position: absolute;
  right: 45px;
  margin: 5px 0;
  left: unset;
}
</style>