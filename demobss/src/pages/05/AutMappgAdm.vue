<template>
<article class="AutMappgAdmView">
  <div class="item"> <!-- 1번 -->
    <aut-retv-component
        :title="'권한유형'"
        :sel-default-value="'권한유형 선택'"
        :cd-group="'autType'"
        @input="(value)=>{
        this.selectValues.searchValue = value[0];
        this.selectValues.selValue = value[1];
      }"
    />
    <div style="width: 100%; margin-top:20px;" >
      <SubInfoTitle :subInfoTitleNm="'권한 리스트'"/>
      <p style="margin-left:5px; display:inline-block;">(총 <label style="font-weight: bold">{{ total }}</label>건)</p>
    </div>
    <div class="ag-grid_sp">
      <ag-grid-component
          :header-color="'rgb(239 245 252)'"
          :rowData="RowData"
          :columnDefs="columnDefs"
          :row-height="40"
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
      <span style="display: flex; justify-content: center;">
          <paging-area
              :pageableData="pageableData1"
          />
        </span>
    </div>
  </div>
  <div class="item"> <!-- 2번 -->
    <div style="width: 100%; overflow: auto; height: 800px;">
    <div class="menu_tab_line">
      <div class="menu_tab_line_detail">
        <div v-for="(item, index) in autComp" v-bind:key="index">
          <div
              :class="{
              tabon: this.compId === item.menuId,
              taboff: this.compId !== item.menuId,
              menu_tab: true,
            }"
              @click="ChageComponent(item.menuId, index)"
          >
            <span id="tab_nm">
              {{ item.menuNm }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(item, index) in autCompAddr" :key="item" style="margin-top: 20px;">
      <div v-show="index === this.cur_num">
      <component
          v-bind:is="this.autCompAddr[index]"
          :autId="autId"
       />
      </div>
    </div>
    </div>
  </div>
</article>
</template>

<script>
import autRetvComponent from "@/components/UnionForm/AutRetvComponent";
import pagingArea from "@/components/common/PagingArea";
import selectBoxComponent from "@/components/common/SelectBoxComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
import AgGridComponent from "@/components/common/AgGridComponent";
import InputComponent from "@/components/common/InputComponent";
import SubInfoTitle from "@/components/common/SubInfoTitle";
import ApiMixin from "@/service/common";
import {defineAsyncComponent, markRaw} from "vue";
export default {
  mixins:[ApiMixin],
  name: "AutMappgAdm",
  components: {
    pagingArea,
    autRetvComponent,
    selectBoxComponent,
    ButtonComponent,
    AgGridComponent,
    SubInfoTitle,
    InputComponent
  },
  data(){
    return{
      cur_num:0, //현재 탭 인덱스
      compId:"", //현재 컴포넌트 Id
      autComp:[], //컴포넌트 값을 넣는 배열
      autCompAddr:[], //컴포넌트 주소를 넣는 배열
      autId:null,     //agGrid에서 선택된 row의 권한ID
      SearchNum:null,   //검색 건수
      comp:"",      //컴포넌트 주소를 담을 임시 변수
      selectValues: {     //권한 유형 검색 탭
        searchValue: null, //검색어 값
        selValue: null,    //select박스 선택값
      },
      RowData:[],
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
  created() {
    this.comp = markRaw(defineAsyncComponent(()=> import("../../components/AutMappg/MenuAutComp.vue")));
    this.autCompAddr.push(this.comp);
    this.comp = markRaw(defineAsyncComponent(()=> import("../../components/AutMappg/CompAutComp.vue")));
    this.autCompAddr.push(this.comp);
    this.comp = markRaw(defineAsyncComponent(()=> import("../../components/AutMappg/OrgAutComp.vue")));
    this.autCompAddr.push(this.comp);
    this.comp = markRaw(defineAsyncComponent(()=> import("../../components/AutMappg/UserAutComp.vue")));
    this.autCompAddr.push(this.comp);
  },
  watch: {
    cur_num: function (newVal, oldVal) {
      this.compId = this.autComp[newVal].menuId;
      this.component = this.autCompAddr[this.cur_num];
    },
  },
  methods:{
    ChageComponent: function (componentName, index) {
      this.compId = componentName;
      this.cur_num = index;
    },
    clickedRow(params){
      //클릭된 row의 권한ID를 autId에 넣는 곳
    },
  },
  async beforeMount() {
    await this.$connect('application/json','/info','get','').then((res)=>{
      this.RowData = res.data.autRowData;
      this.autComp = res.data.autTabData;
    })
    this.compId = this.autComp[0].menuId;
    console.log(this.autCompAddr[0]);
  },
}
</script>

<style scoped>
.AutMappgAdmView{
  display: grid;
  grid-template-columns: 800px minmax(800px,1fr);
  grid-template-rows: minmax(550px, 1fr);
  gap: 0px 20px;
}

.AutAdmView > .item:nth-child(1) {
  border:1px solid;
  grid-column: 11;
  grid-row: 1;
}
.AutAdmView > .item:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
}

.ag-grid_sp{
  /* margin: 10px; */
  width: 100%;
  height: 600px;
}


.menu_tab_line .menu_tab_line_detail {
  width: 94%;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
}
div.tabon {
  /* 탭 선택되었을 때 */
  background-color: rgb(27,114,212);
  color: white;
}

div.taboff {
  /* 탭 선택x */
  background-color: rgb(184,208,235);
  border-right: rgb(113,156,205) 1px solid;
  color: black;
}
div.taboff:hover {
  background-color: rgb(204,228,250);
}
.menu_tab_line {
  height: 25px;
  width: 100%;
  padding-bottom: 5px;
  border-bottom: 1px solid;
}

.menu_tab {
  float: left;
  width: 130px;
  height: inherit;
  padding: 0px 5px;
  margin-right: 10px;
  line-height: 30px;
  cursor: pointer;
}
.menu_tab > span#tab_nm {
  display: block;
  float: left;
  width: 100%;
  font-size: 10pt;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>