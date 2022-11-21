<template>
  <div class="container">
    <div class="item" style="display:block;">
      <CustRetvComponent
        :cdGroup="'optionsSearchDiv'"
        :title-show="true"
        />
    </div>
    <div class="item" style="display:block;">
      <CustInfoComponent
      :custInfo="custInfo"
      />
    </div>
    <div class="item">
      <div style="width:100%">
        <SubInfoTitle :subInfoTitleNm="'서비스 계약목록'" />
        <div style="float:right" >

        <ButtonComponent :btnClass="'btnclass2'" :btnName="'전체펼치기'" />
        <ButtonComponent :btnClass="'btnclass2'" :btnName="'전체접기'" />
      </div></div>
      <div class="tree_sp">
        <TreeGridComponent :tableData="tableData" :columns="columns" />
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
    <div class="item" style=" display:block;">
            <div style="width: 100%">
              <SubInfoTitle :subInfoTitleNm="'서비스계정별 조회'" />(<label
                style="font-weight: bold"
                >62</label
              >건)
            <span style="float: right">
            <ButtonComponent style="width:50px; " :btnClass="'btnclass2'" :btnName="'엑셀다운'" />
            <ButtonComponent style="width:50px; " :btnClass="'btnclass2'" :btnName="'선박발송'" />
            <!-- <ButtonComponent style="width:50px; " :btnClass="'btnclass2'" :btnName="'선박파일'" /> -->
            <ButtonComponent :btnClass="'btnclass2'" :btnName="'선박별 상세'" />
            <ButtonComponent :btnClass="'btnclass2'" :btnName="'선박별 요약'" />

              <select-box-component
                :selectClass="'select_input3'"
                :width="150"
                :cdGroup="'optionsSearchDiv'"
                :defaultValue="'선택'"
                :defaultNum="3"
                v-model="searchDiv"
                @input="
                  (value) => {
                    searchDiv = value;
                  }
                "
              />
            </span>
            </div>
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
import CustInfoComponent from "@/components/common/CustInfoComponent";
import BlcComponent from "@/components/common/BlcComponent";
import CustRetvComponent from "@/components/common/CustRetvComponent";
import TreeGridComponent from "@/components/common/TreeGridComponent";
import ApiMixin from "@/service/common.js";

