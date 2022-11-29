<template>
  <div style="width: 100%">
  <SubInfoTitle :subInfoTitleNm="subInfoTitleNm"/>
    (<label style="font-weight: bold">{{total}}</label>건)
    <span style="float: right">
  <ButtonComponent
      :btnClass="'btnClass3'"
      :btnName="btnName"
      />
    <select-box-component
        :selectClass="'select_input3'"
        :cdGroup="cdGroup"
        :defaultValue="'선택'"
        v-model="month"
        style="
        width: 120px;
        height: 26px;
        margin-right: 5px;"
        v-show="selectBoxShow"
        @input="
          (value) => {
            month = value;
          }
        "
    />
      </span>
  </div>
  <div class="ag-grid_sp">
    <ag-grid-component
        :rowData="this.rowData"
        :columnDefs="this.columnDefs"
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
  name: "BlcComponent",
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
  /* margin: 10px; */
  width: 100%;
  height: 245px;
  border-top: 3px solid rgb(27,114,212);
}
</style>