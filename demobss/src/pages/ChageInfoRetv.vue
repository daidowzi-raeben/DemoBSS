<template>
  <div class="section0">
    <div class="cusInfo">
      <CustomerInqComponent />
      <CusomerInfoComponent />
    </div>
    <div class="contList">
      <div>
      <SubInfoTitle
          :subInfoTitleNm="'서비스 계약목록'"
          />
      >
      <ButtonComponent
        :btnClass="'btnclass2'"
        :btnName="'전체펼치기'"
      />
      <ButtonComponent
        :btnClass="'btnclass2'"
        :btnName="'전체접기'"
      />
      </div>
      <div
        style="
          margin: 10px;
          width: 100%;
          height: 100%;
          border: groove;
          border-top-color: #2dbdb6;
        "
      ></div>
    </div>
    <div style="left: 30%">
      <div>
        <div class="clList">
          <span
            >
        <SubInfoTitle
          :subInfoTitleNm="'청구목록'"
          /> (<label
              style="font-weight: bold"
              >6</label
            >건)</span
          >
          <ButtonComponent
          :btnClass="'btnclass2'"
          :btnName="'엑셀다운'"
          />
          >
          <span style="float: right; margin: 3px"
            ><select style="width: 100px; height: 21.5px">
              <option>1개월</option>
              <option>3개월</option>
              <option selected>6개월</option>
              <option>12개월</option>
            </select></span
          >
          <span style="float: right; margin: 3px; font-weight: bold"
            >최근 개월 수</span
          >
          <div
            style="
              margin: 10px;
              width: 100%;
              height: 100%;
              border: groove;
              border-top-color: #2dbdb6;
            "
          >
            <ag-grid-component
              :rowData="rowData1"
              :columnDefs="columnDefs1"
              :grid-options="gridOptions"
            />
          </div>
        </div>
        <div style="width: 100%">
          <div class="feeSear">
            <span
              >
        <SubInfoTitle
          :subInfoTitleNm="'요금항목별 조회'"
          /> (<label
                style="font-weight: bold"
                >18</label
              >건)</span
            >
            <ButtonComponent
            :btnClass="'btnclass2'"
            :btnName="'엑셀다운'"
            />
            <div
              style="
                margin: 10px;
                width: 100%;
                height: 100%;

                border: groove;
                border-top-color: #2dbdb6;
              "
            >
              <ag-grid-component
                :rowData="rowData1"
                :columnDefs="columnDefs1"
                :grid-options="gridOptions"
                :isWidthFit="false"
              />
            </div>
          </div>
          <span class="sevSear">
            <span>
        <SubInfoTitle
          :subInfoTitleNm="'서비스계정별 조회'"
          />(<label style="font-weight: bold">62</label>건)</span
            >
          <ButtonComponent
          :btnClass="'btnclass2'"
          :btnName="'엑셀다운'"
          />
          <ButtonComponent
          :btnClass="'btnclass2'"
          :btnName="'선박발송'"
          />
          <ButtonComponent
          :btnClass="'btnclass2'"
          :btnName="'선박파일'"
          />
          <ButtonComponent
          :btnClass="'btnclass2'"
          :btnName="'선박별 상세'"
          />
          <ButtonComponent
          :btnClass="'btnclass2'"
          :btnName="'선박별 요약'"
          />
            <span style="float: right; margin: 3px">
              <select style="width: 100px; height: 21.5px">
                <option selected>전체</option>
                <option>최신순</option>
                <option>최근 1개월 이내</option>
              </select></span
            >
            <div
              style="
                margin: 10px;
                width: 100%;
                height: 100%;
                border: groove;
                border-top-color: #2dbdb6;
              "
            >
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
import InputComponent from "@/components/common/InputComponent";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import SubInfoTitle from "@/components/common/SubInfoTitle.vue";
import CusomerInfoComponent from "@/components/common/CusomerInfoComponent";
import CustomerInqComponent from "@/components/common/CustomerInqComponent";

export default {
  name: "ChageInfoRetv",
  components: { AgGridComponent, InputComponent, ButtonComponent, SubInfoTitle, CusomerInfoComponent, CustomerInqComponent },
  data() {
    return {
      gridOptions: null,
      searchValue: null,
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
div.layout {
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow-y: scroll;
}

div.section0 {
  display: inline-block;
  position: relative;
  /* top: 177px; border: #F00 solid 1px; */
  min-height: calc(100% - 297px);
  padding: 20px 0 143px;
  box-sizing: border-box;
}

div.cusInfo {
  float: left;
  width: 89vw;
  margin: 10px;
  height: 120px;
}
div.contList {
  float: left;
  width: 15vw;
  margin: 10px;
  padding-bottom: 10px;
  padding-top :20px;
  height: 680px;
}
.clList {
  width: 73vw;
  float: left;
  margin: 10px;
  padding-bottom: 25px;
  padding-top :20px;
  height: 410px;
}
.feeSear {
  float: left;
  width: 25vw;
  height: 225px;
  margin: 10px;
}
.sevSear {
  float: left;
  margin: 10px;
  width: 47vw;
  height: 225px;
}
</style>
