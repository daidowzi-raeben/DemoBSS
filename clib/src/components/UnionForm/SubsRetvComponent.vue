<template>
  <div class="cusSearch">
    <table>
      <tr>
        <th><label-component :labelNm="'조회구분'" /></th>
        <td>
          <select-box-component
            style="height: 28px"
            :width="'140px'"
             
            :cdGroup="'dummyOptions'"
            :isDisabled="true"
            :defaultValue="'선택'"
            :selectedValue="selectValues.selectValue1"
            @emitValue="
              (value) => {
                selectValues.selectValue1 = value;
              }
            "
          />
        </td>
        <td colspan="2">
          <input-component
            style="width: 100`%; height: 28px"
            :type="'search'"
            :inputClass="'class4'"
            :placeholder="'검색어 입력'"
            :value="selectValues.inputValue1"
            v-model="selectValues.inputValue1"
          />
        </td>
        <td></td>
        <td class="emptyBox1"></td>

        <th><label-component :labelNm="'청약 기간'" /></th>
        <td>
          <date-picker-component
            :classWrapper="'calender_input'"
            :width="'100%'"
            :height="'28px'"
            :pDate="selectValues.subsStDt"
            @emitValue="
              (value) => {
                selectValues.subsStDt = value;
              }
            "
          />
        </td>
        <td style="width: 3px">~</td>
        <td>
          <date-picker-component
            :classWrapper="'calender_input'"
            :width="'100%'"
            :height="'28px'"
            :pDate="selectValues.subsEndDt"
            @emitValue="
              (value) => {
                selectValues.subsEndDt = value;
              }
            "
          />
        </td>
        <!--300px -->
        <td class="emptyBox2"></td>
        <!--empty 280px -->
      </tr>
      <tr>
        <th><label-component :labelNm="'상품구분'" /></th>
        <td>
          <select-box-component
            style="height: 28px"
            :width="'140px'"
             
            :cdGroup="'dummyOptions'"
            :isDisabled="true"
            :defaultValue="'선택'"
            :selectedValue="selectValues.selectValue2"
            @emitValue="
              (value) => {
                selectValues.selectValue2 = value;
              }
            "
          />
        </td>
        <td>
          <select-box-component
            style="height: 28px"
            :width="'140px'"
             
            :cdGroup="'dummyOptions'"
            :isDisabled="true"
            :defaultValue="'선택'"
            :selectedValue="selectValues.selectValue3"
            @emitValue="
              (value) => {
                selectValues.selectValue3 = value;
              }
            "
          />
        </td>
        <td colspan="2">
          <input-component
            style="width: 100`%; height: 28px"
            :type="'search'"
            :inputClass="'class4'"
            :placeholder="'검색어 입력'"
            :value="selectValues.inputValue2"
            v-model="selectValues.inputValue2"
          />
        </td>

        <td class="emptyBox1"></td>
        <th><label-component :labelNm="'상태구분'" /></th>
        <td colspan="2">
          <select-box-component
            style="height: 28px"
            :width="'140px'"
             
            :cdGroup="'dummyOptions'"
            :isDisabled="true"
            :defaultValue="'선택'"
            :selectedValue="selectValues.selectValue4"
            @emitValue="
              (value) => {
                selectValues.selectValue4 = value;
              }
            "
          />
        </td>
        <td>
          <select-box-component
            style="height: 28px"
            :width="'140px'"
             
            :cdGroup="'dummyOptions'"
            :isDisabled="true"
            :defaultValue="'선택'"
            :selectedValue="selectValues.selectValue8"
            @emitValue="
              (value) => {
                selectValues.selectValue8 = value;
              }
            "
          />
        </td>
        <!--300px -->
        <td class="emptyBox2"></td>
        <!--empty 280px -->
        <td class="btnBox">
          <button-component
            :btnClass="'btn-type2'"
            :btnHeight="'28px'"
            :btnWidth="'78px'"
            :btnFontWeight="'bold'"
            :btnName="'초기화'"
            @click="resetRetvCond"  
          />
        </td>
        <td class="btnBox">
          <button-component
            :btn-class="'btn-type4'"
            :btnFontWeight="'bold'"
            :btn-name="'검색'"
            :btnHeight="'28px'"
            :btnWidth="'78px'"
            @click="search"
          />
        </td>
      </tr>
      <tr>
        <th><label-component :labelNm="'접수자'" /></th>
        <td>
          <select-box-component
            style="height: 28px"
            :width="'140px'"
             
            :cdGroup="'dummyOptions'"
            :isDisabled="true"
            :defaultValue="'선택'"
            :selectedValue="selectValues.selectValue5"
            @emitValue="
              (value) => {
                selectValues.selectValue5 = value;
              }
            "
          />
        </td>
        <td>
          <select-box-component
            style="height: 28px"
            :width="'140px'"
             
            :cdGroup="'dummyOptions'"
            :isDisabled="true"
            :defaultValue="'선택'"
            :selectedValue="selectValues.selectValue6"
            @emitValue="
              (value) => {
                selectValues.selectValue6 = value;
              }
            "
          />
        </td>
        <td>
          <select-box-component
            style="height: 28px"
            :width="'140px'"
             
            :cdGroup="'dummyOptions'"
            :isDisabled="true"
            :defaultValue="'선택'"
            :selectedValue="selectValues.selectValue7"
            @emitValue="
              (value) => {
                selectValues.selectValue7 = value;
              }
            "
          />
        </td>
        <td>
          <input-component
            style="width: 100`%; height: 28px"
            :type="'search'"
            :inputClass="'class4'"
            :placeholder="'검색어 입력'"
            :value="selectValues.inputValue3"
            v-model="selectValues.inputValue3"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import SubInfoTitle from "@/components/common/SubInfoTitle.vue";
