<template>
  <article class="BatchSclgAdmView">
    <div class="item"> <!--1번 -->
      <div class="BatchServer">
        <span>
        배치서버
      </span>
        <span>
        <select-box-component
            :selectClass="'select-type1'"
            :cdGroup="'batchServer'"
            :is-disabled="true"
            :defaultValue="'배치서버 선택'"
            :selected-value="selectValues.batchSrvrSel"
            @emitValue=" (value) => { selectValues.batchSrvrSel = value;}"
        />
      </span>
        <span>
          사용여부
        </span>
        <span>
        <select-box-component
            :selectClass="'select-type1'"
            :cdGroup="'useYn'"
            :is-disabled="true"
            :defaultValue="'사용여부 선택'"
            @emitValue=" (value) => { selectValues.useYnSel = value;}"
            :selected-value="selectValues.useYnSel"
        />
      </span>
        <span>
        <button-component
            :btn-class="'btn-type4'"
            :btnFontWeight="'bold'"
            :btn-name ="'초기화'"
            :btnHeight="'28px'"
            :btnWidth ="'100px'"
            @click="resetRetvCond"
        />
      </span>
        <span>
        <button-component
            :btn-class="'btn-type4'"
            :btnFontWeight="'bold'"
            :btn-name ="'검색'"
            :btnHeight="'28px'"
            :btnWidth ="'100px'"
            @click="searchRetvCond"
        />
      </span>
      </div>
    </div>
    <div class="item"> <!--2번 -->
      <div style="width: 100%;" >
        <subInfoTitle :subInfoTitleNm="'배치스케줄링 리스트'"/>
        <p style="margin-left:5px; display:inline-block;">(총 <label style="font-weight: bold">{{ total }}</label>건)</p>

        <span style="float: right">
      <buttonComponent
          :btnClass="'btn-type3'"
          :btnName="'엑셀다운로드'"
          :btnWidth="'auto'"
      />
        </span>
        <span style="float: right">
      <buttonComponent
          :btnClass="'btn-type3'"
          :btnName="'변경'"
          :btnWidth="'auto'"
          @click="batchChg"
      />
        </span>
        <span style="float: right">
      <buttonComponent
          :btnClass="'btn-type3'"
          :btnName="'등록'"
          :btnWidth="'auto'"
          @click="batchReg"
      />
        </span>
      </div>
      <div class="ag-grid_sp">
        <ag-grid-component
            :header-color="'rgb(239 245 252)'"
            :rowData="batchSclgRowData"
            :columnDefs="batchSclgColumnDefs"
            :row-height="40"
            :rowClicked="clickedRow"
            :is-auto-size="'Type2'"
            
            
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
    <div class="item"> <!--3번 -->
      <div style="width: 100%; height: 100%;">
        <div>
          <sub-info-title :subInfoTitleNm="'배치 상세정보'"/>
          <span style="float: right">
        <button-component
            :btnClass="'btn-type4'"
            :btnName="'등록'"
            :btnHeight="'28px'"
            :btnWidth ="'100px'"
            v-if="batchRegConf===true || batchChgConf===false"
            @click="isModalRegShow=true"
        />
            <button-component
                :btnClass="'btn-type4'"
                :btnName="'변경'"
                :btnHeight="'28px'"
                :btnWidth ="'100px'"
                v-if="batchChgConf===true"
                @click="isModalUpdateShow=true"
            />
      </span>
        </div>
        <div class="content_area">
          <table>
            <tr>
              <th>스케줄링ID</th>
              <td >
                <input-component :input-class="'input-type5 '" :class="batchChgConf===true ? 'input_disabled':'input'"
                                 :width="'600px'" :disabled="disabled" v-model="this.batchSclgAdmObject.sclgId" :value="this.batchSclgAdmObject.sclgId" />
              </td>
            </tr>
            <tr>
              <th>배치서버</th>
              <td>
                <input-component class="input" :input-class="'input-type5 '" :width="'600px'" v-model="this.batchSclgAdmObject.batchSrvr"
                                 :value="this.batchSclgAdmObject.batchSrvr" />
              </td>
            </tr>
            <tr>
              <th>스케줄링 그룹</th>
              <td>
                <input-component class="input" :input-class="'input-type5 '" :width="'600px'" v-model="this.batchSclgAdmObject.sclgGp"
                                 :value="this.batchSclgAdmObject.sclgGp" />
              </td>
            </tr>
            <tr>
              <th>파라미터(JSON)</th>
              <td>
                <text-area-component
                    :contents="this.batchSclgAdmObject.param"
                    v-model="this.batchSclgAdmObject.param"
                />
              </td>
            </tr>
            <tr>
              <th>실행주기(크론식)</th>
              <td>
                <input-component class="input" :input-class="'input-type5 '" :width="'600px'" v-model="this.batchSclgAdmObject.exeCycl"
                                 :value="this.batchSclgAdmObject.exeCycl" />
              </td>
            </tr>
            <tr>
              <th>사용여부</th>
              <td>
                <span style="margin-right: 50px;"><input type="radio" v-model="this.batchSclgAdmObject.useYn" value="use">사용</span>
                <span><input type="radio" v-model="this.batchSclgAdmObject.useYn"  value="unuse">미사용</span>
              </td>
            </tr>
            <tr>
            <th>적용여부</th>
            <td>
              <span style="margin-right: 50px;"><input type="radio" v-model="this.batchSclgAdmObject.aplyYn" value="aply">적용</span>
              <span><input type="radio" v-model="this.batchSclgAdmObject.aplyYn"  value="unaply">미적용</span>
            </td>
            </tr>
            <tr>
              <th>설명</th>
              <td>
                <text-area-component
                    :contents="this.batchSclgAdmObject.desc"
                    v-model="this.batchSclgAdmObject.desc"
                />
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
import pagingComponent from "@/components/common/PagingComponent";
import selectBoxComponent from "@/components/common/SelectBoxComponent";
import buttonComponent from "@/components/common/ButtonComponent";
import agGridComponent from "@/components/common/AgGridComponent";
import inputComponent from "@/components/common/InputComponent";
import subInfoTitle from "@/components/common/SubInfoTitle";
import textAreaComponent from "@/components/common/TextAreaComponent";
import popupComponent from "@/components/common/PopupComponent";
import ApiMixin from "@/service/common";
export default {
  mixins:[ApiMixin],
  name: "BatchSclgAdm",
  components:{
    pagingComponent,
    textAreaComponent,
    popupComponent,
    selectBoxComponent,
    buttonComponent,
    agGridComponent,
    inputComponent,
    subInfoTitle
  },
  data(){
    return{
      selectValues: {
        batchSrvrSel: null, //배치서버 선택
        useYnSel: null,      //사용여부
      },
      isModalUpdateShow:false, //변경 팝업
      isModalRegShow:false,     //등록팝업
      batchSclgAdmObject: {
        sclgId: null,      //스케줄링ID
        batchSrvr: null,   //배치서버
        sclgGp: null,      //스케줄링그룹
        param: "",       //파라미터
        exeCycl: null,     //실행주기
        useYn: null,       //사용여부
        aplyYn: null,      //적용여부
        desc: null,        //설명
      },
      SearchNum:null,   //검색 건수
      batchData:null,   //리스트 선택 데이터
      disabled:false,   //변경중 input disabled

      batchRegConf:false,   //배치상세정보 등록관련 변수
      batchChgConf:false,   //배치상세정보 변경관련 변수
      pageableData1: {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 10,
        totalPages: 12,
      },
      batchSclgRowData:[
        {model1:"1", model2:"cloud-biling", model3:"quartz biling barchRunjob",model4:"med.md.collectFile",
        model5:"{NEID,NF0005}", model6:"**/2***?",model7:"사용", model8:"적용",model9:"BDRS"}

      ],
      batchSclgColumnDefs:[
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
        { headerName: "순번", field: "model1", width : 40},
        { headerName: "배치서버", field: "model2", width : 120, cellStyle:{justifyContent: "flex-start"}  },
        { headerName: "스케줄링 그룹", field: "model3", width : 240 },
        { headerName: "스케줄링ID", field: "model4", width : 250 },
        { headerName: "파라미터(JSON)", field: "model5", width : 110,},
        { headerName: "실행주기(크론식)", field: "model6", width : 120,},
        { headerName: "사용여부", field: "model7", width : 70,},
        { headerName: "적용여부", field: "model8", width : 70,},
        { headerName: "설명", field: "model9", width : 100,},
      ],
    }
  },
  methods:{
    clickedRow(params){
      this.batchRegConf = false;
      this.batchChgConf = true;
      this.batchData = params.data;
      this.batchSclgAdmObject.batchSrvr = this.batchData.model2;
      this.batchSclgAdmObject.sclgGp = this.batchData.model3;
      this.batchSclgAdmObject.sclgId = this.batchData.model4;
      this.disabled = true;
      this.batchSclgAdmObject.param = this.batchData.model5;
      this.batchSclgAdmObject.exeCycl = this.batchData.model6;
      if(this.batchData.model7==='사용')this.batchSclgAdmObject.useYn='use';
      else this.batchSclgAdmObject.useYn='unuse';
      if(this.batchData.model8==='적용')this.batchSclgAdmObject.aplyYn='aply';
      else this.batchSclgAdmObject.aplyYn='unaply';
      this.batchSclgAdmObject.desc = this.batchData.model9;
    },
    batchChg(){
      if(this.batchData!==null){
        this.batchRegConf = false;
        this.batchChgConf = true;
        this.batchSclgAdmObject.batchSrvr = this.batchData.model2;
        this.batchSclgAdmObject.sclgGp = this.batchData.model3;
        this.batchSclgAdmObject.sclgId = this.batchData.model4;
        this.disabled = true;
        this.batchSclgAdmObject.param = this.batchData.model5;
        this.batchSclgAdmObject.exeCycl = this.batchData.model6;
        if(this.batchData.model7==='사용')this.batchSclgAdmObject.useYn='use';
        else this.batchSclgAdmObject.useYn='unuse';
        if(this.batchData.model8==='적용')this.batchSclgAdmObject.aplyYn='aply';
        else this.batchSclgAdmObject.aplyYn='unaply';
        this.batchSclgAdmObject.desc = this.batchData.model9;
      }
    },
    batchReg(){
      this.batchRegConf = true;
      this.batchChgConf = false;
      this.batchSclgAdmObject.batchSrvr = "";
      this.batchSclgAdmObject.sclgGp = "";
      this.batchSclgAdmObject.sclgId = "";
      this.batchSclgAdmObject.param = "";
      this.batchSclgAdmObject.exeCycl = "";
      this.batchSclgAdmObject.useYn="";
      this.batchSclgAdmObject.aplyYn="";
      this.batchSclgAdmObject.desc = "";
      this.disabled = false;
    },
    resetRetvCond(){
      this.selectValues.batchSrvrSel="";
      this.selectValues.useYnSel="";
      console.log(this.selectValues);
    },
    searchRetvCond(){
      console.log(this.selectValues);
      this.$connect('application/json','/info.json','get','').then((res)=>{

      })
    }
  },
  async beforeMount() {
    await this.$connect('application/json','/info.json','get','').then((res)=>{

    })
  },
}
</script>

<style scoped>
.BatchSclgAdmView{
  display: grid;
  grid-template-columns: 790px minmax(790px,1fr);
  grid-template-rows: 50px minmax(600px, 1fr);
  gap: 20px 20px;
}

.BatchSclgAdmView > .item:nth-child(1) {
  grid-column: 1/3;
  grid-row: 1;
}
.BatchSclgAdmView > .item:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}
.BatchSclgAdmView > .item:nth-child(3) {
  grid-column: 2;
  grid-row: 2;
}
.BatchServer{
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  display: flex;
  align-items: center;
  height: 50px;
}
.BatchServer > span:nth-child(1){
  min-width: 59px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12pt;
}
.BatchServer > span:nth-child(2){
  width: 200px;
  height: 28px;
  margin-right: 5px;
}
.BatchServer > span:nth-child(3){
  margin-left: 500px;
  min-width: 59px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12pt;
}
.BatchServer > span:nth-child(4){
  width: 200px;
  height: 28px;
  margin-right: 300px;
}
.BatchServer > span:nth-child(5){
  margin-left: 10px;

}
.BatchServer > span:nth-child(6){
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