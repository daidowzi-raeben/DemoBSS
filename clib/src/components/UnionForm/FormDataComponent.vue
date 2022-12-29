<template>
  <div v-if="FormDataclass == 'infoOfCust'" class="InfoForm">
    <div>
      <div>
        <SubInfoTitle :subInfoTitleNm="subInfoTitleNm" />
        <div class="infoDataTableUpperButtons">
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'숨김해제'" />
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'청약이력보기'" />
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'고객등록'" />
          <ButtonComponent
            :btnClass="'btnClass3'"
            :btnName="'고객정보수정'"
            :btnWidth="'auto'"
          />
        </div>
      </div>
      <div class="infoDataTable">
        <table>
          <tr>
            <th>
              <label-component :labelNm="'고객ID'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'CC100001671'"
              />
            </td>
            <th>
              <label-component :labelNm="'고객명'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'(주)ANC컴퍼***'"
              />
            </td>
            <th>
              <label-component :labelNm="'고객유형'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'법인사업자'"
              />
            </td>
            <th>
              <label-component :labelNm="'고객구분'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'Major Corporate'"
              />
            </td>
            <th>
              <label-component :labelNm="'내외구분'" :labelClass="'label-type'" />
            </th>
            <td style="width: 422px">
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'국내'"
              />
            </td>
          </tr>

          <tr>
            <th>
              <label-component :labelNm="'법인번호'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'110136-0027690'"
              />
            </td>

            <th>
              <label-component :labelNm="'사업자번호'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'104-82-*****'"
              />
            </td>
            <th>
              <label-component :labelNm="'업종'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'협동조합'"
              />
            </td>
            <th>
              <label-component :labelNm="'업태'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'공공, 개인'"
              />
            </td>
            <th>
              <!-- <label-component
          :labelNm="''"
          :labelClass="'label-type'"/> -->
            </th>
            <td>
              <!-- <input-component :input-class="'input-type5'" :disabled="true" :value="''" />  -->
            </td>
          </tr>

          <tr>
            <th>
              <label-component :labelNm="'대표자'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'이배*'"
              />
            </td>
            <th>
              <label-component :labelNm="'대리인'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'이동*'"
              />
            </td>
            <th>
              <label-component :labelNm="'주소'" :labelClass="'label-type'" />
            </th>
            <td colspan="3">
              <input-component
                :input-class="'input-type5'"
                :width="'64px'"
                :inputType5MarginRight="'3px'"
                :disabled="true"
                :value="'12345'"
              />
              <input-component
                :input-class="'input-type5 '"
                :disabled="true"
                :value="'서울특별시 강남구 도산대로19길 10 (신사동, 현우빌딩)'"
                :width="'335px'"
              />
            </td>
            <th>
              <label-component :labelNm="'연락처'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'010-1111-2222'"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>

  <div v-if="FormDataclass == 'infoOfCont'" class="InfoForm">
    <div>
      <div><SubInfoTitle :subInfoTitleNm="subInfoTitleNm" /></div>
      <div class="infoDataTable">
        <table>
          <tr>
            <th>
              <label-component :labelNm="'계약번호'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'P100002214'"
              />
            </td>
            <th>
              <label-component :labelNm="'서비스번호'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'------'"
              />
            </td>
            <th>
              <label-component :labelNm="'상태'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'이용중'"
              />
            </td>
          </tr>

          <tr>
            <th>
              <label-component :labelNm="'가입유형'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'일반'"
              />
            </td>

            <th>
              <label-component :labelNm="'상품'" :labelClass="'label-type'" />
            </th>
            <td colspan="4">
              <input-component
                :input-class="'input-type5'"
                :width="'64px'"
                :disabled="true"
                :value="'IDC'"
              />
              <input-component
                :input-class="'input-type5 '"
                :disabled="true"
                :value="'사용중인요금제명'"
              />
            </td>
          </tr>

          <tr>
            <th>
              <label-component :labelNm="'수용국'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'김포지점'"
              />
            </td>

            <th>
              <label-component :labelNm="'접수일자'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'2022-10-12'"
              />
            </td>

            <th>
              <label-component :labelNm="'개통일자'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'2022-10-13'"
              />
            </td>
          </tr>

          <tr>
            <th>
              <label-component :labelNm="'계약기간'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'36개월'"
              />
            </td>

            <th>
              <label-component :labelNm="'사용기간'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'1개월 7일'"
              />
            </td>

            <th>
              <label-component :labelNm="'약정만료일'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'2025-10-12'"
              />
            </td>
          </tr>

          <tr>
            <th>
              <label-component :labelNm="'미납요금'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'26,790원'"
                style="text-align: right"
              />
            </td>
            <th><label-component :labelNm="'  '" :labelClass="'label-type'" /></th>
            <td>
              <!-- <input-component :input-class="'input-type5'" :disabled="true" :value="''" />  -->
            </td>
            <th><label-component :labelNm="'  '" :labelClass="'label-type'" /></th>
            <td>
              <!-- <input-component :input-class="'input-type5'" :disabled="true" :value="''" />  -->
            </td>
          </tr>

          <tr style="height: 76px">
            <td colspan="6" class="infoDataTableButtons">
              <span>
                <ButtonComponent
                  :btnClass="'btnClass2'"
                  :btnWidth="'auto'"
                  :btnName="'이력보기'"
                  @click="modalShow"
                />
              </span>
              <span>
                <ButtonComponent
                  :btnClass="'btnClass2'"
                  :btnWidth="'auto'"
                  :btnName="'상세조회'"
                />
              </span>
              <span>
                <ButtonComponent
                  :btnClass="'btnClass2'"
                  :btnWidth="'auto'"
                  :btnName="'계약변경'"
                />
              </span>
              <span>
                <ButtonComponent
                  :btnClass="'btnClass2'"
                  :btnWidth="'auto'"
                  :btnName="'명의변경'"
                />
              </span>
              <span>
                <ButtonComponent
                  :btnClass="'btnClass2'"
                  :btnWidth="'auto'"
                  :btnName="'정지/부활'"
                />
              </span>
              <span>
                <ButtonComponent
                  :btnClass="'btnClass2'"
                  :btnWidth="'auto'"
                  :btnName="'해지'"
                  :menu="'bill_01_01_01'"
                  @input="addComp"
              /></span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>

  <div v-if="FormDataclass == 'infoOfAccount'" class="InfoForm">
    <div>
      <div>
        <SubInfoTitle :subInfoTitleNm="subInfoTitleNm" />
        <div style="display: inline-block; float: right">
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'이력보기'" />
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'청구계정등록'" />
        </div>
      </div>
      <div class="infoDataTable">
        <table>
          <tr>
            <th>
              <label-component :labelNm="'청구계정ID'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'999900005'"
              />
            </td>
            <th>
              <label-component :labelNm="'청구고객명'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'김포파인쇼****'"
              />
            </td>
            <!-- <th style="background-color:white; width:90px; border:none;"></th> -->
            <!-- <th></th> -->
            <td colspan="6"></td>
          </tr>
          <tr>
            <th>
              <label-component :labelNm="'납부방법'" :labelClass="'label-type'" />
            </th>
            <td colspan="3">
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'은행계좌 자동이체'"
              />
              <input-component
                :input-class="'input-type5'"
                :width="'80px'"
                :inputType5MarginRight="'3px'"
                :disabled="true"
                :value="'매월 25일'"
              />
            </td>
          </tr>
          <tr>
            <th>
              <label-component :labelNm="'계좌/카드'" :labelClass="'label-type'" />
            </th>
            <td colspan="4">
              <input-component
                :input-class="'input-type5'"
                :width="'80px'"
                :inputType5MarginRight="'3px'"
                :disabled="true"
                :value="'신한은행'"
              />
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'2415621*******'"
              />
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'김포파인쇼***'"
              />
            </td>
          </tr>

          <tr>
            <th>
              <label-component :labelNm="'청구유형'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'우편(종이)'"
              />
            </td>

            <th>
              <label-component :labelNm="'주소'" :labelClass="'label-type'" />
            </th>
            <td colspan="3">
              <input-component
                :input-class="'input-type5'"
                :width="'64px'"
                :disabled="true"
                :value="'06037'"
              />
              <input-component
                :input-class="'input-type5 '"
                :width="'310px'"
                :disabled="true"
                :value="'서울특별시 강남구 도산대로19길 10 (신사동, 현우빌딩)'"
              />
            </td>
          </tr>
          <tr>
            <td colspan="8" class="infoDataTableButtons">
              <span>
                <ButtonComponent
                  :btnClass="'btnClass2'"
                  :btnWidth="'auto'"
                  :btnName="'상세조회'"
                  @click="modalShow"
                />
              </span>
              <span>
                <ButtonComponent
                  :btnClass="'btnClass2'"
                  :btnWidth="'auto'"
                  :btnName="'청구정보수정'"
                />
              </span>
              <span>
                <ButtonComponent
                  :btnClass="'btnClass2'"
                  :btnWidth="'auto'"
                  :btnName="'청구지변경'"
                />
              </span>
              <span>
                <ButtonComponent
                  :btnClass="'btnClass2'"
                  :btnWidth="'auto'"
                  :btnName="'청구분리'"
                />
              </span>
              <span>
                <ButtonComponent
                  :btnClass="'btnClass2'"
                  :btnWidth="'auto'"
                  :btnName="'청구통합'"
                  @click="addComp('L01M02S02')"
              /></span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>

  <div v-if="FormDataclass == 'infoOfSubs'" class="InfoForm">
    <div>
      <div><SubInfoTitle :subInfoTitleNm="subInfoTitleNm" /></div>
      <div class="infoDataTable">
        <table>
          <tr>
            <th>
              <label-component :labelNm="'신청자'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'9900000221'"
              />
            </td>
            <th>
              <label-component :labelNm="'E-mail'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'cloud@kt.com'"
              />
            </td>
            <th>
              <label-component :labelNm="'연락처'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'010-0001-0002'"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>

  <div v-if="FormDataclass == 'infoOfOrg'" class="InfoForm">
    <div>
      <div>
        <SubInfoTitle :subInfoTitleNm="subInfoTitleNm" />
        <div style="display: inline-block; float: right">
          <ButtonComponent :btnClass="'btnClass3'" :btnName="'이력보기'" />
        </div>
      </div>
      <div class="infoDataTable">
        <table>
          <tr>
            <th>
              <label-component :labelNm="'영업조직'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'기업고객팀'"
              />
            </td>
            <th>
              <label-component :labelNm="'영업담당자'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'김영업'"
              />
            </td>
            <th>
              <label-component :labelNm="'승인상태'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'승인'"
              />
            </td>
          </tr>
          <tr>
            <th>
              <label-component
                :labelNm="'최근판매조직'"
                :labelClass="'label-type'"
              />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'AA고객팀'"
              />
            </td>
            <th>
              <label-component :labelNm="'최근판매자'" :labelClass="'label-type'" />
            </th>
            <td>
              <input-component
                :input-class="'input-type5'"
                :disabled="true"
                :value="'이영업'"
              />
            </td>
            <th><label-component :labelNm="''" :labelClass="'label-type'" /></th>
            <td>
              <!-- <input-component :input-class="'input-type5'" :disabled="true" :value="''" />  -->
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
import SubInfoTitle from "@/components/common/SubInfoTitle.vue";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import InputComponent from "@/components/common/InputComponent.vue";
import SelectBoxComponent from "@/components/common/SelectBoxComponent.vue";
import LabelComponent from "../common/LabelComponent.vue";
import menu from "../../../public/menu.json";

