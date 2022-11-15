<template>
  <div>
    <div class="container">
      <div class="item" >
        <CustomerSearchComponent
            :cdGroup="'optionsSearchDiv'"
            :titleShow="false"
            style="height:60px;"
        />
      </div>

      <div class="item" style="display:block;">
        <CusomerInfoComponent :customer-info="customerInfo" />
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
import SelectBoxComponent from "../common/SelectBoxComponent.vue";
import SubInfoTitle from "@/components/common/SubInfoTitle.vue";
import CusomerInfoComponent from "@/components/common/CustomerInfoComponent";
import BoxComponent from "@/components/common/BoxComponent";
import TreeGridComponent from "@/components/common/TreeGridComponent";
import FormDataComponent from "@/components/common/FormDataComponent.vue";
import ApiMixin from "@/service/common";

export default {
  mixins:[ApiMixin],
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
      searchDiv1: "",
      searchValue2: "",
      tableData: [
        {
          name: "인말새트 C국내협력점",
          id: "P10001257",
          state: "사용중",
          children: [
            {
              name: "Regional MVSAT 128/256 요금(80cm 안테나용) 3년약정 [YC CLOVER]",
              id: "P10000012679",
              state: "사용중",
            },
          ],
        },
        {
          name: "인말새트 C국내협력점",
          id: "P10001257",
          state: "사용중",
          children: [
            {
              name: "Regional MVSAT 128/256 요금(80cm 안테나용) 3년약정 [YC CLOVER]",
              id: "P10000012679",
              state: "사용중",
            },
          ],
        },
        {
          name: "인말새트 C국내협력점",
          id: "P10001257",
          state: "사용중",
          children: [
            {
              name: "Regional MVSAT 128/256 요금(80cm 안테나용) 3년약정 [YC CLOVER]",
              id: "P10000012679",
              state: "사용중",
              children: [
                {
                  name: "Regional MVSAT 128/256 요금(80cm 안테나용) 3년약정 [YC CLOVER]",
                  id: "P10000012679",
                  state: "사용중",
                },
              ],
            },
          ],
        },
      ],
      columns: [
        { label: "상품명", id: "name" },
        { label: "상품ID", id: "id" },
        { label: "상태", id: "state" },
      ],
      customerInfo : [],
      columnDefs: [],
      rowData: [],
    };
  },
  async beforeMount() {
    const res = await this.$connect('application/json','/info.json','get','');
    this.customerInfo = res.info[0];
    this.columnDefs =res.columnDefs;
    this.rowData = res.rowData;
  },
  methods:{
    addComp(param){
      this.$emit('input',param);
    }
  }
};
</script>

<style scoped>
.container{
  display:grid;
  grid-template-columns:500px minmax(860px, 1fr) ;
  grid-template-rows: 40px 70px 130px 50px 60px 150px minmax(200px,1fr);
  gap: 10px 10px;
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
  width: 84%;
  grid-column: 2/3;
  grid-row:3/4;
}

.item:nth-child(5){
  width: 84%;
  grid-column: 2/3;
  grid-row: 4/5;
}

.item:nth-child(6){
  width: 84%;
  grid-column: 2/3;
  grid-row: 5/6;
}

.item:nth-child(7){
  grid-column: 1/2;
  grid-row:6/7;
}

.item:nth-child(8){
  width: 84%;
  grid-column: 2/3;
  grid-row:6/7;
}

div.layout {
  height: 100vh;
  position: absolute;
  overflow-y: scroll;
}

.cmProducts {
  float: left;
  margin:  auto;
  padding: auto;
  position: relative;
  height: 230px;
  min-width: 500px;
  border: groove;
  overflow: scroll;
}

.feeInfo {
  height: 300px;
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
/*
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
.col-12 {width: 1840px;} */
</style>
