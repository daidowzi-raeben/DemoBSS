<template>
  <ag-grid-vue
  style="width: 100%; height: 100%;"
  class="ag-theme-alpine"
  :columnDefs="columnDefs"
  :rowData="rowData"
  :rowHeight="30"
  :suppressRowTransform="true"
  :suppressMovableColumns="true"
  rowSelection="multiple"
  @grid-ready="onGridReady"
  :pagination="true"
  :paginationPageSize="paginationPageSize"
  :suppressRowHoverHighlight="true"
  ></ag-grid-vue>
</template>

<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from 'ag-grid-vue3';

export default {
  components:{},
  props:{
    rowData: Object
  },
  data(){
    return{
      paginationPageSize: null,
      servState :["사용중","예약(기설중)","정지","해지"],
      columnDefs:[
        { headerName: "순서",           field: "index",       width:100,  cellClass: 'cell-span'},
        { headerName: "서비스계약ID",   field: "ServID" ,     width:130,  cellClass: '"cell"-span'},
        { headerName: "고객ID",         field: "CustID",      width:130,  cellClass: 'cell-span'},
        { headerName: "청구계정ID",     field: "SubsID" ,     width:130,  cellClass: 'cell-span'},
        { headerName: "고객명",         field: "CustName" ,   width:80,   cellClass: 'cell-span'},
        { headerName: "상품명",         field: "ProductName", width:428,  cellClassRules: { 'cell-span': "true", }},
        // rowSpan: function(params) {
        //     return params.data."ProductName" === '[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션' ? 2 : 1; },
        { headerName: "서비스계약 상태", field: "ServState",   width:140,  
          // colSpan: params => !this.servState.includes(params.data.ServState) ? 4 : 1,
        },
        { headerName: "청약상태",       field: "SubsState" ,   width:90 },
        { headerName: "개통일시",       field: "StartDate" ,   width:165},
        { headerName: "정지/해지일시",   field: "EndDate" ,    width:165},  
      ],
    }
  },
  components:{
    AgGridVue
  },
  methods:{
    onGridReady(params){
    },
  },
  created(){
    this.paginationPageSize = 7*2;
  }
}
</script>

<style >
.agtable {
  border : 1px solid black;
}

.agtable > tr {
  border : 1px solid red;
}
.agtable > tr:hover {
  background-color: aqua;
}
.agtable > tr > th:hover {
  background-color: aqua;
}

.agtable > tr > td {
  border : 1px solid black;
  background-color: violet;
}



.cell-span {
  /* background-color: rgb(231,231,231); */
  /* background-color: white; */
}
.ag-header-cell{
  background-color: rgb(239, 245, 252);
  border: .5px solid rgb(231,231,231);
}
.ag-header-cell-label {
  /* 컬럼 헤더 가운데 정렬 */
  justify-content: center;
}
.ag-row{
  background-color: rgb(255, 254,238);
}
.ag-row:hover{
  background-color: rgb(255, 254,238);
}
.ag-theme-alpine{
  --ag-selected-row-background-color:rgb(255, 254,238);
}
.ag-grid_sp{
  border: none;
}
.ag-row .ag-cell {
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center;
  border: .5px solid rgb(231,231,231);
  }

.ag-header-cell{
    text-align: center;
  }
.ag-paging-panel .ag-unselectable{
  display: none;
}
</style>