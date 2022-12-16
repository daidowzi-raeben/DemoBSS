<template>
<div>
  <input-component
      :type="'text'"
      :inputClass="'class4'"
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
    const holiChk = props.params.data.model2==='일요일' || props.params.data.model2==='토요일' ? true : false;
    console.log(props.params.data.model2);
    return {
      holiChk
    }
  },
  watch:{
    descValue(){
      this.params.clicked(this.descValue);
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