<template>
<div>
  <select-box-component
      style="height: 30px"
      :selectClass="'select_input4'"
      :width="250"
      :cdGroup="'holiDiv'"
      :defaultValue="'휴일구분 선택'"
      :isDisabled="true"
      :selectedValue="selValues"
      @input="(value) => {selValues = value;}"
      />
</div>
</template>

<script>
import SelectBoxComponent from "@/components/common/SelectBoxComponent";
export default {
  name: "HoliDiv",
  components: {SelectBoxComponent},
  data(){
    return{
      selValues:null
    }
  },
  watch:{
    selValues(){
      this.params.clicked(this.selValues);
    }
  }
}
</script>

<style scoped>

</style>