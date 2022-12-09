<template>
<article class="AutMappgAdmView">
  <div class="item"> <!-- 1번 -->

  </div>
  <div class="item"> <!-- 2번 -->

  </div>
</article>
</template>

<script>
import pagingArea from "@/components/common/PagingArea";
import selectBoxComponent from "@/components/common/SelectBoxComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
import AgGridComponent from "@/components/common/AgGridComponent";
import InputComponent from "@/components/common/InputComponent";
import SubInfoTitle from "@/components/common/SubInfoTitle";
import ApiMixin from "@/service/common";
export default {
  mixins:[ApiMixin],
  name: "AutMappgAdm",
  components: {
    pagingArea,
    selectBoxComponent,
    ButtonComponent,
    AgGridComponent,
    SubInfoTitle,
    InputComponent
  },
  data(){
    return{

    }
  },

}
</script>

<style scoped>
.AutMappgAdmView{
  display: grid;
  grid-template-columns: 800px minmax(800px,1fr);
  grid-template-rows: minmax(550px, 1fr);
  gap: 0px 10px;
}

.AutAdmView > .item:nth-child(1) {
  grid-column: 11;
  grid-row: 1;
}
.AutAdmView > .item:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
}
</style>