<template>
  <div class="userSearch">
    <table>
      <tr>
        <th><label-component :labelNm="'직무'" /></th>
        <td>
          <select-box-component
            :selectClass="'select_input4'"
            :cdGroup="'dutySelect'"
            :defaultValue="'직무 선택'"
            :isDisabled="true"
            @input="(value) => {selectValue = value;}"
            :width="140"
            style="height: 28px"
            v-model="selectValue"
          />
        </td>
        <td colspan="3"></td>
        <td class="emptyBox1"></td>

        <th><label-component :labelNm="'직책'" /></th>
        <td>
          <select-box-component
            :selectClass="'select_input4'"
            :cdGroup="'rspof'"
            :defaultValue="'직책 선택'"
            :isDisabled="true"
            @input="(value) => {selectValue = value;}"
            :width="200"
            style="height: 28px"
            v-model="selectValue"
          />
        </td>
        <td class="emptyBox2"></td>

        <td class="btnBox">
          <button-component
            :btn-class="'btnClass4'"
            :btnFontWeight="'bold'"
            :btn-name="'검색'"
            :btnHeight="'28px'"
            :btnWidth="'78px'"
          />
        </td>
      </tr>

      <tr>
        <th><label-component :labelNm="'조직'" /></th>
        <td>
          <select-box-component
            :selectClass="'select_input4'"
            :cdGroup="'orgSelect'"
            :defaultValue="'조직 선택'"
            :isDisabled="true"
            @input="
              (value) => {
                selectValue = value;
              }
            "
            :width="140"
            style="height: 28px"
            v-model="selectValue"
          />
        </td>
        <td>
          <select-box-component
            :selectClass="'select_input4'"
            :cdGroup="'orgSelect'"
            :defaultValue="'조직 선택'"
            :isDisabled="true"
            @input="
              (value) => {
                selectValue = value;
              }
            "
            :width="140"
            style="height: 28px"
            v-model="selectValue"
          />
        </td>
        <td>
          <select-box-component
            :selectClass="'select_input4'"
            :cdGroup="'orgSelect'"
            :defaultValue="'조직 선택'"
            :isDisabled="true"
            @input="
              (value) => {
                selectValue = value;
              }
            "
            :width="140"
            style="height: 28px"
            v-model="selectValue"
          />
        </td>
        <td>
          <input-component
            :type="'search'"
            :inputClass="'class4'"
            :placeholder="'사원명 입력'"
            @input="
              (value) => {
                searchValue = value;
              }
            "
            v-model="searchValue"
            style="width: 100%; height: 28px"
          />
        </td>

        <td class="emptyBox1"></td>
        <th><label-component :labelNm="'재직상태'" /></th>
        <td>
          <select-box-component
            :selectClass="'select_input4'"
            :cdGroup="'inOfficeSttus'"
            :defaultValue="'재직상태 선택'"
            :isDisabled="true"
            @input="
              (value) => {
                selectValue = value;
              }
            "
            :width="200"
            style="height: 28px"
            v-model="selectValue"
          />
        </td>
        <td class="emptyBox2"></td>

        <td>
          <button-component
            :btnClass="'btnClass5'"
            :btnHeight="'28px'"
            :btnWidth="'78px'"
            :btnFontWeight="'bold'"
            :btnName="'초기화'"
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
import DatePickerComponent from "./DatePickerComponent.vue";
import LabelComponent from "./LabelComponent.vue";
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
      selectValue: null,
      searchValue: null,
    };
  },
  props: {
    cdGroup: null,
    titleShow: null,
  },
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
