<template>
<div class="subInfoTitleContainer">
  <!-- <label :class="subInfoTitleMarkClass"
  :style="{height:markHeight, width: markWidth }" ></label> -->
  <label
  :class="subInfoTitleClass">{{subInfoTitleNm}}</label>
</div>
</template>

<script>
export default {
  data(){
    return{
      subInfoTitleMarkClass: "subInfoTitleMark",
      subInfoTitleClass: "subInfoTitle",
    }
  },
  props:{
    subInfoTitleNm: String, // 부정보 제목명

    subInfoTitleMark: String, // 마크 클래스 지정
    subInfoTitle: String,     // 제목 클래스 지정

    fontSize : String,        // 제목 글자 크기
    markHeight: String,       // 마크 높이, 넓이
    markWidth: String,
  },
  beforeMount(){
    // 클래스가 선언되지 않으면 default 클래스 사용
    if (this.subInfoTitleMark != null) {
      this.subInfoTitleMarkClass = this.subInfoTitleMark;
    }
    if (this.subInfoTitle != null) {
      this.subInfoTitleClass = this.subInfoTitle;
    }

  }

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
  /* font-size: 14pt; */
  font-size: 12pt;
  font-weight: bold;
  color: #1b72d4;
}
</style>
