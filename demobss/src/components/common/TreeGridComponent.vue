<template>
  <tree-table
      class="table"
      :columns="columns"
      :table-data="tableData" />
</template>

<script>
import TreeTable from 'vue-tree-table-component'

export default {
  name: "TreeGridComponent",
  components: {
    TreeTable,

  },
  data: function () {
    return {

    }
  },
  props:{
    tableData:null,
    columns:null,
  },
  methods:{
  }
}
</script>

<style scoped>
.table >>> .open::before {
  content:"";
  background-image: url("../../assets/logo.png");
  object-fit: cover;
  background-size:10px 10px;
  width:10px;
  height:10px;
  display:inline-block;
}
.table >>> .closed::before {
  content:"";
  background-image: url("../../assets/logo.png");
  object-fit: cover;
  background-size:10px 10px;
  width:10px;
  height:10px;
  display:inline-block;
}
.table >>> .cell {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>