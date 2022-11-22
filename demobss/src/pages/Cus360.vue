<template>
  <article class="cus360View">
    
    <div class="item">   <!-- 1 -->
        <cust-retv-component 
        :cdGroup="'optionsSearchDiv'" />
    </div>

    <div class="item"> <!-- 2 --> </div>

    <div class="item"> <!-- 3 --> </div>

    <div class="item"> <!-- 4 --> 
      <form-data-component
      :FormDataclass="'InfoOfBasic'"
      :subInfoTitleNm="'계약정본'"
      style="margin:auto;"
      />
    </div>

    <div class="item"> <!-- 5 --> 
    
        <form-data-component
          :FormDataclass="'InfoOfAccount'"
          :subInfoTitleNm="'청구계정 정보'"
          @input="addComp"
          @modalShow="FormPopup"
        /></div>

    <div class="item"> <!-- 6 -->
      <form-data-component
      :FormDataclass="'infoOfCus'"
      :subInfoTitleNm="'고객정보'"
      style="width:600px;"
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
export default {
  components: { CustRetvComponent, FormDataComponent },

}
</script>

<style>
.cus360View{
  display: grid;
  /* grid-template-columns: 55% 55% 1fr; */
  grid-template-columns: 760px 760px 1fr;
  grid-template-rows: 40px 140px 300px 90px 140px minmax(200px,1fr);
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
  background-color: blanchedalmond;
}
.cus360View > .item:nth-child(3){
  grid-column: 1 / 2;
  grid-row: 3;
  background-color: blanchedalmond;
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
</style>