<template>
  <article class="batchExeAdmView">
    <div class="item"> <!--1번 -->
      <div class="batchSearch">
        <table>
          <tr>
            <th><label-component :labelNm="'Job Name'" /></th>
            <td>
              <select-box-component
                  style="height: 28px"
                  :selectClass="'select_input4'"
                  :width="200"
                  :cdGroup="'jobNmSel'"
                  :defaultValue="'Job Name 선택'"
                  :isDisabled="true"
                  :selectedValue="jobNm"
                  @input="(value) => {jobNm = value;}"
              />
            </td>
            <td class="emptyBox1"></td>
            <th style="text-align: right"><label-component :labelNm="'작업상태'" /></th>
            <td>
              <select-box-component
                  style="height: 28px"
                  :selectClass="'select_input4'"
                  :width="200"
                  :cdGroup="'wrkSttusSel'"
                  :defaultValue="'작업상태 선택'"
                  :isDisabled="true"
                  :selectedValue="wrkSttus"
                  @input="(value) => {wrkSttus = value;}"
              />
            </td>
            <td class="emptyBox1"></td>
            <th style="text-align: right"><label-component :labelNm="'배치수행기간'" /></th>
            <td>
              <date-picker-component
                  :classWrapper="'calender_input'"
                  :width="'200px'"
                  :height="'28px'"
                  :pPlaceholder="'2022.01.01'"
                  :pDate="btStDate"
                  @input="
              (value) => {
                btStDate = value;
              }
            "
              />
            </td>
            <td style="width: 3px">~</td>
            <td>
              <date-picker-component
                  :classWrapper="'calender_input'"
                  :width="'200px'"
                  :height="'28px'"
                  :pPlaceholder="'2022.01.01'"
                  :pDate="btEnDate"
                  @input="
              (value) => {
                btEnDate = value;
              }
            "
              />
            </td>
            <td class="emptyBox2"></td>
            <td class="btnBox">
              <button-component
                  :btn-class="'btnClass4'"
                  :btnFontWeight="'bold'"
                  :btn-name="'검색'"
                  :btnHeight="'28px'"
                  :btnWidth="'78px'"
                  @click="search"
              />
            </td>
          </tr>

          <tr>
            <th><label-component :labelNm="'작업순서'" /></th>
            <td>
              <input-component
                  style="width: 100%; height: 28px"
                  :type="'search'"
                  :inputClass="'class4'"
                  :width="'200px'"
                  :placeholder="'작업순서 입력'"
                  :value="wrkOdrg"
                  v-model="wrkOdrg"
              />
            </td>
            <td class="emptyBox1"></td>
            <th><label-component :labelNm="'Job Instance Id'" /></th>
            <td>
              <input-component
                  style="width: 100%; height: 28px"
                  :type="'search'"
                  :inputClass="'class4'"
                  :width="'200px'"
                  :placeholder="'Job Instance Id입력'"
                  :value="jobInstId"
                  v-model="jobInstId"
              />
            </td>
            <td class="emptyBox1"></td>
            <th style="text-align: right"><label-component :labelNm="'작업결과'" /></th>
            <td colspan="2">
              <select-box-component
                  style="height: 28px"
                  :selectClass="'select_input4'"
                  :width="210"
                  :cdGroup="'wrkResltSel'"
                  :defaultValue="'작업결과 선택'"
                  :isDisabled="true"
                  :selectedValue="wrkReslt"
                  @input="(value) => {wrkReslt = value;}"
              />
            </td>
            <td colspan="2"></td>
            <td>
              <button-component
                  :btnClass="'btnClass5'"
                  :btnHeight="'28px'"
                  :btnWidth="'78px'"
                  :btnFontWeight="'bold'"
                  :btnName="'초기화'"
                  @click="reset"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="item"> <!--2번 -->
      <div style="width: 100%">
        <subInfoTitle :subInfoTitleNm="'배치실행 이력'"/>
        <p style="margin-left:5px; display:inline-block;">(총 <label style="font-weight: bold">{{ total }}</label>건)</p>

        <span style="float: right">
      <buttonComponent
          :btnClass="'btnClass3'"
          :btnName="'엑셀다운로드'"
          :btnWidth="'auto'"
      />
        </span>
        <span style="float: right">
      <buttonComponent
          :btnClass="'btnClass3'"
          :btnName="'배치실행'"
          :btnWidth="'auto'"
          @click="isModalBtExeShow=true"
      />
        </span>
        <span style="float: right">
      <buttonComponent
          :btnClass="'btnClass3'"
          :btnName="'배치실행 상세정보'"
          :btnWidth="'auto'"
          @click="isModelBtExeInfoShow=true"
      />
        </span>
      </div>
      <div class="ag-grid_sp">
        <ag-grid-component
            :header-color="'rgb(239 245 252)'"
            :rowData="BtExeRowData"
            :columnDefs="BtExeColumnDefs"
            :row-height="40"
            :isWidthFit="true"
            :overlayNoRowsTemplate="
          `<span> <br>` + '<br />조회 결과가 없습니다.' + ` </span>`
          "
        />
      </div>
      <div style="width: 100%">
        <span style="display: flex; float: left; padding-top: 20px;">
    <select-box-component
        :selectClass="'select_input3'"
        :cdGroup="'optionSearchNum'"
        :is-disabled="true"
        :defaultValue="'선택'"
        v-model="SearchNum"
        style="
        width: 120px;
        height: 26px;
        margin-right: 15px;"
        @input="
          (value) => {
            SearchNum = value;
          }
        "
    />
      </span>
        <span style="display: flex; justify-content: center">
          <paging-area
              :pageableData="pageableData1"
          />
        </span>
      </div>
    </div>
    <popup-component
        v-if="isModalBtExeShow"
        @popup="isModalBtExeShow = false"
        @AGREE = "''"
        :popupmsg="'배치를 실행하시겠습니까?'"
    />
    <BtExeInfoPopup
        v-if="isModelBtExeInfoShow"
        :value="this.btExeInfo"
        @close="closeBtInfoModal"
    />

  </article>
