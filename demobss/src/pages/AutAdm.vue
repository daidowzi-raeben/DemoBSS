<template>
  <article class="AutAdmView">
    <div class="item"> <!--1번 -->
      <div class="AutType">
      <span>
        코드구분
      </span>
        <span>
        <select-box-component
            :selectClass="'select_input3'"
            :cdGroup="'codeDiv'"
            :disabled="true"
            :is-disabled="true"
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
            :cdGroup="'useYn'"
            :is-disabled="true"
            :defaultValue="'사용여부 선택'"
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
    <div class="item"> <!--2번 -->
      <div style="width: 100%;" >
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
          @click="autUpdate=true; autReg=false; disabled=true"
      />
        </span>
        <span style="float: right">
      <ButtonComponent
          :btnClass="'btnClass3'"
          :btnName="'등록'"
          :btnWidth="'auto'"
          @click="autReg=true; autUpdate=false; disabled=false"
      />
        </span>
      </div>
      <div class="ag-grid_sp">
        <ag-grid-component
            :header-color="'rgb(239 245 252)'"
            :rowData="RowData"
            :columnDefs="columnDefs"
            :rowClicked="clickedRow"
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
    <div class="item" v-if="autReg===true || autUpdate===true"> <!--3번 -->
      <div style="width: 100%; height: 100%;">
        <div>
          <sub-info-title :subInfoTitleNm="'권한 상세정보'"/>
          <span style="float: right">
        <button-component
            :btnClass="'btnClass4'"
            :btnName="'등록'"
            :btnHeight="'28px'"
            :btnWidth ="'100px'"
            v-if="autReg===true"
            @click="isModalRegShow=true"
        />
            <button-component
                :btnClass="'btnClass4'"
                :btnName="'변경'"
                :btnHeight="'28px'"
                :btnWidth ="'100px'"
                v-if="autUpdate===true"
                @click="isModalUpdateShow=true"
            />
      </span>
        </div>
        <div class="content_area">
          <table>
            <tr>
              <th>권한ID</th>
              <td colspan="3">
                <input-component :input-class="'class5 class5_long1'" :class="autUpdate===true ? 'input_disabled':'input'"  :long-width="'600px'" :disabled="disabled" :value="'ACRND_TYPE_CD' " />
              </td>
            </tr>
            <tr>
              <th>권한명</th>
              <td colspan="3">
                <input-component class="input" :input-class="'class5 class5_long1'" :long-width="'600px'" :value="'코드그룹명 입력' " />
              </td>
            </tr>
            <tr>
              <th>권한유형</th>
              <td>
                <select-box-component
                    :selectClass="'select_input3'"
                    :cdGroup="'codeDiv'"
                    :disabled="true"
                    :is-disabled="true"
                    style="
                    width: 100px;
                    height: 26px;
                    "
                    :select_input3_marginLeft="0"
                    :defaultValue="'조회'"
                    @input=" (value) => { searchDiv = value;}"
                    v-model="searchDiv"
                  />
              </td>
              <th>사용여부</th>
              <td>
                <span style="margin-right: 50px;"><input type="radio" v-model="useAble" value="use">사용</span>
                <span><input type="radio" v-model="useAble"  value="unuse">미사용</span>
              </td>
            </tr>
            <tr>
              <th>등록자/등록일시</th>
              <td colspan="3">
                <span><input-component :class="autUpdate===true ? 'input_disabled':'input'" :input-class="'class5 class5_long1'" :long-width="'150px'" :disabled="disabled" :value="'코드그룹명 입력' " /></span>
                <span >
                <date-picker-component
                    :classWrapper="'calender_input'" :disabled="disabled" :class="autUpdate===true ? 'input_disabled':'input'"
                /></span>
              </td>
            </tr>
            <tr>
              <th>수정자/수정일시</th>
              <td colspan="3">
                <span><input-component :class="autUpdate===true ? 'input_disabled':'input'" :input-class="'class5 class5_long1'" :long-width="'150px'"  :disabled="disabled" :value="'코드그룹명 입력' " /></span>
                <span><date-picker-component
                    :classWrapper="'calender_input'" :disabled="disabled" :class="autUpdate===true ? 'input_disabled':'input'"
                /></span>
              </td>

            </tr>
          </table>
        </div>
      </div>
    </div>
    <popup-component
        v-if="isModalUpdateShow"
        @popup="isModalUpdateShow = false"
        @AGREE = "''"
        :popupmsg="'변경하시겠습니까?'"
    />
    <popup-component
        v-if="isModalRegShow"
        @popup="isModalRegShow = false"
        @AGREE = "''"
        :popupmsg="'등록하시겠습니까?'"
    />

  </article>
