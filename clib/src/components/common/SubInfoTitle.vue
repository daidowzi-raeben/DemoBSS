<template>
<div class="subInfoTitleContainer">
  <label
  :class="subInfoTitle">{{subInfoTitleNm}}</label>
</div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  props:{
    subInfoTitleNm: String, // 부정보 제목명
    subInfoTitle:             // 제목 클래스 지정
    { 
      type:String,
      default:'subInfoTitle'
    },
    fontSize : {        // 제목 글자 크기
      type:String,
      default:'12pt'
    }
  },
}
</script>

<style>
.subInfoTitleContainer{
  display:inline-block; 
  margin-bottom: 4px;
}
.subInfoTitle {
  font-size: v-bind('fontSize');
  font-weight: bold;
  color: #1b72d4;
}
</style>
