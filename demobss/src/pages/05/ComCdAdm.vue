<template>
  <article class="ComCdAdmView">
    <div class="item">  <!--1번 영역 -->
      <div class="codeSearch">
      <span>
        코드구분
      </span>
        <span>
        <select-box-component
            :selectClass="'select_input3'"
            :cdGroup="'codeDiv'"
            :is-disabled="true"
            :disabled="true"
            :defaultValue="'코드구분선택'"
            :selected-value="selectValues.cdDivSel"
            @input=" (value) => { selectValues.cdDivSel = value;}"
        />
      </span>
        <span>
        <input-component
            :type="'search'"
            :inputClass="'class4'"
            :placeholder="'검색어 입력'"
            :value="selectValues.searchValue"
            v-model="selectValues.searchValue"
            style="width:100%; height:100%"
        />
      </span>
        <span>
          사용여부
        </span>
        <span>
        <select-box-component
            :selectClass="'select_input3'"
            :cdGroup="'useYn'"
            :is-disabled="true"
            :defaultValue="'사용여부 선택'"
            @input=" (value) => { selectValues.useYn = value;}"
            :selected-value="selectValues.useYn"
        />

      </span>
        <span>
        <button-component
            :btn-class="'btnClass4'"
            :btnFontWeight="'bold'"
            :btn-name ="'초기화'"
            :btnHeight="'28px'"
            :btnWidth ="'100px'"
            @click="resetSearch"
        />
      </span>
        <span>
        <button-component
            :btn-class="'btnClass4'"
            :btnFontWeight="'bold'"
            :btn-name ="'검색'"
            :btnHeight="'28px'"
            :btnWidth ="'100px'"
            @click="cdGpSearch"
        />
      </span>
      </div>
    </div>

    <div class="item">  <!--2번 영역 -->
      <div style="width: 100%">
        <SubInfoTitle :subInfoTitleNm="'코드그룹 리스트'"/>
        <p style="margin-left:5px; display:inline-block;">(총 <label style="font-weight: bold">{{ total }}</label>건)</p>

        <span style="float: right">
      <ButtonComponent
          :btnClass="'btnClass3'"
          :btnName="'엑셀다운로드'"
          :btnWidth="'auto'"
      />
        </span>
        <span style="float: right">
      <ButtonComponent
          :btnClass="'btnClass3'"
          :btnName="'변경'"
          :btnWidth="'auto'"
          @click="cdGpChg"
      />
        </span>
        <span style="float: right">
      <ButtonComponent
          :btnClass="'btnClass3'"
          :btnName="'신규등록'"
          :btnWidth="'auto'"
          @click="isCdGpModalShow=true; cdGpType=1;"
      />
        </span>
        <span style="float: right">
      <ButtonComponent
          :btnClass="'btnClass3'"
          :btnName="'코드서버즉시적용'"
          :btnWidth="'auto'"
          @click="isModalCdShow=true;"
      />
        </span>
      </div>
      <div class="ag-grid_sp">
        <ag-grid-component
            :header-color="'rgb(239 245 252)'"
            :rowData="this.cdGpRowData"
            :columnDefs="columnDefs"
            :row-height="40"
            :rowClicked="cdGpclickedRow"
            :isWidthFit="false"
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

    <div class="item">  <!--3번 영역 -->
      <div style="width: 100%">
        <SubInfoTitle :subInfoTitleNm="'코드 리스트'"/>
        <p style="margin-left:5px; display:inline-block;">(총 <label style="font-weight: bold">{{ total }}</label>건)</p>

        <span style="float: right">
      <ButtonComponent
          :btnClass="'btnClass3'"
          :btnName="'엑셀다운로드'"
          :btnWidth="'auto'"
      />
        </span>
        <span style="float: right">
      <ButtonComponent
          :btnClass="'btnClass3'"
          :btnName="'변경'"
          :btnWidth="'auto'"
          @click="cdLstChg"
      />
        </span>
        <span style="float: right">
      <ButtonComponent
          :btnClass="'btnClass3'"
          :btnName="'신규등록'"
          :btnWidth="'auto'"
          @click="isCdLstModalShow=true; cdLstType=1;"
      />
        </span>
      </div>
      <div class="ag-grid_sp2">
        <ag-grid-component
            :header-color="'rgb(239 245 252)'"
            :rowData="this.cdLstRowData"
            :columnDefs="columnDefs1"
            :rowClicked="cdLstclickedRow"
            :row-height="40"
            :isWidthFit="false"
            :overlayNoRowsTemplate="
          `<span> <br>` + '<br />조회 결과가 없습니다.' + ` </span>`
          "
        />
      </div>
    </div>
    <!-- 팝업 영역 -->
    <!--코드그룹리스트 팝업 -->
    <CodeGpPopup
        v-if="isCdGpModalShow"
        :type="cdGpType"
        :value="this.cdGpData"
        @close="closeCdGpModal"
      />
    <!--코드리스트 팝업 -->
    <CdLstPopup
        v-if="isCdLstModalShow"
        :type="cdLstType"
        :value="this.cdLstData"
        @close="closeCdLstModal"
    />
    <!--코드서버즉시 팝업 -->
    <popup-component
        v-if="isModalCdShow"
        @popup="isModalCdShow = false"
        @AGREE = "''"
        :popupmsg="'코드정보를 서버에 즉시 반영하시겠습니까?'"
    />
  </article>
