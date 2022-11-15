<template>
  <!-- <SubInfoTitle
      :subInfoTitleNm="'고객정보'"
  /> -->
  <table>
    <tr>
      <td>
        <label>고객ID</label>
        <input-component
            :type="'text'"
            :height='inputComponentHeight'
            :width='inputComponentWidth'
            :input-class="'class1'"
            :placeholder="customerInfo.customerId"
            disabled="true"
        />
      </td>
      <td>
        <label>고객명</label>
        <input-component
            :type="'text'"
            :height="inputComponentHeight"
            :width='inputComponentWidth'
            :input-class="'class1'"
            :placeholder="customerInfo.customerName"
            disabled="true"
        />
      </td>
      <td>
        <label>고객유형</label>
        <input-component
            :type="'text'"
            :height="inputComponentHeight"
            :width='inputComponentWidth'
            :input-class="'class1'"
            :placeholder="customerInfo.customerType"
            disabled="true"
        />
      </td>
      <td><label>국가</label>
        <input-component
            :type="'text'"
            :height="inputComponentHeight"
            :width='inputComponentWidth'
            :input-class="'class1'"
            :placeholder="customerInfo.country"
            disabled="true"
        />
      </td>
      <td>
        <label style="width: 130px">사업자등록번호</label>
        <input-component
            :type="'text'"
            :height="inputComponentHeight"
            :width='inputComponentWidth'
            :input-class="'class1'"
            :placeholder="customerInfo.businessNumber"
            disabled="true"
        />
      </td>
    </tr>
    <tr style="padding-left: 10px">
      <td>
        <label>고객구분</label>
        <input-component
            :type="'text'"
            :height="inputComponentHeight"
            :width='inputComponentWidth'
            :input-class="'class1'"
            :placeholder="customerInfo.customerType"
            disabled="true"
        />
      </td>
      <td>
        <label>전화번호</label>
        <input-component
            :type="'text'"
            :height="inputComponentHeight"
            :width='inputComponentWidth'
            :input-class="'class1'"
            :placeholder="customerInfo.phoneNumber"
            disabled="true"
        />
      </td>
      <td>
        <label>내외구분</label>
        <input-component
            :type="'text'"
            :height="inputComponentHeight"
            :width='inputComponentWidth'
            :input-class="'class1'"
            :placeholder="''"
            disabled="true"
        />
      </td>
      <td>
        <label>주소</label>
        <input-component
            :type="'text'"
            :height="inputComponentHeight"
            :width="50"
            :input-class="'class1'"
            :placeholder="''"
            disabled="true"
        />&nbsp;
        <input-component
          :type="'text'"
          :height="inputComponentHeight"
          :input-class="'class1'"
          :width="200"
          :placeholder="''"
          disabled="true"
        />
      </td>
    </tr>
  </table>
</template>

<script>
import inputComponent from "@/components/common/InputComponent";
import SubInfoTitle from "@/components/common/SubInfoTitle";
export default {
  name: "CustomerInfoComponent",
  components :{inputComponent, SubInfoTitle},
  data(){
    return{
      inputComponentHeight:12,
      inputComponentWidth: 120,

    }
  },
  props : {
    customerInfo:null,
  }

}
</script>

<style scoped>
table {
  /* display: block; */
  width: 90%;
  min-width: 1235px;
  border: groove 1px
}
td > label {
  display: inline-block;
  width: 60px;
  padding-left: 10px;
  font-weight: bold;
}
</style>