import InputComponent from "@/components/common/InputComponent.vue";
import SelectBoxComponent from "@/components/common/SelectBoxComponent.vue";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import ChkBoxComponent from "@/components/common/ChkBoxComponent.vue";
import DatePickerComponent from "../common/DatePickerComponent.vue";
import LabelComponent from "../common/LabelComponent.vue";
export default {
  name: "CustomerSearchComponent",
  components: {
    SubInfoTitle,
    SelectBoxComponent,
    InputComponent,
    ButtonComponent,
    ChkBoxComponent,
    DatePickerComponent,
    LabelComponent,
  },
  data() {
    return {
      selectValues: {
        selectValue1: "",
        selectValue2: "",
        selectValue3: "",
        selectValue4: "",
        selectValue5: "",
        selectValue6: "",
        selectValue7: "",
        selectValue8: "",
        selectValue9: "",
        inputValue1 : null,
        inputValue2 : null,
        inputValue3 : null,
        subsStDt :  new Date(),
        subsEndDt : new Date("2023-01-31"),
      },
      totalValue:[]
    };
  },
  methods:{
    resetRetvCond(){
        this.selectValues.selectValue1= "";
        this.selectValues.selectValue2= "";
        this.selectValues.selectValue3= "";
        this.selectValues.selectValue4= "";
        this.selectValues.selectValue5= "";
        this.selectValues.selectValue6= "";
        this.selectValues.selectValue7= "";
        this.selectValues.selectValue8= "";
        this.selectValues.selectValue9= "";
        this.selectValues.inputValue1= null;
        this.selectValues.inputValue2= null;
        this.selectValues.inputValue3= null;
        this.selectValues.subsStDt = new Date();
        this.selectValues.subsEndDt = new Date("9999-12-31");
    },
    search(){
      this.totalValue.push(this.selectValues.selectValue1);
      this.totalValue.push(this.selectValues.selectValue2);
      this.totalValue.push(this.selectValues.selectValue3);
      this.totalValue.push(this.selectValues.selectValue4);
      this.totalValue.push(this.selectValues.selectValue5);
      this.totalValue.push(this.selectValues.selectValue6);
      this.totalValue.push(this.selectValues.selectValue7);
      this.totalValue.push(this.selectValues.selectValue8);
      this.totalValue.push(this.selectValues.selectValue9);
      this.totalValue.push(this.selectValues.inputValue1);
      this.totalValue.push(this.selectValues.inputValue2);
      this.totalValue.push(this.selectValues.inputValue3);
      this.totalValue.push(this.selectValues.subsStDt);
      this.totalValue.push(this.selectValues.subsEndDt);
      this.$emit("emitValue",this.totalValue);

    }
  },
  props: {
    cdGroup: null,
  },
};
</script>

<style scoped>
.cusSearch {
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
  width: 270px;
}
.btnBox {
  width: 80px;
}
</style>
