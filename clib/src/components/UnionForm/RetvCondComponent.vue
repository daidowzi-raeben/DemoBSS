<template>
  <div class="retvCondType">
    <span> {{ retvCondNm }} </span>
    <span>
      <select-box-component
        style="height: 28px"
        :width="'140px'"
        :cdGroup="selectCdGroupType1"
        :isDisabled="true"
        :defaultValue="selectDefltValue"
        :selectedValue="selectValues.selectValueOfType"
        @emitValue="
          (value) => {
            selectValues.selectValueOfType = value;
          }
        "
      />
    </span>
    <span>
      <input-component
        style="width: 100%; height: 28px"
        :type="'search'"
        :inputClass="'input-type4'"
        :placeholder="'검색어 입력'"
        :value="selectValues.inputValueOfSearch"
        v-model="selectValues.inputValueOfSearch"
      />
    </span>
    <span> 사용여부 </span>
    <span>
      <select-box-component
        style="height: 28px"
        :width="'140px'"
        :cdGroup="selectCdGroupType2"
        :isDisabled="true"
        :defaultValue="'사용여부 선택'"
        :selectedValue="selectValues.selectValueOfUseYn"
        @emitValue="
          (value) => {
            selectValues.selectValueOfUseYn = value;
          }
        "
      />
    </span>
    <span>
      <button-component
        :btn-class="'btn-type4'"
        :btnFontWeight="'normal'"
        :btn-name="'초기화'"
        :btnHeight="'28px'"
        :btnWidth="'100px'"
        @click="resetRetvCond"
        
      />
    </span>
    <span>
      <button-component
        :btn-class="'btn-type4'"
        :btnFontWeight="'bold'"
        :btn-name="'검색'"
        :btnHeight="'28px'"
        :btnWidth="'100px'"
        @click="searchRetvCond"
      />
    </span>
  </div>
</template>

<script>
import ButtonComponent from "../common/ButtonComponent.vue";
import InputComponent from "../common/InputComponent.vue";
import SelectBoxComponent from "../common/SelectBoxComponent.vue";
export default {
  components: { SelectBoxComponent, InputComponent, ButtonComponent },
  props: {
    retvCondNm: String,
    selectCdGroupType1: {
      type: String,
      required: true,
    },
    selectCdGroupType2: {
      type: String,
      required: true,
    },
    selectDefltValue: {
      type: String,
      default: "구분 선택",
    },
  },
  data() {
    return {
      selectValues: {
        selectValueOfType: "",
        inputValueOfSearch: null,
        selectValueOfUseYn:"",
      },
      retvMenuValues:{}
    };
  },
  methods:{
    resetRetvCond(){
      this.selectValues.selectValueOfType= "";
      this.selectValues.inputValueOfSearch= null;
      this.selectValues.selectValueOfUseYn="";

      this.retvMenuValues["type1"] =this.selectValues.selectValueOfType; 
      this.retvMenuValues["type2"] =this.selectValues.inputValueOfSearch; 
      this.retvMenuValues["type3"] =this.selectValues.selectValueOfUseYn; 
      this.$emit("emitValue",this.retvMenuValues);
      //console.log("초기화",this.retvMenuValues);
    },
    searchRetvCond(){
      this.retvMenuValues["type1"] = this.selectValues.selectValueOfType;
      this.retvMenuValues["type2"] = this.selectValues.inputValueOfSearch;
      this.retvMenuValues["type3"] = this.selectValues.selectValueOfUseYn;
      this.$emit("emitValue",this.retvMenuValues);
      //console.log("검색",this.retvMenuValues);
    }

  }
};
</script>

<style>
.retvCondType {
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  display: flex;
  align-items: center;
  height: 100%;
}
.retvCondType > span:nth-child(1) {
  min-width: 59px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12pt;
}
.retvCondType > span:nth-child(2) {
  height: 28px;
  margin: 0 5px 0 20px;
}
.retvCondType > span:nth-child(3) {
  width: 200px;
  height: 28px;
}
.retvCondType > span:nth-child(4) {
  margin-left: 300px;
  min-width: 59px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12pt;
}
.retvCondType > span:nth-child(5) {
  width: 200px;
  height: 28px;
  margin-right: 300px;
}
.retvCondType > span:nth-child(6) {
  margin-left: 10px;
}
.retvCondType > span:nth-child(7) {
  margin-left: 10px;
}
</style>
