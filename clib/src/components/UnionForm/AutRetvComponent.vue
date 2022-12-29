<template>
  <div class="AutRetv">
      <span>
        {{ this.title }}
      </span>
    <span>
        <select-box-component
            :selectClass="'select-type1'"
            :cdGroup="this.cdGroup"
            :disabled="true"
            :is-disabled="true"
            :defaultValue="this.selDefaultValue"
            @emitValue=" (value) => { selValue = value;}"
        />
      </span>
    <span>
        <input-component
            :type="'search'"
            :inputClass="'class4'"
            :placeholder="'검색어 입력'"
            :value="searchValue"
            v-model="searchValue"
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
            @click="Search"
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
      searchValue:null,
      selValue:null,
      totalValue:[],
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
    Search(){
      this.totalValue.push(this.searchValue);
      this.totalValue.push(this.selValue);
      this.$emit("input",this.totalValue);
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