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
            :height="'28px'"
            :width="'140px'"
            :input-class="'class1'"
            :placeholder="'CC10001671'"
            :disabled="true"
        />
      </td>
      <td>
        <label>고객명</label>
        <input-component
            :type="'text'"
            :height="'28px'"
            :width="'140px'"
            :input-class="'class1'"
            :placeholder="'농협협단계합***'"
            :disabled="true"
        />
      </td>
      <td>
        <label>고객유형</label>
        <input-component
            :type="'text'"
            :height="'28px'"
            :width="'140px'"
            :input-class="'class1'"
            :placeholder="'법인사업자'"
            :disabled="true"
        />
      </td>
      <td>
        <label>고객구분</label>
        <input-component
            :type="'text'"
            :height="'28px'"
            :width="'140px'"
            :input-class="'class1'"
            :placeholder="'Major Corporate'"
            :disabled="true"
        />
      </td>
      <td>
        <label>내외구분</label>
        <input-component
            :type="'text'"
            :height="'28px'"
            :width="'140px'"
            :input-class="'class1'"
            :placeholder="'국내'"
            :disabled="true"
        />
      </td>
    </tr>
    <tr>
      <td>
        <label>법인번호</label>
        <input-component
            :type="'text'"
            :height="'28px'"
            :width="'140px'"
            :input-class="'class1'"
            :placeholder="'110136-0027690'"
            :disabled="true"
        />
      </td>
      <td>
        <label>사업자번호</label>
        <input-component
            :type="'text'"
            :height="'28px'"
            :width="'140px'"
            :input-class="'class1'"
            :placeholder="'104-82-*****'"
            :disabled="true"
        />
      </td>
      <td>
        <label>업종</label>
        <input-component
            :type="'text'"
            :height="'28px'"
            :width="'140px'"
            :input-class="'class1'"
            :placeholder="'협동조합'"
            :disabled="true"
        />
      </td>
      <td>
        <label>업태</label>
        <input-component
            :type="'text'"
            :height="'28px'"
            :width="'140px'"
            :input-class="'class1'"
            :placeholder="'공공,개인'"
            :disabled="true"
        />
      </td>
    </tr>
    <tr>
      <td>
        <label>대표자</label>
        <input-component
            :type="'text'"
            :height="'28px'"
            :width="'140px'"
            :input-class="'class1'"
            :placeholder="'이배*'"
            :disabled="true"
        />
      </td>
      <td>
        <label>대리인</label>
        <input-component
            :type="'text'"
            :height="'28px'"
            :width="'140px'"
            :input-class="'class1'"
            :placeholder="'이동*'"
            :disabled="true"
        />
      </td>
      <td colspan="2">
        <label>주소</label>
        <input-component
            :type="'text'"
            :height="'28px'"
            :width="'80px'"
            :input-class="'class1'"
            :placeholder="'12345'"
            :disabled="true"
        />
        &nbsp;
        <input-component
            :type="'text'"
            :height="'28px'"
            :width="'300px'"
            :input-class="'class1'"
            :placeholder="'서울시 강남구 학동로 1111'"
            :disabled="true"
        />
      </td>
      <td>
        <label>연락처</label>
        <input-component
            :type="'text'"
            :height="'28px'"
            :width="'140px'"
            :input-class="'class1'"
            :placeholder="'010-11**-****'"
            :disabled="true"
        />
      </td>
      <td class="custinfo_btn">
        <ButtonComponent
            :btn-name="'고객정보수정'"
            :btn-height="'24px'"
            :btn-width="'80px'"
            :btn-class="'btnClass1'"
        />
      </td>
    </tr>
  </table>
</template>

<script>
import inputComponent from "@/components/common/InputComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
export default {
  name: "CustInfoComponent",
  components :{
    inputComponent,
    ButtonComponent,
  },
  data(){
    return{
      Height:12,
      Width: 120,
    }
  },
  props : {
    custInfo:null,
  }

}
</script>

<style scoped>
table {
  /* display: block; */
  width: 100%;
  min-width: 1235px;
  border: groove 1px
}
table td{
  width: 17%;
}
td > label {
  display: inline-block;
  width: 75px;
  padding: 10px 15px;
  text-align: left;
  font-size: 12pt;
  color: #000;
  font-weight: bold;
}
.custinfo_btn{
  padding: 0 20px 0 0;
}
</style>