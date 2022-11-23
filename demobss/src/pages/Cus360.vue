<template>
  <article class="cus360View">
    <div class="item">   <!-- 1 -->
        <cust-retv-component
        :cdGroup="'optionsSearchDiv'" />
    </div>

    <div class="item">
      <div class="cust_box">
        <SubInfoTitle
          :subInfoTitleNm="'고객정보'"
      />
      </div>
      <div class="cust_box_butt">
        <button-component
          :btn-name="'고객등록'"
          :btn-class="'btnClass2'"
          :btn-width="59"
          :btn-height="24"
          />
        <button-component
            :btn-name="'청약이력보기'"
            :btn-class="'btnClass2'"
            :btn-width="75"
            :btn-height="24"
        />
        <button-component
            :btn-name="'숨김해제'"
            :btn-class="'btnClass2'"
            :btn-width="59"
            :btn-height="24"
        />
      </div>
      <CustInfoComponent/>
    </div>

    <div class="item">
      <div class="product_box">
        <SubInfoTitle
            :subInfoTitleNm="'보유상품'"
        />
      </div>
      <div class="product_box_butt">
        <button-component
            :btn-name="'청약등록'"
            :btn-class="'btnClass2'"
            :btn-width="59"
            :btn-height="24"
        />
      </div>
      <div class="product_box_sel">
        <select-box-component
            :selectClass="'select_input'"
            :width="140"
            :cdGroup="'optionsSearchDiv'"
            :defaultValue="'선택'"
            v-model="searchDiv1"
            @input="
          (value) => {
            searchDiv1 = value;
          }
        "
        />
        &nbsp;
        <select-box-component
            :selectClass="'select_input'"
            :width="140"
            :cdGroup="'optionsSearchDiv'"
            :defaultValue="'선택'"
            v-model="searchDiv1"
            @input="
          (value) => {
            searchDiv1 = value;
          }
        "
        />
        &nbsp;
        <select-box-component
            :selectClass="'select_input'"
            :width="140"
            :cdGroup="'optionsSearchDiv'"
            :defaultValue="'선택'"
            v-model="searchDiv1"
            @input="
          (value) => {
            searchDiv1 = value;
          }
        "
        />
        &nbsp;
        <input-component
            :type="'text'"
            :height="28"
            :width="140"
            :input-class="'class4'"
            :placeholder="'서비스계약ID 입력'"
        />
        <div>
          <img :src="logo_search" />
        </div>
      </div>
      <div class="product_box_tree">
        <TreeGridComponent :tableData="tableData" :columns="columns" />
      </div>
    </div>

    <div class="item"> <!-- 4 -->
      <form-data-component
      :FormDataclass="'InfoOfCont'"
      :subInfoTitleNm="'계약정보'"
      style="margin:auto;"
      />
    </div>

    <div class="item"> <!-- 5 -->
        <form-data-component
          :FormDataclass="'InfoOfAccount'"
          :subInfoTitleNm="'청구계정 정보'"
          @input="addComp"
          @modalShow="FormPopup"
          style="height:500px;"
        />
      </div>

    <div class="item"> <!-- 6 -->
      <form-data-component
      :FormDataclass="'infoOfCus'"
      :subInfoTitleNm="'고객정보'"
      />
    </div>

    <div class="item"> <!-- 7 -->
      <form-data-component
      :FormDataclass="'InfoOfOrg'"
      :subInfoTitleNm="'영업 조직정보'"
      />
    </div>


  </article>
</template>

<script>
import CustRetvComponent from '@/components/common/CustRetvComponent.vue'
import FormDataComponent from '@/components/common/FormDataComponent.vue'
import ButtonComponent from "@/components/common/ButtonComponent";
import CustInfoComponent from "@/components/common/CustInfoComponent";
import SelectBoxComponent from "@/components/common/SelectBoxComponent";
import InputComponent from "@/components/common/InputComponent";
import TreeGridComponent from "@/components/common/TreeGridComponent";
import SubInfoTitle from "@/components/common/SubInfoTitle";
export default {
  data(){
    return{
      logo_search:require('../img/logo_search.png'),
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
    }
  },
  components: {
    InputComponent,
    SelectBoxComponent, CustInfoComponent, CustRetvComponent, FormDataComponent, ButtonComponent,
    SubInfoTitle,
  TreeGridComponent},

}
</script>

<style scoped>
.cus360View{
  display: grid;
  /* grid-template-columns: 55% 55% 1fr; */
  grid-template-columns: 760px 760px 1fr;
  grid-template-rows: 40px 160px 300px 90px 140px minmax(200px,1fr);
  /* 10% 97px  */
  /* grid-template-rows: 10% 20% 30% 10% 15% 10% minmax(200px,1fr); */
  gap: 10px 10px;
}
.cus360View > .item:nth-child(1){
  grid-column: 1 / 3;
  grid-row: 1;
}
.cus360View > .item:nth-child(2){
  grid-column: 1 / 3;
  grid-row: 2;
}
.cus360View > .item:nth-child(3){
  grid-column: 1 / 2;
  grid-row: 3;
}
.cus360View > .item:nth-child(4){
  grid-column: 2/3;
  grid-row: 3;
  background-color: blanchedalmond;
}
.cus360View > .item:nth-child(5){
  grid-column: 1/2;
  grid-row: 4/6;
  background-color: blanchedalmond;
}
.cus360View > .item:nth-child(6){
  grid-column: 2/3;
  grid-row: 4;
  background-color: blanchedalmond;
}
.cus360View > .item:nth-child(7){
  grid-column: 2/3;
  grid-row: 5;
  background-color: blanchedalmond;
}
.cust_box{
  padding:5px 0;
  float:left;
  height:20px;
  width:70%;
}
.cust_box_butt{
  padding:5px 0;
  width: 30%;
  float: left;
}
.product_box{
  padding:5px 0;
  float:left;
  height:20px;
  width:70%;
}
.product_box_butt{
  padding:5px 0;
  width: 30%;
  float: left;
}
.product_box_sel{
  border:1px solid #e4e4e4;
  padding:10px 20px;
  overflow: hidden;
  display: block;
  width: 720px;
  height: 40px;
  background-color: rgb(239,245,252);
}
.product_box_sel div{
  float: right;
  padding-right:80px;
  width: 30px;
  height: 30px;
}
.product_box_tree{
  width: 100%;
  height: 200px;
  overflow: auto;
  border: 1px solid #e4e4e4;
}
</style>
