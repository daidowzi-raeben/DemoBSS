<template>
  <ag-grid-vue
  style="width: 100%; height: 100%;"
  class="ag-theme-alpine"
  :columnDefs="columnDefs"
  :rowData="rowData"
  :rowHeight="30"
  :suppressRowTransform="true"
  rowSelection="multiple"
  @grid-ready="onGridReady"
  :pagination="true"
  :paginationPageSize="paginationPageSize"
  ></ag-grid-vue>
</template>

<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from 'ag-grid-vue3';

export default {
  data(){
    return{
      paginationPageSize: null,
      servState :["사용중","예약(기설중)","정지","해지"],
      columnDefs:[
    { headerName: "순서",           field: "index",       width:100,  checkbox:true ,sortable:true, rowSpan: params => params.data.index != null ? 2 : 1, cellClass: 'cell-span'},
    { headerName: "서비스계약ID",   field: "ServID" ,     width:130,   sortable:true, rowSpan: params => params.data.ServID != null ? 2 : 1, cellClass: 'cell-span'},
    { headerName: "고객ID",         field: "CustID",      width:130, rowSpan: params => params.data.CustID != null ? 2 : 1, cellClass: 'cell-span'},
    { headerName: "청구계정ID",     field: "SubsID" ,     width:130,  rowSpan: params => params.data.SubsID != null ? 2 : 1, cellClass: 'cell-span'},
    { headerName: "고객명",         field: "CustName" ,   width:80,  rowSpan: params => params.data.CustName != null ? 2 : 1, cellClass: 'cell-span'},
    { headerName: "상품명",         field: "ProductName", width:415, 
    rowSpan: function(params) {
        return params.data.ProductName === '[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션' ? 2 : 1; },
        cellClassRules: { 'cell-span': "true", },
        },
        
    { headerName: "서비스계약 상태", field: "ServState",   width:140, filter:true, colSpan: params => !this.servState.includes(params.data.ServState) ? 4 : 1 },
    { headerName: "청약상태",       field: "SubsState" ,   width:90   },
    { headerName: "개통일시",       field: "StartDate" ,   width:165, sortable:true},
    { headerName: "정지/해지일시",   field: "EndDate" ,    width:165, sortable:true},  
    ],
      rowData: null,
    }},
  components:{
    AgGridVue
  },
  methods:{
    onGridReady(params){
      console.log("hi",this.rowData)
    },

  },
  created(){
    this.paginationPageSize = 10*2;
  },
  mounted(){
    this.rowData=[
    { index: 1, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션", ServState: "정지", SubsState: "청약완료",   StartDate: "2022-12-11 10:26:30", EndDate: "2023-12-31 00:00:00"},
    {ServState: "abcd"},
    
    
    { index: 2, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-12 10:30:30", EndDate: "2023-12-31 00:00:00"},
    {ServState: "abcd"},
    
    { index: 3, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-13 10:26:30", EndDate: "2023-12-31 00:00:00"},
    {ServState: "abcd"},
    
    { index: 4, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "예약(기설중)", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-15 10:26:30", EndDate: "2023-12-31 00:00:00"},
    {ServState: "abcd"},
    
    { index: 5, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "예약(기설중)", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-17 10:26:30", EndDate: "2023-12-31 00:00:00"},
    {ServState: "abcd"},
    
    { index: 6, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "예약(기설중)", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-18 10:26:30", EndDate: "2023-12-31 00:00:00"},
    {ServState: "abcd"},
    
    { index: 7, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-19 10:26:30", EndDate: "2023-12-31 00:00:00"},
    {ServState: "abcd"},
    
    { index: 8, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-20 10:26:30", EndDate: "2023-12-31 00:00:00"},
    {ServState: "abcd"},
    
    { index: 9, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-01 10:26:30", EndDate: "2023-12-31 00:00:00"}, {ServState: "abcd"},
    { index: 10, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-01 10:26:30", EndDate: "2023-12-31 00:00:00"}, {ServState: "abcd"},
    { index: 30, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-01 10:26:30", EndDate: "2023-12-31 00:00:00"}, {ServState: "abcd"},
    { index: 31, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-01 10:26:30", EndDate: "2023-12-31 00:00:00"}, {ServState: "abcd"},
    { index: 32, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-01 10:26:30", EndDate: "2023-12-31 00:00:00"}, {ServState: "abcd"},
    { index: 33, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-01 10:26:30", EndDate: "2023-12-31 00:00:00"}, {ServState: "abcd"},
    { index: 34, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-01 10:26:30", EndDate: "2023-12-31 00:00:00"}, {ServState: "abcd"},
    { index: 49, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-01 10:26:30", EndDate: "2023-12-31 00:00:00"}, {ServState: "abcd"},
    { index: 59, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-01 10:26:30", EndDate: "2023-12-31 00:00:00"}, {ServState: "abcd"},
    { index: 69, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-01 10:26:30", EndDate: "2023-12-31 00:00:00"}, {ServState: "abcd"},
    { index: 79, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-01 10:26:30", EndDate: "2023-12-31 00:00:00"}, {ServState: "abcd"},
    { index: 89, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "해지", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-10-01 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 11, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "해지", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-10-01 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 12, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-08-11 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 13, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-06-21 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 14, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "정지", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-08-21 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 15, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "정지", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-11-31 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 16, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-10-01 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 17, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-03 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 18, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "해지", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-04 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 19, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-11-06 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 20, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-05 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 21, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "해지", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-12-09 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 22, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "해지", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-11-21 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 23, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-01-21 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 24, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-02-11 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 25, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "예약(기설중)", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-05-11 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 26, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "예약(기설중)", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-10-31 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 27, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "예약(기설중)", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-08-21 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 28, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-07-11 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"},
    { index: 29, ServID: "S000008950", CustID: "C000053216", SubsID: "P000021352",  CustName: "홍길동", ServState: "사용중", SubsState: "청약완료",  ProductName : "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",  StartDate: "2022-06-11 10:26:30", EndDate: "2023-12-31 00:00:00"},{ServState: "abcd"}
    ]; 
  }
}
</script>

<style >
tbody:hover{
  background-color: black;
}
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
  background-color: white;
}
.ag-cell{
    border: 1px dotted black;
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