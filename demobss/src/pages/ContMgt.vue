<template>
  <div>
    <div class="section0">
      <!-- <label style="background-color: #2dbdb6; border-radius: 3px; color: #ffffff">★</label> 계약 > 계약정보 > <label style="font-weight: bold">계약상세 [CONT_01_001]</label> -->
      <h1>계약 상세</h1>
      <div class="cusInfo0">
        <table style="width: 100%">
          <tr style="height: 50px">
            <td
              style="
                folat: left;
                width: 80%;
                border: solid 2px;
                padding-left: 10px;
              "
            >
              <label><h2>고객조회</h2></label>
              <select style="width: 100px; height: 25px; margin-right: 10px">
                <option selected disabled value="">선택</option>
                <option value="A">고객ID</option>
                <option value="B">계약ID</option>
                <option value="C">선박ID</option>
                <option value="D">청구계정ID</option>
              </select>
              <input
                style="background-color: white; width: 380px"
                type="text"
              />
            </td>
          </tr>
        </table>
      </div>

      <div class="cusInfo">
        <label
          style="background-color: #2dbdb6; border-radius: 3px; color: #ffffff"
          >▶</label
        ><label style="font-weight: bold">고객정보</label>
        <div style="width: 98%; border: groove 1px; padding: 10px 0 10px 50px">
          <table>
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
              <td>
                <label>국가</label> <input type="text" value="" disabled />
              </td>
              <td>
                <label style="width: 130px">사업자등록번호</label>
                <input type="text" value="6268700031" disabled />
              </td>
            </tr>
          </table>
          <table>
            <tr>
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
                  style="width: 80px; margin-right: 20px"
                  type="text"
                  value=""
                />
                <input style="width: 570px" type="text" value="" disabled />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="cmProducts">보유 상품</div>

      <div class="CommonInfo">
        <div>
          <span style="font-size: 15px"
            ><label
              style="
                background-color: #2dbdb6;
                border-radius: 3px;
                color: #ffffff;
              "
              >▶</label
            ><label style="font-weight: bold">기본정보</label></span
          >
          <span style="float: right;  ">
            <table class="selectSearch">
              <tr>
                <td>
                  <label>BM</label>
                  <SelectBoxComponent
                  :selectClass="'select_input2'"
                  :cdGroup="'optionsSearchDiv'"
                  :defaultValue="'선택'"
                  v-model="searchDiv1"
                  @input="
                    (value) => {
                      searchDiv1 = value;
                    }
                  "
                  />
                </td>
                <td>
                  <label><h2>Service</h2></label>
                  <SelectBoxComponent
                  :selectClass="'select_input2'"
                  :cdGroup="'optionsSearchDiv'"
                  :defaultValue="'선택'"
                  v-model="searchDiv1"
                  @input="
                    (value) => {
                      searchDiv1 = value;
                    }
                  "
                  />
                </td>
                <td>
                  <ButtonComponent
                  :btnClass="'btnClass3'"
                  :btnName="'신규등록'"
                  /></td>
                            </tr>
            </table>
          </span>
        </div>
        <div style="border:groove; margin-top:15px;" >
        <table>
          <tr>
            <td>
              <label> 계약ID</label>
              <input type="text" value="S00000002710" disabled />
            </td>
            <td>
              <label>BM</label> <input type="text" value="MVSAT" disabled />
            </td>
            <td>
              <label> 계약상태</label>
              <input type="text" value="사용중" disabled />
            </td>
          </tr>
          <tr>
            <td>
              <label> 개통일시</label>
              <input type="text" value="2022-10-19 09:59:31 " disabled />
            </td>
            <td>
              <label> 약정기간</label>
              <input type="text" value="36개월 약정" disabled />
            </td>
            <td>
              <label> 서비스오더ID</label>
              <input type="text" value=" ㄴㅇㅁㄹㄴㅇㄹ " disabled />
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <label> 상품</label>
              <input
                style="width: 503px"
                type="text"
                value="Regional MVSAT"
                disabled
              />
            </td>
            <td>
              <label> 약정종료일</label>
              <input type="text" value="2022-12-01" disabled />
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <label> 부가정보</label>
              <input
                style="width: 800px"
                type="text"
                value="계약 부가정보 입력해주세요."
                disabled
              />
            </td>
            <!-- <td><label> 약정종료일</label> <input type="text" value="2022-12-01" disabled> </td> -->
          </tr>
        </table>
        </div>
      </div>

      <div class="shipInfo">
        <div style="margin: 10px">
          <span style="font-size: 15px"
            ><label
              style="
                background-color: #2dbdb6;
                border-radius: 3px;
                color: #ffffff;
              "
              >▶</label
            ><label style="font-weight: bold">선박 정보</label></span
          >

          <table style="border: groove; width: 100%">
            <tr>
              <td>
                <label> 선박ID</label>
                <input type="text" value="Going Merry" disabled />
              </td>
              <td>
                <label> 선박명</label>
                <input type="text" value="고잉메리호" disabled />
              </td>
              <td>
                <label> IMO Number</label>
                <input type="text" value="  " disabled />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="svOrgInfo">
        <div style="margin: 10px">
          <span style="font-size: 15px"
            ><label
              style="
                background-color: #2dbdb6;
                border-radius: 3px;
                color: #ffffff;
              "
              >▶</label
            ><label style="font-weight: bold">영업조직 정보</label></span
          >
          <table style="border: groove">
            <tr>
              <td>
                <label> 영업조직</label>
                <input type="text" value="해양고객팀(C11116666)" disabled />
              </td>
              <td>
                <label> 영업담당자</label>
                <input type="text" value="김해양" disabled />
              </td>
              <td>
                <label> 승인상태</label>
                <input type="text" value="승인" disabled />
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div class="ContMemInfo">
        <div style="margin: 10px">
          <div>
            <span style="font-size: 15px; "
              ><label
                style="
                  background-color: #2dbdb6;
                  border-radius: 3px;
                  color: #ffffff;
                "
                >▶</label
              ><label style="font-weight: bold; ">청구계정 정보</label></span
            >
            <span>
              <table style="display: inline-block">
                <tr>
                  <td>
                  <SelectBoxComponent
                  :selectClass="'select_input3'"
                  :cdGroup="'optionsSearchDiv'"
                  :defaultValue="'선택'"
                  v-model="searchDiv1"
                  @input="
                    (value) => {
                      searchDiv1 = value;
                    }
                  "
                  />
                    <input
                      style="
                        display: inline-block;
                        border-style: groove;
                        width: 150px;
                        height: 18px;
                        font-size: 15px;
                        text-align: center;
                      "
                      type="text"
                    />
                  </td>
                </tr>
              </table>
            </span>
          </div>

          <table class="accountInfo" style="border: groove">
            <tr>
              <td>
                <label> 청구계정ID</label>
                <input type="text" value="S00000002710" disabled />
              </td>
              <td>
                <label> 수신인</label>
                <input
                  type="text"
                  value="MVSAT"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td>
                <label> 결제통화</label>
                <input type="text" value="2022-10-19 09:59:31 " disabled />
              </td>
              <td>
                <label> 납부방법</label>
                <input
                  type="text"
                  value="36개월 약정"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td>
                <label> 수신 E-Mail</label>
                <input type="text" value="Regional MVSAT" disabled />
              </td>
              <td>
                <label> 납부일자</label>
                <input
                  type="text"
                  value="2022-12-01"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                <label> 청구서표기명</label>
                <input
                  type="text"
                  value="엘토스커뮤니케이션(주)"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                <label> 주소</label>
                <input
                  type="text"
                  value="서울특별시sss 서초구 효령로 1476 ktds"
                  disabled
                />
              </td>
            </tr>
          </table>
        </div>
        <div style="float: right; margin-right: 70px">
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'수시청구계정등록'" />
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'청구계정등록'" />
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'청구계정조회/수정'" />
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'청구계정변경'" />
        </div>
      </div>
      <div class="feeInfo">
        <span
          style="
            font-size: 15px;
            height: 40px;
            display: inline-block;
            margin-right: 20px;
          "
          ><label
            style="
              background-color: #2dbdb6;
              border-radius: 3px;
              color: #ffffff;
            "
            >▶</label
          ><label style="font-weight: bold">요금정보</label></span
        >
        <div style="height: 100%; width: 100%">
          <ag-grid-component
            :rowData="rowData1"
            :columnDefs="columnDefs1"
            :isWidthFit="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AgGridComponent from "@/components/common/AgGridComponent";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import SelectBoxComponent from "../components/common/SelectBoxComponent.vue";
