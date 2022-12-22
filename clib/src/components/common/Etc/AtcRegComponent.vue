<template>
  <div class="atctitle">{{WrkjobNm}} 첨부파일 등록</div>
  <div class="tablediv">
  <table>
    <tr>
      <th>파일유형</th><th>필수여부</th><th>파일</th><th>비고</th>
    </tr>
    <tr v-for="(item,idx) in dummy" :key="idx">
      <td class="t1">{{item.type}}</td><td class="t1">{{item.required}}</td>
      <td class="t2">
        <file-input-component
            :is-multiple=false
        />
      </td>
      <td class="t3">
        <input-component
            :type="'text'"
            :height="20"
            :width="250"
            :input-class="'class1'"
            v-model="atcValue"
            :placeholder="'비고 입력'"
            @input="
          (value) => {
            atcValue = value;
          }
        "
        />
      </td>
    </tr>
  </table>
  </div>
  <div class="atcNoti">※첨부파일은 최대 10MB 이내로 첨부 가능합니다.</div>
</template>

<script>
import InputComponent from "@/components/common/InputComponent";
import fileInputComponent from "@/components/common/FileInputComponent";
export default {
  name: "AtcRegComponent",
  components: {
    InputComponent,
    fileInputComponent
  },
  data(){
    return{
      dummy:[
        {type:"파일명", required:"필수"},
        {type:"파일명", required:"필수"},
        {type:"파일명", required:"필수"},
        {type:"파일명", required:"필수"},
      ],
      atcValue:null,
    }
  },
  props:{
    WrkjobNm:{
      type:String,
      default:"(업무명들어갈자리)"
    },
    data:{
      type:Array,
      default:null
    }
  }
}
</script>

<style scoped>
.tablediv{
  width:1700px;
  height:230px;
}
table{
  width: 100%;
  height: 100%;
  border: 1px solid #444444;
  border-collapse: collapse;
}
table tr th{
  background-color: rgb(113,156,205);
  color: white;
  height: 25%;
  border: 1px solid #444444;
  font-size: 12pt;
}
table tr td{
  height: 25%;
  border: 1px solid #444444;
  font-size: 12pt;
  font-weight: bold;
}
.t1{
  width:10%;
  text-align: center;
  padding: 10px;
}
.t2{
  width: 60%;
  text-align: left;
  padding: 10px;
}
.t3{
  width: 30%;
  text-align: left;
  padding: 10px;
}
.atctitle{
  padding-left: 10px;
  font-weight: bold;
  font-size: 14pt;
}
.atcNoti{
  padding-left: 10px;
  font-weight: bold;
  font-size: 10pt;

}
</style>