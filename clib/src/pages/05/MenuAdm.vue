<template>
  <article class="menuAdmContainer">
    <div class="item1">
      <retv-cond-component
      :retvCondNm="'조회기준'"
      :selectCdGroupType1="'retvCond'"
      :selectCdGroupType2="'useYn'"
      :selectDefltValue="'조회기준 선택'"
      @emitValue="(value)=>{ retvMenuValues = value  }"
      />
    </div>

    <div class="item2">
      <div>
        <sub-info-title :subInfoTitleNm="'메뉴 리스트'" />
        <p style="margin-left: 5px; display: inline-block">
          (총 <label style="font-weight: bold">{{ total }}</label>건)
        </p>
        <span style="float: right">
          <button-component
            :btnClass="'btn-type3'"
            :btnName="'등록'"
            @click="clickMenuRegister()"
          />
          <button-component
            :btnClass="'btn-type3'"
            :btnName="'변경'"
            @click="clickMenuAmend()"
          />
          <button-component :btnClass="'btn-type3'" :btnName="'엑셀다운로드'" />
        </span>
      </div>

      <div class="cont_list">
        <msf-tree
          :source="contentTree"
          :activeItem="activeItemObj"
          :selectedList="selectedItemList"
          id-field="directoryName"
          label-field="directoryName"
          ref="tree"
          @itemClick="treeItemClick"
          style="border: 1px solid rgb(239, 245, 252); padding: 0"
          :isBadgeShow="false"
        ></msf-tree>
      </div>
    </div>

    <div class="item3">
      <div>
        <sub-info-title :subInfoTitleNm="'메뉴 상세정보'" />
        <span style="float: right">
          <button-component
            :btnClass="'btn-type2'"
            :btnWidth="'60px'"
            :btnName="menuAdmObject.menuSttus == 'amend' ? '변경' : '등록'"
            @click="popup"
          />
        </span>
      </div>
      <div>
        <form action="">
          <table class="menuDtlInfoTable">
            <tr>
              <th><label-component :labelNm="'메뉴ID'" /></th>
              <td>
                <input-component
                  :width="'180px'"
                  :input-class="'input-type2'"
                  :inputType2BackgroundColor="'rgb(251, 253, 255)'"
                  :disabled="true"
                  :placeholder="'메뉴ID'"
                  :value="menuAdmObject.menuId"
                />
              </td>
              <th><label-component :labelNm="'상위메뉴ID'" /></th>
              <td>
                <input-component
                  :width="'180px'"
                  :input-class="'input-type2'"
                  :inputType2BackgroundColor="'rgb(251, 253, 255)'"
                  :disabled="true"
                  :placeholder="'상위메뉴ID'"
                  :value="menuAdmObject.upperMenuId"
                />
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'메뉴명'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'input-type2'"
                  :width="'300px'"
                  :placeholder="'메뉴명'"
                  :value="menuAdmObject.menuNm"
                  v-model="menuAdmObject.menuNm"
                />
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'메뉴설명'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'input-type2'"
                  :width="'300px'"
                  :placeholder="'메뉴설명 입력'"
                  :value="menuAdmObject.menuDesc"
                  v-model="menuAdmObject.menuDesc"
                />
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'메뉴 디렉토리'" /></th>
              <td>
                <select-box-component
                  style="height: 28px; margin-right: 6px;"
                  :width="'180px'"
                  :cdGroup="'menuDirectory'"
                  :isDisabled="true"
                  :defaultValue="'메뉴 디렉토리 선택'"
                  :defaultcdId="menuAdmObject.menuDir"
                  :selectedValue="menuAdmObject.menuDir"
                  @emitValue="(value) => {menuAdmObject.menuDir = value;}"
                />
              </td>
              <th><label-component :labelNm="''" /></th>
              <td>
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'URL'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'input-type2'"
                  :width="'300px'"
                  :placeholder="'URL'"
                  :value="menuAdmObject.url"
                  v-model="menuAdmObject.url"
                />
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'화면유형'" /></th>
              <td>
                <select-box-component
                  style="height: 28px; margin-right: 6px;"
                  :width="'180px'"
                  :cdGroup="'scrnOptions'"
                  :isDisabled="true"
                  :defaultValue="'화면유형 선택'"
                  :defaultcdId="menuAdmObject.scrnType"
                  :selectedValue="menuAdmObject.scrnType"
                  @emitValue="(value) => {menuAdmObject.scrnType = value;}"
                />
              </td>
              <th><label-component :labelNm="'정렬순서'" /></th>
              <td>
                <input-component
                  :width="'180px'"
                  :input-class="'input-type2'"
                  :inputType2BackgroundColor="'rgb(251, 253, 255)'"
                  :placeholder="'1'"
                  :value="menuAdmObject.sortingCond"
                />
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'메뉴사용기간'" /></th>
              <td colspan="3">
                <div style="display: inline-block">
                  <date-picker-component
                  :p-date="menuAdmObject.menuDtlStDt"
                  @emitValue="(value) => {menuAdmObject.menuDtlStDt = value;}"
                  :date-format="'yyyy-MM-dd'"
                  :classWrapper="'calender_input'"
                  :calenderBackgroundColor="'rgb(247, 247, 248)'"
                  />
                </div>
                <span> ~ </span>
                <div style="display: inline-block">
                  <date-picker-component
                  :isMinDate="menuAdmObject.menuDtlMinDt"
                  :pDate="menuAdmObject.menuDtlEndDt"
                  @emitValue="(value) => {menuAdmObject.menuDtlEndDt = value;}"
                  :classWrapper="'calender_input'"
                  :calenderBackgroundColor="'rgb(247, 247, 248)'"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'메뉴노출여부'" /></th>
              <td><radio-component 
                    :RadioOption="'useNouse'" 
                    @radioEmit="(radioValue) => { menuAdmObject.menuShowYn = radioValue }"
                    :selectedRadio="menuAdmObject.menuShowYn"
                    :defaultcdId="menuAdmObject.menuShowYn" /></td>
              <th><label-component :labelNm="'메뉴사용여부'" /></th>
              <td><radio-component 
                    :RadioOption="'useNouse'" 
                    @radioEmit="(radioValue) => { menuAdmObject.menuUseYn = radioValue }"
                    :selectedRadio="menuAdmObject.menuUseYn"
                    :defaultcdId="menuAdmObject.menuUseYn" /></td>
            </tr>

            <tr>
              <th><label-component :labelNm="'등록자/등록일시'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'input-type2'"
                  :inputType2BackgroundColor="'rgb(251, 253, 255)'"
                  :width="'180px'"
                  :disabled="true"
                  :value="menuAdmObject.dtlRegrNm"
                />
                <input-component
                  :input-class="'input-type2'"
                  :inputType2BackgroundColor="'rgb(251, 253, 255)'"
                  :width="'180px'"
                  :disabled="true"
                  :value="menuAdmObject.dtlRegrDt"
                />
              </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'수정자/수정일시'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'input-type2'"
                  :inputType2BackgroundColor="'rgb(251, 253, 255)'"
                  :width="'180px'"
                  :disabled="true"
                  :value="menuAdmObject.dtlAmdrNm"
                />
                <input-component
                  :input-class="'input-type2'"
                  :inputType2BackgroundColor="'rgb(251, 253, 255)'"
                  :width="'180px'"
                  :disabled="true"
                  :value="menuAdmObject.dtlAmdrDt"
                />
              </td>
            </tr>
          </table>
        </form>

        <popup-component
          v-if="isModalShow"
          :popupmsg="`${
            menuAdmObject.ntfSttus == 'amend' ? '변경' : '등록'
          }하시겠습니까?`"
          @popup="isModalShow = false"
          @AGREE="popupAgree()"
        />
      </div>
    </div>
  </article>
</template>

<script>
import RetvCondComponent from "@/components/UnionForm/RetvCondComponent.vue";
import RadioComponent from "@/components/common/RadioComponent.vue";
import LabelComponent from "@/components/common/LabelComponent.vue";
import InputComponent from "@/components/common/InputComponent.vue";
import SelectBoxComponent from "@/components/common/SelectBoxComponent.vue";
import SubInfoTitle from "@/components/common/SubInfoTitle.vue";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import DatePickerComponent from "@/components/common/DatePickerComponent.vue";
import PopupComponent from "@/components/common/PopupComponent.vue";
import MsfTree from "@/components/common/TreeComponent/msf-tree.vue";
import AgGridComponent from "@/components/common/AgGridComponent.vue";

export default {
  components: {
    RetvCondComponent,
    RadioComponent,
    LabelComponent,
    InputComponent,
    SelectBoxComponent,
    SubInfoTitle,
    ButtonComponent,
    DatePickerComponent,
    PopupComponent,
    MsfTree,
    AgGridComponent,
  },
  data() {
    return {
      retvMenuValues : {
        type1:"",
        type2:null,
        type3:""
      },
      menuAdmObject: {
        menuSttus: "amend",
        menuId:"",
        upperMenuId:"",
        menuNm:"",
        menuDesc:null,
        menuDir:null,
        url:"",
        scrnType: "",
        sortingCond:"",
        menuDtlStDt : new Date(), 
        menuDtlEndDt : new Date('9999-12-31'),
        menuShowYn: "01",
        menuUseYn: "01",
        dtlRegrNm : "김케이티",
        dtlAmdrNm: "김클라우드",
        dtlRegrDt: new Date().toLocaleString(),
        dtlAmdrDt: new Date().toLocaleString(),
        
        /*
        wjtTypeId : "BTN00001" , 
        wjtOption1:"",
        wjtOption2:"",
        trtStDt : new Date(), 
        trtEndDt : new Date('9999-12-31'),
        UseYn: "01",
        aplyExpt:"01",
        trtRegrNm : "김클라우드",
        trtAmdrNm: "김케이티",
        trtRegrDt: new Date().toLocaleString(),
        trtAmdrDt: new Date().toLocaleString(),
        */
      },
      isModalShow: false,
      // 트리
      activeItemObj: {}, // 활성화 시킬 객체
      selectedItemList: [], // 선택시킬 객체
      contentTree: [
        {
          groupId: 1,
          directoryName: "[L01] 고객/청약",
          children: [
            { groupId: 1, directoryName: "[L01M02S00] 고객 360 View" },
            { groupId: 1, directoryName: "[L01M02S01] 고객정보 등록" },
            { groupId: 1, directoryName: "[L01M02S02] 고객정보 변경" },
            { groupId: 1, directoryName: "[L01M06S00] 청약관리" },
            { groupId: 1, directoryName: "[미사용] [L01M07S00] 명의변경" },
          ],
        },
        {
          groupId: 2,
          directoryName: "[L02] 요금",
          children: [
            { groupId: 2, directoryName: "[L02M03S01] 요금 즉시수납" },
            {
              groupId: 2,
              directoryName: "[L02M03S02] 요금 신용카드 승인 내역",
            },
            { groupId: 2, directoryName: "[L02M05S01] 요금 수납관리" },
            { groupId: 2, directoryName: "[L02M06S00] 요금 과납관리" },
            {
              groupId: 2,
              directoryName: "[L02M11S01] 자동이체 대상 입출금 리스트",
            },
            { groupId: 2, directoryName: "[L02M11S04] 신용카드 입금 리스트" },
          ],
        },
        {
          groupId: 3,
          directoryName: "[L03] 청구",
          children: [
            { groupId: 3, directoryName: "[L03M05S01] 청구 과금관리" },
            { groupId: 3, directoryName: "[L03M07S01] CMS출금 내역" },
            { groupId: 3, directoryName: "[L03M05S01] 청구서 발행/재발행" },
            { groupId: 3, directoryName: "[L03M11S01] 월별 매출 리스트" },
            {
              groupId: 3,
              directoryName: "[L03M12S03] 수수료 정산 결과 리스트",
            },
          ],
        },
        {
          groupId: 4,
          directoryName: "[L04] 업무현황",
          children: [
            { groupId: 3, directoryName: "[L04M01S01] 고객 리스트" },
            { groupId: 3, directoryName: "[L04M01S02] AM별 고객 리스트" },
            { groupId: 3, directoryName: "[L04M02S01] 해지DB 분리고객 리스트" },
            { groupId: 3, directoryName: "[L04M04S00] 청약현황" },
            { groupId: 3, directoryName: "[L04M04S00] 수납현황" },
          ],
        },
      ],
    };
  },
  methods: {
    popup(msg) {
      if (this.isModalShow == false) this.isModalShow = true;
      else this.isModalShow = false;
      if (msg == "menuSttus")
        this.popupMsg =
          this.menuAdmObject.menuSttus == "amend"
            ? "변경하시겠습니까?"
            : "등록하시겠습니까?";
      else this.popupMsg = msg;
    },
    clickMenuRegister(){
      this.menuAdmObject.menuSttus = "register";
      this.emptyMenuAdmObject(this.menuAdmObject);
      this.$refs.agGridComponent.deselectAll(1);
      this.selectedMenuData = "register";
    },
    clickMenuAmend(){
      if (this.menuAdmObject.menuSttus == "register") {
        this.menuAdmObject.menuSttus = "amend";
      }
    },
    emptyMenuAdmObject(menuObject) {
      menuObject.menuId = null;
      menuObject.upperMenuId = null;
      menuObject.menuNm = null;
      menuObject.menuDesc = null;
      menuObject.menuDir = "";
      menuObject.url = null;
      menuObject.scrnType = "";
      menuObject.sortingCond = null;
      menuObject.menuDtlStDt = new Date();
      menuObject.menuDtlEndDt = new Date(9999,11,31);
      menuObject.menuShowYn = "";
      menuObject.menuUseYn = " ";
      menuObject.dtlRegrNm = null;
      menuObject.dtlAmdrNm = null;
      menuObject.dtlRegrDt = null;
      menuObject.dtlAmdrDt = null;
    },
  },
};
</script>

<style scoped>
.cont_list {
  width: 99%;
  height: 85%;
  overflow-x: hidden;
  border: 1px solid #e4e4e4;
}

.menuAdmContainer {
  display: grid;
  grid-template-columns: 750px 800px 1fr;
  grid-template-rows: 50px 350px 300px 1fr;
  gap: 20px 30px;
}

.menuAdmContainer > .item1 {
  grid-row: 1;
  grid-column: 1/3;
}

.menuAdmContainer > .item2 {
  grid-row: 2/4;
  grid-column: 1;
}
.menuAdmContainer > .item3 {
  grid-row: 2;
  grid-column: 2;
}
.menuAdmContainer > .item4 {
  grid-row: 3;
  grid-column: 2;
}

.menuDtlInfoTable {
  width: 100%;
  border-collapse: collapse;
}
.menuDtlInfoTable tr {
  height: 40px;
}
.menuDtlInfoTable th {
  width: 15%;
  border: 1px solid #bdbdbd;
  text-align: left;
  padding-left: 1%;
  background-color: rgb(247, 247, 248);
}
.menuDtlInfoTable td {
  width: 33%;
  padding-left: 1%;
  border: 1px solid #bdbdbd;
}

.wrkJobTrtInfoTable {
  width: 100%;
  border-collapse: collapse;
}
.wrkJobTrtInfoTable tr {
  height: 40px;
}
.wrkJobTrtInfoTable th {
  width: 15%;
  border: 1px solid #bdbdbd;
  text-align: left;
  padding-left: 1%;
  background-color: rgb(247, 247, 248);
}
.wrkJobTrtInfoTable td {
  width: 33%;
  padding-left: 1%;
  border: 1px solid #bdbdbd;
}
</style>