// import Section from "@/components/Section";
export default {
  name: "ContMgt",
  components: {
    AgGridComponent, ButtonComponent, SelectBoxComponent
  },
  data() {
    return {
      gridOptions: null,
      searchDiv1:'',
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

div.section0 > div.cusInfo0 {
  display: inline-block;
  float: left;
  width: 87%;
  margin: 10px;
  height: auto;
}

.cusInfo0 table tr > td > label {
  display: inline-block;
  width: 70px;
  font-weight: bold;
  padding-left: 10px;
}

.cusInfo0 table tr > td > input {
  background-color: antiquewhite;
}

div.section0 > div.cusInfo {
  display: inline-block;
  float: left;
  height: auto;
  width: 86%;
  margin: 10px;
}

.cusInfo table tr > td > label {
  display: inline-block;
  width: 70px;
  padding-left: 30px;
  font-size: 17px;
  font-weight: bold;
}

.cusInfo table tr > td > input {
  background-color: #f9f9f9;
  width: 150px;
}

/* div.section0 > div.cusSearch {
  float: left;
  background-color: rgba(23, 202, 101, 0.862);
  width: 98%;
  margin: 0 auto;
  padding-bottom:10px;

  height: 100px;
} */
/*div.section0 > div.cusInfo {
  float: left;
  background-color: antiquewhite;
  width: 98%;
  margin: 0 auto;
  padding-bottom:10px;
  height: 100px;
} */

div.section0 > div.cmProducts {
  float: left;
  width: 900px;
  /* background-color: aquamarine; */
  margin: 0 10px auto;
  padding: 0 0 10px auto;
  height: 330px;
  border: groove;
}

div.section0 > div.ContMemInfo {
  display: inline-block;
  width: 934px;
  /* background-color: rgba(8, 149, 149, 0.423); */
  margin: 0 auto auto 5px;
  height: 270px;
}

.ContMemInfo table.accountInfo tr > td > label {
  display: inline-block;
  background-color: #f9f9f9;
  border-style: groove;
  width: 75px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.ContMemInfo table.accountInfo tr > td > input {
  background-color: #f9f9f9;
  width: 355px;
  height: 20px;
  font-size: 12px;
}

.CommonInfo {
  display: inline-block;
  width: 920px;
  margin: 0 auto auto 13px;
  height: 180px;
}

.CommonInfo table tr > td > label {
  display: inline-block;
  background-color: #f9f9f9;
  border-style: groove;
  width: 80px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.CommonInfo table tr > td > input {
  background-color: #f9f9f9;
  width: 200px;
  height: 20px;
  font-size: 12px;
}
/* 
.CommonInfo table.selectSearch{  
display: inline-block;
width: 150px; 
height: 25px; 
margin-right: 10px;

} */


.CommonInfo table.selectSearch tr > td > label {
  display: inline-block;
  width: 80px;
  height: 20px;
  font-weight: bold;
  font-size: 14px;
}

.CommonInfo table.selectSearch tr > td > select {
  display: inline-block;
  background-color: #f9f9f9;
  width: 150px;
  height: 25px;
  font-weight: bold;
  font-size: 14px;
}

.shipInfo {
  display: inline-block;
  width: 940px;
  margin: 0 auto auto 5px;
  height: 80px;
}

.shipInfo table tr > td > label {
  display: inline-block;
  background-color: #f9f9f9;
  border-style: groove;
  width: 80px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.shipInfo table tr > td > input {
  background-color: #f9f9f9;
  width: 200px;
  height: 20px;
  font-size: 12px;
}

.svOrgInfo {
  display: inline-block;
  width: 940px;
  margin: 0 auto auto 5px;
  height: 80px;
}
.svOrgInfo table {
  width:100%;
}
.svOrgInfo table tr > td > label {
  display: inline-block;
  background-color: #f9f9f9;
  border-style: groove;
  width: 80px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.svOrgInfo table tr > td > input {
  background-color: #f9f9f9;
  width: 200px;
  height: 20px;
  font-size: 12px;
}

.feeInfo {
  display: inline-block;
  width: 905px;
  /* background-color: rgba(8, 149, 149, 0.423); */
  margin: 0 auto auto 5px;
  height: 300px;
}

/* #cont table {
  border-top: #e4e4e4 solid 1px;
  margin-bottom: 10px;
  margin-top:10px;
}
#cont table tr td {
  border-bottom: #e4e4e4 solid 1px;
  border-left: #e4e4e4 solid 1px;
  font-size: 14px;
  padding: 5px 10px 5px 10px;
  height: 30px;
  line-height: 22px;
}
#cont table tr td {
  border-right: #e4e4e4 solid 1px;
}
#cont table tr > td.tit {
  font-weight: 600;
  background-color: #d1f2ff;
  text-align: center;
} */
</style>
