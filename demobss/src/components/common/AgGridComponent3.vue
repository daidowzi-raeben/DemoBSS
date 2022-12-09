<template>
  <div class="top-container">
    <div class="grid-wrapper ag-theme-alpine">
      <div class="panel panel-primary" style="margin-right: 10px;">
          <ag-grid-vue
              style="height: 100%;"
              :defaultColDef="defaultColDef"
              rowSelection="multiple"
              :rowDragMultiRow="true"
              :suppressRowClickSelection="true"
              :getRowNodeId="getRowNodeId"
              :rowDragManaged="true"
              :suppressMoveWhenRowDragging="true"
              :animateRows="true"
              :rowData="leftRowData"
              :columnDefs="Columns"
              @grid-ready="onGridReady($event, 0)"
              :modules="modules">
          </ag-grid-vue>
      </div>
      <div class="panel panel-primary" style="margin-left: 10px;">
          <ag-grid-vue
              style="height: 100%;"
              :defaultColDef="defaultColDef"
              rowSelection="multiple"
              :rowDragMultiRow="true"
              :suppressRowClickSelection="true"
              :getRowNodeId="getRowNodeId"
              :rowDragManaged="true"
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
import {AgGridVue} from "ag-grid-vue3";
import {AllCommunityModules} from '@ag-grid-community/all-modules';

export default {
  name: "AgGridComponent",
  data: function () {
    return {
      modules: AllCommunityModules,
      leftApi: null,
      rightApi: null,

      defaultColDef: {
        flex: 1,
        minWidth: 100,
        sortable: true,
        filter: true,
        resizable: true
      },
    };
  },
  props:{
    leftRowData : [],
    rightRowData : [],
    Columns:[]
  },
  components: {
    AgGridVue,
  },
  methods: {
    getRowNodeId(data) {
      return data.athlete;
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
    }
  },
};
</script>

<style scoped>
.top-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.panel-body input {
  margin-right: 2px !important;
}

.panel-body label {
  margin-right: 10px;
}

.grid-wrapper {
  display: flex;
  flex: 1 1 auto;
  margin-top: 5px;
}

.grid-wrapper .panel {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.grid-wrapper .panel-body {
  flex: 1 1 auto;
  overflow: hidden;
  padding: 0;
  display: flex;
}

.grid-wrapper .panel-body > div {
  width: 100%;
}
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

.ag-grid .ag-row:hover {
  background-color: rgb(255, 254, 238);
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
