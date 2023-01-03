<template>
  <div>
  <aut-retv-component
      :title="'조회기준'"
      :sel-default-value="'조회기준 선택'"
      :cd-group="'retvBase'"
      @emitValue="(value)=>{this.selectValues = value}"
    />
  <div class="ag-grid_sp">
  <DragGrid
      :header-color="'rgb(239 245 252)'"
      :left-title="'대상 메뉴'"
      :right-title="'권한 적용 메뉴'"
      :left-row-data="leftRowData"
      :right-row-data="rightRowData"
      :Columns="GridToGridColumns"
      @emitValue="(value)=>{
          updateValue(value);
      }"
  />
  </div>
  </div>
</template>

<script>
import autRetvComponent from "@/components/UnionForm/AutRetvComponent";
import DragGrid from "@/components/common/DragGrid";
import ApiMixin from "@/service/common";
export default {
  mixins:[ApiMixin],
  name: "MenuAutComp",
  components:{
    autRetvComponent,
    DragGrid,
  },
  data(){
    return{
      selectValues: {     //조회 검색 탭
        searchValue: null,
        selValue: null,
      },
      leftRowData: [    //model1 중복된 값 있으면 안됨.
        {model1:"CONT_01_002",model2:"계약>계약정보>계약관리", model3:"사용"},
        {model1:"CONT_01_003",model2:"계약>계약정보>계약관리", model3:"사용"},
        {model1:"CONT_01_004",model2:"계약>계약정보>계약관리", model3:"사용"},
      ],
      rightRowData: [
        {model1:"CONT_01_005",model2:"계약>계약정보>계약관리", model3:"사용"},
        {model1:"CONT_01_006",model2:"계약>계약정보>계약관리", model3:"사용"},
        {model1:"CONT_01_007",model2:"계약>계약정보>계약관리", model3:"사용"},
      ],
      GridToGridColumns: [
        {
          rowDrag: true,
          maxWidth: 50,
          suppressMenu: true,   //헤더에 메뉴 노출 여부, true인 경우 칼럼 메뉴가 사라진다.
          rowDragText: function(params, dragItemCount) { //드래그해서 이동될때 보이는 값
            if (dragItemCount > 1) {
              return dragItemCount + ' model1';
            }
            return params.rowNode.data.model1;
          },
        },
        {
          colId: 'checkbox',
          maxWidth: 50,
          checkboxSelection: true,
          suppressMenu: true,
          headerCheckboxSelection: true
        },
        {  headerName: "메뉴ID", field: "model1", maxWidth: 250 },
        {  headerName: "메뉴명", field: "model2", maxWidth:300 },
        {  headerName: "사용여부", field: "model3", maxWidth:140 }
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

    })
  },
  methods:{
    updateValue(item){
      //item은 전달받은 drag에 대한 데이터 item[0]은 leftDatam, item[1]은 rightData
      this.$connect('application/json','/info','get','').then((res)=>{

      })
    }
  },

}
</script>

<style scoped>

.ag-grid_sp{
  /* margin: 10px; */
  width: 100%;
  height: 400px;
}

</style>