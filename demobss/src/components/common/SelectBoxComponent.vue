<template>
  <div :class="{
          div_style : selectClass==='select_input3'
          }" style="white-space:nowrap; display: inline-block;" >
  <select
    :class="selectClass"
    :style="{ width: width + 'px' }"
    v-model="value"
    :input="updateValue(value)"
    @change="chkevent($event)"
  >
    <option v-if="defaultValue != null" :value="''">
      {{ defaultValue }}
    </option>
    <option  v-for="(option, idx) in options" :key="idx" :value="option.cdId">
      {{ option.cdNm }}
    </option>
  </select>
  <select
      :class="selectClass"
      :style="{ width: width + 'px' }"
      v-model="secndValue"
      v-if="(secndOptions!=null && secndShow )|| dcidShow "
  >
    <option v-if="defaultValue != null" :value="''">
      {{ defaultValue }}
    </option>
    <option v-for="(option,idx) in secndOptions" :key="idx" :value="option.cdId">
      {{option.cdNm}}
    </option>
  </select>
  </div>
</template>

<script>
import select from "../../../public/selectBoxOption.json";
import secndSelect from "../../../public/selectBoxSecndOption.json";
export default {
  name: "SelectBoxComponent",
  data() {
    return {
      options: [],
      secndOptions:null,
      value: "",
      secndValue: "",
      cur:"",
    };
  },
  props: {
    cdGroup: String,
    width: Number,
    selectClass: null,
    defaultNum: null,
    defaultValue: String,
    secndShow:{
      type:Boolean,
      default:false
    },
    dcidShow:{
      type:Boolean,
      default:false
    },
  },
  beforeMount() {
    this.options = select[this.cdGroup];
    if (this.defaultNum != null) {
      this.value = this.options[this.defaultNum].cdId;
    }
  },
  watch: {
    cur(newValue,oldValue){
      this.secndOptions = secndSelect[newValue];
    }
  },
  methods: {
    updateValue(value) {
      // console.log(value, this.value);
      this.$emit("input", value);
    },
    chkevent(event){
      this.cur = event.target.value;

    }
  },
};
</script>

<style scoped>
.div_style{
  width: 100%;
  height: 100%;
}
select {
  font-size: 12pt;
  color: #343434;
}
select option:hover{
  background-color: #2dbdb6;
}
.select_input {
  border: 1px solid #c1c1c1;
  font-size: 11px;
  height: 28px;
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
  margin-left: 10px;
  border: 1px solid #bdbdbd;
  font-size: 10pt;
  height: 100%;
  width: 100%;
  color: #000;
  padding: 1px 22px 0 9px;
  background: #fff url(../../img/icon_form_arrow_black_02.png) no-repeat;
  background-size: 12px;
  background-position: right 7px center;
  -webkit-appearance: none;
  -moz-appearance: none;
}


</style>
