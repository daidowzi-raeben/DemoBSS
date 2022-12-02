<template>
<div class="subInfoTitleContainer">
  <!-- <label :class="subInfoTitleMark"
  :style="{height:markHeight, width: markWidth }" ></label> -->
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
    subInfoTitleMark:       // 마크 클래스 지정
    { 
      type:String,
      default:'subInfoTitleMark'
    },
    subInfoTitle:             // 제목 클래스 지정
    { 
      type:String,
      default:'subInfoTitle'
    },
    fontSize : String,        // 제목 글자 크기
    markHeight: String,       // 마크 높이, 넓이
    markWidth: String,
  },
}
</script>

<style>
.subInfoTitleContainer{
  display:inline-block; 
  margin-bottom: 4px;
}
.subInfoTitleMark {
  background-color: #2dbdb6;
  border-radius: 3px;
  color: #ffffff;
  height: 15px;
  width: 10px;
  content: url(../../img/icon_form_arrow.png);
}
.subInfoTitle {
  font-size: 12pt;
  font-weight: bold;
  color: #1b72d4;
}
</style>
