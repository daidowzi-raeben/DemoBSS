<template>
  <div class="userSearch">
    <table>
      <tr>
        <th><label-component :labelNm="'직무'" /></th>
        <td>
          <select-box-component
            style="height: 28px"
            :width="'140px'"
            :cdGroup="'dutySelect'"
            :defaultValue="'직무 선택'"
            :isDisabled="true"
            :selectedValue="selectValues.selectValueOfDuty"
            @emitValue="(value) => {selectValues.selectValueOfDuty = value;}"
          />
        </td>
        <td colspan="3"></td>
        <td class="emptyBox1"></td>

        <th><label-component :labelNm="'직책'" /></th>
        <td>
          <select-box-component
            style="height: 28px"
            :width="'200px'"
            :cdGroup="'rspof'"
            :defaultValue="'직책 선택'"
            :isDisabled="true"
            :selectedValue="selectValues.selectValueOfRspof"
            @emitValue="(value) => {selectValues.selectValueOfRspof = value;}"
          />
        </td>
        <td class="emptyBox2"></td>

        <td class="btnBox">
          <button-component
            :btn-class="'btn-type4'"
            :btnFontWeight="'bold'"
            :btn-name="'검색'"
            :btnHeight="'28px'"
            :btnWidth="'78px'"
            @click="searchRetvCond"
          />
        </td>
      </tr>

      <tr>
        <th><label-component :labelNm="'조직'" /></th>
        <td>
          <select-box-component
            style="height: 28px"
            :width="'140px'"
            :cdGroup="'orgSelect'"
            :defaultValue="'조직 선택1'"
            :isDisabled="true"
            :selectedValue="selectValues.selectValueOfOrg1"
            @emitValue="(value) => {selectValues.selectValueOfOrg1 = value;}"
          />
        </td>
        <td>
          <select-box-component
            style="height: 28px"
            :width="'140px'"
            :cdGroup="'orgSelect'"
            :defaultValue="'조직 선택2'"
            :isDisabled="true"
            :selectedValue="selectValues.selectValueOfOrg2"
            @emitValue="(value) => {selectValues.selectValueOfOrg2 = value;}"
          />
        </td>
        <td>
          <select-box-component
            style="height: 28px"
            :width="'140px'"
            :cdGroup="'orgSelect'"
            :defaultValue="'조직 선택3'"
            :isDisabled="true"
            :selectedValue="selectValues.selectValueOfOrg3"
            @emitValue="(value) => {selectValues.selectValueOfOrg3 = value;}"
          />
        </td>
        <td>
          <input-component
            style="width: 100%; height: 28px"
            :type="'search'"
            :inputClass="'input-type4'"
            :placeholder="'사원명 입력'"
            :value="selectValues.inputValueOfEmpNm"
            v-model="selectValues.inputValueOfEmpNm"
          />
        </td>

        <td class="emptyBox1"></td>
        <th><label-component :labelNm="'재직상태'" /></th>
        <td>
          <select-box-component
            style="height: 28px"
            :width="'200px'"
            :cdGroup="'inOfficeSttus'"
            :defaultValue="'재직상태 선택'"
            :isDisabled="true"
            :selectedValue="selectValues.selectValueOfinOfficeSttus"
            @emitValue="(value) => {selectValues.selectValueOfinOfficeSttus = value;}"
            />
        </td>
        <td class="emptyBox2"></td>
        <td>
          <button-component
            :btnClass="'btn-type2'"
            :btnHeight="'28px'"
            :btnWidth="'78px'"
            :btnFontWeight="'bold'"
            :btnName="'초기화'"
            @click="resetRetvCond"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import InputComponent from "@/components/common/InputComponent.vue";
import SelectBoxComponent from "@/components/common/SelectBoxComponent.vue";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import LabelComponent from "../common/LabelComponent.vue";
export default {
  name: "UserAdmRetvComponent",
  components: {
    SelectBoxComponent,
    InputComponent,
    ButtonComponent,
    LabelComponent,
  },
  data() {
    return {
      selectValues : {
      selectValueOfDuty : "",
      selectValueOfRspof : "",
      selectValueOfOrg1 : "",
      selectValueOfOrg2 : "",
      selectValueOfOrg3 : "",
      inputValueOfEmpNm : "",
      selectValueOfinOfficeSttus : "",
      },
      retvMenuValues:[],
    };
  },
  props: {
    cdGroup: null,
  },
  methods:{
     resetRetvCond(){
      //console.log(this.selectValues);
      console.log(this.selectValues.selectValueOfinOfficeSttus);
      this.selectValues.selectValueOfDuty = "" ;
      this.selectValues.selectValueOfRspof = "" ;
      this.selectValues.selectValueOfOrg1 = "" ;
      this.selectValues.selectValueOfOrg2 = "" ;
      this.selectValues.selectValueOfOrg3 = "" ;
      this.selectValues.inputValueOfEmpNm = "" ;
      this.selectValues.selectValueOfinOfficeSttus = "";
      console.log(this.selectValues);
    },
    searchRetvCond(){
      this.retvMenuValues["Duty"] = this.selectValues.selectValueOfDuty;
      this.retvMenuValues["Rspof"] = this.selectValues.selectValueOfRspof;
      this.retvMenuValues["Org1"] = this.selectValues.selectValueOfOrg1;
      this.retvMenuValues["Org2"] = this.selectValues.selectValueOfOrg2;
      this.retvMenuValues["Org3"] = this.selectValues.selectValueOfOrg3;
      this.retvMenuValues["inputValueOfEmpNm"] = this.selectValues.inputValueOfEmpNm;
      this.retvMenuValues["inOfficeSttus"] = this.selectValues.selectValueOfinOfficeSttus;
      console.log(this.selectValues);
      this.$emit("emitValue",this.retvMenuValues);
     }
  },
  watch:{
    selectValues(newSelectedValue){
      this.selectValues = newSelectedValue;
      //console.log(this.selectValues)
    }
  }
};
</script>

<style scoped>
.userSearch {
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  height: 100%;
}

table {
  padding: 10px;
}
table > tr {
  height: 35px;
}
table > tr > th {
  margin-left: 10px;
  width: 60px;
  text-align: left;
}
table > tr > td {
  width: 140px;
}

.emptyBox1 {
  width: 60px;
}
.emptyBox2 {
  width: 450px;
}
.btnBox {
  width: 80px;
}
</style>
