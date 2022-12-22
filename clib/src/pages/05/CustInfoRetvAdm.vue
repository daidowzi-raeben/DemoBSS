<template>
  <article class="CustInfoRetvAdmView">
    <div class="item"> <!--1번 -->
      <div class="userSearch">
        <table>
          <tr>
            <th><label-component :labelNm="'조회기준'" /></th>
            <td>
              <select-box-component
                  style="height: 28px"
                   
                  :width="'200px'"
                  :cdGroup="'securRetv'"
                  :defaultValue="'조회기준 선택'"
                  :isDisabled="true"
                  :selectedValue="selectValues.securRetv"
                  @emitValue="(value) => {selectValues.securRetv = value;}"
              />
            </td>
            <td>
              <input-component
                  style="width: 100%; height: 28px"
                  :type="'search'"
                  :inputClass="'class4'"
                  :placeholder="'검색어 입력'"
                  :width="'140px'"
                  :value="selectValues.searchValues"
                  v-model="selectValues.searchValues"
              />
            </td>
            <td colspan="3"></td>

            <th><label-component :labelNm="'조회기간'" /></th>
            <td>
              <date-picker-component
                  :classWrapper="'calender_input'"
                  :width="'200px'"
                  :height="'28px'"
                  :pPlaceholder="'2022.01.01'"
                  :pDate="selectValues.retvStDt"
                  @emitValue="
              (value) => {
                selectValues.retvStDt = value;
              }
            "
              />
            </td>
            <td>~</td>
            <td>
              <date-picker-component
                  :classWrapper="'calender_input'"
                  :width="'200px'"
                  :height="'28px'"
                  :pPlaceholder="'2022.01.01'"
                  :pDate="selectValues.retvEndDt"
                  @emitValue="
              (value) => {
                selectValues.retvEndDt = value;
              }
            "
              />
            </td>
            <td class="emptyBox1"></td>
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
            <th><label-component :labelNm="'사용자'" /></th>
            <td>
              <select-box-component
                  style="height: 28px"
                   
                  :width="'200px'"
                  :cdGroup="'orgSelect'"
                  :defaultValue="'조직 선택'"
                  :isDisabled="true"
                  :selectedValue="selectValues.orgSel"
                  @emitValue="(value) => {selectValues.orgSel = value;}"
              />
            </td>
            <td>
              <select-box-component
                  style="height: 28px"
                   
                  :width="'200px'"
                  :cdGroup="'orgSelect'"
                  :defaultValue="'조직 선택'"
                  :isDisabled="true"
                  :selectedValue="selectValues.orgSel"
                  @emitValue="(value) => {selectValues.orgSel = value;}"
              />
            </td>
            <td>
              <select-box-component
                  style="height: 28px"
                   
                  :width="'200px'"
                  :cdGroup="'orgSelect'"
                  :defaultValue="'조직 선택'"
                  :isDisabled="true"
                  :selectedValue="selectValues.orgSel"
                  @emitValue="(value) => {selectValues.orgSel = value;}"
              />
            </td>
            <td>
              <input-component
                  style="width: 100%; height: 28px"
                  :type="'search'"
                  :inputClass="'class4'"
                  :width="'200px'"
                  :placeholder="'사원명 입력'"
                  :value="selectValues.empNm"
                  v-model="selectValues.empNm"
              />
            </td>
            <td colspan="6"></td>

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
        <subInfoTitle :subInfoTitleNm="'고객정보 조회 이력'"/>
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
          :btnName="'숨김해제'"
          :btnWidth="'auto'"
          @click="isModalHideShow=true"
      />
        </span>
      </div>
      <div class="ag-grid_sp">
        <ag-grid-component
            :header-color="'rgb(239 245 252)'"
            :rowData="CustRetvRowData"
            :columnDefs="CustRetvColumnDefs"
            :row-height="40"
            
            :overlayNoRowsTemplate="
          `<span> <br>` + '<br />조회 결과가 없습니다.' + ` </span>`
          "
        />
      </div>
      <div style="width: 100%">
        <span style="display: flex; float: left; padding-top: 20px;">
    <select-box-component
        :selectClass="'select-type1'"
        :cdGroup="'optionSearchNum'"
        :is-disabled="true"
        :defaultValue="'선택'"
        v-model="SearchNum"
        style="
        width: 120px;
        height: 26px;
        margin-right: 15px;"
        @emitValue="
          (value) => {
            SearchNum = value;
          }
        "
    />
      </span>
        <span style="display: flex; justify-content: center">
          <paging-component
              :pageableData="pageableData1"
          />
        </span>
      </div>
    </div>
    <popup-component
        v-if="isModalHideShow"
        @popup="isModalHideShow = false"
        @AGREE = "''"
        :popupmsg="'숨김해제하시겠습니까?'"
    />
  </article>
