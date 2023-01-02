<template>
  <div class="AutRetv">
      <span>
        {{ this.title }}
      </span>
    <span>
        <select-box-component
            :selectClass="'select-type1'"
            :cdGroup="this.cdGroup"
            :isDisabled="true"
            :defaultValue="this.selDefaultValue"
            @emitValue=" (value) => { selectValueOfType = value;}"
        />
      </span>
    <span>
        <input-component
            :type="'search'"
            :inputClass="'input-type4'"
            :placeholder="'검색어 입력'"
            :value="inputValueOfSearch"
            v-model="inputValueOfSearch"
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
</template>

<script>
import selectBoxComponent from "@/components/common/SelectBoxComponent";
import inputComponent from "@/components/common/InputComponent";
import buttonComponent from "@/components/common/ButtonComponent";
export default {
  name: "AutRetvComponent",
  components:{
    selectBoxComponent,
    inputComponent,
    buttonComponent
  },
  data(){
    return{
      selectValueOfType:"",
      inputValueOfSearch:null,
      retvMenuValues:[],
    }
  },
  props:{
    title:{
     type:String,
     default:null
    },
    selDefaultValue:{
      type:String,
      default:null
    },
    cdGroup:{
      type:String,
      default:null
    }
  },
  methods:{
    searchRetvCond(){
      this.retvMenuValues["Type1"] = this.selectValueOfType ;
      this.retvMenuValues["Type2"] = this.inputValueOfSearch;
      this.$emit("emitValue",this.retvMenuValues);
      console.log(this.retvMenuValues)
    }
  }
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
  min-width: 59px;
  margin-right: 10px;
  margin-left: 20px;
  font-weight: bold;
  font-size: 12pt;
}
.AutRetv > span:nth-child(2){
  width: 200px;
  height: 28px;
  margin-right: 5px;
}
.AutRetv > span:nth-child(3){
  width: 200px;
  height: 28px;
  margin-left: 10px;
}
.AutRetv > span:nth-child(4){
  margin-left: 150px;
  min-width: 59px;
  font-weight: bold;
  font-size: 12pt;
}
</style>