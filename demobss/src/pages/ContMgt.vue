<template>
  <div>
    <div class="container">
      <div class="item" >
        <CustomerSearchComponent
            :cdGroup="'optionsSearchDiv'"
        />
      </div>

      <div class="item"> 
        <CusomerInfoComponent :customer-info="customerInfo"/>
      </div>

      <div class="item ">
        <SubInfoTitle :subInfoTitleNm="'보유 상품'" />
        <div class="cmProducts">
        <TreeGridComponent :tableData="tableData" :columns="columns" style="min-width: 600px;"/>
        </div>
      </div>

      <div class="item">   
        <form-data-component
          :FormDataclass="'InfoOfBasic'"
          :subInfoTitleNm="'기본정보'"
        />
        </div>
      <div class="item"> 
        <FormDataComponent
          :FormDataclass="'InfoOfShip'"
          :subInfoTitleNm="'선박정보'"
        />
      </div>
      <div class="item"> 
        <FormDataComponent
          :FormDataclass="'InfoOfOrg'"
          :subInfoTitleNm="'영업조직정보'"
        />
      </div>
      <div class="item">
        <form-data-component
          :FormDataclass="'InfoOfAccount'"
          :subInfoTitleNm="'청구계정 정보'"
          @input="addComp"
        />
        <!-- <div style="float: right; display:flex;"> 
          <ButtonComponent
            :btnClass="'btnClass3'"
            :btnName="'수시청구계정등록'"
          />
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'청구계정등록'"/>
          <ButtonComponent
            :btnClass="'btnClass3'"
            :btnName="'청구계정조회/수정'"
          />
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'청구계정변경'"  :menu="'bill_01_01_01'" @input="addComp"/>
        </div> -->
      </div>
    
      <div class="item feeInfo">
        <BoxComponent
          :sub-info-title-nm="'요금정보'"
          :row-data="rowData"
          :column-defs="columnDefs"
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
.container{
  display:grid;
  grid-template-columns:700px minmax(850px,1fr);
  grid-template-rows: 70px 100px 160px 70px 90px 200px inmax(200px,1fr);
  gap: 10px 30px;
}
.item{
  display: flex;
  flex-wrap: wrap;
}
.item:nth-child(1){
  grid-column: 1/3;
  grid-row:1/2;
}
.item:nth-child(2){
  grid-column: 1/3;
  grid-row:2/3;
}
.item:nth-child(3){
  grid-column: 1/2;
  grid-row: 3/6;
}
.item:nth-child(4){
  grid-column: 2/2;
  grid-row:3/4;
}
.item:nth-child(5){
  grid-column: 2/3;
  grid-row: 4/5;
}
.item:nth-child(6){
  grid-column: 2/3;
  grid-row: 5/6;
}
.item:nth-child(7){
  grid-column: 1/2;
  grid-row:6/7;
}
.item:nth-child(8){
  grid-column: 2/4;
  grid-row:6/7;
}


div.layout {
  
  height: 100vh;
  position: absolute;
  overflow-y: scroll;
  
}

/* div.section0 {
  display: grid;
  position: relative;
  top: 177px; border: #F00 solid 1px;
  min-height: calc(100% - 297px);
  padding: 20px 0 143px;
  box-sizing: border-box;
  min-width: 800px;
} */

/* div.section0 > div.cusInfo0 {
  display: inline-block;
  float: left;
  margin: 100px;
  
  background-color: blue;
  color: red;
  height: auto;
} */

/* .cusInfo0 table tr > td > label {
  display: inline-block;
  font-weight: bold;
  background-color: blue;
  color: red;
  padding-left: 10px;
} */

/* .cusInfo0 table tr > td > input {
  background-color: antiquewhite;
  
  background-color: blue;
  color: red; 
}*/

/* div.section0 > div.cusInfo {
  display: inline-block;
  float: left;
  height: auto;

  background-color: blue;
  color: red;
  margin: 10px;
} */

/* .cusInfo table tr > td > label {
  display: inline-block;
  padding-left: 30px;
  font-size: 17px;
  font-weight: bold;
  
  background-color: blue;
  color: red;
} */

/* .cusInfo table tr > td > input {
  background-color: #f9f9f9;
  
  background-color: blue;
  color: red;
} */

.cmProducts {
  float: left;
  margin:  auto;
  padding: auto;
  position: relative;
  height: 310px;
  min-width: 700px;
  border: groove;
  overflow: scroll;
}
/* 
.ContMemInfo {
  display: inline-block;
  margin: 0 auto auto 5px;
  height: 270px;
} */

/* .CommonInfo {
  display: inline-block;
  margin: 0 auto auto 13px;
  height: 180px;
  
  background-color: blue;
  color: red;
} */

/* .shipInfo {
  display: inline-block;
  margin: 0 auto auto 5px;
  height: 80px;
  
  background-color: blue;
  color: red;
} */


/* .svOrgInfo {
  display: inline-block;
  margin: 0 auto auto 5px;
  height: 80px;
  
  background-color: blue;
  color: red;
} */


.feeInfo {
  height: 300px;
}

/* * {
  box-sizing: border-box;
} */

/* [class*="col-"] {
  float: left;
  padding: 10px;
  margin: 5px;
} */

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
