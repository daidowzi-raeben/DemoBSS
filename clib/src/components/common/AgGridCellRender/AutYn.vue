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
    let selRadio = props.params.data;   //props.params.value를 통해 부모의 값을 변수에 넣는다.
    
    // console.log("test1",props.params);
    // console.log("test",props.params.data);
    
    selRadio = "02";
    return {
      selRadio
    }
  },
  data(){
    return{
      useYn:null,
      // selRadio: "02",
    }
  },
  beforeMount() {
    //console.log("aaaaaa",this.params);
  },
  watch:{
    useYn(){
      //console.log(this.selRadio);
      this.params.clicked(this.useYn); //cellRendererParams의 clicked와 매핑되어 값을 전달한다..params.clicked(this.useYn); //cellRendererParams의 clicked와 매핑되어 값을 전달한다.
      this.params.clicked("params",this.gridApi);
    }
  },
  methods:{
    abcd(){
      //console.log("aaaaaa",this.params);
    }
    
  }

}
</script>

<style scoped>

</style>