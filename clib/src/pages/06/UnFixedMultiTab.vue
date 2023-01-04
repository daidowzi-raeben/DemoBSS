<template>
  <div>
    <folder-tab-component
      :folder-path="thisFolderPath"
      :comp-array="thisMenuPage"
      :comp-value="firstMultiTabComponent"
    />
  <div class="describe">
      <p>06 폴더내 멀티 탭 예시</p>
      <p> UnFixedMultiTab.vud 에서 시작.  </p>
      <p> - folder Tab Component 호출   </p>
      <p> - 2개의 데이터 작성.   </p>
      <p> - thisFolderPath :  src/ 이후 해당 폴더 경로  </p>
      <p> - thisMenuPage   : 첫 페이지 파일명과 메뉴명   </p>
      <p> - 이후 첫 페이지 파일 ( 예시에서는 UFMT1.vue) 에서 클릭 이벤트 등으로 새로운 페이지 생성 </p>
      <p> - 새로운 페이지는 this.$emit("emitPageTitle", pageFileData); 작성.  </p>
      <p> - 이때, pageFileData는 위의 thisMenuPage와 유사한 데이터 형식.  </p>
      <p> [로직] </p>
      <p> UnFixedMultiTab --> folderTabCompoent ( 지정할 것 없음 props로 폴더 경로 및 첫 파일만 지정) --> </p>
      <p> UFMT1.vue 첫 페이지 파일 --> UFMT1.vue에 의존적인 서브 메뉴 파일 생성   </p>
  </div></div>
  
</template>

<script>
import { defineAsyncComponent, markRaw } from "vue";
import FolderTabComponent from "@/components/common/folderTabComponent.vue";

export default {
  name: "UnFixedMultiTab",
  components: { FolderTabComponent },
  data() {
    return {
      thisFolderPath: "pages/06/UnFixedMultiTabs",      // src 부터 멀티탭 폴더까지의 경로 지정
      thisMenuPage: {                                   // 선택 메뉴의 첫 페이지 파일명(menuId)과 메뉴명(menuNm) 지정
        menuId: "UFMT1",
        menuNm: "메뉴명.",
      },
      firstMultiTabComponent: markRaw(
        defineAsyncComponent(() =>
          import(`@/${this.thisFolderPath}/${this.thisMenuPage.menuId}.vue`)
        )
      ),
    };
  },
};
</script>

<style sccoped>
.describe{
  clear: both;
}
</style>

