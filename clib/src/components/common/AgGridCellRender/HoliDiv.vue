<template>
<div>
  <select-box-component
      style="height: 30px"
      :width="'250px'"
      :cdGroup="'holiDiv'"
      :defaultValue="'휴일구분 선택'"
      :isDisabled="true"
      :selectedValue="selValues"
      @emitValue="(value) => {selValues = value;}"
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
      this.$store.commit("setTest", this.selValues);
      this.params.clicked(this.selValues); //cellRendererParams의 clicked와 매핑되어 값을 전달한다.
    }
  }
}
</script>

<style scoped>

</style>