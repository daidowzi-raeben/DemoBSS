<template>
<div class="layout">
  <h1> 계약상세</h1>
  <section>
  <div class="cusSearch">
    <form>
      <label>고객조회</label> <select></select><input type="text">
    </form>
  </div>
  <div class="cusInfo" id="cont" >
    <label style="float:left;">고객정보</label> 
    <div>

    <table style="float:left;"  top="10px;" width="80%" border="0" cellspacing="0" cellpadding="0" >
      <tr>
        <td class="tit" width="60px;">고객ID </td> 
        <td width="100px"> CC10000266 .</td>

         <td class="tit" width="60px;">고객명 </td>
        <td width="100px"> 엘토스 커뮤니케이션 </td>

         <td class="tit" width="60px;">고객유형 </td>
        <td width="70px"> 영리법인 .</td>

         <td class="tit" width="40px;">국가 </td>
        <td width="60px"> KOR .</td>

         <td class="tit" width="60px;">사업자등록번호 </td>
        <td width="100px"> 60654657 .</td>
      </tr>

      <tr>
        <td class="tit" width="60px;">고객구분 </td> 
        <td width="100px"> 이헌수입니다 .</td>

         <td class="tit" width="60px;">전화번호 </td>
        <td width="100px;"> 이헌수입니다 .</td>

         <td class="tit" width="60px;">내외구분 </td>
        <td width="70px;"> 이헌수입니다 .</td>

         <td class="tit" width="40px;">주소 </td>
        <td width="60px" style="margin-left : 50px;"> 이헌수입니다 .</td>
        <td width="100px"> 이헌수입니다 .</td>
      </tr>
      </table>
  </div>
  </div>
    
  
    <div class="cmProducts" >보유 상품</div>

    <div class="CommonInfo" >기본 정보
      <table>
        <tr>
          <td><label> gd</label> <input type="text" value="hhhh"> </td>
          <td><label> gd</label> <input type="text" value="hhhh"> </td>
          <td><label> gd</label> <input type="text" value="hhhh"> </td>
          <td><label> gd</label> <input type="text" value="hhhh"> </td>
          <td><label> gd</label> <input type="text" value="hhhh" disabled> </td>
        </tr>
      </table>


    </div>

    <div class="shipInfo" >선박 정보</div>
    <div class="svOrgInfo" >영업조직 정보</div>
    <div class="ContMemInfo" >청구계정 정보</div>
    <div class="feeInfo" >요금정보</div>
    

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
section {
  
  position: relative;
  /* top: 177px; border: #F00 solid 1px; */
  min-height: calc(100% - 297px);
  padding: 40px 0 143px;
  box-sizing: border-box;
}
section > div.cusSearch {
  float: left;
  background-color: rgba(23, 202, 101, 0.862);
  width: 98%;
  margin: 0 auto;
  padding-bottom:10px;
  
  height: 100px;
}section > div.cusInfo {
  float: left;
  background-color: antiquewhite;
  width: 98%;
  margin: 0 auto;
  padding-bottom:10px;
  height: 100px;
}
section > div.cmProducts{
  float: left;
  width: 49%;
  background-color: aquamarine;
  margin: 0 10px auto;
  padding:0 0 10px auto;
  height: 450px;
}
section > div.ContMemInfo {
  float: left;
  width: 49%;
  background-color: tomato;
  margin: 0 10px auto;
  padding:0 0 10px auto;
  height: 350px;
}

section > div.CommonInfo{
  float: left;
  width: 48.2%;
  background-color: rgb(29, 185, 185);
  margin: 0 auto;
  padding:0 0 10px auto;
  height: 250px;
}
section > div.svOrgInfo{
  float: left;
  width: 48.2%;
  background-color: rgb(108, 216, 216);
  margin: 0 auto;
  padding:0 0 10px auto;
  height: 100px;
}
section > div.shipInfo{
  float: left;
  width: 48.2%;
  background-color: rgba(8, 149, 149, 0.423);
  margin: 0 auto;
  padding:0 0 10px auto;
  height: 100px;
}
section > div.feeInfo{
  float: left;
  width: 48.2%;
  background-color: rgba(52, 186, 186, 0.214);
  margin: 0 0 auto;
  padding:0 0 10px auto;
  height: 350px;
}



#cont table {
  border-top: #e4e4e4 solid 1px;
  margin-bottom: 10px;
  margin-top:10px;
}
#cont table tr td {
  border-bottom: #e4e4e4 solid 1px;
  border-left: #e4e4e4 solid 1px;
  font-size: 14px;
  padding: 5px 10px 5px 10px;
  height: 30px;
  line-height: 22px;
}
#cont table tr td {
  border-right: #e4e4e4 solid 1px;
}
#cont table tr > td.tit {
  font-weight: 600;
  background-color: #d1f2ff;
  text-align: center;
}


</style>