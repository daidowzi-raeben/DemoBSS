<template>
  <SubInfoTitle :subInfoTitleNm="subInfoTitleNm"/>
    (<label style="font-weight: bold">{{total}}</label>건)
  <ButtonComponent
      :btnClass="'btnclass2'"
      :btnName="btnName"/>
  <span style="float: right; margin: 3px">
     <select-box-component
         :selectClass="'select_input3'"
         :width="200"
         :cdGroup="cdGroup"
         :defaultValue="'선택'"
         :defaultNum="3"
         v-model="month"
         v-show="selectBoxShow"
         @input="
          (value) => {
            month = value;
          }
        "
     />
  </span>
  <div class="ag-grid_sp">
    <ag-grid-component
        :rowData="this.rowData"
        :columnDefs="this.columnDefs"
        :gridOptions="gridOptions"
        :isWidthFit="false"
    />
  </div>
</template>

<script>
import SelectBoxComponent from "@/components/common/SelectBoxComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
import AgGridComponent from "@/components/common/AgGridComponent";
import SubInfoTitle from "@/components/common/SubInfoTitle";
import ApiMixin from "@/service/common";

export default {
  mixins:[ApiMixin],
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
    columnDefs:null,
    rowData: null,
    subInfoTitleNm:null,
    selectBoxShow:null,
    gridOptions: null,
    cdGroup: null,
    btnName : null,
    total:null,
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