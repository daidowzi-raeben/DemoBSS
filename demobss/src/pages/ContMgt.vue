<template>
  <div>
    <div class="section0">
      <div class="cusInfo0">
        <CustomerSearchComponent
            :cdGroup="'optionsSearchDiv'"
        />
      </div>

      <div class="cusInfo">
        <CusomerInfoComponent
            :customer-info="customerInfo"
        />
      </div>
      
      <div class="cmProducts">
          <SubInfoTitle
          :subInfoTitleNm="'보유 상품'"
          /> </div>
      
      <div class="CommonInfo">
        <div>
          <SubInfoTitle
          :subInfoTitleNm="'기본정보'"
          />
            <table class="selectSearch" style="float: right">
              <tr>
                <td>
                  <label>BM</label>
                  <Select-Box-Component
                    :selectClass="'select_input2'"
                    :cdGroup="'optionsSearchDiv'"
                    :defaultValue="'선택'"
                    :default-num="'2'"
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
                  <Select-Box-Component
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
                  />
                </td>
              </tr>
            </table>
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
          </tr>
        </table>
        </div>
      </div>

      <div class="shipInfo">
        <div style="margin: 10px">
          <SubInfoTitle
          :subInfoTitleNm="'선박정보'"
          />

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
          <SubInfoTitle
          :subInfoTitleNm="'영업조직정보'"
          />
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
        <SubInfoTitle
          :subInfoTitleNm="'청구계정 정보'"
          />
          <table style="float:right; display: inline-block">
                <tr>
                  <td>
                  <Select-Box-Component
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
              <InputComponent
                  :type="'text'"
                  :inputClass="'ContMemInfo_inputbox'"
                  v-model="searchValue2"
                  :placeholder="''"
                  @input="
                (value) => {
                  searchValue2 = value;}"/>
                  </td>
                </tr>
              </table>
    </div>

          <table class="accountInfo" style="border: groove">
            <tr>
              <td>
                <label> 청구계정ID</label>
                <input type="text" value="S00000002710" disabled />
              </td>
              <td>
                <label> 수신인</label>
                <input type="text" value="MVSAT" disabled />
              </td>
            </tr>
            <tr>
              <td>
                <label> 결제통화</label>
                <input type="text" value="2022-10-19 09:59:31 " disabled />
              </td>
              <td>
                <label> 납부방법</label>
                <input type="text" value="36개월 약정" disabled />
              </td>
            </tr>
            <tr>
              <td>
                <label> 수신 E-Mail</label>
                <input type="text" value="Regional MVSAT" disabled />
              </td>
              <td>
                <label> 납부일자</label>
                <input type="text" value="2022-12-01" disabled />
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                <label> 청구서표기명</label>
                <input type="text" value="엘토스커뮤니케이션(주)" disabled />
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
          <ButtonComponent
            :btnClass="'btnClass3'"
            :btnName="'수시청구계정등록'"
          />
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'청구계정등록'" />
          <ButtonComponent
            :btnClass="'btnClass3'"
            :btnName="'청구계정조회/수정'"
          />
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'청구계정변경'" />
        </div>
      </div>

      
      <div class="feeInfo">
        <BoxComponent
          :sub-info-title-nm="'요금정보'"
          :row-data="rowData1"
          :column-defs="columnDefs1"
          :select-box-show="false"
          :total="'10'"
          :cdGroup="'optionsSearchDiv'"
          :btnName="'엑셀다운'"
          />
      </div>
    </div>
  </div>
</template>

<script>
import CustomerSearchComponent from "@/components/common/CustomerSearchComponent";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import InputComponent from "@/components/common/InputComponent";
import SelectBoxComponent from "../components/common/SelectBoxComponent.vue";
import SubInfoTitle from "@/components/common/SubInfoTitle.vue";
import CusomerInfoComponent from "@/components/common/CustomerInfoComponent";
import BoxComponent from "@/components/common/BoxComponent";

export default {
  name: "ContMgt",
  components: {
    BoxComponent,
    CusomerInfoComponent,
    CustomerSearchComponent,
    ButtonComponent,
    InputComponent,
    SelectBoxComponent,
    SubInfoTitle,
  },
  data() {
    return {
      searchValue: null,
      gridOptions: null,
      searchDiv1:'',
      searchValue2:'',
      customerInfo : {
        customerId : "CC10001042",
        customerName : "주식회사 시너샛코리아",
        customerType : "일반",
        country : "한국",
        businessNumber: "6268700321",
        customerClass : "영리법인",
        phoneNumber: "01012345678"
      },
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

.ContMemInfo {
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
  width: 100%;
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
