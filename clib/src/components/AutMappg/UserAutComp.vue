<template>
  <div class="AutRetv">
    <span>
        <select-box-component
            :selectClass="'select-type1'"
            :cdGroup="cdGroup"
            :is-disabled="true"
            :defaultValue="'조직 선택'"
            @emitValue=" (value) => { selectValues.org1 = value;}"
        />
      </span>
    <span>
        <select-box-component
            :selectClass="'select-type1'"
            :cdGroup="cdGroup"
            :is-disabled="true"
            :defaultValue="'조직 선택'"
            @emitValue=" (value) => { selectValues.org2 = value;}"
        />
      </span>
    <span>
        <select-box-component
            :selectClass="'select-type1'"
            :cdGroup="cdGroup"
            :is-disabled="true"
            :defaultValue="'조직 선택'"
            @emitValue=" (value) => { selectValues.org3 = value;}"
        />
      </span>
    <span>
        <input-component
            :type="'search'"
            :inputClass="'input-type4'"
            :placeholder="'사원명 입력'"
            :value="selectValues.inputValueOfSearch"
            v-model="selectValues.inputValueOfSearch"
            style="width:100%; height:100%"
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
  <div class="ag-grid_sp">
    <DragGrid
        :header-color="'rgb(239 245 252)'"
        :left-title="'대상 사원'"
        :right-title="'권한 적용 사원'"
        :left-row-data="leftRowData"
        :right-row-data="rightRowData"
        :Columns="GridToGridColumns"
        @emitValue="(value)=>{
          updateValue(value);
      }"
    />
  </div>

</template>

<script>
import selectBoxComponent from "@/components/common/SelectBoxComponent";
import inputComponent from "@/components/common/InputComponent";
import buttonComponent from "@/components/common/ButtonComponent";
import DragGrid from "@/components/common/DragGrid";
import ApiMixin from "@/service/common";
export default {
  mixins:[ApiMixin],
  name: "UserAutComp",
  components:{
    selectBoxComponent,
    DragGrid,
    inputComponent,
    buttonComponent
  },
  data(){
    return{
      cdGroup : "orgSelect",
      selectValues: {     //조직 검색 탭
        org1: "",
        org2: "",
        org3: "",
        inputValueOfSearch: null,
      },
      retvMenuValues:[],
      leftRowData: [
        {model1:"81215367", model2:"홍길*", model3:"재직",model4:"기업본부",model5:"팀원",model6:"시스템관리자"},
      ],
      rightRowData: [
        {model1:"81253577", model2:"홍길*", model3:"재직",model4:"기업본부",model5:"팀원",model6:"시스템관리자"},
        {model1:"81215167", model2:"홍길*", model3:"재직",model4:"기업본부",model5:"팀원",model6:"시스템관리자"},
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
        { headerName:"사번", field: "model1", maxWidth: 130, cellStyle:{justifyContent: "flex-start"}},
        { headerName:"사용자명", field: "model2", maxWidth: 130, cellStyle:{justifyContent: "flex-start"} },
        { headerName:"재직상태", field: "model3", maxWidth: 140 },
        { headerName:"조직", field: "model4", maxWidth: 130, cellStyle:{justifyContent: "flex-start"} },
        { headerName:"직책", field: "model5", maxWidth: 130, cellStyle:{justifyContent: "flex-start"} },
        { headerName:"직무", field: "model6", maxWidth: 140 },
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
    searchRetvCond(){
      this.retvMenuValues["org1"] = this.selectValues.org1 ;
      this.retvMenuValues["org2"] = this.selectValues.org2 ;
      this.retvMenuValues["org3"] = this.selectValues.org3 ;
      this.retvMenuValues["empNm"] = this.selectValues.inputValueOfSearch;
      this.$emit("emitValue",this.retvMenuValues);
      console.log(this.retvMenuValues)
    },
    updateValue(item){
      //item은 전달받은 drag에 대한 데이터 item[0]은 leftDatam, item[1]은 rightData
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
.AutRetv{
  width: 100%;
  background-color: rgb(239, 245, 252);
  display: flex;
  align-items: center;
  height: 50px;
}
.AutRetv > span:nth-child(1){
  width: 100px;
  height: 28px;
  margin-right: 5px;
}
.AutRetv > span:nth-child(2){
  width: 100px;
  height: 28px;
  margin-right: 5px;
}
.AutRetv > span:nth-child(3){
  width: 100px;
  height: 28px;
  margin-right: 15px;
}
.AutRetv > span:nth-child(4) {
  width: 100px;
  height: 28px;
  margin-right: 5px;
  text-align: center;
}
.AutRetv > span:nth-child(5) {
  margin-left: 224px;
  min-width: 59px;
  font-weight: bold;
  font-size: 12pt;
}
.ag-grid_sp{
  /* margin: 10px; */
  width: 100%;
  height: 400px;
}
</style>