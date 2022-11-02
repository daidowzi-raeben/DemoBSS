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
        label: "Animal",
        nodes: [
          {
            id: 2,
            label: "Dog",
          },
          {
            id: 3,
            label: "Cat",
            nodes: [
              {
                id: 4,
                label: "Egyptian Mau Cat",
                nodes: [
                  {
                    id: 4,
                    label: "Egyptian Mau Cat",
                  },
                  {
                    id: 5,
                    label: "Japanese Bobtail Cat",
                  },
                ],
              },
              {
                id: 5,
                label: "Japanese Bobtail Cat",
              },
            ],
          },
        ],
      },
      {
        id: 6,
        label: "People",
        nodes: [
          {
            id: 4,
            label: "Egyptian Mau Cat",
          },
          {
            id: 5,
            label: "Japanese Bobtail Cat",
          },
        ],
      },
      {
        id: 7,
        label: "People",
      },
      {
        id: 8,
        label: "People",
        nodes: [
          {
            id: 4,
            label: "Egyptian Mau Cat",
          },
          {
            id: 5,
            label: "Japanese Bobtail Cat",
          },
        ],
      },
      {
        id: 9,
        label: "People",
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
  height: 85%;
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