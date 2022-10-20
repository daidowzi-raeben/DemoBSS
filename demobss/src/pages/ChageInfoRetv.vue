<template>
  <div>
    <!-- <label style="background-color: #2dbdb6; border-radius: 3px; color: #ffffff"
      >★</label
    >
    청구 > 청구요금관리 >
    <label style="font-weight: bold">청구요금정보관리 [BILL_01_001]</label> -->

    <div class="cusInfo">
      <!-- <span
        style="
          float: right;
          margin: 3px;
          padding: 4px;
          font-size: 10px;
          border: solid thin;
        "
        >홈화면설정</span
      >
      <span
        style="
          float: right;
          margin: 3px;
          padding: 4px;
          font-size: 10px;
          border: solid thin;
        "
        >홈화면초기화</span
      > -->
      <label
        style="background-color: #2dbdb6; border-radius: 3px; color: #ffffff"
        >▶</label
      ><label style="font-weight: bold">고객정보</label>
      <table style="width: 100%">
        <tr style="height: 40px">
          <td
            style="
              folat: left;
              width: 95%;
              border: solid 2px slategrey;
              padding-left: 10px;
            "
          >
            <label>고객조회</label>
            <select style="width: 100px; height: 21.5px">
              <option selected>전체</option></select
            >&nbsp;<input style="background-color: white" type="text" />
          </td>
          <td
            style="
              background-color: #bdbdce;
              text-align: center;
              border: solid 2px slategrey;
              margin: 100px 0px;
            "
          >
            <img src="../img/icon_big_search.png" />&nbsp;검색
          </td>
        </tr>
      </table>
      <table style="width: 100%; border: groove 1px">
        <tr>
          <td>
            <label>고객ID</label>
            <input type="text" value="CC10001046" disabled />
          </td>
          <td>
            <label>고객명</label>
            <input type="text" value="주식회사 시너샛코리아" disabled />
          </td>
          <td>
            <label>고객유형</label> <input type="text" value="" disabled />
          </td>
          <td><label>국가</label> <input type="text" value="" disabled /></td>
          <td>
            <label style="width: 130px">사업자등록번호</label>
            <input type="text" value="6268700031" disabled />
          </td>
        </tr>
        <tr style="padding-left: 10px">
          <td>
            <label>고객구분</label>
            <input type="text" value="영리법인" disabled />
          </td>
          <td>
            <label>전화번호</label>
            <input type="text" value="01012341234" disabled />
          </td>
          <td>
            <label>내외구분</label> <input type="text" value="" disabled />
          </td>
          <td>
            <label>주소</label>
            <input
              style="width: 50px"
              type="text"
              value=""
              disabled
            />&nbsp;<input type="text" value="" disabled />
          </td>
        </tr>
      </table>
    </div>
    <div class="contList">
      <span
        ><label
          style="background-color: #2dbdb6; border-radius: 3px; color: #ffffff"
          >▶</label
        ><label style="font-weight: bold">서비스 계약목록</label></span
      >
      <span
        style="
          float: right;
          margin: 3px;
          padding: 4px;
          font-size: 10px;
          border: solid thin;
          font-weight: bold;
        "
        >전체접기</span
      >
      <span
        style="
          float: right;
          margin: 3px 3px 0px 3px;
          padding: 4px;
          font-size: 10px;
          border: solid thin;
          font-weight: bold;
        "
        >전체펼치기</span
      >
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
            ><label
              style="
                background-color: #2dbdb6;
                border-radius: 3px;
                color: #ffffff;
              "
              >▶</label
            ><label style="font-weight: bold">청구목록</label> (<label
              style="font-weight: bold"
              >6</label
            >건)</span
          >
          <span
            style="
              float: right;
              margin: 3px;
              padding: 4px;
              font-size: 10px;
              border: solid thin;
              font-weight: bold;
            "
            >엑셀다운</span
          >
          <span style="float: right; margin: 3px"
            ><select style="width: 100px; height: 21.5px">
              <option selected>6개월</option>
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
              ><label
                style="
                  background-color: #2dbdb6;
                  border-radius: 3px;
                  color: #ffffff;
                "
                >▶</label
              ><label style="font-weight: bold">요금항목별 조회</label> (<label
                style="font-weight: bold"
                >18</label
              >건)</span
            >
            <span
              style="
                float: right;
                margin: 3px;
                padding: 4px;
                font-size: 10px;
                border: solid thin;
                font-weight: bold;
              "
              >엑셀다운</span
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
          </div>
          <span class="sevSear">
            <span
              ><label
                style="
                  background-color: #2dbdb6;
                  border-radius: 3px;
                  color: #ffffff;
                "
                >▶</label
              ><label style="font-weight: bold">서비스계정별 조회</label>
              (<label style="font-weight: bold">62</label>건)</span
            >
            <span
              style="
                float: right;
                margin: 3px;
                padding: 4px;
                font-size: 10px;
                border: solid thin;
                font-weight: bold;
              "
              >선박별 요약</span
            >
            <span
              style="
                float: right;
                margin: 3px;
                padding: 4px;
                font-size: 10px;
                border: solid thin;
                font-weight: bold;
              "
              >선박별 상세</span
            >
            <span
              style="
                float: right;
                margin: 3px;
                padding: 4px;
                font-size: 10px;
                border: solid thin;
                font-weight: bold;
              "
              >선박파일</span
            >
            <span
              style="
                float: right;
                margin: 3px;
                padding: 4px;
                font-size: 10px;
                border: solid thin;
                font-weight: bold;
              "
              >선박파일</span
            >
            <span
              style="
                float: right;
                margin: 3px;
                padding: 4px;
                font-size: 10px;
                border: solid thin;
                font-weight: bold;
              "
              >선박발송</span
            >
            <span style="float: right; margin: 3px">
              <select style="width: 100px; height: 21.5px">
                <option selected>전체</option>
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

export default {
  name: "ChageInfoRetv",
  components: { AgGridComponent },
  data() {
    return {
      gridOptions: null,
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
div.cusInfo {
  float: left;
  width: 89vw;
  margin: 10px;
  height: 120px;
}
td > input {
  background-color: #f9f9f9;
  border-radius: 2px;
}
div.contList {
  float: left;
  width: 15vw;
  margin: 10px;
  padding-bottom: 10px;
  height: 680px;
}
.clList {
  width: 73vw;
  float: left;
  margin: 10px;
  padding-bottom: 25px;
  height: 410px;
}
.feeSear {
  float: left;
  width: 25vw;
  height: 225px;
  margin: 10px;
}
td > label {
  display: inline-block;
  width: 60px;
  padding-left: 10px;
  font-weight: bold;
}
.ch_area {
  position: relative;
  left: 30px;
  /*border: #F00 solid 1px;*/
  min-height: calc(100% - 180px);
  padding: 20px 0 143px;
  box-sizing: border-box;
}
.sevSear {
  float: left;
  margin: 10px;
  width: 47vw;
  height: 225px;
}
</style>