</template>

<script>
import buttonComponent from "@/components/common/ButtonComponent";
import selectBoxComponent from "@/components/common/SelectBoxComponent";
import inputComponent from "@/components/common/InputComponent";
import datePickerComponent from "@/components/common/DatePickerComponent";
import agGridComponent from "@/components/common/AgGridComponent";
import subInfoTitle from "@/components/common/SubInfoTitle";
import pagingComponent from "@/components/common/PagingComponent";
import labelComponent from "@/components/common/LabelComponent";
import popupComponent from "@/components/common/PopupComponent";
import ApiMixin from "@/service/common";
export default {
  mixins:[ApiMixin],
  name: "CustInfoRetvAdm",
  components:{
    buttonComponent,
    labelComponent,
    popupComponent,
    selectBoxComponent,
    inputComponent,
    pagingComponent,
    datePickerComponent,
    agGridComponent,
    subInfoTitle
  },
  data(){
    return{
      selectValues: {     //고객 정보 조회 탭
        securRetv: null,        //조회 기준
        searchValues: null,     //검색어
        retvStDt: null,       //조회 기간 시작
        retvEndDt: null,       //조회 기간 끝
        empNm: null,            //사원명
        orgSel: null,     //조직 선택
      },
      isModalHideShow:false, //숨김해제 팝업
      SearchNum:null,        //검색 건수
      pageableData1: {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 10,
        totalPages: 12,
      },
      CustRetvRowData:[],
      CustRetvColumnDefs:[
        {headerName:"순서", field :"model1", width:40},
        {headerName:"고객ID", field :"model2", width:120},
        {headerName:"청구계정ID", field :"model3", width:120},
        {headerName:"고객명", field :"model4", width:90},
        {headerName:"서비스계약ID", field :"model5", width:120},
        {headerName:"유형", field :"model6", width:90},
        {headerName:"메뉴ID", field :"model7", width:90},
        {headerName:"메뉴명", field :"model8", width:110},
        {headerName:"URL", field :"model9", width:120},
        {headerName:"화면명", field :"model10", width:110},
        {headerName:"사용자ID", field :"model11", width:110},
        {headerName:"사용자명", field :"model12", width:90},
        {headerName:"사용자IP", field :"model13", width:110},
        {headerName:"파일명/데이터개수", field :"model14", width:150, cellStyle: {justifyContent: "flex-start"}},
        {headerName:"작업일시", field :"model15", width:90, cellStyle: {'white-space': 'normal'}, autoHeight: true},
      ],
    }
  },
  methods:{
    reset(){
      this.selectValues.securRetv = "";
      this.selectValues.searchValues = "";
      let date = new Date();
      date.setMonth(date.getMonth() -1);
      this.selectValues.retvStDt = date;       //조회 기간 시작
      this.selectValues.retvEndDt = new Date();       //조회 기간 끝
      this.selectValues.orgSel = "";
      this.selectValues.empNm ="";
    },
    search(){
      this.$connect('application/json','/info','get','').then((res)=>{
        this.CustRetvRowData = res.data.securRowData;
      })
    }
  },
  async beforeMount() {
    await this.$connect('application/json','/info','get','').then((res)=>{
      this.CustRetvRowData = res.data.securRowData;
    })
    let date = new Date();
    date.setMonth(date.getMonth() -1);
    this.selectValues.retvStDt = date;       //조회 기간 시작
    this.selectValues.retvEndDt = new Date();       //조회 기간 끝
  }
}
</script>

<style scoped>
.CustInfoRetvAdmView{
  display: grid;
  grid-template-columns: minmax(1580px,1fr);
  grid-template-rows: 100px minmax(640px, 1fr);
  gap: 20px 20px;
}

.CustInfoRetvAdmView > .item:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}
.CustInfoRetvAdmView > .item:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}
.userSearch {
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
  width: 60px;
  text-align: left;
}

.emptyBox1 {
  width: 100px;
}
.emptyBox2 {
  width: 450px;
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