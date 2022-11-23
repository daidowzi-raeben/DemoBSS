<template>
  <article class="cus360View">
    
    <div class="item">   <!-- 1 -->
        <cust-retv-component 
        :cdGroup="'optionsSearchDiv'" />
    </div>

    <div class="item">
      고객정보
      <table>
        <tr>
          <td>
            <label>고객ID</label>
            <input-component
              :type="'text'"
              :height="28"
              :width="140"
              :input-class="'class1'"
              :placeholder="'내용'"
              :disabled="true"
              />
          </td>
          <td>
            <label>고객ID</label>
            <input-component
                :type="'text'"
                :height="28"
                :width="140"
                :input-class="'class1'"
                :placeholder="'내용'"
                :disabled="true"
            />
          </td>
          <td>
            <label>고객ID</label>
            <input-component
                :type="'text'"
                :height="28"
                :width="140"
                :input-class="'class1'"
                :placeholder="'내용'"
                :disabled="true"
            />
          </td>
          <td>
            <label>고객ID</label>
            <input-component
                :type="'text'"
                :height="28"
                :width="140"
                :input-class="'class1'"
                :placeholder="'내용'"
                :disabled="true"
            />
          </td>
          <td>
            <label>고객ID</label>
            <input-component
                :type="'text'"
                :height="28"
                :width="140"
                :input-class="'class1'"
                :placeholder="'내용'"
                :disabled="true"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>고객ID</label>
            <input-component
                :type="'text'"
                :height="28"
                :width="140"
                :input-class="'class1'"
                :placeholder="'내용'"
                :disabled="true"
            />
          </td>
          <td>
            <label>고객ID</label>
            <input-component
                :type="'text'"
                :height="28"
                :width="140"
                :input-class="'class1'"
                :placeholder="'내용'"
                :disabled="true"
            />
          </td>
          <td>
            <label>고객ID</label>
            <input-component
                :type="'text'"
                :height="28"
                :width="140"
                :input-class="'class1'"
                :placeholder="'내용'"
                :disabled="true"
            />
          </td>
          <td>
            <label>고객ID</label>
            <input-component
                :type="'text'"
                :height="28"
                :width="140"
                :input-class="'class1'"
                :placeholder="'내용'"
                :disabled="true"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>고객ID</label>
            <input-component
                :type="'text'"
                :height="28"
                :width="140"
                :input-class="'class1'"
                :placeholder="'내용'"
                :disabled="true"
            />
          </td>
          <td>
            <label>고객ID</label>
            <input-component
                :type="'text'"
                :height="28"
                :width="140"
                :input-class="'class1'"
                :placeholder="'내용'"
                :disabled="true"
            />
          </td>
          <td colspan="2">
            <label>고객ID</label>
            <input-component
                :type="'text'"
                :height="28"
                :width="140"
                :input-class="'class1'"
                :placeholder="'내용'"
                :disabled="true"
            />
          </td>
          <td>
            <label>고객ID</label>
            <input-component
                :type="'text'"
                :height="28"
                :width="140"
                :input-class="'class1'"
                :placeholder="'내용'"
                :disabled="true"
            />
          </td>
          <td>
            버튼
          </td>
        </tr>
      </table>
    </div>

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
import InputComponent from "@/components/common/InputComponent";
export default {
  components: {InputComponent, CustRetvComponent, FormDataComponent },

}
</script>

<style scoped>
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

table {
  /* display: block; */
  width: 100%;
  min-width: 1235px;
  border: groove 1px
}
td > label {
  display: inline-block;
  width: 60px;
  padding-left: 10px;
  font-size: 12pt;
  color: #000;
  font-weight: bold;
}

</style>