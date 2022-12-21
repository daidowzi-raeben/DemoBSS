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
        @input=" (value) => { cdGpValue = value;}"
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
 setup(props){
   const displayValue = props.params.value;
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
      this.params.clicked(this.cdGpValue);
    }
  },
  beforeMount() {
    console.log(this.params);
  }
}
</script>

<style scoped>

</style>