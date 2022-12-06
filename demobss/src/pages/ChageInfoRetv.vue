<template>
  <div class="container">
    <div class="item">   <!-- 1 -->
      <cust-retv-component
          :cdGroup="'optionsSearchDiv'" />
    </div>

    <div class="item"> <!-- 2 -->
      <form-data-component
          :FormDataclass="'infoOfCust'"
          :subInfoTitleNm="'고객 정보'"
      />
    </div>
    <div class="item">
      <SubInfoTitle
          :subInfoTitleNm="'서비스 계약목록'"
      />
      <button-component
          :btn-name="'전체펼치기'"
          :btn-class="'btnClass3'"
          style="float: right;"
      />
      <button-component
          :btn-name="'전체접기'"
          :btn-class="'btnClass3'"
          style="float: right;"
      />
      <div class="cont_list">
        <msf-tree :source="contentTree"
                  :activeItem="activeItemObj"
                  :selectedList="selectedItemList"
                  id-field="directoryName"
                  label-field="directoryName"
                  ref="tree"
                  @itemClick="treeItemClick"
                  style="border: 1px solid rgb(239, 245, 252); padding: 0"
        ></msf-tree>
      </div>
    </div>
    <div class="item">
          <BlcComponent
            :sub-info-title-nm="'청구목록'"
            :rowData="rowData"
            :columnDefs="columnDefs"
            :select-box-show="true"
            :total="'3'"
            :cdGroup="'optionsEngtMons'"
            :btnName="'엑셀다운'"
          />
    </div>
    <div class="item">
      <BlcComponent
              :sub-info-title-nm="'요금항목별 조회'"
              :rowData="rowData2"
              :columnDefs="columnDefs2"
              :select-box-show="false"
              :total="'10'"
              :cdGroup="'optionsSearchDiv'"
              :btnName="'엑셀다운'"
            />
    </div>
    <div class="item" >
          <SubInfoTitle :subInfoTitleNm="'서비스계정별 조회'" />(<label
                style="font-weight: bold"
                >62</label
    >건)
            <span style="float: right">
            <button-component :btn-class="'btnClass3'" :btnName="'엑셀다운'" />
            <button-component :btn-class="'btnClass3'" :btnName="'선박발송'" />
            <button-component :btn-class="'btnClass3'" :btnName="'선박별 상세'" />
            <button-component :btn-class="'btnClass3'" :btnName="'선박별 요약'" />
              </span>
              <span style="float: right">
              <select-box-component
                :selectClass="'select_input3'"
                style="
                width: 120px;
                height: 26px;
                margin-right: 12px;"
                :cdGroup="'optionsSearchDiv'"
                :defaultValue="'선택'"
                v-model="searchDiv"
                @input="
                  (value) => {
                    searchDiv = value;
                  }
                "
              />
            </span>
            <div class="ag_grid_sp">
              <ag-grid-component
                :rowData="rowData"
                :columnDefs="columnDefs"
                :isWidthFit="false"
              />
            </div>
          </div>
  </div>
</template>

<script>
import AgGridComponent from "@/components/common/AgGridComponent";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import SelectBoxComponent from "@/components/common/SelectBoxComponent";
import SubInfoTitle from "@/components/common/SubInfoTitle.vue";
import BlcComponent from "@/components/common/BlcComponent";
import CustRetvComponent from "@/components/common/CustRetvComponent";
import ApiMixin from "@/service/common.js";
import FormDataComponent from '@/components/common/FormDataComponent.vue'
import msfTree from "@/components/common/Tree/msf-tree";
export default {
  mixins:[ApiMixin],
  name: "ChageInfoRetv",
  components: {
    AgGridComponent,
    ButtonComponent,
    SubInfoTitle,
    FormDataComponent,
    CustRetvComponent,
    BlcComponent,
    SelectBoxComponent,
    msfTree,
  },
  data() {
    return {
      gridOptions: null,
      activeItemObj: {}, // 활성화 시킬 객체
      selectedItemList: [], // 선택시킬 객체
      contentTree: [
        {
          groupId: 0,
          directoryName: "00100004779 주식회사 시너샛코리아",
          children: [
            { groupId:2, directoryName: "P1000021363" },
            { groupId:3, directoryName: "P1000021363" },
            { groupId:4, directoryName: "P1000021363" },
          ],
        },
        {
          groupId: 5,
          directoryName: "00100004779 주식회사 시너샛코리아",
          children: [
            { groupId:2, directoryName: "P1000021363" },
            { groupId:3, directoryName: "P1000021363" },
            { groupId:4, directoryName: "P1000021363" },
          ],
        },
        {
          groupId: 6,
          directoryName: "00100004779 주식회사 시너샛코리아",
          children: [
            { groupId:2, directoryName: "P1000021363" },
            { groupId:3, directoryName: "P1000021363" },
            { groupId:4, directoryName: "P1000021363" },
          ],
        },
      ],
      searchValue: null,
      custInfo : [],
      columnDefs: null,
      rowData:null,
      columnDefs2: null,
      rowData2:null,
    };
  },
  async beforeMount() {
    // this.gridOptions = {
    //   pinnedBottomRowData: [{ model0: "합계", model1: null, model4: 0 }],
    // };
    await this.$connect('application/json','/info.json','get','').then((res)=>{
      this.custInfo = res.data.info[0];
      this.columnDefs =res.data.columnDefs;
      this.rowData = res.data.rowData;
      this.columnDefs2 =res.data.columnDefs2;
      this.rowData2 = res.data.rowData2;
    })


  },
};
</script>

<style scoped>
.container{
  display:grid;
  grid-template-columns:400px 500px 630px 1fr;
  grid-template-rows: 40px 150px 270px minmax(200px,1fr);;
  gap: 20px 30px;
}
.container > .item:nth-child(1){
  grid-column: 1/4;
  grid-row:1;
}
.container > .item:nth-child(2){
  grid-column: 1/4;
  grid-row:2;
}
.container > .item:nth-child(3){
  grid-column: 1/2;
  grid-row:3/4;
}
.container > .item:nth-child(4){
  grid-column: 2/4;
  grid-row:3;
}
.container > .item:nth-child(5){
  grid-column: 2/3;
  grid-row:4;
}
.item:nth-child(6){
  grid-column: 3/4;
  grid-row:4;
}

.cont_list{
  width: 100%;
  height: 545px;
  overflow: auto;
  border: 1px solid #e4e4e4;
}
.ag_grid_sp {
  width: 100%;
  height: 250px;
  border-top:3px solid rgb(27,114,212);
}
</style>
