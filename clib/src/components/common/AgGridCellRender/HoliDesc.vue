<template>
<div>
  <input-component
      :type="'text'"
      :inputClass="'input-type4'"
      :class="{
        colorRed : holiChk ===true,
        colorBlack : holiChk === false
       }"
      :value="descValue"
      v-model="descValue"
      style="width:230px; height:30px"
    />
</div>
</template>

<script>
import inputComponent from "@/components/common/InputComponent";
export default {
  name: "HoliDesc",
  components: {inputComponent},
  setup(props){
    const holiChk = props.params.data.model2==='일요일' || props.params.data.model2==='토요일' ? true : false;  //props.params를 통해 부모의 값을 변수에 넣는다.
    console.log(props.params.data.model2);
    return {
      holiChk
    }
  },
  watch:{
    descValue(){
      this.params.clicked(this.descValue); //cellRendererParams의 clicked와 매핑되어 값을 전달한다.
    }
  },
  data(){
    return{
      descValue:null
    }
  }

}
</script>

<style scoped>
.colorRed{
  color:red;
}
.colorBlack{
  color:black;
}
</style>