</template>

<script>
import pagingArea from "@/components/common/PagingArea";
import popupComponent from "@/components/common/PopupComponent";
import selectBoxComponent from "@/components/common/SelectBoxComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
import AgGridComponent from "@/components/common/AgGridComponent";
import InputComponent from "@/components/common/InputComponent";
import SubInfoTitle from "@/components/common/SubInfoTitle";
import ApiMixin from "@/service/common";
import CodeGpPopup from "@/components/common/PopupComponent/CdGpLstPopup";
import CdLstPopup from "@/components/common/PopupComponent/CdLstPopup";
export default {
  mixins:[ApiMixin],
  name: "ComCdAdm",
  components: {
    CdLstPopup,
    popupComponent,
    CodeGpPopup,
    pagingArea,
    selectBoxComponent,
    ButtonComponent,
    AgGridComponent,
    SubInfoTitle,
    InputComponent,
  },
  data(){
    return{
      cdGroup:null,
      isModalCdShow : false,    //코드서버즉시 팝업
      isCdGpModalShow : false,  //코드그룹 리스트 등록/변경 팝업

      selectValues: {         //코드구분 검색 탭
        cdDivSel:"",            //코드구분 select box
        searchValue:"",         //검색 값
        useYn:"",               //사용여부 select box
      },

      SearchNum:null,         //검색 건수
      isCdLstModalShow : false, // 코드리스트 등록/변경 팝업
      cdGpType : null,
      cdLstType : null,
      cdGpData:null,        //코드그룹리스트 클릭한 데이터
      cdLstData:null,       //코드리스트 클릭한 데이터
      cdLstRowData:[],      //코드리스트 데이터
      cdGpRowData :[],     //코드그룹 데이터
      columnDefs: [
        {
          headerName: "선택",
          field: '',
          checkboxSelection: true,
          showDisabledCheckboxes: true,
          width: 70,
          cellStyle: () =>{    //체크 박스 해제되는 것을 막기 위해 pointer events 수정
              return {'pointer-events' : "none"}
          }
        },
        { headerName: "순번", field: "model1", width : 100},
        { headerName: "코드그룹ID", field: "model2", width : 160 },
        { headerName: "상위코드그룹ID", field: "model3", width : 160 },
        { headerName: "코드그룹명", field: "model4", width : 200, cellStyle:{justifyContent: "flex-start"} },
        { headerName: "코드그룹영문명", field: "model5", width : 170, cellStyle:{justifyContent: "flex-start"} },
        { headerName: "코드그룹설명내용", field: "model6", width : 270, cellStyle:{justifyContent: "flex-start"} },
        { headerName: "코드길이값", field: "model7", width : 110 },
        { headerName: "사용여부", field: "model8", width : 110 },
        { headerName: "유효시작일자", field: "StartDate", width : 125 },
        { headerName: "유효종료일자", field: "EndDate", width : 125 },
      ],
      columnDefs1: [
        {
          headerName: "선택",
          field: "model0",
          headerClass: "ag-header-first-child",
          width : 70,
          checkboxSelection: true,
          showDisabledCheckboxes: true,
          cellRenderer : 'AgGridRadioComp',
          cellStyle: () =>{    //체크 박스 해제되는 것을 막기 위해 pointer events 수정
            return {'pointer-events' : "none"}
          }
        },
        { headerName: "순번", field: "model1", width : 100 },
        { headerName: "코드ID", field: "model2", width : 160 },
        { headerName: "상위코드ID", field: "model3", width : 160 },
        { headerName: "표준코드ID", field: "model4", width : 160 },
        { headerName: "코드명", field: "model5", width : 160, cellStyle:{justifyContent: "flex-start"} },
        { headerName: "코드설명내용", field: "model6", width : 320, cellStyle:{justifyContent: "flex-start"} },
        { headerName: "코드출력순서", field: "model7", width : 120 },
        { headerName: "사용여부", field: "model8", width : 100 },
        { headerName: "유효시작일자", field: "StartDate", width : 125 },
        { headerName: "유효종료일자", field: "EndDate", width : 125 },
      ],
      pageableData1: {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 10,
        totalPages: 12,
      },
    }
  },
  async beforeMount(){
    await this.$connect('application/json','/info','get','').then((res)=>{
      console.log(res.data.cdGpRowData);
      this.cdGpRowData = res.data.cdGpRowData;
    })
  },
  watch:{
    searchValue(newValue){
      this.selectValues.searchValue = newValue;
    }
  },
  methods:{
    cdGpChg(){  //코드그룹변경
      if(this.cdGpData!=null){
        this.isCdGpModalShow=true;
        this.cdGpType=2;
      }
      else{
        this.isCdGpModalShow=false;
      }
    },
    cdLstChg(){
      if(this.cdLstData!=null){
        this.isCdLstModalShow = true;
        this.cdLstType=2;
      }
      else{
        this.isCdLstModalShow = false;
      }
    },
    //코드 그룹 팝업 닫기
    closeCdGpModal(){
      this.isCdGpModalShow = false;
      this.cdGpType = null;
    },
    //코드리스트 팝업 닫기
    closeCdLstModal(){
      this.isCdLstModalShow = false;
      this.cdLstType = null;
    },
    cdGpclickedRow(params){     //코드그룹 AG GRID 클릭함수
      this.cdGpData = params.data;
      this.$connect('application/json','/info','get','').then((res)=>{
        this.cdLstRowData = res.data.cdLstRowData;
      })
    },
    cdLstclickedRow(params){    ////코드리스트 AG GRID 클릭함수
      this.cdLstData = params.data;
    },
    cdGpSearch(){     //검색 함수
      this.$connect('application/json','/info','get','').then((res)=>{
        this.cdGpRowData = res.data.cdGpRowData;
      })
    },
    resetSearch(){    //리셋함수
      this.selectValues.cdDivSel="";
      this.selectValues.searchValue=null;
      this.selectValues.useYn="";
    }
  },

}
</script>

