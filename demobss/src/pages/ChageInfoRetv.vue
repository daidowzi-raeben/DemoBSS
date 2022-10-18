<template>
<div class="layout">
  청구요금
  <section>
  <div class="cusInfo">
    <form>
      <label>고객조회</label> <select></select><input type="text">
    </form>
  </div>
    <div class="contList" >
      서비스계약목록</div>
    <div style="left :30%;">
    <div>
      <div class="clList">
      청구</div>
      <div style="width:100%;">
        <div class="feeSear" >
        요금</div>
        <span class="sevSear" >
        서비스</span>
      </div>
    </div>

    </div>
  </section>
</div>

</template>

<script>
import Section from "@/components/Section";
export default {
  name: "ChageInfoRetv",
  components: {Section}
}
</script>

<style scoped>
div.layout{
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-y: scroll;
}
section > div.cusInfo {
  background-color: antiquewhite;
  width: 100%;
  margin: 0 auto;
  padding-bottom:10px;
  height: 100px;
}
section > div.contList{
  float: left;
  width: 15%;
  background-color: blue;
  margin: 0 auto;
  padding-bottom:10px;
  height: 650px;
}
.clList{
  width: 85%;
  float: left;
  background-color: blueviolet;
  margin: 0 auto;
  padding-bottom:10px;
  height: 425px;
}
.feeSear{
  float: left;
  width: 30%;
  height: 225px;
  background-color: chartreuse;
}
section {
  position: relative;
  /* top: 177px; border: #F00 solid 1px; */
  min-height: calc(100% - 297px);
  padding: 40px 0 143px;
  box-sizing: border-box;
}
.sevSear{
  float: right;
  width: 55%;
  height: 225px;
  background-color: cornflowerblue;
}
</style>