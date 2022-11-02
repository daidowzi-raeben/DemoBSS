<template>
  <SubInfoTitle :subInfoTitleNm="subInfoTitleNm"/>
    (<label style="font-weight: bold">6</label>건)
  <ButtonComponent
      :btnClass="'btnclass2'"
      :btnName="'엑셀다운'"/>
  <span style="float: right; margin: 3px">
     <select-box-component
         :selectClass="'select_input3'"
         :width="200"
         :cdGroup="'optionsSearchDiv'"
         :defaultValue="'선택'"
         :defaultNum="3"
         v-model="month"
         @input="
          (value) => {
            month = value;
          }
        "
     />
  </span>
  <span style="float: right; margin: 3px; font-weight: bold">최근 개월 수</span>
  <div class="ag-grid_sp">
    <ag-grid-component
        :rowData="rowData"
        :columnDefs="columnDefs"
        :grid-options="gridOptions"
    />
  </div>
</template>

<script>
import SelectBoxComponent from "@/components/common/SelectBoxComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
import AgGridComponent from "@/components/common/AgGridComponent";
import SubInfoTitle from "@/components/common/SubInfoTitle";

export default {
  name: "BoxComponent",
  components:{
    SelectBoxComponent,
    ButtonComponent,
    AgGridComponent,
    SubInfoTitle,
  },
  data() {
    return {
      month:0,
    }
  },
  props: {
    subInfoTitleNm:null,
    rowData: null,
    columnDefs: null,
    gridOptions: null,
  },
}
</script>

<style scoped>
.ag-grid_sp{
  margin: 10px;
  width: 100%;
  height: 100%;
  border: groove;
  border-top-color: #2dbdb6;
}
</style>