<template>
  <div class="gridContainer">
    <div class="item">
      <subs-retv-component />
    </div>
    <div class="item">
      <Blc2Component
        :sub-info-title-nm="'청약리스트'"
        :row-data="rowData"
        :column-defs="columnDefs"
        :select-box-show="false"
        :total="'12,980'"
        :cdGroup="'optionsSearchDiv'"
        :btnName1="'일괄정지 신청'"
        :btnName2="'숨김해제'"
        :btnName3="'엑셀 다운로드'"
        :agGirdHeight="'60%'"
      />
    </div>
  </div>
</template>

<script>
import ApiMixin from "@/service/common.js";
import SubsRetvComponent from "@/components/UnionForm/SubsRetvComponent.vue";
import PagingComponent from "@/components/common/PagingComponent.vue";
import Blc2Component from '@/components/UnionForm/Blc2Component.vue';

export default {
  mixins: [ApiMixin],
  name: "SubsLst",
  components: { Blc2Component, SubsRetvComponent, PagingComponent },
  data() {
    return {
      custInfo: [],
      columnDefs: [],
      rowData: [],
    };
  },
  async beforeMount() {
    await this.$connect("application/json", "/info.json", "get", "")
    // await this.$connect("application/json", "/columnDefs", "get", "")
    .then((res) => {
      console.log(res);
      this.columnDefs = res.data.subsLstColumnDefs;
      this.rowData = res.data.subsLstRowData;
      })
    .catch((e) => {
      console.log(e);
    });
  },
};
</script>

<style scoped>
.gridContainer {
  display: grid;
  grid-template-columns: 1560px 1fr;
  grid-template-rows: 135px 465px minmax(140px, 1fr);
  gap: 20px 30px;
}
.item:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
  background-color: steelblue;
}
.item:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
  height: 900px;
}
</style>