export default {
  mixins:[ApiMixin],
  name: "ChageInfoRetv",
  components: {
    TreeGridComponent,
    AgGridComponent,
    ButtonComponent,
    SubInfoTitle,
    CustInfoComponent,
    CustRetvComponent,
    BlcComponent,
    SelectBoxComponent,
  },
  data() {
    return {
      gridOptions: null,
      columnDefs1: [
        {
          headerName: "결제통화",
          field: "model0",
          headerClass: "ag-header-first-child",
        },
        { headerName: "요금항목명", field: "model1" },
        { headerName: "요금항목구분명", field: "model2" },
        { headerName: "협정금액", field: "model3" },
        { headerName: "협정할인금액", field: "model4" },
        { headerName: "협정청구금액", field: "model5" },
        { headerName: "유효시작일", field: "StartDate" },
        { headerName: "유효종료일", field: "EndDate" },
      ],
      rowData1: [
        {
          model0: "KRW",
          model1: "기본료",
          model2: "정액요금",
          model3: "133,500,000",
          model4: "1,500,000",
          model5: "132,000,000",
          model6: "0",
          model7: "0",
          StartDate: "2021-10-19",
          EndDate: "2023-12-31",
        },
        {
          model0: "KRW",
          model1: "프리미엄요금",
          model2: "정액요금",
          model3: "220,225,000",
          model4: "225,000",
          model5: "220,000,000",
          model6: "0",
          model7: "0",
          StartDate: "2022-05-31",
          EndDate: "2024-07-31",
        },
        {
          model0: "KRW",
          model1: "설치비",
          model2: "정액요금",
          model3: 9200000000,
          model4: 3000000,
          model5: 66665222,
          model6: "0",
          model7: "0",
          StartDate: "2022-10-19",
          EndDate: "2025-09-31",
        },
        {
          model0: "KRW",
          model1: "기본료",
          model2: "정액요금",
          model3: "133,500,000",
          model4: "1,500,000",
          model5: "132,000,000",
          model6: "0",
          model7: "0",
          StartDate: "2021-10-19",
          EndDate: "2023-12-31",
        },
        {
          model0: "KRW",
          model1: "프리미엄요금",
          model2: "정액요금",
          model3: "220,225,000",
          model4: "225,000",
          model5: "220,000,000",
          model6: "0",
          model7: "0",
          StartDate: "2022-05-31",
          EndDate: "2024-07-31",
        },
        {
          model0: "KRW",
          model1: "설치비",
          model2: "정액요금",
          model3: 9200000000,
          model4: 3000000,
          model5: 66665222,
          model6: "0",
          model7: "0",
          StartDate: "2022-10-19",
          EndDate: "2025-09-31",
        },
        {
          model0: "KRW",
          model1: "기본료",
          model2: "정액요금",
          model3: "133,500,000",
          model4: "1,500,000",
          model5: "132,000,000",
          model6: "0",
          model7: "0",
          StartDate: "2021-10-19",
          EndDate: "2023-12-31",
        },
        {
          model0: "KRW",
          model1: "프리미엄요금",
          model2: "정액요금",
          model3: "220,225,000",
          model4: "225,000",
          model5: "220,000,000",
          model6: "0",
          model7: "0",
          StartDate: "2022-05-31",
          EndDate: "2024-07-31",
        },
        {
          model0: "KRW",
          model1: "설치비",
          model2: "정액요금",
          model3: 9200000000,
          model4: 3000000,
          model5: 66665222,
          model6: "0",
          model7: "0",
          StartDate: "2022-10-19",
          EndDate: "2025-09-31",
        },
      ],
      tableData: [
        {
          name: "00100004779 주식회사 시너샛코리아",
          children: [
            { name: "P1000021363" },
            { name: "P1000021363" },
            { name: "P1000021363" },
          ],
        },
        {
          name: "00100004779 주식회사 시너샛코리아",
          children: [
            { name: "P1000021363" },
            { name: "P1000021363" },
            { name: "P1000021363" },
          ],
        },
        {
          name: "00100004779 주식회사 시너샛코리아",
          children: [
            { name: "P1000021363" },
            { name: "P1000021363" },
            { name: "P1000021363" },
          ],
        },
      ],
      columns: [{ label: "상품명", id: "name" }],
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
      this.customerInfo = res.data.info[0];
      this.columnDefs =res.data.columnDefs;
      this.rowData = res.data.rowData;
      this.columnDefs2 =res.data.columnDefs2;
      this.rowData2 = res.data.rowData2;
      console.log(res.data.columnDefs,'\n',res.data.columnDefs2)
    }).catch((e)=>{
      console.log(e);
    });


  },
};
</script>

<style scoped>
.container{
  display:grid;
  grid-template-columns:300px 300px minmax(750px,1fr);
  grid-template-rows: 80px 60px 300px 400px;
  gap: 10px 10px;
}
.item{
  display: flex;
  flex-wrap: wrap;
}
.item:nth-child(1){
  grid-column: 1/4;
  grid-row:1/2;
}
.item:nth-child(2){
  grid-column: 1/4;
  grid-row:2/3;
}
.item:nth-child(3){
  width: 95%;
  grid-column: 1/2;
  grid-row:3/5;
}
.item:nth-child(4){
  width: 88%;
  grid-column: 2/4;
  grid-row:3/4;
  margin-bottom: 30px;
}
.item:nth-child(5){
  grid-column: 2/3;
  grid-row:4/5;
}
.item:nth-child(6){
  width: 81%;
  grid-column: 3/4;
  grid-row:4/5;
}



div.section0 {
  display: inline-block;
  position: relative;
  padding: 20px 0 143px;
  box-sizing: border-box;
  white-space: nowrap;
}

div.cusInfo {
  display: inline-block;
  width: 100%;
  margin: 10px;
  height: 120px;
}

div.contList {
  display: inline-block;
  width: 18%;
  margin: 10px;
  padding-bottom: 10px;
  padding-top: 20px;
  height: 680px;
}

.clList {
  display: inline-block;
  width: 79%;
  margin: 10px;
  padding-bottom: 25px;
  padding-top: 20px;
  height: 410px;
}
.ag_grid_sp {
  margin: 10px;
  width: 100%;
  height: 100%;
  border: groove;
  border-top-color: #2dbdb6;
}
.tree_sp {
  /* margin: 10px; */
  width: 100%;
  height: 100%;
  border: groove;
  border-top-color: #2dbdb6;
}

.feeSear {
  display: inline-block;
  width: 30%;
  height: 225px;
  margin: 10px;
}

.sevSear {
  display: inline-block;
  margin: 10px;
  width: 47%;
  height: 225px;
}
</style>
