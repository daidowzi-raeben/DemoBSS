<template>
  <div v-if="displayValue!=='코드그룹명'">
    <div>{{ displayValue }}</div>
  </div>
  <div v-else style="display: flex">
    <span>{{ displayValue }}</span>
    <select-box-component
        :selectClass="'select-type1'"
        :cdGroup="'dtlCd'"
        :is-disabled="true"
        :defaultValue="'사용여부 선택'"
        @emitValue=" (value) => { cdGpValue = value;}"
        :selected-value="cdGpValue"
    />
    &nbsp;&nbsp;&nbsp;
  </div>
</template>

<script>
import selectBoxComponent from "@/components/common/SelectBoxComponent";
export default {
  name: "AutCdGpNm",
  components:{
    selectBoxComponent
  },
 setup(props){        //부모에서 값을 받기 위한 props
   const displayValue = props.params.value;   //props.params.value를 통해 부모의 값을 변수에 넣는다.
   return {
     displayValue
   }
 },
  data(){
    return{
      cdGpValue:null
    }
  },
  watch:{
    cdGpValue(){
      this.params.clicked(this.cdGpValue);      //cellRendererParams의 clicked와 매핑되어 값을 전달한다.
    }
  },
  beforeMount() {
    console.log(this.params);
  }
}
</script>

<style scoped>
div{
  align-items: center;
}
</style>