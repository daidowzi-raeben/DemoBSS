<template>
  <ag-grid-vue
  style="width: 100%; height: 100%;"
  class="ag-theme-alpine"
  :columnDefs="columnDefs"
  :rowData="rowData"
  :rowHeight="rowHeight"
  :suppressRowTransform="true"
  :suppressMovableColumns="true"
  rowSelection="single"
  :suppressRowHoverHighlight="true"
  @selection-changed="onSelectionChanged"
  ></ag-grid-vue>
</template>

<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from 'ag-grid-vue3';

export default {
  components:{},
  props:{
    rowData: Object,
    columnDefs:{
      type:Array,
      default:''
      },
    rowHeight:{
      type:Number,
      default:30
    }
  },
  data(){
    return{
      paginationPageSize: null,
      servState :["사용중","예약(기설중)","정지","해지"],
      seletedRowData:''
    }
  },
  components:{
    AgGridVue
  },
  methods:{
    onSelectionChanged(params) {
      this.seletedRowData = params.api.getSelectedRows();
      this.$emit('seletedRowData',this.seletedRowData)
      console.log("seletedRowData : ",this.seletedRowData);
    }
  },
  created(){
    this.paginationPageSize = 7*2;
  },

}
</script>

<style  >
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

.ag-cell-wrapper {
  margin-left:auto;
}

.cell-span {
  /* background-color: rgb(231,231,231); */
  /* background-color: white; */
  }
  .ag-theme-alpine .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within{
    border-color: none;
  }
.ag-header-cell{
  background-color: rgb(239, 245, 252);
  border: .5px solid rgb(231,231,231);
}
.ag-header-cell-label {
  /* 컬럼 헤더 가운데 정렬 */
  justify-content: center;
}
/* .ag-row{
  background-color: rgb(255, 254,238);
} */
.ag-row:hover{
  background-color: rgb(255, 254,238);
}
.ag-theme-alpine{
  --ag-selected-row-background-color:rgb(255, 254,238);
  --ag-range-selection-border-color:#bdbdbd;
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
