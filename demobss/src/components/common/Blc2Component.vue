<template>
  <div style="width: 100%">
    <SubInfoTitle :subInfoTitleNm="subInfoTitleNm"/>
    <p style="margin-left:5px; display:inline-block;">(총 <label style="font-weight: bold">{{total}}</label>건)</p>
    <span style="float: right">
      <button-component :btnClass="'btnClass3'" :btnName="btnName1" />
      <button-component :btnClass="'btnClass3'" :btnName="btnName2" />
      <button-component :btnClass="'btnClass3'" :btnName="btnName3" />
    </span>
    <span style="float: right">
    <select-box-component
        :selectClass="'select_input3'"
        :cdGroup="'optionSearchNum'"
        :defaultValue="'선택'"
        v-model="month"
        style="
        width: 80px;
        height: 26px;
        margin-right: 15px;"
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
    <ag-grid-component2
    
    />
    <div>
      <paging-area
      :pageableData="pageableData"
      @currentPage="(value) => {page = value;}"
      />
    </div>
  </div>
</template>

<script>
import SelectBoxComponent from "@/components/common/SelectBoxComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
import AgGridComponent2 from "@/components/common/AgGridComponent2";
import SubInfoTitle from "@/components/common/SubInfoTitle";
import ApiMixin from "@/service/common";
import PagingArea from '@/components/common/PagingArea.vue';

export default {
  mixins:[ApiMixin],
  name: "BlcComponent",
  components:{
    SelectBoxComponent,
    ButtonComponent,
    AgGridComponent2,
    SubInfoTitle,
    PagingArea
  },
  data(){
    return {
      month:0,
      pageableData: {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 10,
        totalPages: 45,
      },
      page:1,
    }
  },
  props: {
    agGirdHeight:{
      default:"245px",
      type:String,
    },
    columnDefs:null,
    rowData: null,
    subInfoTitleNm:null,
    selectBoxShow:null,
    gridOptions: null,
    cdGroup: null,
    btnName1 : String,
    btnName2 : String,
    btnName3 : String,
    total:null,
  },
  methods:{
    
  },
}
</script>

<style scoped>
.ag-grid_sp{
  /* margin: 10px; */
  width: 100%;
  height: v-bind('agGirdHeight');
  border-top: 3px solid rgb(27,114,212);
}
</style>