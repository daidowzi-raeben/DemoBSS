<template>
  <div :class="{
          div_style : selectClass==='select_input3'
          }" style="white-space:nowrap; display: inline-block;" >
  <select
    :class="selectClass"
    :style="{ width: width + 'px' }"
    v-model="value"
    @change="updateValue(value)"
  >
    <option
    v-if="defaultValue != null"
    :value="''"
    :disabled="isDisabled"
    :hidden="isDisabled"
    >  <!-- disabled를 true로 props로 받는 경우 : 해당 default값을 이후에 선택 못하게 하기 때문에 선택하지 못하면 쓰지 않는다는 의미이므로 hidden으로 보이지 않게 처리함. (UI설계서에 여러경우 존재)    -->
      {{ defaultValue }}
    </option>
    <option  v-for="(option, idx) in options" :key="idx" :value="option.cdId">
      {{ option.cdNm }}
    </option>
  </select>
  </div>
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
    selectedValue : String,
    cdGroup: String,
    width: Number,
    selectClass: String,
    defaultValue: null,
    defaultcdId : String,
    isDisabled:{
      type:Boolean,
      default:false,
    },
    select_input3_marginLeft:{
      type:String,
      default:"10px"
    }
  },

  beforeMount() {
    this.options = select[this.cdGroup];
    if (this.defaultcdId != null ) {
      for(let i =0 ; i< this.options.length; i++){
        if( this.options[i].cdId == this.defaultcdId ){
          this.value = this.defaultcdId ;
          break;
        }
      }
    }
  },
  watch: {
    selectedValue(newSelectedValue){
      // 해당 셀렉트박스 옵션 중 선택 된 값이 있는지 판단 후,
      // 있다면 해당 값을 선택 값으로 올림, 그렇지 않으면 empty 문자열 반환하여 placeholder(disabled, hidden) 반환
      this.value = this.options.map(n => n.cdId).includes(newSelectedValue) ? newSelectedValue : '';
    },
    value(newValue){
      this.value= newValue;
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
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
  background: #fff url(../../assets/img/icon_form_arrow_02.png) no-repeat;
  background-position: right 11px center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.select_input3 {
  margin-left: v-bind(select_input3_marginLeft);
  border: 1px solid #bdbdbd;
  font-size: 10pt;
  height: 100%;
  width: 100%;
  color: #000;
  padding: 1px 22px 0 9px;
  background: #fff url(../../assets/img/icon_form_arrow_black_02.png) no-repeat;
  background-size: 12px;
  background-position: right 7px center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.select_input4 {
  border: 1px solid #bdbdbd;
  font-size: 10pt;
  height: 100%;
  width: 100%;
  color: #000;
  padding: 1px 22px 0 4px;
  background: #fff url(../../assets/img/icon_form_arrow_black_02.png) no-repeat;
  background-size: 12px;
  background-position: right 7px center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

</style>
