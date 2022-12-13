<template>
  <div class="gridContainer">
    <div class="item">
      <subs-retv-component />
    </div>
    <div class="item">
      <blc2-component
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
import Blc2Component from "@/components/common/Blc2Component.vue";
import ApiMixin from "@/service/common.js";
import SubsRetvComponent from "@/components/common/SubsRetvComponent.vue";
import PagingArea from "@/components/common/PagingArea.vue";
import TableComponent from "@/components/common/TableComponent.vue";

export default {
  mixins: [ApiMixin],
  name: "SubsLst",
  components: { Blc2Component, SubsRetvComponent, PagingArea, TableComponent },
  data() {
    return {
      custInfo: [],
      columnDefs: [],
      rowData: [],
    };
  },
  async beforeMount() {
    await this.$connect("application/json", "/info2.json", "get", "")
      .then((res) => {
        this.columnDefs = res.data.columnDefs;
        this.rowData = res.data.rowData;
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
