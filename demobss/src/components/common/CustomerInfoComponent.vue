<template>
  <SubInfoTitle
      :subInfoTitleNm="'고객정보'"
  />
  <table>
    <tr>
      <td>
        <label>고객ID</label>
        <input-component
            :type="'text'"
            :height="15"
            :width="150"
            :placeholder="'CC10001042'"
            disabled="true"
        />
      </td>
      <td>
        <label>고객명</label>
        <input-component
            :type="'text'"
            :height="15"
            :width="150"
            :placeholder="'주식회사 시너샛코리아'"
            disabled="true"
        />
      </td>
      <td>
        <label>고객유형</label>
        <input-component
            :type="'text'"
            :height="15"
            :width="150"
            :placeholder="''"
            disabled="true"
        />
      </td>
      <td><label>국가</label>
        <input-component
            :type="'text'"
            :height="15"
            :width="150"
            :placeholder="''"
            disabled="true"
        />
      </td>
      <td>
        <label style="width: 130px">사업자등록번호</label>
        <input-component
            :type="'text'"
            :height="15"
            :width="150"
            :placeholder="'6268700031'"
            disabled="true"
        />
      </td>
    </tr>
    <tr style="padding-left: 10px">
      <td>
        <label>고객구분</label>
        <input-component
            :type="'text'"
            :height="15"
            :width="150"
            :placeholder="'영리법인'"
            disabled="true"
        />
      </td>
      <td>
        <label>전화번호</label>
        <input-component
            :type="'text'"
            :height="15"
            :width="150"
            :placeholder="'01012341234'"
            disabled="true"
        />
      </td>
      <td>
        <label>내외구분</label>
        <input-component
            :type="'text'"
            :height="15"
            :width="150"
            :placeholder="''"
            disabled="true"
        />
      </td>
      <td>
        <label>주소</label>
        <input-component
            :type="'text'"
            :height="15"
            :width="50"
            :placeholder="''"
            disabled="true"
        />&nbsp;
        <input-component
          :type="'text'"
          :height="15"
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

}
</script>

<style scoped>
table {
  width: 100%;
  border: groove 1px
}
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