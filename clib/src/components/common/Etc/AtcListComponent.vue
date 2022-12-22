<template>
  <div class="atctitle">{{WrkjobNm}} 첨부파일 목록</div>
  <div class="tablediv">
    <table>
      <tr>
        <th>파일유형</th><th>등록일시</th><th>파일</th><th>비고</th>
      </tr>
      <tr v-for="(item,idx) in dummy" :key="idx">
        <td class="t1">{{item.type}}</td><td class="t2">{{item.date}}</td>
        <td class="t3">
          {{item.file}}
        </td>
        <td class="t1">
          {{item.atc}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "AtcListComponent",
  data(){
    return{
      dummy:[
        {type:"파일명",date:"2021-07-12 00:00:00", file:"파일.pdf",atc:"비고"},
        {type:"파일명",date:"2021-07-12 00:00:00", file:"파일.pdf",atc:"비고"},
        {type:"파일명",date:"2021-07-12 00:00:00", file:"파일.pdf",atc:"비고"},
        {type:"파일명",date:"2021-07-12 00:00:00", file:"파일.pdf",atc:"비고"}
      ]
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
  width:1200px;
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
  height: 20%;
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
  width:15%;
  text-align: center;
  padding: 10px;
}
.t2{
  width: 20%;
  text-align: center;
  padding: 10px;
}
.t3{
  width: 40%;
  text-align: left;
  padding: 10px;
}
.atctitle{
  padding-left: 10px;
  font-weight: bold;
  font-size: 14pt;
}
</style>