<template>
  <div>
    <article class="thisContainer">
      <div class="item1 NoticeSearch"> 
        <table>
        <tr>
          <th><label-component :labelNm="'조회기준'" /></th>
          
          <td>
            <select-box-component
              style="height: 28px"
              :selectClass="'select_input4'"
              :width="200"
              :cdGroup="'retvOptions'"
              :defaultValue="'조회기준 선택'"
              :isDisabled="true"
              :selectedValue="selectValues.selectValueOfRetv"
              @input="(value) => {selectValues.selectValueOfRetv = value;}"
            />
          </td>
          <td>
            <input-component
              style="width: 200px; height: 28px"
              :type="'search'"
              :inputClass="'class4'"
              :placeholder="'사원명 입력'"
              :value="selectValues.inputValueOfWord"
              v-model="selectValues.inputValueOfWord"
            />
          </td>
          <td colspan="2"></td>
          <td class="emptyBox1"></td>

          <th><label-component :labelNm="'게시일'" /></th>
          <td colspan="2">
            <div style="display: inline-block">
                  <date-picker-component
                  :p-date="selectValues.StDt"
                  @input="(value) => {selectValues.StDt = value;}"
                  :date-format="'yyyy-MM-dd'"
                  :classWrapper="'calender_input'"
                  />
                </div>
                <span> ~ </span>
                <div style="display: inline-block">
                  <date-picker-component
                  :isMinDate="selectValues.MinDt"
                  :pDate="selectValues.EndDt"
                  @input="(value) => {selectValues.EndDt = value;}"
                  :classWrapper="'calender_input'"
                  />
                </div>
          </td>

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
          <th><label-component :labelNm="'공지유형'" /></th>
          <td>
            <select-box-component
              style="height: 28px"
              :selectClass="'select_input4'"
              :width="200"
              :cdGroup="'NtfType'"
              :defaultValue="'공지유형 선택'"
              :isDisabled="true"
              :selectedValue="selectValues.selectValueOfNtfType"
              @input="(value) => {selectValues.selectValueOfNtfType = value;}"
            />
          </td>
          <td colspan="3"> </td>
          <td class="emptyBox1"></td>

          <th><label-component :labelNm="'사용여부'" /></th>
          <td>
            <select-box-component
              style="height: 28px"
              :selectClass="'select_input4'"
              :width="200"
              :cdGroup="'useYn'"
              :defaultValue="'사용여부 선택'"
              :isDisabled="true"
              :selectedValue="selectValues.selectValueOfUseYn"
              @input="(value) => {selectValues.selectValueOfUseYn = value;}"
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
              @click="resetRetvCond"
            />
          </td>
        </tr>
        </table>
      </div>


      <div class="item3"> a</div>
    </article>
  
  </div>
  
  
  </template>
  
  <script>
import ButtonComponent from '../components/common/ButtonComponent.vue'
import DatePickerComponent from '../components/common/DatePickerComponent.vue'
import InputComponent from '../components/common/InputComponent.vue'
import LabelComponent from '../components/common/LabelComponent.vue'
import SelectBoxComponent from '../components/common/SelectBoxComponent.vue'
  export default {
  components: { SelectBoxComponent, LabelComponent, ButtonComponent, DatePickerComponent, InputComponent, SubInfoTitle, AgGridComponent, PagingArea },
  data(){
    return{
      selectValues:{
        selectValueOfRetv : '조회기준 선택',
        inputValueOfWord : '검색어 입력',
        selectValueOfNtfType : '공지유형',
        selectValueOfUseYn : '사용여부',
        StDt: new Date(),
        MinDt : this.StDt,
        EndDt: new Date("2022-12-31"),
      },
      total:"1,234",
      btnNames: ["등록","변경","엑셀다운로드"],
    }
  }
  }
  </script>
  
  <style>
  .thisContainer {
    display: grid;
    grid-template-columns: 800px 750px 1fr;
    grid-template-rows: 100px 640px 1fr;
    gap: 20px 30px;
  }
  
  .thisContainer > .item1 {
    grid-row: 1;
    grid-column: 1/3;
  }
  .thisContainer > .item2 {
    grid-row: 2;
    grid-column: 1;
  }
  .thisContainer > .item3 {
    grid-row: 2;
    grid-column: 2;
  }

  
.NoticeSearch {
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  height: 100%;
}

.NoticeSearch > table {
  padding: 10px;
}
.NoticeSearch > table > tr {
  height: 35px;
}
.NoticeSearch > table > tr > th {
  margin-left: 10px;
  width: 60px;
  text-align: left;
}
.NoticeSearch > table > tr > td {
  width: 140px;
}

.NoticeSearch .emptyBox1 {
  width: 60px;
}
.NoticeSearch .emptyBox2 {
  width: 450px;
}
.NoticeSearch .btnBox {
  width: 80px;
}