</template>

<script>
import ApiMixin from "@/service/common";
import buttonComponent from "@/components/common/ButtonComponent";
import labelComponent from "@/components/common/LabelComponent";
import popupComponent from "@/components/common/PopupComponent";
import selectBoxComponent from "@/components/common/SelectBoxComponent";
import inputComponent from "@/components/common/InputComponent";
import pagingArea from "@/components/common/PagingArea";
import datePickerComponent from "@/components/common/DatePickerComponent";
import agGridComponent from "@/components/common/AgGridComponent";
import subInfoTitle from "@/components/common/SubInfoTitle";
import BtExeInfoPopup from "@/components/common/PopupComponent/BtExeInfoPopup";

export default {
  mixins:[ApiMixin],
  name: "BatchExeAdm",
  components:{
    buttonComponent,
    BtExeInfoPopup,
    labelComponent,
    popupComponent,
    selectBoxComponent,
    inputComponent,
    pagingArea,
    datePickerComponent,
    agGridComponent,
    subInfoTitle
  },
  data(){
    return{
      jobNm :null,                 //직업 이름
      wrkSttus:null,               //작업상태
      btStDate:null,               //배치 시작 시간
      btEnDate:null,               //배치 기간 종료
      wrkOdrg:null,                //작업순서
      jobInstId:null,              //작업 인스턴스 id
      wrkReslt:null,               //작업 결과
      SearchNum:null,                 //건수
      btExeInfo:null,              //배치실행 정보
      isModelBtExeInfoShow:false,  //배치실행상세정보 팝업
      isModalBtExeShow:false,      //배치실행 팝업
      pageableData1: {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 10,
        totalPages: 12,
      },
      BtExeRowData:[
        {model1:"1", model2:"Bill.virthbnkacn.db", model3:"8cbdsw3dw2awdw2ewhgbsasdsga2e", model4:"1296958", model5:"0",
        model6:"1297063", model7:"2022-05-30 11:05:00", model8:"2022-05-30 11:05:02", model9:"STARTED", model10:"UNKNOWN"}
      ],
      BtExeColumnDefs:[
        {
          headerName: "선택",
          field: '',
          checkboxSelection: true,
          showDisabledCheckboxes: true,
          width: 30,
          cellStyle: () =>{    //체크 박스 해제되는 것을 막기 위해 pointer events 수정
            return {'pointer-events' : "none"}
          }
        },
        {headerName:"순서", field :"model1", width:70},
        {headerName:"Job Name", field :"model2", width:180},
        {headerName:"작업키", field :"model3", width:300},
        {headerName:"job Instance id", field :"model4", width:160, cellStyle:{justifyContent: "flex-start"}},
        {headerName:"버전", field :"model5", width:60},
        {headerName:"작업순번", field :"model6", width:120},
        {headerName:"생성일시", field :"model7", width:150},
        {headerName:"종료일시", field :"model8", width:150},
        {headerName:"상태", field :"model9", width:120},
        {headerName:"작업결과", field :"model10", width:110},
        {headerName:"에러메세지", field :"model11", width:130},
      ],
    }
  },
  methods:{
    reset() {
      this.jobNm="";
      this.wrkSttus="";
      let date = new Date();
      date.setMonth(date.getMonth() -1);
      this.btStDate=date;
      this.btEnDate=new Date();
      this.wrkOdrg="";
      this.jobInstId="";
      this.wrkReslt="";
    },
    //배치실행상세정보 팝업 닫기
    closeBtInfoModal(){
      this.isModelBtExeInfoShow = false;
    },
    search() {
      this.$connect('application/json', '/info', 'get', '').then((res) => {
      })
    }
  },
  async beforeMount() {
    await this.$connect('application/json','/info','get','').then((res)=>{

    })
    let date = new Date();
    date.setMonth(date.getMonth() -1);
    this.btStDate=date;
    this.btEnDate=new Date();
  }
}
</script>

<style scoped>
.batchExeAdmView{
  display: grid;
  grid-template-columns: minmax(1580px,1fr);
  grid-template-rows: 100px minmax(640px, 1fr);
  gap: 20px 20px;
}

.batchExeAdmView > .item:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}
.batchExeAdmView > .item:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}
.batchSearch {
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  height: 100%;
}

table {
  padding: 10px;
}
table > tr {
  height: 35px;
}
table > tr > th {
  margin-left: 10px;
  width: auto;
  text-align: left;
}
.emptyBox1 {
  width: 70px;
}
.emptyBox2 {
  width: 100px;
}
.emptyBox3 {
  width: 350px;
}
.btnBox {
  width: 80px;
}

.ag-grid_sp{
  /* margin: 10px; */
  width: 100%;
  height: 600px;
}
</style>