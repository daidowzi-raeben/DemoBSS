<template>
  <article class="UserAdmContainer">
    <div class="item1">
      <user-adm-retv-component />
    </div>
    <div class="item2">
      <div>
        <sub-info-title :subInfoTitleNm="subInfoTitleNm_Item2" />
        <p style="margin-left: 5px; display: inline-block">
          (총 <label style="font-weight: bold">{{ total }}</label>건)
        </p>
        <span style="float: right">
          <button-component
            :btnClass="'btnClass3'"
            :btnName="btnName1"
            @click="clickUserRegister()"
          />
          <button-component
            :btnClass="'btnClass3'"
            :btnName="btnName2"
            @click="clickUserAmend()"
          />
          <button-component :btnClass="'btnClass3'" :btnName="btnName3" />
          <button-component :btnClass="'btnClass3'" :btnName="btnName4" />
        </span>
      </div>
      <div>
        <ag-grid-component
          :rowData="rowData"
          :columnDefs="columnDefs"
          :rowHeight="rowHeight"
          @seletedRowData="
            (value) => {
              seletedUserData = value[0];
            }
          "
        />
        <div class="pcSelectAndPagingFlex">
          <div>
            <select-box-component
              class="pcSelectBox"
              :selectClass="'select_input3'"
              :cdGroup="'optionSearchNum'"
              :defaultValue="'선택'"
              :defaultcdId="showTheNum"
              :isDisabled="true"
              v-model="showTheNum"
              @input="(value) => {selectValue = value;}"
            />
          </div>
          <div>
            <paging-area
              class="pcPagingArea"
              ref="PagingArea"
              :pageableData="pageableData"
              style="padding: 0"
              @currentPage="
                (value) => {
                  currentPage = value;
                }
              "
            />
          </div>
        </div>
      </div>
    </div>

    <div class="item3">
      <div>
        <sub-info-title :subInfoTitleNm="subInfoTitleNm_Item3" />
        <span style="float: right">
          <button-component
            :btnClass="'btnClass3'"
            :btnName="userAdmObject.sttus == 'amend' ? '변경' : '등록'"
            @click="popup"
          />
        </span>
      </div>

      <div>
        <form action="">
          <table class="userDtlInfoTable">
            <tr>
              <th><label-component :labelNm="'사번'" /></th>
              <td>
                <input-component
                  :class6Width="'180px'"
                  :input-class="userAdmObject.inputClass"
                  :disabled="userAdmObject.isDisabled"
                  :value="userAdmObject.cmpno"
                  v-model="userAdmObject.cmpno"
                  :placeholder="'사번 입력'"
                />
              </td>
              <th><label-component :labelNm="'재직상태'" /></th>
              <td>
                <select-box-component
                  :selectClass="'select_input4'"
                  :cdGroup="'inOfficeSttus2'"
                  :defaultValue="'재직상태'"
                  :defaultcdId="
                    userAdmObject.sttus == 'amend'
                      ? userAdmObject.inOfficeSttus2
                      : ''
                  "
                  :isDisabled="true"
                  @input="
                    (value) => {
                      userAdmObject.inOfficeSttus2 = value;
                    }
                  "
                  :width="100"
                  :selectedValue="userAdmObject.inOfficeSttus2"
                  style="height: 28px"
                />
              </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'사용자명'" /></th>
              <td>
                <input-component
                  :input-class="'class6'"
                  :class6Width="'180px'"
                  v-model="userAdmObject.userNm"
                  :value="userAdmObject.userNm"
                  :placeholder="'이름 입력'"
                />
                {{ userAdmObject.userNm }}
              </td>
              <th><label-component :labelNm="'사용여부'" /></th>
              <td><radio-component :RadioOptions="['사용', '미사용']" /></td>
            </tr>

            <tr>
              <th><label-component :labelNm="'알림방법'" /></th>
              <td>
                <select-box-component
                  style="height: 28px"
                  :selectClass="'select_input4'"
                  :cdGroup="'ntcMeth'"
                  :defaultValue="'알림방법 선택'"
                  :defaultcdId="userAdmObject.ntcMeth"
                  :isDisabled="true"
                  :width="185"
                  :selectedValue="userAdmObject.ntcMeth"
                  @input="
                    (value) => {
                      userAdmObject.ntcMeth = value;
                    }
                  "
                />
              </td>
              <th><label-component :labelNm="'OTP사용여부'" /></th>
              <td><radio-component :RadioOptions="['사용', '미사용']" /></td>
            </tr>

            <tr>
              <th><label-component :labelNm="'조직'" /></th>
              <td colspan="2">
                <input-component
                  :input-class="'class6 class6_2'"
                  :class6Width="'180px'"
                  :disabled="true"
                  :value="userAdmObject.org"
                  :placeholder="' 조직검색 '"
                />
                <span style="margin-left: 30px">
                  <button-component
                    :btnClass="'btnClass5'"
                    :btnHeight="'28px'"
                    :btnWidth="'100px'"
                    :btnFontWeight="'normal'"
                    :btnName="'조직 검색'"
                  />
                </span>
              </td>
              <td></td>
            </tr>

            <tr>
              <th><label-component :labelNm="'직책'" /></th>
              <td>
                <select-box-component
                  style="height: 28px"
                  :selectClass="'select_input4'"
                  :width="185"
                  :cdGroup="'rspof'"
                  :isDisabled="true"
                  :defaultValue="'직책 선택'"
                  :defaultcdId="userAdmObject.rspof"
                  :selectedValue="userAdmObject.rspof"
                  @input="
                    (value) => {
                      userAdmObject.rspof = value;
                    }
                  "
                />
              </td>
              <th><label-component :labelNm="'직무'" /></th>
              <td>
                <select-box-component
                  style="height: 28px"
                  :selectClass="'select_input4'"
                  :cdGroup="'dutySelect'"
                  :defaultValue="'직무선택'"
                  :defaultcdId="userAdmObject.dutySelect"
                  :isDisabled="true"
                  :width="185"
                  :selectedValue="userAdmObject.dutySelect"
                  @input="
                    (value) => {
                      userAdmObject.dutySelect = value;
                    }
                  "
                />
              </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'이메일주소'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'class6 '"
                  :class6Width="'180px'"
                  :value="userAdmObject.email"
                  v-model="userAdmObject.email"
                  :placeholder="' 이메일주소 '"
                />
                <span style="margin-right: 10px">@</span>
                <select-box-component
                  style="height: 28px"
                  :selectClass="'select_input4'"
                  :cdGroup="'emailDomain'"
                  :defaultValue="'도메인 선택'"
                  :defaultcdId="userAdmObject.email"
                  :isDisabled="true"
                  :width="185"
                  :selectedValue="userAdmObject.email"
                  @input="
                    (value) => {
                      userAdmObject.email = value;
                    }
                  "
                />
              </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'휴대전화번호'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'class6 '"
                  :class6Width="'100px'"
                  :value="userAdmObject.mphon[0]"
                  v-model="userAdmObject.mphon[0]"
                  :placeholder="'010'"
                />
                <span
                  style="font-size: 12pt; font-weight: bold; margin-right: 7px"
                >
                  -
                </span>
                <input-component
                  :input-class="'class6 '"
                  :class6Width="'100px'"
                  :value="userAdmObject.mphon[1]"
                  v-model="userAdmObject.mphon[1]"
                  :placeholder="' OOO '"
                />
                <span
                  style="font-size: 12pt; font-weight: bold; margin-right: 7px"
                >
                  -
                </span>
                <input-component
                  :input-class="'class6 '"
                  :class6Width="'100px'"
                  :value="userAdmObject.mphon[2]"
                  v-model="userAdmObject.mphon[2]"
                  :placeholder="' OOO '"
                />
                <!-- <button @click="checkTheNum(userAdmObject.mphon)"> check </button> -->
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'전화번호'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'class6 '"
                  :class6Width="'100px'"
                  :value="userAdmObject.ppon[0]"
                  v-model="userAdmObject.ppon[0]"
                  :placeholder="'지역번호'"
                />
                <span
                  style="font-size: 12pt; font-weight: bold; margin-right: 7px"
                >
                  -
                </span>
                <input-component
                  :input-class="'class6 '"
                  :class6Width="'100px'"
                  :value="userAdmObject.ppon[1]"
                  v-model="userAdmObject.ppon[1]"
                  :placeholder="' OOO '"
                />
                <span
                  style="font-size: 12pt; font-weight: bold; margin-right: 7px"
                >
                  -
                </span>
                <input-component
                  :input-class="'class6 '"
                  :class6Width="'100px'"
                  :value="userAdmObject.ppon[2]"
                  v-model="userAdmObject.ppon[2]"
                  :placeholder="' OOO '"
                />
              </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'비밀번호'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="userAdmObject.inputClass"
                  :disabled="userAdmObject.isDisabled"
                  :class6Width="'180px'"
                  :value="userAdmObject.pwd"
                  v-model="userAdmObject.pwd"
                  :placeholder="
                    userAdmObject.sttus == 'register' ? '비밀번호 입력' : ''
                  "
                />

                <span>
                  <button-component
                    :btnClass="'btnClass5'"
                    :btnHeight="'28px'"
                    :btnWidth="'140px'"
                    :btnFontWeight="'normal'"
                    :btnName="'비밀번호 초기화'"
                  />
                </span>
              </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'비밀번호변경일'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'class6 class6_2'"
                  :class6Width="'180px'"
                  :disabled="true"
                  :value="' PW'"
                  :placeholder="' - '"
                />
                <input-component
                  :input-class="'class6 class6_2'"
                  :class6Width="'180px'"
                  :disabled="true"
                  :value="userAdmObject.pwdChgDt"
                  :placeholder="' - '"
                />
              </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'최종로그인일시'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'class6 class6_2'"
                  :class6Width="'180px'"
                  :disabled="true"
                  :value="userAdmObject.lastLogIn"
                  :placeholder="' - '"
                />
              </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'로그인실패'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'class6 class6_2'"
                  :class6Width="'40px'"
                  :disabled="true"
                  style="text-align: center"
                  :value="'-'"
                  :placeholder="' - '"
                />

                <input-component
                  :input-class="'class6 class6_2'"
                  :class6Width="'180px'"
                  :disabled="true"
                  :value="userAdmObject.failLogIn"
                  :placeholder="' - '"
                />
              </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'등록자/등록일시'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'class6 class6_2'"
                  :class6Width="'180px'"
                  :disabled="true"
                  :value="'김케이티'"
                />
                <input-component
                  :input-class="'class6 class6_2'"
                  :class6Width="'180px'"
                  :disabled="true"
                  :value="userAdmObject.regrDt"
                />
              </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'수정자/수정일시'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'class6 class6_2'"
                  :class6Width="'180px'"
                  :disabled="true"
                  :value="' 김클라우드  '"
                />

                <input-component
                  :input-class="'class6 class6_2'"
                  :class6Width="'180px'"
                  :disabled="true"
                  :value="userAdmObject.amdrDt"
                />
              </td>
            </tr>
          </table>
        </form>
        {{ seletedUserData }}

        <popup-component
          v-if="isModalShow"
          :popupmsg="`${
            userAdmObject.sttus == 'amend' ? '변경' : '등록'
          }하시겠습니까?`"
          @popup="isModalShow = false"
          @AGREE="popupAgree()"
        />
      </div>
    </div>
  </article>
</template>

<script>
import UserAdmRetvComponent from "@/components/common/UserAdmRetvComponent.vue";
import ApiMixin from "@/service/common.js";
import SubInfoTitle from "@/components/common/SubInfoTitle.vue";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import SelectBoxComponent from "@/components/common/SelectBoxComponent.vue";
import PagingArea from "@/components/common/PagingArea.vue";
import LabelComponent from "@/components/common/LabelComponent.vue";
import InputComponent from "@/components/common/InputComponent.vue";
import RadioComponent from "@/components/common/RadioComponent.vue";
import { formatTel } from "@/service/FormatService.js";
import PopupComponent from "@/components/common/PopupComponent.vue";
import AgGridComponent from '@/components/common/AgGridComponent.vue';

export default {
  mixins: [ApiMixin],
  components: {
    UserAdmRetvComponent,
    SubInfoTitle,
    ButtonComponent,
    SelectBoxComponent,
    PagingArea,
    LabelComponent,
    InputComponent,
    RadioComponent,
    PopupComponent,
    AgGridComponent,
  },
  data() {
    return {
      seletedUserData: "",
      subInfoTitleNm_Item2: "사용자 리스트",
      subInfoTitleNm_Item3: "사용자 상세정보",
      total: "65",
      btnName1: "등록",
      btnName2: "변경",
      btnName3: "숨김해제",
      btnName4: "액셀다운로드",
      rowHeight: "48",
      rowData: [],
      columnDefs: [
        {
          headerName: "선택",
          field: "select",
          width: 64,
          cellClass: "cell-span",
          checkboxSelection: true,
          cellStyle: () => {
            return { "pointer-events": "none" };
          },
        },
        {
          headerName: "사번",
          field: "cmpno",
          width: 110,
          cellClass: '"cell"-span',
        },
        {
          headerName: "사용자명",
          field: "userNm",
          width: 130,
          cellClass: "cell-span",
        },
        {
          headerName: "재직상태",
          field: "inofficeSttus",
          width: 90,
          cellClass: "cell-span",
        },
        {
          headerName: "조직",
          field: "org",
          width: 140,
          cellClass: "cell-span",
        },
        {
          headerName: "직책",
          field: "rspof",
          width: 130,
          cellClassRules: { "cell-span": "true" },
        },
        {
          headerName: "직무",
          field: "duty",
          width: 158,
          cellClassRules: { "cell-span": "true" },
        },
      ],

      pageableData: {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 10,
        totalPages: 30,
      },
      currentPage: "",
      userAdmObject: {
        sttus: "amend",
        inputClass: "class6 class6_2",
        isDisabled: true,
        cmpno: "사번",
        inOfficeSttus2: "inOffice",
        userNm: "홍길동",
        ntcMeth: "ntcMeth1",
        org: "조직",
        rspof: "rspof3",
        dutySelect: "role1",
        email: "이메일주소",
        mphon: ["", "", ""],
        ppon: ["", "", ""],
        pwd: "비밀번호",
        pwdChgDt: "2022-12-10 10:20:30",
        lastLogIn: "최종로그인일시",
        failLogIn: "로그인실패",
        regrDt: "2022-12-09 20:03:30",
        amdrDt: "2022-12-09 19:20:30",
      },
      isModalShow: false, // popup 조건
    };
  },
  async beforeMount() {
    await this.$connect("application/json", "/info2.json", "get", "")
      .then((res) => {
        this.rowData = res.data.userRowData;
        console.log(this.rowData);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  watch: {
    userAdmObject: {
      // 사용자 상세정보 변경이 감지되면 해당 변경 적용
      deep: true,
      handler(newone2) {
        this.userAdmObject = newone2;
        console.log("@@@userAdmObject@@@@: ", newone2);
      },
    },
    seletedUserData: {
      // 사용자리스트(ag-grid) row가 선택 되었을 때, 해당 데이터를 기반으로 사용자 상세정보 변경
      deep: true,
      handler(newSeletedUserData) {
        // console.log("userAdmObject : ", this.userAdmObject)
        this.userAdmObject.cmpno = newSeletedUserData.cmpno;
        this.userAdmObject.userNm = newSeletedUserData.userNm;
        this.userAdmObject.inOfficeSttus2 = newSeletedUserData.inofficeSttus;
        this.userAdmObject.rspof = newSeletedUserData.rspof;
        this.userAdmObject.dutySelect = newSeletedUserData.dutySelect;
        this.userAdmObject.org = newSeletedUserData.org;
        this.userAdmObject.ntcMeth = newSeletedUserData.ntcMeth;
        // console.log("newSeletedUserData",this.userAdmObject.inOfficeSttus2);
      },
    },
  },

  methods: {
    clickUserRegister() {
      console.log(this.seletedUserData);
      if (this.userAdmObject.sttus == "amend") {
        this.userAdmObject.sttus = "register";
        this.userAdmObject.inputClass = "class6";
        this.userAdmObject.isDisabled = false;
        this.userAdmObject.cmpno = null;
        this.userAdmObject.inOfficeSttus2 = "";
        this.userAdmObject.userNm = null;
        this.userAdmObject.ntcMeth = "";
        this.userAdmObject.org = null;
        this.userAdmObject.rspof = "";
        this.userAdmObject.dutySelect = "";
        this.userAdmObject.email = null;
        this.userAdmObject.mphon = null;
        this.userAdmObject.ppon = null;
        this.userAdmObject.pwd = null;
        this.userAdmObject.pwdChgDt = null;
        this.userAdmObject.lastLogIn = null;
        this.userAdmObject.failLogIn = null;
        this.userAdmObject.regrDt = null;
        this.userAdmObject.amdrDt = null;
        console.log(this.userAdmObject);
      }
    },
    clickUserAmend() {
      if (this.userAdmObject.sttus == "register") {
        this.userAdmObject.sttus = "amend";
        this.userAdmObject.inputClass = "class6 class6_2";
        this.userAdmObject.isDisabled = true;
        console.log(this.userAdmObject);
      }
    },
    checkTheNum(num) {
      console.log(num);
      console.log(formatTel(num));
    },
    popup() {
      if (this.isModalShow == false) this.isModalShow = true;
      else this.isModalShow = false;
    },
    popupAgree() {
      if (this.userAdmObject.sttus == "amend") {
        // 수정 팝업 확인 버튼 함수
        console.log("변경 완려");
      } else if (this.userAdmObject.sttus == "register") {
        //  등록 팝업 확인 버튼 함수
        console.log("등록 완려");
      }
    },
  },
};
</script>

<style scoped>
.UserAdmContainer {
  display: grid;
  grid-template-columns: 850px 700px 1fr;
  grid-template-rows: 100px 640px 1fr;
  gap: 20px 30px;
}

.UserAdmContainer > .item1 {
  grid-row: 1;
  grid-column: 1/3;
  background-color: burlywood;
}
.UserAdmContainer > .item2 {
  grid-row: 2;
  grid-column: 1;
}
.UserAdmContainer > .item3 {
  grid-row: 2;
  grid-column: 2;
}
.item2 > div:nth-child(1) {
  width: 100%;
  height: 25px;
}
.item2 > div:nth-child(2) {
  width: 100%;
  height: calc(100% - 100px);
  margin-top: 5px;
}

.pcSelectAndPagingFlex {
  font-size: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 100px calc(100% - 200px) 100px;
}

.pcSelectAndPagingFlex > div:nth-child(1) {
  grid-column: 1;
  width: 100px;
  height: 22px;
}
.pcSelectAndPagingFlex > div:nth-child(2) {
  grid-column: 2;
  padding: 0px;
}

.userDtlInfoTable {
  width: 100%;
  border-collapse: collapse;
}
.userDtlInfoTable tr {
  height: 40px;
}
.userDtlInfoTable th {
  width: 15%;
  border: 1px solid #bdbdbd;
  text-align: left;
  padding-left: 1%;
  background-color: rgb(247, 247, 248);
}
.userDtlInfoTable td {
  width: 33%;
  padding-left: 1%;
  border: 1px solid #bdbdbd;
}
</style>