export default {
  components: {
    SubInfoTitle,
    SelectBoxComponent,
    InputComponent,
    ButtonComponent,
    LabelComponent,
  },
  data() {
    return {
      DataOfOrg: [
        {
          thId: "영업조직",
          tdId: "기업고객팀",
          thBm: "영업담당자",
          tdBm: "김영업",
          thP: "승인상태",
          tdP: "승인",
        },
        {
          thId: "최근판매조직",
          tdId: "AA고객팀",
          thBm: "최근판매자",
          tdBm: "이영업",
        },
      ],
      dataOfCust: [
        {
          thId: "신청자",
          tdId: "99420024132",
          thEm: "E-mail",
          tdEm: "exam@kt.com",
          thP: "연락처",
          tdP: "010-0000-1111",
        },
      ],
      DataOfAccount: [
        {
          thId: "청구계정ID",
          tdId: "P000022",
          th0: "수신인",
          td0: "김수신",
        },
        {
          thId: "결제통화",
          tdId: "USD",
          th0: "납부방법",
          td0: "지로",
        },
        {
          thId: "수신 E-Mail",
          tdId: "abc@kt.com",
          th0: "납부일자",
          td0: "2022-11-03",
        },
        {
          thId: "청구서표기명",
          tdId: "ABC기업",
          th0: "주소",
          td0: "서울특별시 서초구 효령로 123 abc기업",
        },
      ],
      DataOfBasic: [
        {
          thId: "계약ID",
          tdId: "K000001",
          th0: "BM",
          td0: "MVSAT",
          th1: "계약상태",
          td1: "사용중",
        },
        {
          thId: "개통일시",
          tdId: "2022-11-03",
          th0: "약정기간",
          td0: "24개월",
          th1: "서비스오더ID",
          td1: "PA00123",
        },
        {
          thId: "상품",
          tdId: " Global Premium MVSAT",
          th0: "약정 종료일",
          td0: "2024-11-02",
          th1: "부가정보",
          td1: " -",
        },
        {
          thId: "비고",
          tdId: "-----",
        },
      ],
    };
  },
  props: {
    subInfoTitleNm: String,
    FormDataclass: String,
  },
  methods: {
    addComp(page) {
      let comp = menu.menu.filter((menu) => {
        return menu.menuId == page;
      });
      this.$emit("input", comp[0]);
    },
    modalShow() {
      this.$emit("modalShow", true);
    },
  },
};
</script>

