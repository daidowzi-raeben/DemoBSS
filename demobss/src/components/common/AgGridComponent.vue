<template>
  <ag-grid-vue
    class="ag-grid"
    @grid-ready="onGridReady"
    @rowClicked="rowClicked"
    @first-data-rendered="onFirstDataRendered"
    :rowClassRules="rowClassRules"
    :suppressMovableColumns="true"
    :suppressRowTransform="true"
    :suppressHorizontalScroll="isWidthFit"
    :rowHeight="39"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :overlayNoRowsTemplate="overlayNoRowsTemplate"
    :overlayLoadingTemplate="overlayLoadingTemplate"
    :debounceVerticalScrollbar="true"
    :suppressColumnVirtualisation="true"
    :suppressRowVirtualisation="true"
    :suppressMaxRenderedRowRestriction="true"
    :enableCellTextSelection="true"
    :enableBrowserTooltips="true"
  >
  </ag-grid-vue>
</template>

<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "AgGridComponent",
  data() {
    return {
      gridApi: null,
      gridColumnApi: null,
      rowClassRules: null,
      overlayLoadingTemplate: `<div class="ag-overlay-loading-center"> Loading... </div>`,
    };
  },
  props: {
    rowData: null,
    columnDefs: null,
    rowClicked: {
      //행 클릭 이벤트
      type: Function,
      default: function () {},
    },
    isWidthFit: {
      //sizeColumnsToFit = 가로 스크롤 표시하지 않도록
      type: Boolean,
      default: true,
    },
    isAutoHeight: {
      //auto height = 세로 스크롤 표시하지 않도록
      type: Boolean,
      default: true,
    },
    overlayNoRowsTemplate: {
      type: String,
      default: `<span class="red"> <br><br>검색 결과가 없습니다. </span>`,
    },
    mergeGroupHeader: {
      //계약목록상세 -- 헤더 병합
      type: Boolean,
      default: false,
    },
    headerHeight: {
      type: Number,
      default: 38,
    },
  },
  components: {
    AgGridVue,
  },
  updated() {
    // console.log("UPDATE");
    this.makeNoRows();
    this.makeAutoWidth();
  },
  methods: {
    loading() {
      // console.log("loading");
      if (this.gridApi != null) this.gridApi.showLoadingOverlay();
    },
    makeGroupHeight() {
      //계약목록상세 -- 헤더 병합
      this.gridApi.setHeaderHeight(0);
      this.gridApi.setGroupHeaderHeight(this.headerHeight);
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;

      if (this.isAutoHeight) this.gridApi.setDomLayout("autoHeight");
      else this.gridApi.setDomLayout("normal"); //정해진 만큼만 보이도록(+스크롤)

      this.gridApi.setHeaderHeight(this.headerHeight);
      if (this.mergeGroupHeader) this.makeGroupHeight(); //계약목록상세 -- 헤더 병합

      // 합계 색상, 마지막줄
      this.rowClassRules = {
        "ag-cell-total": function (params) {
          return params.data.dataType == "합계";
        },
        "ag-cell-subtotal": function (params) {
          return params.data.dataType == "소계";
        },
        "ag-cell-subtotal2": function (params) {
          return params.data.dataType == "소계2";
        },
        "ag-row-nobottom": function (params) {
          return (
            params.node.rowIndex == params.api.rowModel.rowsToDisplay.length - 1
          ); //마지막줄 row bottom 제거
        },
      };
    },
    onFirstDataRendered() {
      // console.log("onFirstDataRendered");
      this.makeNoRows();
      this.makeAutoWidth();
    },
    makeAutoWidth() {
      if (!this.isWidthFit) {
        //가로 스크롤 = autosize
        const allColumnIds = [];
        this.gridColumnApi.getAllColumns().forEach((column) => {
          allColumnIds.push(column.colId);
        });
        this.gridColumnApi.autoSizeColumns(allColumnIds, false);
        // this.gridApi.gridBodyCtrl.eBodyViewport.style = "border-bottom:0px;"; //안쪽
      } else {
        this.gridApi.sizeColumnsToFit(); //끝까지 맞춤
        // console.log("끝까지 맞춤 ");
      }
    },
    makeNoRows() {
      if (this.rowData == null || this.rowData.length == 0) {
        //데이터가 없는 경우
        //overlayNoRowsTemplate 출력됨

        // this.gridApi.gridBodyCtrl.eBodyViewport.style = "height:90px; ";
        this.gridApi.gridBodyCtrl.eBodyViewport.style.height = "90px";
        // border-bottom:#e4e4e4 solid 1px;

        if (!this.isAutoHeight) {
          this.gridApi.setDomLayout("normal");
        }
        // this.gridApi.showNoRowsOverlay();
        // console.log("NO DATA");
      } else {
        //데이터가 있는 경우
        this.gridApi.gridBodyCtrl.eBodyViewport.style.height = "";

        if (this.isAutoHeight) {
          this.gridApi.setDomLayout("autoHeight");
        } else {
          if (this.rowData.length > 8) {
            this.gridApi.setDomLayout("normal"); //정해진 만큼만 보이도록(스크롤)
          } else {
            this.gridApi.setDomLayout("autoHeight");
          }
        }
      }
    },
  },
};
</script>

<style scoped></style>
