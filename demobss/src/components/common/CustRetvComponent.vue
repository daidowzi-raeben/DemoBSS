<template>
    <div class="cusSearch">
      <span>
        고객검색
      </span>
      <span>
        <select-box-component
        :selectClass="'select_input3'"
        :cdGroup="cdGroup"
        :defaultValue="'선택'"
        @input=" (value) => { searchDiv = value;}"
        v-model="searchDiv"
        />
      </span>
      <span>
        <input-component
        :type="'search'"
        :inputClass="'class4'"
        :placeholder="'검색어 입력'"
        @input=" (value) => { searchValue = value;}"
        v-model="searchValue"
        style="width:100%; height:100%"
        />
      </span>
      <span>
        <button-component
          :btn-class="'btnClass4'"
          :btn-name ="'검색'"
          :btnHeight="'28px'"
          :btnWidth ="'62px'"
          />
      </span>
      <span>
        <chk-box-component
        :CheckOptions="['해지포함']"
        :showCheckOpt="false"
        :checkTextSize="'10pt'"
        :checkBoxSize="'20px'"
        :chkBoxColor="'white'"
        />  
      </span>

  </div>
</template>

<script>
import SubInfoTitle from "@/components/common/SubInfoTitle";
import InputComponent from "@/components/common/InputComponent";
import SelectBoxComponent from "@/components/common/SelectBoxComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
import ChkBoxComponent from '@/components/common/ChkBoxComponent.vue';
export default {
  name: "CustomerSearchComponent",
  components:{SubInfoTitle,
              SelectBoxComponent, 
              InputComponent,
              ButtonComponent,
              ChkBoxComponent},
  data(){
    return{
      searchDiv :null,
      searchValue:null,
    }
  },
  props:{
    cdGroup:null,
    titleShow:null,
  }
}
</script>

<style scoped>
.cusSearch{
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  display: flex;
  align-items: center;
  height: 40px;
}
.cusSearch > span:nth-child(1){
  min-width: 59px;
  margin-right: 5px;
  font-weight: bold;
  font-size: 12pt;
}
.cusSearch > span:nth-child(2){
  width: 150px;
  height: 25px;
  margin-right: 5px;

}
.cusSearch > span:nth-child(3){
  width: 250px;
  height: 19px;
  margin-left: 10px;
  margin-bottom: 6px;

}
.cusSearch > span:nth-child(4){
  margin-left: 10px;
}
.cusSearch > span:nth-child(5){
  margin-left: 10px;
  margin-top: 10px;
}
</style>