<style scoped>
/*     11.24. A안 수정 CSS            */
.InfoForm {
  width: 100%;
}

table,
tr {
  border: 1px solid rgb(232, 238, 246);
  border-collapse: collapse;
  width: 100%;
}
.infoDataTable > table > tr {
  height: 38px;
}
.infoDataTable > table > tr > th {
  width: 92px;
  text-align: left;
  border-left: 1px solid rgb(232, 238, 246);
  background-color: rgb(247, 247, 248);
  padding-left: 1%;
}
.infoDataTable > table > tr > td {
  width: 165px;
  /* text-align:right; */
  padding-left: 8px;
}
.infoDataTableButtons {
  vertical-align: bottom;
  text-align: right;
  padding: 0 11px 10px 0;
}
.infoDataTableButtons > span {
  margin-right: 4px;
}

.infoDataTableUpperButtons {
  vertical-align: bottom;
  display: inline-block;
  float: right;
}

.infoDataTableUpperButtons > button {
  margin-right: 3px;
}

/*     11.24 A안 수정 이전 CSS            */
#selectSearch {
  float: right;
}
#selectSearch tr > th {
  display: inline-block;
  border: 1px solid black;
  width: 40px;
  height: 18px;
  font-size: 10px;
  font-weight: bold;
}
#selectSearch tr > td > select {
  display: inline-block;
  background-color: #f9f9f9;
  width: 150px;
  height: 20px;
  font-weight: bold;
  font-size: 10px;
}
.formDataTable {
  padding: 8px;
  width: calc(100% - 4px);
  border: 1px solid #bdbdbd;
}
.formDataTable tr > th {
  width: 10%;
  height: 20px;
  font-size: 12pt;
  font-weight: bold;
  color: #000;
  text-align: left;
}
.formDataTable tr > td > input {
  width: 140px;
  height: 28px;
  background-color: #f2f2f2;
  border: solid #e4e4e4;
  font-size: 12pt;
  font-weight: normal;
  color: #000;
  text-align: left;
}
.infoFlexTable {
  padding: 5px 0 5px 15px;
  border: 1px solid #bdbdbd;
  text-align: left;
}

.infoFlexTable > div {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
}
.infoFlexTable > .btnComps {
  float: right;
  margin-top: 5px;
}
.infoFlexTable > .btnComps > span {
  margin-right: 3px;
}
</style>
