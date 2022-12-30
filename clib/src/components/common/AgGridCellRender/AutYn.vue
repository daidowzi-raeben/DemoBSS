<template>
<div style="display: flex">
  <radio-component
      :RadioOption="'autOptions'"
      @radioEmit="
                    (radioValue) => {
                      useYn = radioValue;
                    }
                  "
      :selectedRadio="selRadio"
      :defaultcdId="selRadio"
  />
</div>
</template>

<script>
import radioComponent from "@/components/common/RadioComponent";
export default {
  name: "AutYn",
  components:{
    radioComponent
  },
  setup(props){        //부모에서 값을 받기 위한 props
    const selRadio = props.params.data;   //props.params.value를 통해 부모의 값을 변수에 넣는다.
    console.log("test",props.params.data);
    return {
      selRadio
    }
  },
  data(){
    return{
      useYn:null,
    }
  },
  beforeMount() {
    console.log(this.params);
  },
  watch:{
    useYn(){
      console.log(this.selRadio);
      this.params.clicked(this.useYn); //cellRendererParams의 clicked와 매핑되어 값을 전달한다.
    }
  }

}
</script>

<style scoped>

</style>