<template>
  <aut-retv-component
      :title="'조회기준'"
      :sel-default-value="'조회기준 선택'"
      :cd-group="'retvBase'"
      @input="(value)=>{
        this.selectValues.searchValue = value[0];
        this.selectValues.selValue = value[1];
      }"
  />
  <div class="ag-grid_sp">
    <div style="width: 100%; margin-top: 5px">
      <subInfoTitle :subInfoTitleNm="'메뉴 리스트'"/>
      <p style="margin-left:5px; display:inline-block;">(총 <label style="font-weight: bold">{{total}}</label>건)</p>
    </div>
    <div class="ag-grid_sp2">
      <ag-grid-component
          :header-color="'rgb(239 245 252)'"
          :rowData="upRowData"
          :columnDefs="upColumnDefs"
          :row-height="40"
          
          :overlayNoRowsTemplate="
          `<span> <br>` + '<br />조회 결과가 없습니다.' + ` </span>`
          "
      />
    </div>
  <div style="width: 100%; margin-top: 15px">
    <subInfoTitle :subInfoTitleNm="'컴포넌트'"/>
    <p style="margin-left:5px; display:inline-block;">(총 <label style="font-weight: bold">{{total}}</label>건)</p>
    <span style="float: right">
    <buttonComponent
        :btnClass="'btnClass3'"
        :btnName="'권한 등록/제외'"
        @click="isModalAutShow=true;"
    />
    </span>
  </div>
  <div class="ag-grid_sp2">
    <ag-grid-component
        :header-color="'rgb(239 245 252)'"
        :rowData="downRowData"
        :columnDefs="downColumnDefs"
        
        :row-height="40"
        :overlayNoRowsTemplate="
          '<span> <br>' + '<br />조회 결과가 없습니다.' + '</span>'
         "
    />
  </div>
  </div>
  <popupComponent
      v-if="isModalAutShow"
      @popup="isModalAutShow=false"
      @AGREE = "''"
      :popupmsg="'권한을 변경하시겠습니까?'"
  />
</template>

<script>
import autRetvComponent from "@/components/UnionForm/AutRetvComponent";
import subInfoTitle from "@/components/common/SubInfoTitle";
import buttonComponent from "@/components/common/ButtonComponent";
import AgGridComponent from "@/components/common/AgGridComponent";
import AutCdGpNm from "@/components/common/AgGridCellRender/AutCdGpNm";
import AutYn from "@/components/common/AgGridCellRender/AutYn";
import popupComponent from "@/components/common/PopupComponent";
import ApiMixin from "@/service/common.js";
export default {
  mixins:[ApiMixin],
  name: "CompAutComp",
  components:{
    autRetvComponent,
    popupComponent,
    AgGridComponent,
    subInfoTitle,
    buttonComponent,
    AutCdGpNm,
    AutYn
  },
  data(){
    return{
      selectValues: {   //조회 검색 탭
        searchValue: null,
        selValue: null,
      },
      isModalAutShow:false,
      upRowData:[],
      downRowData:[],
      upColumnDefs: [
      {
        headerName: "선택",
        field: '',
        checkboxSelection: true,
        showDisabledCheckboxes: true,
        width: 80,
        cellStyle: () =>{    //체크 박스 해제되는 것을 막기 위해 pointer events 수정
          return {'pointer-events' : "none"}
        }
      },
      { headerName: "메뉴ID", field: "model1", width: 290},
      { headerName: "메뉴명", field: "model2", width: 320 },
      { headerName: "사용여부", field: "model3", width:100 }
    ],
      downColumnDefs:[
        { headerName: "컴포넌트ID", field: "model1",width:120, cellStyle:{justifyContent: "flex-start"}},
        { headerName: "업무유형", field: "model2", width:120,cellStyle:{justifyContent: "flex-start"}},
        { headerName: "업무상세유형", field: "model3", width: 300,
          cellRenderer:'AutCdGpNm',
          cellRendererParams: { //업무유형이 공통코드일때 셀렉트반환값
            clicked: function (field) {
              // console.log(field);
            }
          },
          cellStyle:{justifyContent: "flex-start"}
        },
        { headerName: "사용여부", field: "model4", width: 100 },
        { headerName: "권한", field: "model5", width: 150,
          cellRenderer :'AutYn',
          cellRendererParams: {   //권한 선택에 대한 반환값
            clicked: function (field) {
              console.log(field);
            }
          }
        }
      ],
    }
  },
  props:{
    autId:{
      type:String,
      default:null
    }
  },
  async beforeMount() {
    await this.$connect('application/json','/info','get','').then((res)=>{
        this.upRowData=res.data.upRowData;
        this.downRowData=res.data.downRowData;
        console.log(res.data.upRowData);
    })
  },
}
</script>

<style scoped>
.ag-grid_sp{
  /* margin: 10px; */
  width: 100%;
  height: 400px;
}
.ag-grid_sp2{
  /* margin: 10px; */
  width: 99.5%;
  height: 260px;
}
</style>