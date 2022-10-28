<template>
  <ag-grid-vue
    class="ag-grid"
    @grid-ready="onGridReady"
    @rowClicked="rowClicked"
    @first-data-rendered="onFirstDataRendered"
    :grid-options="gridOptions"
    :rowClassRules="rowClassRules"
    :suppressMovableColumns="true"
    :suppressRowTransform="true"
    :suppressHorizontalScroll="isWidthFit"
    :rowHeight="37"
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
  />
</template>

<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";

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
    gridOptions: null,
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
      default: false,
    },
    overlayNoRowsTemplate: {
      type: String,
      default: `<span class="red"> <br><br>검색 결과가 없습니다. </span>`,
    },
  },
  components: {
    AgGridVue,
  },
  methods: {
    loading() {
      // console.log("loading");
      if (this.gridApi != null) this.gridApi.showLoadingOverlay();
    },
    onGridReady(params) {
      // console.log("onGridReady");
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      if (this.isAutoHeight) this.gridApi.setDomLayout("autoHeight");
      else {
        this.gridApi.setDomLayout("normal"); //정해진 만큼만 보이도록(+스크롤)
      }

      // 합계 색상, 마지막줄
      this.rowClassRules = {
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
        this.gridColumnApi.getColumns().forEach((column) => {
          allColumnIds.push(column.colId);
        });
        
        // 여기 조율 필요합니다~~
        // this.gridColumnApi.autoSizeColumn(allColumnIds);            // 컬럼, data 전부 생략, 간격 맞춤  (스크롤바)
        // this.gridColumnApi.autoSizeAllColumns(allColumnIds);        // 컬럼은 생략됨 / data 전부 다 표시   (스크롤바)
        // this.gridColumnApi.autoSizeColumns(allColumnIds,false);     // 컬럼, data 전부 표시, 간격 맞춤 (스크롤바)
        this.gridApi.sizeColumnsToFit(allColumnIds);                   // 컬럼, data 전부 생략, 간격 맞추고 테이블 크기 맞춤 (NO 스크롤)
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
      }
      // else {
      //   //데이터가 있는 경우
      //   this.gridApi.gridBodyCtrl.eBodyViewport.style.height = "";

      //   if (this.isAutoHeight) {
      //     this.gridApi.setDomLayout("autoHeight");
      //   } else {
      //     this.gridApi.setDomLayout("normal"); //정해진 만큼만 보이도록(스크롤)
      //   }
      // }
    },
  },
};
</script>

<style scoped></style>
