<template>
  <tree-table
      className="table"
      :columns="columns"
      :table-data="tableData"/>
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
      tableData: [
        {
          name: '인말새트 C국내협력점', id: 'P10001257',state:'사용중', children: [
            {name: 'Regional MVSAT 128/256 요금(80cm 안테나용) 3년약정 [YC CLOVER]', id: 'P10000012679', state:'사용중'}
          ]
        },
        {
          name: '인말새트 C국내협력점', id: 'P10001257',state:'사용중', children: [
            {name: 'Regional MVSAT 128/256 요금(80cm 안테나용) 3년약정 [YC CLOVER]', id: 'P10000012679', state:'사용중'}
          ]
        },
        {
          name: '인말새트 C국내협력점', id: 'P10001257',state:'사용중', children: [
            {name: 'Regional MVSAT 128/256 요금(80cm 안테나용) 3년약정 [YC CLOVER]', id: 'P10000012679', state:'사용중',
              children: [{name: 'Regional MVSAT 128/256 요금(80cm 안테나용) 3년약정 [YC CLOVER]', id: 'P10000012679', state:'사용중'}]}
          ]
        },
      ],
      columns: [{label: '상품명', id: 'name'}, {label: '상품ID', id: 'id'}, {label: '상태', id: 'state'}]
    }
  }
}
</script>

<style scoped>
.tree-table{
  width: 100%;
  height: 95%;
  overflow: auto;
}
</style>