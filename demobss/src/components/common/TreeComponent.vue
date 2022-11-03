<template>
  <label style="font-weight: bold">검색 : </label><input v-model="searchText" type="text" />
  <Tree
      style="font-weight: bold; font-size: 30px; background-color: #ffffff"
      :nodes="data"
      :search-text="searchText"
      :use-checkbox="false"
      :use-icon="true"
      show-child-count
      :row-hover-background="rowHoverBackground"
      @nodeExpanded="onNodeExpanded"
      @update:nodes="onUpdate"
      @nodeClick="onNodeClick"
  />
</template>

<script>
import Tree from "vue3-tree";
import { ref } from "vue";
import "vue3-tree/dist/style.css";
export default {
  name: "TreeComponent",
  components:{
    Tree,
  },
  setup() {
    const data = ref([
      {
        id: 1,
        label: "00100004779 주식회사 시너샛코리아",
        nodes: [
          {
            id: 2,
            label: "P1000021363",
          },
          {
            id: 3,
            label: "P1000020999",
          },
          {
            id: 4,
            label: "P1000021471",
          },
        ],
      },
      {
        id: 5,
        label: "00100004777 주식회사 시너샛코리아",
        nodes: [
          {
            id: 6,
            label: "P1000021363",
          },
          {
            id: 7,
            label: "P1000020999",
          },
          {
            id: 8,
            label: "P1000021471",
          },
          {
            id: 9,
            label: "P1000021363",
          },
          {
            id: 10,
            label: "P1000020999",
          },
          {
            id: 11,
            label: "P1000021471",
          },
          {
            id: 12,
            label: "P1000021363",
          },
          {
            id: 13,
            label: "P1000020999",
          },
          {
            id: 14,
            label: "P1000021471",
          },
        ],
      },
      {
        id: 15,
        label: "00100004722 주식회사 시너샛코리아",
        nodes: [
          {
            id: 16,
            label: "P1000021363",
          },
          {
            id: 17,
            label: "P1000020999",
          },
          {
            id: 18,
            label: "P1000021471",
          },
        ],
      },
    ]);
    const searchText = ref("");
    const onNodeExpanded = (node, state) => {
      console.log("state: ", state);
      console.log("node: ", node);
    };

    const onUpdate = (nodes) => {
      console.log("nodes:", nodes);
    };

    const onNodeClick = (node) => {
      console.log(node);
    };

    return {
      data,
      searchText,
      onNodeExpanded,
      onUpdate,
      onNodeClick,
    };
  },
  data(){
    return{
      rowHoverBackground : 'rgba(206,206,206,0.71)',
    }
  },
  props:{

  }

}
</script>

<style scoped>
.tree {
  width: 100%;
  height: 95%;
  overflow: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.tree-list {
  margin: 0;
  padding: 0;
}
.tree-row {
  padding-left: 0px !important;
  border-style: solid;
}
</style>