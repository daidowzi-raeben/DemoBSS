<template>
  <div style="width: 100%">
  <SubInfoTitle :subInfoTitleNm="subInfoTitleNm"/>
    <p style="margin-left:5px; display:inline-block;">(총 <label style="font-weight: bold">{{total}}</label>건)</p>
    <span style="float: right">
  <ButtonComponent
      :btnClass="'btnClass3'"
      :btnName="btnName"
      />
    </span>
    <span style="float: right" v-show="selectBoxShow">
    <select-box-component
        :selectClass="'select-type1'"
        :cdGroup="cdGroup"
        :defaultValue="'선택'"
        v-model="month"
        style="
        width: 120px;
        height: 26px;
        margin-right: 15px;"
        @emitValue="
          (value) => {
            month = value;
          }
        "
    />
      </span>
  </div>
  <div class="ag-grid_sp" v-if="!bill">
    <ag-grid-component
        :header-color="headerColor"
        :rowData="this.rowData"
        :columnDefs="this.columnDefs"
        :isWidthFit="false"
    />
  </div>
  <div class="ag-grid_sp2" v-if="bill">
    <ag-grid-component
        :header-color="headerColor"
        :rowData="this.rowData"
        :rowClicked="clickedRow"
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
    agGirdHeight:{
      default:"245px",
      type:String,
    },
    headerColor:null,
    bill:{
      type:Boolean,
      default:false,
    },
    columnDefs:null,
    rowData: null,
    subInfoTitleNm:null,
    selectBoxShow:null,
    gridOptions: null,
    cdGroup: null,
    btnName : null,
  },
  methods:{
    clickedRow(params){
      console.log(params);
    }
  }

}
</script>

<style scoped>
.ag-grid_sp{
  /* margin: 10px; */
  width: 100%;
  height: v-bind('agGirdHeight');
  border-top: 3px solid rgb(27,114,212);
}
.ag-grid_sp2{
  width: 100%;
  height: 332px;
}
</style>
