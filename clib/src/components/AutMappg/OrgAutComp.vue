<template>
  <aut-retv-component
      :title="'조회기준'"
      :sel-default-value="'조회기준 선택'"
      :cd-group="'orgBase'"
      @input="(value)=>{
        this.selectValues.searchValue = value[0];
        this.selectValues.selValue = value[1];
      }"
  />
  <div class="ag-grid_sp">
    <DragGrid
        :header-color="'rgb(239 245 252)'"
        :left-title="'대상 조직'"
        :right-title="'권한 적용 조직'"
        :left-row-data="leftRowData"
        :right-row-data="rightRowData"
        :Columns="GridToGridColumns"
        
        :overlayNoRowsTemplate="
          `<span> <br>` + '<br />조회 결과가 없습니다.' + ` </span>`
          "
    />
  </div>
</template>

<script>
import autRetvComponent from "@/components/UnionForm/AutRetvComponent";
import DragGrid from "@/components/common/DragGrid";
import ApiMixin from "@/service/common";
export default {
  mixins:[ApiMixin],
  name: "OrgAutComp",
  components:{
    autRetvComponent,
    DragGrid
  },
  data(){
    return{
      selectValues: {     //조회 검색 탭
        searchValue: null,
        selValue: null,
      },
      leftRowData: [
        {model1:"ST00001",model2:"기업수납센터", model3:"본사", model4:"경영",model5:"사용"}
      ],
      rightRowData: [
        {model1:"ST00002",model2:"기업수납센터", model3:"본사", model4:"경영",model5:"사용"}
      ],
      GridToGridColumns: [
        {
          rowDrag: true,
          maxWidth: 50,
          suppressMenu: true,
          cellStyle:{justifyContent: 'flex-start'},
          rowDragText: function(params, dragItemCount) { //드래그해서 이동될때 보이는 값
            if (dragItemCount > 1) {
              return dragItemCount + ' model1';
            }
            return params.rowNode.data.model1;
          },
        },
        {
          colId: 'checkbox',
          maxWidth: 60,
          checkboxSelection: true,
          headerCheckboxSelection: true
        },
        { headerName: "조직ID",field: "model1", maxWidth: 100 },
        { headerName: "조직명",field: "model2", maxWidth: 250, cellStyle:{justifyContent: "flex-start"} },
        { headerName: "조직레벨",field: "model3", maxWidth: 120 },
        { headerName: "조직유형",field: "model4", maxWidth: 120 },
        { headerName: "사용여부",field: "model5", maxWidth: 140 },
      ],
    }
  },
  props:{
    autId:{
      type:String,
      default:null
    }
  },
  methods:{

  },
  async beforeMount() {
    await this.$connect('application/json','/info','get','').then((res)=>{

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
</style>