<template>
  <SubInfoTitle
      :subInfoTitleNm="'고객정보'"
  />
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
</template>

<script>
import inputComponent from "@/components/common/InputComponent";
import SubInfoTitle from "@/components/common/SubInfoTitle";
export default {
  name: "CusomerInfoComponent",
  components :{inputComponent, SubInfoTitle},

}
</script>

<style scoped>
td > input {
  background-color: #f9f9f9;
  border-radius: 2px;
}
td > label {
  display: inline-block;
  width: 60px;
  padding-left: 10px;
  font-weight: bold;
}
</style>