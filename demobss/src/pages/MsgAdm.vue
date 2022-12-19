<template>
  <div>
    <article class="thisContainer">
      <div class="item1 msgSearch">
        <table>
          <tr>
            <th><label-component :labelNm="'조회기준'" /></th>
            <td>
              <select-box-component
                style="height: 28px"
                :selectClass="'select_input4'"
                :width="200"
                :cdGroup="'msgRetv'"
                :defaultValue="'조회기준 선택'"
                :isDisabled="true"
                :selectedValue="selectValues.selectValueOfRetv"
                @input="
                  (value) => {
                    selectValues.selectValueOfRetv = value;
                  }
                "
              />
            </td>
            <td>
              <input-component
                style="width: 200px; height: 28px"
                :type="'search'"
                :inputClass="'class4'"
                :placeholder="'검색어 입력'"
                :value="selectValues.inputValueOfWord"
                v-model="selectValues.inputValueOfWord"
              />
            </td>
            <td colspan="2"></td>
            <td class="emptyBox1"></td>

            <th><label-component :labelNm="'유효종료일'" /></th>
            <td colspan="2">
              <div style="display: inline-block">
                <date-picker-component
                  :p-date="selectValues.StDt"
                  :date-format="'yyyy-MM-dd'"
                  :classWrapper="'calender_input'"
                  @input="(value) => {selectValues.StDt = value;}"
                />
              </div>
              <span> ~ </span>
              <div style="display: inline-block">
                <date-picker-component
                  :isMinDate="selectValues.MinDt"
                  :pDate="selectValues.EndDt"
                  :classWrapper="'calender_input'"
                  @input="(value) => {selectValues.EndDt = value;}"
                />
              </div>
            </td>

            <td class="btnBox">
              <button-component
                :btn-class="'btnClass4'"
                :btnFontWeight="'bold'"
                :btn-name="'검색'"
                :btnHeight="'28px'"
                :btnWidth="'78px'"
              />
            </td>
          </tr>

          <tr>
            <th><label-component :labelNm="'메시지유형'" /></th>
            <td>
              <select-box-component
                style="height: 28px"
                :selectClass="'select_input4'"
                :width="200"
                :cdGroup="'msgType'"
                :defaultValue="'메시지유형 선택'"
                :isDisabled="true"
                :selectedValue="selectValues.selectValueOfMsgType"
                @input="(value) => {selectValues.selectValueOfMsgType = value;}"
              />
            </td>
            <td colspan="3"></td>
            <td class="emptyBox1"></td>

            <th><label-component :labelNm="'사용여부'" /></th>
            <td>
              <select-box-component
                style="height: 28px"
                :selectClass="'select_input4'"
                :width="200"
                :cdGroup="'useYn'"
                :defaultValue="'사용여부 선택'"
                :isDisabled="true"
                :selectedValue="selectValues.selectValueOfUseYn"
                @input=" (value) => {selectValues.selectValueOfUseYn = value;}"
              />
            </td>
            <td class="emptyBox2"></td>

            <td>
              <button-component
                :btnClass="'btnClass5'"
                :btnHeight="'28px'"
                :btnWidth="'78px'"
                :btnFontWeight="'bold'"
                :btnName="'초기화'"
                @click="resetRetvCond"
              />
            </td>
          </tr>
        </table>
      </div>

      <div class="item2">
        <div>
          <sub-info-title :subInfoTitleNm="'메시지 리스트'" />
          <p style="margin-left: 5px; display: inline-block">
            (총 <label style="font-weight: bold">{{ total }}</label>건)
          </p>
          <span style="float: right">
            <button-component
              :btnClass="'btnClass3'"
              :btnName="btnNames[0]"
              @click="clickMsgRegister"
            />
            <button-component
              :btnClass="'btnClass3'"
              :btnName="btnNames[1]"
              @click="clickMsgAmend"
            />
            <button-component :btnClass="'btnClass3'" :btnName="btnNames[2]" />
          </span>
        </div>

        <div>
          <ag-grid-component
            ref="agGridComponent"
            :rowData="rowData"
            :columnDefs="msgLstColumnDefs"
            :rowHeight="msgLstRowHeight"
            :isDeselect="true"
            :isAutoSize="[false,'type1']"
            :isWidthFit="false"
            :headerHeight="60"
            :rowClicked="msgLstRowClicked"
            :overlayNoRowsTemplate="noRowTemplateMsg"
          />
          <div class="pgSelectAndPagingFlex">
            <div>
              <select-box-component
                class="pgSelectBox"
                :selectClass="'select_input3'"
                :cdGroup="'optionSearchNum'"
                :defaultValue="'선택'"
                :defaultcdId="showTheNum"
                :isDisabled="true"
                v-model="showTheNum"
                @input="
                  (value) => {
                    selectValue = value;
                  }
                "
              />
            </div>
            <div>
              <paging-area
                class="pgPagingArea"
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
          <sub-info-title :subInfoTitleNm="'메시지 상세정보'" />
          <span style="float: right">
            <button-component
              :btnClass="'btnClass5'"
              :btnWidth="'60px'"
              :btnName="msgAdmObject.msgSttus == 'amend' ? '변경' : '등록'"
              @click="popup"
            />
          </span>
        </div>
        <div>
          <form action="">
            <table class="msgDtlInfoTable">
              <tr>
                <th><label-component :labelNm="'메시지ID'" /></th>
                <td colspan="3">
                  <input-component
                    :class6Width="'150px'"
                    :input-class="'class6 class6_2'"
                    :disabled="true"
                    :placeholder="'Message ID'"
                    :value="msgAdmObject.msgId"
                  />
                </td>
              </tr>
              <tr>
                <th><label-component :labelNm="'메시지제목'" /></th>
                <td colspan="3">
                  <input-component
                    :input-class="'class6'"
                    :class6Width="'500px'"
                    :placeholder="'메시지 제목'"
                    :value="msgAdmObject.msgTitle"
                    v-model="msgAdmObject.msgTitle"
                  />
                </td>
              </tr>

              <tr>
                <th><label-component :labelNm="'작성자'" /></th>
                <td class="td2">
                  <input-component
                    :class6Width="'150px'"
                    :input-class="'class6 class6_2'"
                    :disabled="true"
                    :placeholder="'System'"
                    :value="msgAdmObject.msgRegr"
                  />
                </td>
                <th><label-component :labelNm="'작성일자'" /></th>
                <td>
                  <input-component
                    :class6Width="'200px'"
                    :input-class="'class6 class6_2'"
                    :disabled="true"
                    :placeholder="'  '"
                    :value="msgAdmObject.msgRegrDt"
                  />
                </td>
              </tr>

              <tr>
                <th><label-component :labelNm="'사용여부'" /></th>
                <td class="td2">
                  <radio-component
                    :RadioOption="'useNouse'"
                    @radioEmit="
                      (radioValue) => {
                        msgAdmObject.msgUseYn = radioValue;
                      }
                    "
                    :seletedRadio="msgAdmObject.msgUseYn"
                    :defaultcdId="msgAdmObject.msgUseYn"
                  />
                </td>
                <th>
                  <label-component :labelNm="'유효일자'" />
                </th>
                <td>
                  <div style="display: inline-block">
                    <date-picker-component
                      :p-date="msgAdmObject.msgStDt"
                      @input="
                        (value) => {
                          msgAdmObject.msgStDt = value;
                        }
                      "
                      :classWrapper="'calender_input'"
                      :calenderBackgroundColor="'rgb(247, 247, 248)'"
                    />
                  </div>
                  <span> ~ </span>
                  <div style="display: inline-block">
                    <date-picker-component
                      :p-date="msgAdmObject.msgEndDt"
                      @input="
                        (value) => {
                          msgAdmObject.msgEndDt = value;
                        }
                      "
                      :classWrapper="'calender_input'"
                      :calenderBackgroundColor="'rgb(247, 247, 248)'"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th><label-component :labelNm="'메시지유형'" /></th>
                <td class="td2">
                  <select-box-component
                    style="height: 28px"
                    :selectClass="'select_input4'"
                    :width="150"
                    :cdGroup="'msgType'"
                    :isDisabled="true"
                    :defaultValue="'메시지유형선택 선택'"
                    :defaultcdId="msgAdmObject.msgType"
                    :selectedValue="msgAdmObject.msgType"
                    @input="
                      (value) => {
                        msgAdmObject.msgType = value;
                      }
                    "
                  />
                </td>
                <th>
                  <!-- <label-component :labelNm="'수신자그룹제한'" /> -->
                </th>
                <td>
                  <!-- <select-box-component
                    style="height: 28px"
                    :selectClass="'select_input4'"
                    :cdGroup="'rcvrOptions'"
                    :defaultValue="'수신자그룹제한'"
                    :defaultcdId="msgAdmObject.rcvrRstrtn"
                    :isDisabled="true"
                    :width="185"
                    :selectedValue="msgAdmObject.rcvrRstrtn"
                    @input="
                      (value) => {
                        msgAdmObject.rcvrRstrtn = value;
                      }
                    "
                  /> -->
                </td>
              </tr>

              <tr>
                <th><label-component :labelNm="'회신번호'" /></th>
                <td colspan="3">
                  <input-component
                    :input-class="'class6'"
                    :class6Width="'500px'"
                    :placeholder="'회신번호'"
                    :value="msgAdmObject.msgCallBack"
                    v-model="msgAdmObject.msgCallBack"
                  />
                </td>
              </tr>

              <tr>
                <th><label-component :labelNm="'메시지내용'" /></th>
                <td colspan="3">
                  <TextAreaComponent
                    :textAreaHeight="'200px'"
                    :rows="10"
                    :placeholder="'내용 입력'"
                    :maxlength="10"
                    :contents="msgAdmObject.msgContent"
                    v-model="msgAdmObject.msgContent"
                  />
                </td>
              </tr>
            </table>
            
        <!-- {{msgAdmObject}}
        <p> ----------- </p>
        {{selectedMsgData}} -->
          </form>

          <popup-component
            v-if="isModalShow"
            :popupmsg="`${
              msgAdmObject.msgSttus == 'amend' ? '변경' : '등록'
            }하시겠습니까?`"
            @popup="isModalShow = false"
            @AGREE="popupAgree()"
          />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import TextAreaComponent from "@/components/common/TextAreaComponent.vue";
import AgGridComponent from "../components/common/AgGridComponent.vue";
import ButtonComponent from "../components/common/ButtonComponent.vue";
import DatePickerComponent from "../components/common/DatePickerComponent.vue";
import InputComponent from "../components/common/InputComponent.vue";
import LabelComponent from "../components/common/LabelComponent.vue";
import PagingArea from "../components/common/PagingArea.vue";
import RadioComponent from "../components/common/RadioComponent.vue";
import SelectBoxComponent from "../components/common/SelectBoxComponent.vue";
import SubInfoTitle from "../components/common/SubInfoTitle.vue";
import ApiMixin from "../service/common.js";
export default {
  mixins: [ApiMixin],
  components: {
    SelectBoxComponent,
    LabelComponent,
    ButtonComponent,
    DatePickerComponent,
    InputComponent,
    SubInfoTitle,
    AgGridComponent,
    PagingArea,
    RadioComponent,
    TextAreaComponent,
  },
  data() {
    return {
      selectValues: {
        selectValueOfRetv: "조회기준 선택",
        inputValueOfWord : '',
        selectValueOfMsgType: "공지유형",
        selectValueOfUseYn: "사용여부",
        StDt: new Date(),
        MinDt: this.StDt,
        EndDt: new Date("2022-12-31"),
      },
      msgAdmObject: {
        msgSttus: "amend",
        msgId: "",
        msgTitle: "",
        msgRegr: "",
        msgRegrDt: new Date().toLocaleString(),
        msgStDt: new Date(), // 공지게시 일자
        msgEndDt: new Date("2023-12-31"), // 공지게시 일자
        msgUseYn: "01", // 팝업게시
        msgType: "", // 공지 유형
        rcvrRstrtn: "", // 수신자그룹제한
        msgCallBack: '',
        msgContent: " 글 내용입니다. ", // 내용
        
      },
      total: "1,234",
      btnNames: ["등록", "변경", "엑셀다운로드"],
      msgLstRowHeight: 48,
      msgDtlRowHeight: 40,
      msgLstColumnDefs: [
        {
          headerName: "선택",
          field: "select",
          width: 64,
          cellClass: "agCellStyle ",
          checkboxSelection: true,
          cellStyle: () => {
            return { "pointer-events": "none" };
          },
        },
        {
          headerName: "메시지ID",
          field: "msgId",
          width: 100,
          cellClass: '"cell"-span',
        },
        {
          headerName: "메시지유형",
          field: "msgType",
          width: 150,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "메시지제목",
          field: "msgTitle",
          width: 400,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "회신번호",
          field: "msgCallBack",
          width: 90,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "유효시작일시",
          field: "msgStDt",
          width: 100,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "유효종료일시",
          field: "msgEndDt",
          width: 100,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "작성자",
          field: "msgRegr",
          width: 100,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "작성일자",
          field: "msgRegrDt",
          width: 100,
          cellClass: "agCellStyle ",
        },
      ],
      isMsgLstModalShow:false,
      rowData: [],
      noRowTemplateMsg: `<span> <strong>  조회 결과가 없습니다. </strong> <br><br><br> </span>`,
      pageableData: {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 10,
        totalPages: 30,
      },
      currentPage: "",
      popupMsg: "",
      selectedMsgData:""
    };
  },
  methods:{
    msgLstRowClicked(params){
      let selectedRowData = params.api.getSelectedRows();
      if(this.msgAdmObject.msgSttus=="register") {       // 사용자관리 상태가 등록일 경우,
        this.isMsgLstModalShow= true;                 //row 클릭 될 경우 팝업 띄우고 
        this.$refs.agGridComponent.deselectAll(1);     // 이전에 클릭 된 row 클릭 해제                   
      }else if(selectedRowData == ""){
        this.selectedMsgData = "empty";                // 동일한 row 클릭 시, 해당 row 클릭 해제, 해당 객체 데이터 비우도록 emit
      }else{
        this.selectedMsgData = selectedRowData[0];      // 다른 row 클릭 시 달라진 값 객체 데이터에 전달 
      }
    },
    emptyMsgAdmObject(ntfObject){
      ntfObject.msgId = "";
      ntfObject.msgTitle = "";
      ntfObject.msgRegr = null;
      ntfObject.msgRegrDt = new Date();
      ntfObject.msgStDt =   new Date()           ;
      ntfObject.msgEndDt =  new Date("2023-12-31");
      ntfObject.msgUseYn = "";
      ntfObject.msgType =  "";
      ntfObject.rcvrRstrtn = new Date("2023-12-31");
      ntfObject.msgCallBack = "";
      ntfObject.msgContent = "";
    },
    resetRetvCond(){
      console.log(this.selectValues);
      this.selectValues.selectValueOfRetv = "" ;
      this.selectValues.inputValueOfWord = "" ;
      this.selectValues.selectValueOfMsgType = "" ;
      this.selectValues.selectValueOfUseYn = "" ;
      this.selectValues.StDt = new Date();
      this.selectValues.MinDt = "";
      this.selectValues.EndDt = new Date("2022-12-31") ; 
      // this.selectValues.EndDt.setDate( new Date().setMonth(new Date('2022-12-01').getMonth()+1 )  );  
      console.log(this.selectValues);
    }
  },
  clickMsgRegister(){

  },
  clickMsgAmend(){

  },

  watch:{
    selectValues(newSelectedValue){
      this.selectValues = newSelectedValue;
      console.log(this.selectValues)
    },
    
    msgAdmObject: {
      // 사용자 상세정보 변경이 감지되면 해당 변경 적용
      deep: true,
      handler(newone2) {
        this.msgAdmObject = newone2;
        console.log("@@@msgAdmObject@@@@: ", newone2);
      },
    },
    selectedMsgData: {
      // 메시지리스트(ag-grid) row가 선택 되었을 때, 해당 데이터를 기반으로 사용자 상세정보 변경
      deep: true,
      handler(newSeletedMsgData) {
        console.log("newSeletedMsgData", newSeletedMsgData);
        if (newSeletedMsgData == "empty") {
          this.emptyMsgAdmObject(this.msgAdmObject);
        } 
        else {
          // console.log("msgAdmObject : ", this.msgAdmObject)
          let tmpMsgAdmObject = this.msgAdmObject
          tmpMsgAdmObject.msgId = newSeletedMsgData.msgId;
          tmpMsgAdmObject.msgTitle = newSeletedMsgData.msgTitle;
          tmpMsgAdmObject.msgRegr = newSeletedMsgData.msgRegr;
          tmpMsgAdmObject.msgRegrDt = new Date(newSeletedMsgData.msgRegrDt);
          tmpMsgAdmObject.msgStDt = new Date(newSeletedMsgData.msgStDt);
          tmpMsgAdmObject.msgEndDt = new Date(newSeletedMsgData.msgEndDt);
          tmpMsgAdmObject.msgUseYn = newSeletedMsgData.msgUseYn;
          tmpMsgAdmObject.msgType = newSeletedMsgData.msgType;
          tmpMsgAdmObject.rcvrRstrtn = newSeletedMsgData.rcvrRstrtn;
          tmpMsgAdmObject.msgCallBack = newSeletedMsgData.msgCallBack;
          tmpMsgAdmObject.msgContent = newSeletedMsgData.msgContent;
          // console.log("newSeletedMsgData",this.msgAdmObject.inOfficeSttus2);
          
          this.msgAdmObject = tmpMsgAdmObject  ;
        }
      },
    },
  },
  async beforeMount() {
    await this.$connect("application/json", "/info.json", "get", "")
      // await this.axios.get("msgRowData")
      .then((res) => {
        console.log("info", res);
        this.rowData = res.data.msgRowData;
        // console.log(this.rowData);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style scoped>
.thisContainer {
  display: grid;
  grid-template-columns: 800px 750px 1fr;
  grid-template-rows: 100px 640px 1fr;
  gap: 20px 30px;
}

.thisContainer > .item1 {
  grid-row: 1;
  grid-column: 1/3;
}
.thisContainer > .item2 {
  grid-row: 2;
  grid-column: 1;
}
.thisContainer > .item3 {
  grid-row: 2;
  grid-column: 2;
}

.msgSearch {
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  height: 100%;
}

.msgSearch table {
  padding: 10px;
}
.msgSearch table > tr {
  height: 35px;
}
.msgSearch table > tr > th {
  margin-left: 10px;
  width: 70px;
  text-align: left;
}
.msgSearch table > tr > td {
  width: 140px;
}

.msgSearch .emptyBox1 {
  width: 60px;
}
.msgSearch .emptyBox2 {
  width: 450px;
}
.msgSearch .btnBox {
  width: 80px;
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

.pgSelectAndPagingFlex {
  font-size: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 100px calc(100% - 200px) 100px;
}

.pgSelectAndPagingFlex > div:nth-child(1) {
  grid-column: 1;
  width: 100px;
  height: 22px;
}
.pgSelectAndPagingFlex > div:nth-child(2) {
  grid-column: 2;
  padding: 0px;
}

.agCellStyle {
  white-space: normal;
  /* background-color:black; */
}

.msgDtlInfoTable {
  width: 100%;
  border-collapse: collapse;
}
.msgDtlInfoTable tr {
  height: 40px;
}
.msgDtlInfoTable th {
  width: 10%;
  border: 1px solid #bdbdbd;
  text-align: left;
  padding-left: 1%;
  background-color: rgb(247, 247, 248);
}
.msgDtlInfoTable td {
  width: 20%;
  padding-left: 1%;
  border: 1px solid #bdbdbd;
}
.msgDtlInfoTable .td2 {
  width: 10%;
}
</style>
