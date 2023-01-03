<template>
  <tab-component
    :menu-type="'Cont'"
    :comp-array="compm"
    :comp-name="comp"
    :comp-value="component"
    />
</template>

<script>
import {defineAsyncComponent, markRaw} from "vue";
import TabComponent from "@/components/common/TabComponent";
export default {
  name: "ContSection",
  components: {TabComponent},
  data() {
    return {
      comp: "compId",
      // cur_num: 0,
      compm: [
        {
          "menuId": "compId",
          "menuNm": "계약상세",
          // "upMenuId": "cont_01_01",
          // "cmpnId": "ContMgt"
        },
      ],
      compm2: [],
      component: markRaw(
          defineAsyncComponent(() => import("../components/Cont/ContMgt.vue")),
      ),
    };
  }
};
</script>

<style scoped>
</style>