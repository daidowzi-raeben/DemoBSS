<template>
  <div style="width: 100%">
    <SubInfoTitle :subInfoTitleNm="subInfoTitleNm" />
    <p style="margin-left: 5px; display: inline-block">
      (총 <label style="font-weight: bold">{{ total }}</label>건)
    </p>
    <span style="float: right">
      <button-component :btnClass="'btnClass3'" :btnName="btnName1" />
      <button-component :btnClass="'btnClass3'" :btnName="btnName2" />
      <button-component :btnClass="'btnClass3'" :btnName="btnName3" />
    </span>
    <span style="float: right">
      <select-box-component
        :selectClass="'select-type1'"
        :cdGroup="'optionSearchNum'"
        :defaultValue="'선택'"
        v-model="month"
        style="width: 80px; height: 26px; margin-right: 15px"
        v-show="selectBoxShow"
        @emitValue=" (value) => { month = value; }"
      />
    </span>
  </div>
  <div class="ag-grid_sp">
    <Ag-grid-component
    :overlayNoRowsTemplate="noRowTemplateMsg"
    :rowData="rowData" 
    :columnDefs="columnDefs" />
    <div>
      <paging-component
        :pageableData="pageableData"
        @currentPage=" (value) => { page = value;}"
      />
    </div>
  </div>
</template>

<script>
import SelectBoxComponent from "@/components/common/SelectBoxComponent";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import SubInfoTitle from "@/components/common/SubInfoTitle";
import ApiMixin from "@/service/common";
import PagingComponent from "@/components/common/PagingComponent.vue";
import AgGridComponent from "@/components/common/AgGridComponent.vue";

export default {
  mixins: [ApiMixin],
  name: "BlcComponent",
  components: {
    SelectBoxComponent,
    ButtonComponent,
    SubInfoTitle,
    PagingComponent,
    AgGridComponent,
  },
  data() {
    return {
      noRowTemplateMsg: `<span> <strong>  조회 결과가 없습니다. </strong> <br><br><br> </span>`,
      month: 0,
      pageableData: {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 10,
        totalPages: 45,
      },
      page: 1,
    };
  },
  props: {
    agGirdHeight: {
      default: "245px",
      type: String,
    },
    columnDefs: [],
    rowData: "",
    subInfoTitleNm: null,
    selectBoxShow: null,
    cdGroup: null,
    btnName1: String,
    btnName2: String,
    btnName3: String,
    total: null,
  },
};
</script>

<style scoped>
.ag-grid_sp {
  width: 100%;
  height: v-bind("agGirdHeight");
  border-top: 3px solid rgb(27, 114, 212);
}
</style>
