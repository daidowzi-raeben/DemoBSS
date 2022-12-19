<template>
  <div class="top-container">
    <div class="grid-wrapper ag-theme-alpine">
      <sub-info-title :subInfoTitleNm="leftTitle"/>
      <p style="margin-left:5px; display:inline-block;">(총 <label style="font-weight: bold">{{ total }}</label>건)</p>
      <div class="panel panel-primary" style="height: 260px;">
          <ag-grid-vue
              class="ag-grid"
              style="height: 100%;"
              :defaultColDef="defaultColDef"
              @first-data-rendered="onFirstDataRendered"
              rowSelection="multiple"
              :rowDragMultiRow="true"
              :rowClassRules="rowClassRules"
              :suppressRowClickSelection="true"
              :getRowNodeId="getRowNodeId"
              headerHeight="30"
              :rowDragManaged="true"
              :overlayNoRowsTemplate="overlayNoRowsTemplate"
              :overlayLoadingTemplate="overlayLoadingTemplate"
              :suppressMoveWhenRowDragging="true"
              :animateRows="true"
              :rowData="leftRowData"
              :columnDefs="Columns"
              @grid-ready="onGridReady($event, 0)"
              :modules="modules">
          </ag-grid-vue>
      </div>
      <br />
      <sub-info-title :subInfoTitleNm="rightTitle"/>
      <p style="margin-left:5px; display:inline-block;">(총 <label style="font-weight: bold">{{ total }}</label>건)</p>
      <div class="panel panel-primary" style="height: 260px;">
          <ag-grid-vue
              class="ag-grid"
              style="height: 100%;"
              :defaultColDef="defaultColDef"
              @first-data-rendered="onFirstDataRendered"
              rowSelection="multiple"
              :rowDragMultiRow="true"
              :rowClassRules="rowClassRules"
              :suppressRowClickSelection="true"
              :getRowNodeId="getRowNodeId"
              headerHeight="30"
              :rowDragManaged="true"
              :overlayNoRowsTemplate="overlayNoRowsTemplate"
              :overlayLoadingTemplate="overlayLoadingTemplate"
              :suppressMoveWhenRowDragging="true"
              :animateRows="true"
              :rowData="rightRowData"
              :columnDefs="Columns"
              @grid-ready="onGridReady($event, 1)"
              :modules="modules">
          </ag-grid-vue>
      </div>
    </div>
  </div>

</template>
<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import subInfoTitle from "@/components/common/SubInfoTitle";
import {AgGridVue} from "ag-grid-vue3";
import {AllCommunityModules} from '@ag-grid-community/all-modules';

export default {
  name: "AgGridComponent",
  data: function () {
    return {
      windowWidth :window.innerWidth,
      modules: AllCommunityModules,
      leftApi: null,
      rightApi: null,
      gridApi: null,
      gridColumnApi: null,
      rowClassRules: null,
      defaultColDef: {
        flex: 1,
        minWidth: 100,
        resizable: true,
      },
      overlayLoadingTemplate: `<div class="ag-overlay-loading-center"> Loading... </div>`,
    };
  },
  props:{
    leftRowData : Object,
    rightRowData : Object,
    Columns:{
      type:Array,
      default:''
    },
    leftTitle:null,
    rightTitle:null,

    headerColor:{
      type:String,
      default:"#f8f8f8"
    },
    overlayNoRowsTemplate: {
      type: String,
      default: `<span class="red"> <br><br>검색 결과가 없습니다. </span>`,
    },
  },
  components: {
    AgGridVue,
    subInfoTitle
  },
  methods: {
    getRowNodeId(data) {
      return data.model1;
    },

    onGridReady(params, side) {
      const api = params.api;
      if(side === 0){
        this.leftApi = api;
      }else{
        this.rightApi = api;
      }

      if(this.leftApi && this.rightApi){
        this.addGridDropZone(0,this.leftApi);
        this.addGridDropZone(1, this.rightApi);
      }
    },

    addGridDropZone(side, api) {
      const dropApi = side === 0 ? this.rightApi : this.leftApi;
      const dropZone = dropApi.getRowDropZoneParams({
            onDragStop: params => {
              var nodes = params.nodes;
                api.applyTransaction({
                  remove: nodes.map(function(node) { return node.data; })
                });

            }
          }

      );

      api.addRowDropZone(dropZone);
    },
    onFirstDataRendered() {
      // console.log("onFirstDataRendered");
      this.makeNoRows();
      this.makeAutoWidth();
    },
    makeAutoWidth() {
      if (!this.isWidthFit) {
        //가로 스크롤 = autosize
        this.allColumnIds= [];
        this.gridColumnApi.getColumns().forEach((column) => {
          this.allColumnIds.push(column.colId);
        });

        // 여기 조율 필요합니다~~
        // this.gridColumnApi.autoSizeColumn(this.allColumnIds);            // 컬럼, data 전부 생략, 간격 맞춤  (스크롤바)
        // this.gridColumnApi.autoSizeAllColumns(this.allColumnIds);        // 컬럼은 생략됨 / data 전부 다 표시   (스크롤바)
        //this.gridColumnApi.autoSizeColumns(this.allColumnIds,false);     // 컬럼, data 전부 표시, 간격 맞춤 (스크롤바)
        this.gridApi.sizeColumnsToFit(this.allColumnIds);                  // 컬럼, data 전부 생략, 간격 맞추고 테이블 크기 맞춤 (NO 스크롤)
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

<style>
.top-container {
  height: 100%;
  flex-direction: column;
}

.panel-body input {
  margin-right: 2px !important;
}

.panel-body label {
  margin-right: 10px;
}

.grid-wrapper {
  flex: 1 1 auto;
  margin-top: 5px;
}

.grid-wrapper .panel {
  flex: 1 1 50%;
  flex-direction: column;
  overflow: hidden;
}

.grid-wrapper .panel-body {
  flex: 1 1 auto;
  overflow: hidden;
  padding: 0;
}

.grid-wrapper .panel-body > div {
  width: 100%;
}
.ag-grid {
  width: 100%;
  height: 100%;
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

.ag-grid .ag-row:hover {
  background-color: rgb(255, 254, 238);
  cursor: pointer;
}

.ag-theme-alpine .ag-header {
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

.ag-theme-alpine .ag-header-cell-label,
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
  padding: 10px;
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

.ag-grid .ag-row-selected {
  background-color: rgb(255, 254, 238);
}
.ag-grid .ag-checkbox-input{
  justify-content: flex-start;
}
.ag-grid .ag-checkbox-input::after {
  display: none;

}

.ag-grid .ag-checkbox-input.ag-checked::after {
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

</style>
