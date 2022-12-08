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
            :cdGroup="cdGroup"
            :defaultValue="'코드구분선택'"
            @input=" (value) => { searchDiv = value;}"
            v-model="searchDiv"
        />
      </span>
        <span>
        <input-component
            :type="'search'"
            :inputClass="'class4'"
            :placeholder="'검색어 입력'"
            @input=" (value) => { searchValue = value;}"
            v-model="searchValue"
            style="width:100%; height:100%"
        />
      </span>
        <span>
          사용여부
        </span>
        <span>
        <select-box-component
            :selectClass="'select_input3'"
            :cdGroup="cdGroup"
            :defaultValue="'코드구분선택'"
            @input=" (value) => { searchDiv = value;}"
            v-model="searchDiv"
        />
      </span>
        <span>
        <button-component
            :btn-class="'btnClass4'"
            :btnFontWeight="'bold'"
            :btn-name ="'초기화'"
            :btnHeight="'28px'"
            :btnWidth ="'100px'"
        />
      </span>
        <span>
        <button-component
            :btn-class="'btnClass4'"
            :btnFontWeight="'bold'"
            :btn-name ="'검색'"
            :btnHeight="'28px'"
            :btnWidth ="'100px'"
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
      />
        </span>
        <span style="float: right">
      <ButtonComponent
          :btnClass="'btnClass3'"
          :btnName="'신규등록'"
          :btnWidth="'auto'"
      />
        </span>
        <span style="float: right">
      <ButtonComponent
          :btnClass="'btnClass3'"
          :btnName="'코드서버즉시적용'"
          :btnWidth="'auto'"
      />
        </span>
      </div>
      <div class="ag-grid_sp">
        <ag-grid-component
            :header-color="'rgb(239 245 252)'"
            :rowData="this.rowData"
            :columnDefs="columnDefs"
            :isWidthFit="false"
        />
      </div>
      <div style="width: 100%">
        <span style="display: flex; float: left; padding-top: 20px;">
    <select-box-component
        :selectClass="'select_input3'"
        :cdGroup="cdGroup"
        :defaultValue="'선택'"
        v-model="month"
        style="
        width: 120px;
        height: 26px;
        margin-right: 15px;"
        @input="
          (value) => {
            month = value;
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
      />
        </span>
        <span style="float: right">
      <ButtonComponent
          :btnClass="'btnClass3'"
          :btnName="'신규등록'"
          :btnWidth="'auto'"
      />
        </span>
      </div>
      <div class="ag-grid_sp">
        <ag-grid-component
            :header-color="'rgb(239 245 252)'"
            :rowData="this.rowData"
            :columnDefs="columnDefs"
            :isWidthFit="false"
        />
      </div>
    </div>

  </article>
</template>

<script>
import pagingArea from "@/components/common/PagingArea";
import selectBoxComponent from "@/components/common/SelectBoxComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
import AgGridComponent from "@/components/common/AgGridComponent";
import InputComponent from "@/components/common/InputComponent";
import SubInfoTitle from "@/components/common/SubInfoTitle";
import ApiMixin from "@/service/common";
export default {
  mixins:[ApiMixin],
  name: "ComCdAdm",
  components: {
    pagingArea,
    selectBoxComponent,
    ButtonComponent,
    AgGridComponent,
    SubInfoTitle,
    InputComponent
  },
  data(){
    return{
      rowData: [],
      cdGroup:null,
      columnDefs: [
        {
          headerName: "선택",
          field: "model0",
          headerClass: "ag-header-first-child",
          width : 30
        },
        { headerName: "순번", field: "model1", width : 30 },
        { headerName: "코드그룹ID", field: "model2", width : 70 },
        { headerName: "상위코드그룹ID", field: "model3", width : 70 },
        { headerName: "코드그룹명", field: "model4", width : 100 },
        { headerName: "코드그룹영문명", field: "model5", width : 100 },
        { headerName: "코드그룹설명내용", field: "model6", width : 150 },
        { headerName: "코드길이값", field: "model7", width : 50 },
        { headerName: "사용여부", field: "model8", width : 50 },
        { headerName: "유효시작일자", field: "StartDate", width : 60 },
        { headerName: "유효종료일자", field: "EndDate", width : 60 },
      ],
      columnDefs1: [
        {
          headerName: "선택",
          field: "model0",
          headerClass: "ag-header-first-child",
          width : 30
        },
        { headerName: "순번", field: "model1", width : 30 },
        { headerName: "코드ID", field: "model2", width : 70 },
        { headerName: "상위코드ID", field: "model3", width : 70 },
        { headerName: "표준코드ID", field: "model4", width : 70 },
        { headerName: "코드명", field: "model5", width : 70 },
        { headerName: "코드설명내용", field: "model6", width : 200 },
        { headerName: "코드출력순서", field: "model7", width : 50 },
        { headerName: "사용여부", field: "model8", width : 50 },
        { headerName: "유효시작일자", field: "StartDate", width : 60 },
        { headerName: "유효종료일자", field: "EndDate", width : 60 },
      ],
      pageableData1: {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 10,
        totalPages: 12,
      },
    }
  },
  async beforeMount() {
    // this.gridOptions = {
    //   pinnedBottomRowData: [{ model0: "합계", model1: null, model4: 0 }],
    // };
    await this.$connect('application/json','/info.json','get','').then((res)=>{
      this.rowData = res.data.rowData;
    })
    console.log(this.rowData);
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
  height: 250px;
  border-top: 3px solid rgb(27,114,212);
}
</style>