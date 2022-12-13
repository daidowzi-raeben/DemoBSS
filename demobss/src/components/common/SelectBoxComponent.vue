<template>
  <div :class="{
          div_style : selectClass==='select_input3'
          }" style="white-space:nowrap; display: inline-block;" >
  <select
    :class="selectClass"
    :style="{ width: width + 'px' }"
    v-model="value"
    @change="[updateValue(value), chkevent($event)]"
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
    secndShow:{
      type:Boolean,
      default:false
    },
    dcidShow:{
      type:Boolean,
      default:false
    },
    select_input3_marginLeft:{
      type:String,
      default:"10px"
    }
  },
  
  // async beforeMount() {
  //   await this.axios.get("/selectBoxOption.json")
  //     .then((res) => {
  //       console.log(res)
  //       // this.rowData = res.data;
  //       // console.log(this.rowData);
  //       this.options = res.data.selectBoxOption[this.cdGroup];
  //     if (this.defaultcdId != null ) {
  //       for(let i =0 ; i< this.options.length; i++){
  //         if( this.options[i].cdId == this.defaultcdId ){
  //           this.value = this.defaultcdId ;
  //           break;
  //         }
  //       }
  //     }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
    
  // },
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
    cur(newValue,oldValue){
      this.secndOptions = secndSelect[newValue];
    },
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
      // console.log("value@@@",value,this.options[this.options.map(n => n.cdId).indexOf(value)].cdNm);
      // this.$emit("input", this.options[this.options.map(n => n.cdId).indexOf(value)].cdNm);
      // console.log("value@@@",value,this.options[this.options.map(n => n.cdNm).indexOf(value)].cdId);
      // this.$emit("input", this.options[this.options.map(n => n.cdNm).indexOf(value)].cdId);
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
  margin-left: v-bind(select_input3_marginLeft);
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

.select_input4 {
  border: 1px solid #bdbdbd;
  font-size: 10pt;
  height: 100%;
  width: 100%;
  color: #000;
  padding: 1px 22px 0 4px;
  background: #fff url(../../img/icon_form_arrow_black_02.png) no-repeat;
  background-size: 12px;
  background-position: right 7px center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

</style>
