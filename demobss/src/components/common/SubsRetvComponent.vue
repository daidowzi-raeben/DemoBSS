<template>
<div class="cusSearch">
  <table>
    <tr>
      <th>조회구분</th>
      <td>
        <select-box-component
        :selectClass="'select_input3'"
        :select_input3_marginLeft="'0px'"
        :cdGroup="cdGroup"
        :defaultValue="'선택'"
        @input=" (value) => { searchDiv = value;}"
        :width="140"
        style="height:28px;"
        v-model="searchDiv"
        />
      </td>
      <td colspan="2">
        <input-component
        :type="'search'"
        :inputClass="'class4'"
        :placeholder="'검색어 입력'"
        @input=" (value) => { searchValue = value;}"
        v-model="searchValue"
        style="width:100%; height:28px"
        />
      </td>
      <td></td> <td class="emptyBox1"></td>
      
      <th> 청약 기간</th>
      <td >
        <date-picker-component
        :classWrapper="'calender_input'"
        :width="'100%'"
        :height="'28px'"
        :pPlaceholder="'2022.01.01'"
        :pDate="date3"
        @input=" (value) => {date3 = value;}"
        /> 
      </td>
      <td style="width:3px;"> ~ </td>
      <td>
        <date-picker-component
        :classWrapper="'calender_input'"
        :width="'100%'"
        :height="'28px'"
        :pPlaceholder="'2022.01.01'"
        :pDate="date4"
        @input="(value) => {date4 = value;}"
        /> 
      </td>  <!--300px -->
      <td  class="emptyBox2"></td>    <!--empty 280px -->
    </tr>
    <tr>
      <th>상품구분</th>
      <td>
        <select-box-component
        :selectClass="'select_input3'"
        :select_input3_marginLeft="'0px'"
        :cdGroup="cdGroup"
        :defaultValue="'선택'"
        @input=" (value) => { searchDiv = value;}"
        :width="140"
        style="height:28px;"
        v-model="searchDiv"
        /></td>
      <td>
        <select-box-component
        :selectClass="'select_input3'"
        :select_input3_marginLeft="'0px'"
        :cdGroup="cdGroup"
        :defaultValue="'선택'"
        @input=" (value) => { searchDiv = value;}"
        :width="140"
        style="height:28px;"
        v-model="searchDiv"
        /></td>
      <td colspan="2">
        <input-component
        :type="'search'"
        :inputClass="'class4'"
        :placeholder="'상품명 입력'"
        @input=" (value) => { searchValue = value;}"
        v-model="searchValue"
        style="width:100%; height:28px"
        /></td>

      <td class="emptyBox1"></td>
      <th>상태구분</th>
      <td colspan=2 >
        <select-box-component
        :selectClass="'select_input3'"
        :select_input3_marginLeft="'0px'"
        :cdGroup="cdGroup"
        :defaultValue="'선택'"
        @input=" (value) => { searchDiv = value;}"
        :width="150"
        style="height:28px;"
        v-model="searchDiv"
        /> 
          </td><td>

        <select-box-component
        :selectClass="'select_input3'"
        :select_input3_marginLeft="'0px'"
        :cdGroup="cdGroup"
        :defaultValue="'선택'"
        @input=" (value) => { searchDiv = value;}"
        :width="140"
        style="height:28px;"
        v-model="searchDiv"
        />
        </td>  <!--300px -->
      <td  class="emptyBox2"></td>    <!--empty 280px -->
      <td class="btnBox"  > 
        <button-component 
        :btnClass="'btnClass5'" 
        :btnHeight="'28px'"
        :btnWidth ="'78px'"
        :btnFontWeight="'bold'"
        :btnName="'초기화'"/> 
      </td>
      <td class="btnBox" > 
        <button-component
        :btn-class="'btnClass4'"
        :btnFontWeight="'bold'"
        :btn-name ="'검색'"
        :btnHeight="'28px'"
        :btnWidth ="'78px'"
        /></td>
    </tr>
    <tr>
      <th>접수자</th>
      <td>
        <select-box-component
        :selectClass="'select_input3'"
        :select_input3_marginLeft="'0px'"
        :cdGroup="cdGroup"
        :defaultValue="'선택'"
        @input=" (value) => { searchDiv = value;}"
        :width="140"
        style="height:28px;"
        v-model="searchDiv"
        />
        </td>
      <td>
        <select-box-component
        :selectClass="'select_input3'"
        :select_input3_marginLeft="'0px'"
        :cdGroup="cdGroup"
        :defaultValue="'선택'"
        @input=" (value) => { searchDiv = value;}"
        :width="140"
        style="height:28px;"
        v-model="searchDiv"
        />
        </td>
      <td>
        <select-box-component
        :selectClass="'select_input3'"
        :select_input3_marginLeft="'0px'"
        :cdGroup="cdGroup"
        :defaultValue="'선택'"
        @input=" (value) => { searchDiv = value;}"
        :width="140"
        style="height:28px;"
        v-model="searchDiv"
        />
        </td>
      <td>
        <input-component
        :type="'search'"
        :inputClass="'class4'"
        :placeholder="'사원명 입력'"
        @input=" (value) => { searchValue = value;}"
        v-model="searchValue"
        style="width:100%; height:28px"
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
import ChkBoxComponent from '@/components/common/ChkBoxComponent.vue';
import DatePickerComponent from './DatePickerComponent.vue';
export default {
  name: "CustomerSearchComponent",
  components:{SubInfoTitle,
              SelectBoxComponent, 
              InputComponent,
              ButtonComponent,
              ChkBoxComponent,
    DatePickerComponent,
            },
  data(){
    return{
      searchDiv :null,
      searchValue:null,
    }
  },
  props:{
    cdGroup:null,
    titleShow:null,
  }
}
</script>

<style scoped>
.cusSearch{
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  height: 100%;
}

table{
  padding: 10px;
}
table > tr{
  height: 35px;
}
table > tr > th{
  margin-left: 10px;
  width: 60px;
  text-align: left;

  
}
table > tr > td{
  width: 140px;
}

.emptyBox1{
  width: 60px;
}
.emptyBox2{
  width: 270px;
}
.btnBox{
  width: 80px;
}
</style>