<style scoped>

.ComCdAdmView {
  display: grid;
  grid-template-columns: minmax(1600px,1fr);
  grid-template-rows: 50px 350px minmax(140px, 1fr);
  gap: 20px 0px;
}

.ComCdAdmView > .item:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}

.ComCdAdmView > .item:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}

.ComCdAdmView > .item:nth-child(3) {
  grid-column: 1;
  grid-row: 3;
}



.codeSearch{
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  display: flex;
  align-items: center;
  height: 50px;
}
.codeSearch > span:nth-child(1){
  min-width: 59px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12pt;
}
.codeSearch > span:nth-child(2){
  width: 200px;
  height: 28px;
  margin-right: 5px;
}
.codeSearch > span:nth-child(3){
  width: 200px;
  height: 28px;
  margin-left: 10px;
}
.codeSearch > span:nth-child(4){
  margin-left: 300px;
  min-width: 59px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12pt;
}
.codeSearch > span:nth-child(5){
  width: 200px;
  height: 28px;
  margin-right: 300px;

}
.codeSearch > span:nth-child(6){
  margin-left: 10px;
}
.codeSearch > span:nth-child(7){
  margin-left: 10px;
}


.ag-grid_sp{
  /* margin: 10px; */
  width: 100%;
  height: 246px;
}

.ag-grid_sp2{
  /* margin: 10px; */
  width: 100%;
  height: 335px;
}
</style>