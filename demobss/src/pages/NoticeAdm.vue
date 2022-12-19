<template>
  <div>
    <article class="thisContainer">
      <div class="item1 ntfSearch"> 
        <table>
        <tr>
          <th><label-component :labelNm="'조회기준'" /></th>
          <td>
            <select-box-component
              style="height: 28px"
              :selectClass="'select_input4'"
              :width="200"
              :cdGroup="'ntfRetv'"
              :defaultValue="'조회기준 선택'"
              :isDisabled="true"
              :selectedValue="selectValues.selectValueOfRetv"
              @input="(value) => {selectValues.selectValueOfRetv = value;}"
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

          <th><label-component :labelNm="'게시일'" /></th>
          <td colspan="2">
            <div style="display: inline-block">
                  <date-picker-component
                  :p-date="selectValues.StDt"
                  @input="(value) => {selectValues.StDt = value;}"
                  :date-format="'yyyy-MM-dd'"
                  :classWrapper="'calender_input'"
                  />
                </div>
                <span> ~ </span>
                <div style="display: inline-block">
                  <date-picker-component
                  :isMinDate="selectValues.MinDt"
                  :pDate="selectValues.EndDt"
                  @input="(value) => {selectValues.EndDt = value;}"
                  :classWrapper="'calender_input'"
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
          <th><label-component :labelNm="'공지유형'" /></th>
          <td>
            <select-box-component
              style="height: 28px"
              :selectClass="'select_input4'"
              :width="200"
              :cdGroup="'ntfType'"
              :defaultValue="'공지유형 선택'"
              :isDisabled="true"
              :selectedValue="selectValues.selectValueOfNtfType"
              @input="(value) => {selectValues.selectValueOfNtfType = value;}"
            />
          </td>
          <td colspan="3"> </td>
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
              @input="(value) => {selectValues.selectValueOfUseYn = value;}"
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
        <sub-info-title :subInfoTitleNm="'공지사항 리스트'" />
        <p style="margin-left: 5px; display: inline-block">
          (총 <label style="font-weight: bold">{{ total }}</label>건)
        </p>
        <span style="float: right">
          <button-component
            :btnClass="'btnClass3'"
            :btnName="btnNames[0]"
            @click="clickUserRegister()"
          />
          <button-component
            :btnClass="'btnClass3'"
            :btnName="btnNames[1]"
            @click="clickUserAmend()"
          />
          <button-component :btnClass="'btnClass3'" :btnName="btnNames[2]" />
        </span>
        </div>

        <div>
      {{noticeAdmObject}}
          <ag-grid-component
            ref="agGridComponent"
            :rowData="rowData"
            :columnDefs="ntfLstColumnDefs"
            :rowHeight="ntfLstRowHeight"
            :isDeselect="true"
            :isAutoSize="[false,'type1']"
            :isWidthFit="false"
            :headerHeight="60"
            :rowClicked="userLstRowClicked"
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
                @input="(value) => {selectValue = value;}"
              />
            </div>
            <div>
              <paging-area
                class="pgPagingArea"
                ref="PagingArea"
                :pageableData="pageableData"
                style="padding: 0"
                @currentPage=" (value) => {currentPage = value;}"
              />
            </div>
          </div>
        </div>
        
      </div>
      <div class="item3">
      <div>
        <sub-info-title :subInfoTitleNm="'공지사항 상세정보'" />
        <span style="float: right">
          <button-component
            :btnClass="'btnClass5'"
            :btnWidth="'60px'"
            :btnName="noticeAdmObject.sttus == 'amend' ? '변경' : '등록'"
            @click="popup"
          />
        </span>
      </div>
      <div>
        <form action="">
          <table class="ntfDtlInfoTable">
            <tr>
              <th><label-component :labelNm="'제목'" /></th>
              <td colspan="3">
                <input-component
                  :input-class="'class6'"
                  :class6Width="'300px'"
                  :placeholder="'공지사항 제목'"
                  :value="noticeAdmObject.menuNm"
                  v-model="noticeAdmObject.menuNm"
                />
              </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'작성자'" /></th>
              <td>
                <input-component
                  :class6Width="'150px'"
                  :input-class="'class6 class6_2'"
                  :disabled="true"
                  :placeholder="'System'"
                  :value="noticeAdmObject.ntfMKer"
                />
              </td>
              <th><label-component :labelNm="'작성일자'" /></th>
              <td>
                <input-component
                  :class6Width="'200px'"
                  :input-class="'class6 class6_2'"
                  :disabled="true"
                  :placeholder="'  '"
                  :value="noticeAdmObject.ntfMkeDt"
                />
              </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'공지게시'" /></th>
              <td>
              <radio-component 
                    :RadioOption="'useNouse'" 
                    @radioEmit="(radioValue) => { noticeAdmObject.ntfStYn = radioValue }"
                    :seletedRadio="noticeAdmObject.ntfStYn"
                    :defaultcdId="noticeAdmObject.ntfStYn" />
              </td>
              <th >
                <label-component :labelNm="'공지게시일자'" />
              </th><td >
                <div style="display: inline-block">
                  <date-picker-component
                  :p-date="noticeAdmObject.ntfStDt"
                  @input="(value) => {noticeAdmObject.ntfStDt = value;}"
                  :classWrapper="'calender_input'"
                  :calenderBackgroundColor="'rgb(247, 247, 248)'"
                  />
                </div>
                <span> ~ </span>
                <div style="display: inline-block">
                  <date-picker-component
                  :p-date="noticeAdmObject.ntfEndDt"
                  @input="(value) => {noticeAdmObject.ntfEndDt = value;}"
                  :classWrapper="'calender_input'"
                  :calenderBackgroundColor="'rgb(247, 247, 248)'"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'팝업게시'" /></th>
              <td style="width: 100px">
              <radio-component 
                    :RadioOption="'useNouse'" 
                    @radioEmit="(radioValue) => { noticeAdmObject.UseYn = radioValue }"
                    :seletedRadio="noticeAdmObject.UseYn"
                    :defaultcdId="noticeAdmObject.UseYn" />
              </td>
              <th style="width: 35px">
                <label-component :labelNm="'팝업게시일자'" />
              </th><td style="width: 50%">
                <div style="display: inline-block">
                  <date-picker-component
                  :p-date="noticeAdmObject.popupStDt"
                  @input="(value) => {noticeAdmObject.popupStDt = value;}"
                  :classWrapper="'calender_input'"
                  :calenderBackgroundColor="'rgb(247, 247, 248)'"
                  />
                </div>
                <span> ~ </span>
                <div style="display: inline-block">
                  <date-picker-component
                  :p-date="noticeAdmObject.popupEndDt"
                  @input="(value) => {noticeAdmObject.popupEndDt = value;}"
                  :classWrapper="'calender_input'"
                  :calenderBackgroundColor="'rgb(247, 247, 248)'"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'공지유형'" /></th>
              <td>
                <select-box-component
                  style="height: 28px"
                  :selectClass="'select_input4'"
                  :width="150"
                  :cdGroup="'ntfType'"
                  :isDisabled="true"
                  :defaultValue="'공지유형선택 선택'"
                  :defaultcdId="noticeAdmObject.ntfType"
                  :selectedValue="noticeAdmObject.ntfType"
                  @input="
                    (value) => {
                      noticeAdmObject.ntfType = value;
                    }
                  "
                />
              </td>
              <th><label-component :labelNm="'수신자그룹제한'" /></th>
              <td>
                <select-box-component
                  style="height: 28px"
                  :selectClass="'select_input4'"
                  :cdGroup="'rcvrOptions'"
                  :defaultValue="'수신자그룹제한'"
                  :defaultcdId="noticeAdmObject.rcvrRstrtn"
                  :isDisabled="true"
                  :width="185"
                  :selectedValue="noticeAdmObject.rcvrRstrtn"
                  @input="
                    (value) => {
                      noticeAdmObject.rcvrRstrtn = value;
                    }
                  "
                />
              </td>
            </tr>
            
            <tr>
              <th><label-component :labelNm="'수신그룹'" /></th>
              <td colspan="3">
                <ag-grid-component
                style="height:130px;"
                ref="agGridComponent"
                :rowData="rcvrRowData"
                :columnDefs="ntfDtlColumnDefs"
                :rowHeight="ntfDtlRowHeight"
                :isDeselect="true"
                :headerHeight="30"
                :rowClicked="userLstRowClicked"
                :overlayNoRowsTemplate="noRowTemplateMsg"
                />
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'내용'" /></th>
              <td colspan="3">
                <TextAreaComponent
                :textAreaHeight="'80px'"
                :rows="10"
                :placeholder="'내용 입력'"
                :maxlength="10"
                :contents="noticeAdmObject.ntfContent"
                />
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'비밀글'" /></th>
              <td colspan="3">
                <radio-component 
                  :RadioOption="'scrtOptions'" 
                  @radioEmit="(radioValue) => { noticeAdmObject.scrt = radioValue }"
                  :seletedRadio="noticeAdmObject.scrt"
                  :defaultcdId="noticeAdmObject.scrt" />
              </td>
            </tr>
            <tr v-if="noticeAdmObject.ntfSttus=='amend'">
              <th><label-component :labelNm="'답변등록'" /></th>
              <td colspan="3">
                <TextAreaComponent
                :textAreaHeight="'80px'"
                :rows="10"
                :placeholder="'내용 입력'"
                :maxlength="10"
                :contents="noticeAdmObject.ansSbst"
                />
              </td>
            </tr>
          </table>
        </form>

        <popup-component
          v-if="isModalShow"
          :popupmsg="`${
            noticeAdmObject.sttus == 'amend' ? '변경' : '등록'
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
import TextAreaComponent from '@/components/common/TextAreaComponent.vue'
import AgGridComponent from '../components/common/AgGridComponent.vue'
import ButtonComponent from '../components/common/ButtonComponent.vue'
import DatePickerComponent from '../components/common/DatePickerComponent.vue'
import InputComponent from '../components/common/InputComponent.vue'
import LabelComponent from '../components/common/LabelComponent.vue'
import PagingArea from '../components/common/PagingArea.vue'
import RadioComponent from '../components/common/RadioComponent.vue'
import SelectBoxComponent from '../components/common/SelectBoxComponent.vue'
import SubInfoTitle from '../components/common/SubInfoTitle.vue'
import ApiMixin from "../service/common.js"
  export default {
  mixins:[ApiMixin],
  components: { SelectBoxComponent, LabelComponent, ButtonComponent, DatePickerComponent, InputComponent, SubInfoTitle, AgGridComponent, PagingArea, RadioComponent, TextAreaComponent },
  data(){
    return{
      selectValues:{
        selectValueOfRetv : '조회기준 선택',
        inputValueOfWord : '',
        selectValueOfNtfType : '공지유형',
        selectValueOfUseYn : '사용여부',
        StDt: new Date(),
        MinDt : this.StDt,
        EndDt: new Date("2022-12-31"),
      },
      noticeAdmObject:{
        ntfSttus : 'amend',
        ntfTitle:'',
        ntfMKer : '',
        ntfMkeDt : new Date("2022-12-16"),
        ntfStYn: "01",                      // 공지게시
        ntfStDt : new Date(),               // 공지게시 일자
        ntfEndDt : new Date("2023-12-31"),  // 공지게시 일자
        popupYn : "01",                     // 팝업게시 
        popupStDt : new Date(),             // 팝업게시 일자
        popupEndDt : new Date("2023-12-31"),// 팝업게시 일자
        ntfType : "",                       // 공지 유형
        rcvrRstrtn : "",                    // 수신자그룹제한
        ntfContent : " 글 내용입니다. ",     // 내용
        scrt : "",                          // 비밀글
        ansSbst : "답변 내용입니다.",
      },
      total:"1,234",
      btnNames: ["등록","변경","엑셀다운로드"],
      ntfLstRowHeight:48,
      ntfDtlRowHeight:40,
      ntfLstColumnDefs:[
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
          headerName: "순서",
          field: "ntfIndex",
          width: 70,
          cellClass: '"cell"-span',
        },
        {
          headerName: "공지유형",
          field: "ntfType",
          width: 100,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "제목",
          field: "ntfTilte",
          width: 350,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "공지 게시여부",
          field: "ntfYn",
          width: 100,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "공지게시시작일시",
          field: "ntfStDt",
          width: 100,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "공지게시종료일시",
          field: "ntfEndDt",
          width: 100,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "첨부",
          field: "attachment",
          width: 150,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "팝업게시여부",
          field: "popupYn",
          width: 60,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "팝업게시시작일시",
          field: "popupStDt",
          width: 100,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "팝업게시종료일시",
          field: "popupEndDt",
          width: 100,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "작성자",
          field: "regr",
          width: 100,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "작성일자",
          field: "regrDt",
          width: 100,
          cellClass: "agCellStyle ",
        },
      ],
      ntfDtlColumnDefs: [
        {
          headerName: "선택",
          field: "select",
          width: 30,
          cellClass: "agCellStyle ",
          checkboxSelection: true,
          cellStyle: () => {
            return { "pointer-events": "none" };
          },
        },
        {
          headerName: "수신자그룹ID",
          field: "rcvrGrId",
          width: 200,
          cellClass: '"cell"-span',
        },
        {
          headerName: "수신자그룹명",
          field: "rcvrGrNm",
          width: 200,
          cellClass: '"cell"-span',
        }
      ],
      rowData:[],
      rcvrRowData:[],
      noRowTemplateMsg : `<span> <strong>  조회 결과가 없습니다. </strong> <br><br><br> </span>`,
      pageableData: {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 10,
        totalPages: 30,
      },
      currentPage: "",
      popupMsg:"",
      isModalShow: false, // popup 조건

    }
  },
  methods:{
    resetRetvCond(){
      console.log(this.selectValues);
      this.selectValues.selectValueOfRetv = "" ;
      this.selectValues.inputValueOfWord = "" ;
      this.selectValues.selectValueOfNtfType = "" ;
      this.selectValues.selectValueOfUseYn = "" ;
      this.selectValues.StDt = new Date();
      this.selectValues.MinDt = "";
      // this.selectValues.EndDt= new Date().setDate( new Date().setMonth(new Date('2022-12-01').getMonth()+1 )  );  
      this.selectValues.EndDt = new Date("2022-12-31") ; 
      console.log(this.selectValues);
    }
  },
  watch:{
    selectValues(newSelectedValue){
      this.selectValues = newSelectedValue;
      console.log(this.selectValues)
    }
  },
  
  async beforeMount() {
    await this.$connect("application/json", "/info2.json", "get", "")
      .then((res) => {
        console.log("info2", res);
        this.rcvrRowData= res.data.rcvrRowData;
        this.rowData = res.data.NoticeRowData;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  }
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

  
.ntfSearch {
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  height: 100%;
}

.ntfSearch table {
  padding: 10px;
}
.ntfSearch table > tr {
  height: 35px;
}
.ntfSearch table > tr > th {
  margin-left: 10px;
  width: 60px;
  text-align: left;
}
.ntfSearch table > tr > td {
  width: 140px;
}

.ntfSearch .emptyBox1 {
  width: 60px;
}
.ntfSearch .emptyBox2 {
  width: 450px;
}
.ntfSearch .btnBox {
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
  /* white-space : normal; */
  min-width: 300px;
  /* background-color:black; */
}




.ntfDtlInfoTable {
  width: 100%;
  border-collapse: collapse;
}
.ntfDtlInfoTable  tr {
  height: 40px;
}
.ntfDtlInfoTable  th {
  width: 15%;
  border: 1px solid #bdbdbd;
  text-align: left;
  padding-left: 1%;
  background-color: rgb(247, 247, 248);
}
.ntfDtlInfoTable  td {
  width: 28%;
  padding-left: 1%;
  border: 1px solid #bdbdbd;
}

  </style>