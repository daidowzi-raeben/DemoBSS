<template>
  <folder-tab-component
    :menu-type="'UnFixedMultiTabs'"
    :comp-array="thisPageMenu"
    :comp-name="firstPageId"
    :comp-value="firstPageComponent"
    :menu-path="thisMenuPath"
  />
</template>

<script>
import { defineAsyncComponent, markRaw } from "vue";
import FolderTabComponent from "@/components/common/folderTabComponent.vue";

export default {
  name: "UnFixedMultiTab",
  components: { FolderTabComponent },
  data() {
    return {
      thisMenuPath: "@/pages/06/UnFixedMultiTabs/",
      firstPageId: "UFMT1", // 메뉴 색칠하기 위한것
      thisPageMenu: {
        menuId: "UFMT1",
        menuNm: "메뉴명.",
        // "cmpnId": "ContMgt"
      },
      firstPageComponent: markRaw(
        defineAsyncComponent(() =>
          import("@/pages/06/UnFixedMultiTabs/UFMT1.vue")
        )
      ),
    };
  },
};
</script>

<style></style>
