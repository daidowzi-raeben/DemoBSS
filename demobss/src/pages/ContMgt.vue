<template>
  <div>
    <div class="section0">
      <div>
      <div class="col-12 cusInfo0" style="min-width:800px;">
        <CustomerSearchComponent
            :cdGroup="'optionsSearchDiv'"
        />
      </div>

      <div class="col-12 cusInfo" style="min-width:1200px;">
        <CusomerInfoComponent
            :customer-info="customerInfo"
        />
      </div>
      </div>

      <div class="testdiv">
        <div class="col-5" >
          <div class="col-5 cmProducts" >
              <SubInfoTitle
              :subInfoTitleNm="'보유 상품'"/>
              <TreeGridComponent />
          </div>
          
          <div class="col-5">
            <form-data-component
            :FormDataclass="'InfoOfAccount'"
            :subInfoTitleNm="'청구계정 정보'"
            />  
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
        </div>

        <div class="col-6" > 
            <div>
              <form-data-component
            :FormDataclass="'InfoOfBasic'"
            :subInfoTitleNm="'기본정보'"
            />  
          </div>
          <div>
            <FormDataComponent
            :FormDataclass="'InfoOfShip'"
            :subInfoTitleNm="'선박정보'"
            />
            </div>
            <div>
              <FormDataComponent
              :FormDataclass="'InfoOfOrg'"
              :subInfoTitleNm="'영업조직정보'"
              />
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
import TreeGridComponent from "@/components/common/TreeGridComponent";
import FormDataComponent from '@/components/common/FormDataComponent.vue';

export default {
  name: "ContMgt",
  components: {
    TreeGridComponent,
    BoxComponent,
    CusomerInfoComponent,
    CustomerSearchComponent,
    ButtonComponent,
    InputComponent,
    SelectBoxComponent,
    SubInfoTitle,
    FormDataComponent,
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
  
  height: 100vh;
  position: absolute;
  overflow-y: scroll;
}

div.section0 {
  display: grid;
  position: relative;
  /* top: 177px; border: #F00 solid 1px; */
  min-height: calc(100% - 297px);
  padding: 20px 0 143px;
  box-sizing: border-box;
  min-width: 800px;
}

div.section0 > div.cusInfo0 {
  display: inline-block;
  float: left;
  margin: 10px;
  height: auto;
}

.cusInfo0 table tr > td > label {
  display: inline-block;
  
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
  
  margin: 10px;
}

.cusInfo table tr > td > label {
  display: inline-block;
  
  padding-left: 30px;
  font-size: 17px;
  font-weight: bold;
}

.cusInfo table tr > td > input {
  background-color: #f9f9f9; 
}

.cmProducts {
  float: left;
  margin:  auto;
  padding: auto;
  position: relative;
  height: 330px;
  min-width: 600px;
  border: groove;
  overflow: scroll;
}

.ContMemInfo {
  display: inline-block;
  margin: 0 auto auto 5px;
  height: 270px;
}

.ContMemInfo table.accountInfo tr > td > label {
  display: inline-block;
  background-color: #f9f9f9;
  border-style: groove;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.ContMemInfo table.accountInfo tr > td > input {
  background-color: #f9f9f9;
  height: 20px;
  font-size: 12px;
}

.CommonInfo {
  display: inline-block;
  margin: 0 auto auto 13px;
  height: 180px;
}

.CommonInfo table tr > td > label {
  display: inline-block;
  background-color: #f9f9f9;
  border-style: groove;
  
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.CommonInfo table tr > td > input {
  background-color: #f9f9f9;

  height: 20px;
  font-size: 12px;
}

.CommonInfo table.selectSearch tr > td > label {
  display: inline-block;
  height: 20px;
  font-weight: bold;
  font-size: 14px;
}

.CommonInfo table.selectSearch tr > td > select {
  display: inline-block;
  background-color: #f9f9f9;
  height: 25px;
  font-weight: bold;
  font-size: 14px;
}

.shipInfo {
  display: inline-block;
  margin: 0 auto auto 5px;
  height: 80px;
}

.shipInfo table tr > td > label {
  display: inline-block;
  background-color: #f9f9f9;
  border-style: groove;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.shipInfo table tr > td > input {
  background-color: #f9f9f9;
  height: 20px;
  font-size: 12px;
}

.svOrgInfo {
  display: inline-block;
  margin: 0 auto auto 5px;
  height: 80px;
}

.svOrgInfo table tr > td > label {
  display: inline-block;
  background-color: #f9f9f9;
  border-style: groove;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.svOrgInfo table tr > td > input {
  background-color: #f9f9f9;
  height: 20px;
  font-size: 12px;
}

.feeInfo {
  height: 300px;
}

* {
  box-sizing: border-box;
}

[class*="col-"] {
  float: left;
  padding: 10px;
  margin:5px;
}

/* .col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;} */

.col-1 {width: 160px;}
.col-2 {width: 320px;}
.col-3 {width: 480px;}
.col-4 {width: 640px;}
.col-5 {width: 800px;}
.col-6 {width: 960px;}
.col-7 {width: 1120px;}
.col-8 {width: 1280px;}
.col-9 {width: 1440px;}
.col-10 {width: 1600px;}
.col-11 {width: 1720px;}
.col-12 {width: 1840px;}
</style>
