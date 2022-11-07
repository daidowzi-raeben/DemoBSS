<template>
  <div class="section0">
    <div class="cusInfo">
      <CustomerSeachComponent :cdGroup="'optionsSearchDiv'" />
      <CusomerInfoComponent :customer-info="customerInfo" />
    </div>
    <div class="contList">
      <div>
        <SubInfoTitle :subInfoTitleNm="'서비스 계약목록'" />

        <ButtonComponent :btnClass="'btnclass2'" :btnName="'전체펼치기'" />
        <ButtonComponent :btnClass="'btnclass2'" :btnName="'전체접기'" />
      </div>
      <div class="tree_sp">
        <TreeGridComponent :tableData="tableData" :columns="columns" />
      </div>
    </div>
    <div style="left: 30%">
      <div>
        <div class="clList">
          <BoxComponent
            :sub-info-title-nm="'청구목록'"
            :grid-options="gridOptions"
            :column-defs="columnDefs1"
            :select-box-show="true"
            :total="'3'"
            :row-data="rowData1"
            :cdGroup="'optionsEngtMons'"
            :btnName="'엑셀다운'"
          />
        </div>
        <div style="width: 100%">
          <div class="feeSear">
            <BoxComponent
              :sub-info-title-nm="'요금항목별 조회'"
              :grid-options="gridOptions"
              :column-defs="columnDefs1"
              :select-box-show="false"
              :total="'10'"
              :row-data="rowData1"
              :cdGroup="'optionsSearchDiv'"
              :btnName="'엑셀다운'"
            />
          </div>
          <span class="sevSear">
            <span>
              <SubInfoTitle :subInfoTitleNm="'서비스계정별 조회'" />(<label
                style="font-weight: bold"
                >62</label
              >건)</span
            >
            <ButtonComponent :btnClass="'btnclass2'" :btnName="'엑셀다운'" />
            <ButtonComponent :btnClass="'btnclass2'" :btnName="'선박발송'" />
            <ButtonComponent :btnClass="'btnclass2'" :btnName="'선박파일'" />
            <ButtonComponent :btnClass="'btnclass2'" :btnName="'선박별 상세'" />
            <ButtonComponent :btnClass="'btnclass2'" :btnName="'선박별 요약'" />
            <span style="float: right; margin: 3px">
              <select-box-component
                :selectClass="'select_input3'"
                :width="200"
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
            <div class="ag_grid_sp">
              <ag-grid-component
                :rowData="rowData1"
                :columnDefs="columnDefs1"
                :grid-options="gridOptions"
                :isWidthFit="false"
              />
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AgGridComponent from "@/components/common/AgGridComponent";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import SelectBoxComponent from "@/components/common/SelectBoxComponent";
import SubInfoTitle from "@/components/common/SubInfoTitle.vue";
import CusomerInfoComponent from "@/components/common/CustomerInfoComponent";
import BoxComponent from "@/components/common/BoxComponent";
import CustomerSeachComponent from "@/components/common/CustomerSearchComponent";
import TreeGridComponent from "@/components/common/TreeGridComponent";

export default {
  name: "ChageInfoRetv",
  components: {
    TreeGridComponent,
    AgGridComponent,
    ButtonComponent,
    SubInfoTitle,
    CusomerInfoComponent,
    CustomerSeachComponent,
    BoxComponent,
    SelectBoxComponent,
  },
  data() {
    return {
      gridOptions: null,
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
      customerInfo: {
        customerId: "CC10001042",
        customerName: "주식회사 시너샛코리아",
        customerType: "일반",
        country: "한국",
        businessNumber: "6268700321",
        customerClass: "영리법인",
        phoneNumber: "01012345678",
      },
      columnDefs1: [
        {
          headerName: "청구계정",
          field: "model0",
          cellStyle: {
            "border-left": "0px",
          },
          headerClass: "ag-header-first-child",
        },
        { headerName: "청구년월", field: "model1" },
        { headerName: "청구통화", field: "model2" },
        { headerName: "원화당월요금", field: "model3" },
        { headerName: "원화잔액", field: "model4" },
        { headerName: "외화당월요금", field: "model5" },
        { headerName: "외화납부요금", field: "model6" },
        { headerName: "외화잔액", field: "model7" },
        { headerName: "환율", field: "price" },
      ],
      rowData1: [
        {
          model0: "00100004023",
          model1: "2022-10",
          model2: "KRW",
          model3: "20,225,214",
          model4: "0",
          model5: "0",
          model6: "0",
          model7: "0",
          price: "1.434.8",
        },
        {
          model0: "00100004000",
          model1: "2022-9",
          model2: "KRW",
          model3: "20,225,000",
          model4: "0",
          model5: "0",
          model6: "0",
          model7: "0",
          price: "1.434.8",
        },
        {
          model0: "00100004021",
          model1: "2022-2",
          model2: "KRW",
          model3: "20,005,214",
          model4: "0",
          model5: "0",
          model6: "0",
          model7: "0",
          price: "1.434.8",
        },
      ],
    };
  },
  beforeMount() {
    this.gridOptions = {
      pinnedBottomRowData: [{ model0: "합계", model1: null, price: 0 }],
    };
  },
};
</script>

<style scoped>
div.section0 {
  display: inline-block;
  position: relative;
  padding: 20px 0 143px;
  box-sizing: border-box;
  white-space: nowrap;
}

div.cusInfo {
  display: inline-block;
  float: left;
  width: 100%;
  margin: 10px;
  height: 120px;
}

div.contList {
  display: inline-block;
  float: left;
  width: 18%;
  margin: 10px;
  padding-bottom: 10px;
  padding-top: 20px;
  height: 680px;
}

.clList {
  display: inline-block;
  width: 79%;
  float: left;
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
  margin: 10px;
  width: 100%;
  height: 100%;
  border: groove;
  border-top-color: #2dbdb6;
}

.feeSear {
  display: inline-block;
  float: left;
  width: 30%;
  height: 225px;
  margin: 10px;
}

.sevSear {
  display: inline-block;
  float: right;
  margin: 10px;
  width: 47%;
  height: 225px;
}
</style>
