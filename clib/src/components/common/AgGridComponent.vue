<template>
  <ag-grid-vue
    class="ag-grid"
    @grid-ready="onGridReady"
    @rowClicked="rowClicked"
    @first-data-rendered="onFirstDataRendered(isAutoSize)"
    :grid-options="gridOptions"
    :rowMultiSelectWithClick="isDeselect"
    :rowClassRules="rowClassRules"
    :suppressHorizontalScroll="noWidthScroll"
    :rowHeight="rowHeight"
    :headerHeight="headerHeight"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :overlayNoRowsTemplate="overlayNoRowsTemplate"
    :overlayLoadingTemplate="overlayLoadingTemplate"
    :suppressMovableColumns="true"
    :suppressRowTransform="true"
    :debounceVerticalScrollbar="true"
    :suppressColumnVirtualisation="true"
    :suppressRowVirtualisation="true"
    :rowSelection="rowSelection"
    :suppressCellSelection="true"
    :suppressMaxRenderedRowRestriction="true"
    :enableCellTextSelection="true"
    :enableBrowserTooltips="true"
  :suppressRowHoverHighlight="true"
  />
</template>
<!--:pinnedBottomRowData="pinnedBottomRowData"  하단에 결과 출력할때 사용-->
<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";

export default {
  name: "AgGridComponent",
  data() {
    return {
      windowWidth :window.innerWidth,
      gridApi: null,
      gridColumnApi: null,
      rowClassRules: null,
      allColumnIds:[],
      overlayLoadingTemplate: `<div class="ag-overlay-loading-center"> Loading... </div>`,
      // pinnedBottomRowData: null,
      servState :["사용중","예약(기설중)","정지","해지"],
      selectedRowData:''
    };
  },
  props: {
    rowSelection:{
      type:String,
      default:"single"
    },
    isAutoSize:{
      type:Array,
      default:[true, 'type1']
    },
    headerHeight:{
      type:String,
      default:30
    },
    isDeselect:{
      type: Boolean,
      default: false
    },
    headerColor:{
      type:String,
      default:"#f8f8f8"
    },
    rowData: Object,
    columnDefs:{
      type:Array,
      default:''
      },
    gridOptions: {},
    rowHeight:{
      type:Number,
      default:30
    },
    rowClicked: {
      //행 클릭 이벤트
      type: Function,
      default: function () {},
    },
    noWidthScroll: {
      //sizeColumnsToFit = 가로 스크롤 표시하지 않도록
      type: Boolean,
      default: false,
    },
    isAutoHeight: {
      //auto height = 세로 스크롤 표시하지 않도록
      type: Boolean,
      default: false,
    },
    overlayNoRowsTemplate: {
      type: String,
      default: `<span>  <br/> <strong>  조회 결과가 없습니다. </strong> <br> </span>`
    },
  },
  components: {
    AgGridVue,
  },
  watch:{
    windowWidth(){
      this.gridApi.sizeColumnsToFit(this.allColumnIds);
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  created() {
    this.pinnedBottomRowData = [{
    }];
  },
  methods: {
    loading() {
    },
    onGridReady(params) {;
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      this.$emit("getGridApi",this.gridApi)
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
    onFirstDataRendered(isAutoSize) {
      // console.log("onFirstDataRendered");
      if(isAutoSize[0]){
        this.makeNoRows();
        this.makeAutoWidth(isAutoSize[1]);
      }
    },
    makeAutoWidth(autoSizeType) {
      if (!this.noWidthScroll) {
        //가로 스크롤 = autosize
        this.allColumnIds= [];
        this.gridColumnApi.getColumns().forEach((column) => {
          this.allColumnIds.push(column.colId);
        });
        
        switch(autoSizeType){
          case "type1":
            this.gridApi.sizeColumnsToFit(this.allColumnIds);
            break;
          case "type2":
          this.gridColumnApi.autoSizeAllColumns(this.allColumnIds, false);
            break;
          case "type3":
          this.gridColumnApi.autoSizeAllColumns(this.allColumnIds);
          break;
          }

        // 여기 조율 필요합니다~~
        // this.gridColumnApi.autoSizeColumn(this.allColumnIds);            // 컬럼, data 전부 생략, 간격 맞춤  (스크롤바)
        // this.gridColumnApi.autoSizeAllColumns(this.allColumnIds, false);    // 컬럼은 생략됨 / data 전부 다 표시   (스크롤바)
        // this.gridColumnApi.autoSizeColumns(this.allColumnIds,false);     // 컬럼, data 전부 표시, 간격 맞춤 (스크롤바)
        // this.gridApi.sizeColumnsToFit(this.allColumnIds);                // 컬럼, data 전부 생략, 간격 맞추고 테이블 크기 맞춤 (NO 스크롤)
        // this.gridApi.gridBodyCtrl.eBodyViewport.style = "border-bottom:0px;"; //안쪽
      } else {
        this.gridApi.sizeColumnsToFit(); //끝까지 맞춤
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
    deselectAll(registerState){
      if (registerState==1 ){
        // this.$emit('selectedRowData', 'register');
        this.gridApi.deselectAll();
      }
    },
  },
};
</script>

<style>
.ag-grid {
  width: 100%;
  height: 100%;
  border-top: 1px solid #008b84;
  border-right: 1px solid #dfe5e9;
  border-bottom: 1px solid #dfe5e9;
  border-left: 1px solid #dfe5e9;
  background: #ffffff;
}
.ag-grid .ag-row {
  border-bottom: #e4e4e4 solid 1px;
  box-sizing: border-box;
}
.ag-grid .ag-row-nobottom {
  border-bottom: 0px;
}

.bbs_link.ag-grid .ag-row:hover {
  background-color: #edf5f6;
  cursor: pointer;
}
.ag-grid .ag-row:hover{
  background-color: rgb(255,254,238);
  cursor: pointer;
}
.ag-grid .ag-header {
  background-color: v-bind(headerColor);
  border-bottom: #e4e4e4 solid 1px;
  box-sizing: border-box;
}
.ag-grid .ag-header-cell {
  overflow: visible;
  border-bottom: #e4e4e4 solid 1px;
  /* 스크롤 위에도 border */
}

.ag-grid .ag-header-row {
  border-bottom: #e4e4e4 solid 1px;
  overflow: visible;
}

.ag-grid .ag-header-row:last-child {
  border-bottom: 0px;
  overflow: visible;
}

.ag-grid .ag-header-cell,
.ag-grid .ag-header-group-cell {
  border-left: #e4e4e4 solid 1px;
  font-weight: 600;
  justify-content: center;
}
.ag-grid .ag-header-first-child {
  border-left: 0;
}
.ag-grid .ag-header-cell-label,
.ag-header-group-cell-label {
  justify-content: center;
  height: 60px;
}

.ag-grid .ag-header-cell-text,
.ag-grid .ag-header-group-text {
  /* 글씨 크기
  font-size: 14px;
  color: #343434;

  text-overflow: clip;
  overflow: visible;
  white-space: normal;
  height: auto;
}
.ag-grid .ag-header-cell.rowspan2 {
  top: -38px;
  height: 76px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  border-bottom: 0;
}

.ag-grid .ag-header-cell.rowspan3 {
  top: -76px;
  height: 114px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  border-bottom: 0;
}

.ag-grid .ag-header-cell.rowspan3-45 {
  top: -90px;
  height: 135px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  border-bottom: 0;
}
.ag-grid .ag-cell {
  border-bottom: #efefef solid 1px;
  border-left: #e4e4e4 solid 1px;

   */
  /*  */
  font-size: 14px;
  color: #343434;
  padding:10px;
  line-height: 39px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}

.ag-grid .ag-cell-wrapper {
  color: inherit;
}

.ag-grid .ag-cell-label-container {
  width: auto;
}
.ag-grid .ag-row-selected{
  background-color: rgb(255,254,238);
}
.ag-grid .ag-checkbox-input::after{
  display: none;

}
.ag-grid .ag-checkbox-input.ag-checked::after{
  display: none;
}
.ag-grid .ag-cell-left {
  /* 왼쪽 정렬 */
  box-sizing: border-box;
  padding: 0 0 0 10px;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
}

.ag-grid .ag-cell-right {
  /* 오른쪽 정렬 */
  box-sizing: border-box;
  padding: 0 10px 0 0;
  text-align: right;
  justify-content: flex-end;
}

.ag-grid .ag-cell-red {
  color: #ed1820 !important;
}

.ag-grid .ag-ellipsis {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ag-grid .ag-piacard {
  /* 다국어처리 칸.. */
  word-break: break-all;
  line-height: 100%;
}

.ag-grid .ag-cell-subtotal {
  background-color: rgb(255, 255, 151);
  /* border-bottom: #e4e4e4 solid 1px; */
  /* border-top: #e4e4e4 solid 1px; */
  z-index: 1;
}

.ag-grid .ag-cell-subtotal2 {
  background-color: rgb(252, 203, 210);
  /* border-bottom: #e4e4e4 solid 1px; */
  /* border-top: #e4e4e4 solid 1px; */
  z-index: 1;
}

.ag-grid .ag-cell-total {
  background-color: lightblue;
  /* border-bottom: #e4e4e4 solid 1px; */
  /* border-top: #e4e4e4 solid 1px; */
  z-index: 1;
}
.ag-grid .ag-cell {
  border-bottom: #efefef solid 1px;
  border-left: #e4e4e4 solid 1px;
  font-size: 14px;
  color: #343434;

  line-height: 39px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}

.ag-grid .ag-cell-wrapper {
  color: inherit;
}

.ag-grid .ag-cell-label-container {
  width: auto;
}

.ag-grid .ag-cell-left {
  /* 왼쪽 정렬 */
  box-sizing: border-box;
  padding: 0 0 0 10px;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
}

.ag-grid .ag-cell-right {
  /* 오른쪽 정렬 */
  box-sizing: border-box;
  padding: 0 10px 0 0;
  text-align: right;
  justify-content: flex-end;
}

.ag-grid .ag-cell-red {
  color: #ed1820 !important;
}

.ag-grid .ag-ellipsis {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ag-grid .ag-piacard {
  /* 다국어처리 칸.. */
  word-break: break-all;
  line-height: 100%;
}

.ag-grid .ag-cell-subtotal {
  background-color: rgb(255, 255, 151);
  /* border-bottom: #e4e4e4 solid 1px; */
  /* border-top: #e4e4e4 solid 1px; */
  z-index: 1;
}

.ag-grid .ag-cell-subtotal2 {
  background-color: rgb(252, 203, 210);
  /* border-bottom: #e4e4e4 solid 1px; */
  /* border-top: #e4e4e4 solid 1px; */
  z-index: 1;
}

.ag-grid .ag-cell-total {
  background-color: lightblue;
  /* border-bottom: #e4e4e4 solid 1px; */
  /* border-top: #e4e4e4 solid 1px; */
  z-index: 1;
}

.ag-overlay-loading-center {
  width: 100%;
  height: 100%;
  justify-content: center;
  text-align: center;
  display: flex;
  background-color: #f8f8f8cc;
  align-items: center;
  font-weight: 600;
}
</style>
