<template>
<div>
  <div style="width: 500px; height: 360px; margin: 10px">
    <ag-grid-component
      :rowData="rowData1"
      :columnDefs="columnDefs1"
      :isWidthFit="false"
    />
  </div>

  <div style="width: 50%; height: 360px; margin: 30px">
    <ag-grid-component :rowData="rowData2" :columnDefs="columnDefs2" />
  </div>
</div>
</template>

<script>
import AgGridComponent from "../components/common/AgGridComponent.vue";
export default {
  name: "CommonView",
  components: { AgGridComponent },
  data() {
    return {
      columnDefs1: [
        {
          headerName: "Make",
          field: "make",
          cellStyle: {
            "border-left": "0px",
          },
          headerClass: "ag-header-first-child",
        },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" },
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" },
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" },
      ],
      rowData1: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
      ],
      columnDefs2: [
        {
          headerName: "Make",
          field: "make",
          cellStyle: {
            "border-left": "0px",
          },
          headerClass: "ag-header-first-child",
        },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" },
        { headerName: "Price", field: "price" },
        { headerName: "Price", field: "price" },
      ],
      rowData2: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
      ],
    };
  },
  created() {
    // this.rowData2 = [];
  },
};
</script>

<style scoped></style>
