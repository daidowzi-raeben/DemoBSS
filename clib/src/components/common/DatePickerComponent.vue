<template>
  <datepicker
  :style="{'background-color': calenderBackgroundColor}"
  :class="classWrapper"
  :locale="lang"
  :minimumView="type"
  :inputFormat="dateFormat"
  :typeable="true"
  :placeholder="pPlaceholder"
  :input="updateDate(date)"
  :lower-limit="isMinDate"
  :upper-limit="isMaxDate"
  :clearable="true"
  ref="datepicker"
  v-model="date"
  >
  <template v-slot:clear="{ onClear }">
    <button type="button" @click="[onClear(), getClearDate()]">x</button>
  </template>
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
    pDate: Date,
    classWrapper: {
      default:"calender_input"
    },
    isMinDate:{
      type: String,
      default:null
    },
    isMaxDate:{
      type: String,
      default:null
    },
    calenderBackgroundColor:{
      type:String,
      default:'white'
    },
    width:{
      type:String,
      default:'140px'
    },
    height:{
      type:String,
      default:'28px'
    },
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
      default: "yyyy-MM-dd",
    },
    pPlaceholder: {
      //부모에서 받아올 placeholder
      type: String,
      default: new Date(2023,0,1).toLocaleDateString(),
    },
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
  },
  watch: {
    pDate(newDate) {
      this.date = newDate;
    },
  },
  methods: {
    updateDate(value) {
      this.$emit("emitValue", value);
    },
    setDate(value) {
      //부모에서 date셋팅
      this.date = value;
    },
    getClearDate(){
      this.date = new Date(this.pPlaceholder);
    }
  },
};
</script>

<style>
.calender_input {
  box-sizing: border-box;
  /* min-width: 130px; */
  width: v-bind('width');
  height: v-bind('height');
  /* background-color: v-bind('calenderBackgroundColor'); */
  /* background-color: red; */
  border: #b6b6b6 solid 1px;
  font-size: 10pt;
  color: #494949;
  padding: 0 22px 0 9px;
  background: url(../../assets/img/icon_form_calender.png) no-repeat;
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
  --vdp-hover-bg-color: rgb(184,208,235);
  --vdp-selected-bg-color: rgb(27,114,212);
  box-sizing: border-box;
}
.v3dp__clearable {
  position: absolute;
  right: 35px;
  top: 1px;
  /* margin: 2px 0; */
  vertical-align: center;
  left: unset;
}

.v3dp__clearable > button{
  background-color: v-bind('calenderBackgroundColor');
  border: none;
  height: 20px;
  font-size: 10pt;
  font-weight: bold;
  font-style: normal;
  vertical-align: middle;
  cursor: pointer;
}

</style>