</template>

<script>
import pagingArea from "@/components/common/PagingArea";
import selectBoxComponent from "@/components/common/SelectBoxComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
import AgGridComponent from "@/components/common/AgGridComponent";
import InputComponent from "@/components/common/InputComponent";
import SubInfoTitle from "@/components/common/SubInfoTitle";
import DatePickerComponent from "@/components/common/DatePickerComponent";
import PopupComponent from "@/components/common/PopupComponent.vue";
import ApiMixin from "@/service/common";
export default {
  mixins:[ApiMixin],
  name: "AutAdm",
  components: {
    DatePickerComponent,
    PopupComponent,
    pagingArea,
    selectBoxComponent,
    ButtonComponent,
    AgGridComponent,
    SubInfoTitle,
    InputComponent
  },
  data(){
    return{
      RowData:[],
      isModalRegShow:false, //등록 팝업
      isModalUpdateShow:false, //변경 팝업
      useAble:null, //사용여부관련 라디오 변수
      autUpdate:false, //권한상세정보 변경관련 변수
      autReg:false,  //권한상세정보 등록관련 변수
      disabled:false, //각 상세정보 input disabled 처리 변수
      columnDefs: [
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
        { headerName: "권한ID", field: "model1", width : 130},
        { headerName: "권한명", field: "model2", width : 110, cellStyle:{justifyContent: "flex-start"}  },
        { headerName: "권한유형", field: "model3", width : 70 },
        { headerName: "사용여부", field: "model4", width : 70, },
        { headerName: "메뉴", field: "model5", width : 70,},
        { headerName: "조직", field: "model6", width : 70,},
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
      this.RowData = res.data.autRowData;
    })
    console.log(this.rowData);
  },
}
</script>

<style scoped>
.AutAdmView{
  display: grid;
  grid-template-columns: 790px minmax(790px,1fr);
  grid-template-rows: 50px minmax(600px, 1fr);
  gap: 20px 20px;
}

.AutAdmView > .item:nth-child(1) {
  grid-column: 1/3;
  grid-row: 1;
}
.AutAdmView > .item:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}
.AutAdmView > .item:nth-child(3) {
  grid-column: 2;
  grid-row: 2;
}
.AutType{
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  display: flex;
  align-items: center;
  height: 50px;
}
.AutType > span:nth-child(1){
  min-width: 59px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12pt;
}
.AutType > span:nth-child(2){
  width: 200px;
  height: 28px;
  margin-right: 5px;
}
.AutType > span:nth-child(3){
  width: 200px;
  height: 28px;
  margin-left: 10px;
}
.AutType > span:nth-child(4){
  margin-left: 300px;
  min-width: 59px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12pt;
}
.AutType > span:nth-child(5){
  width: 200px;
  height: 28px;
  margin-right: 300px;

}
.AutType > span:nth-child(6){
  margin-left: 10px;
}
.AutType > span:nth-child(7){
  margin-left: 10px;
}

table, tr {
  border: 1px solid rgb(232, 238,246);
  border-collapse: collapse;
  width: 100%;
}

table > tr{
  height: 38px;
}
table > tr > th{
  width: 100px;
  text-align: left;
  border-left: 1px solid rgb(232, 238,246);
  background-color:  rgb(239, 245, 252);
  padding-left: 1%;
}
table > tr > td{
  width: 205px;
  /* text-align:right; */
  padding-left: 8px;
}
table > tr > td > span{
  display: inline-block;
}
.input {
  background-color: white;
}
.input_disabled{
  background-color: rgb(239, 245, 252);
}




.ag-grid_sp{
  /* margin: 10px; */
  width: 100%;
  height: 600px;
}
.content_area{
  width: 100%;
  height: 250px;
}
</style>