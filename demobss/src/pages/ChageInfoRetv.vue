<template>
<div class="layout">
  <section>
    <span>★ 청구 > 청구요금관리 > 청구요금정보관리 [BILL_01_001]</span>
    <span style="margin: 3px; padding: 4px; font-size:10px;  border: solid thin">홈화면설정</span>
    <span style="margin: 3px 3px 0px 3px; padding: 4px; font-size:10px; border: solid thin">홈화면초기화</span>

  <div class="cusInfo">
    ▶고객정보
    <table style=" width: 100%;">
      <tr style="height: 50px; ">
        <td style="folat:left; width:90%; border: solid 2px; padding-left: 10px;"><label>고객조회</label> <select style="width: 100px; height: 21.5px;"></select>&nbsp;<input style="background-color: white;" type="text"></td>
        <td style="text-align: center; border: solid 2px">버튼</td>
      </tr>
    </table>
    <table style="width: 100%; border: groove 1px;">
          <tr style="padding-left: 10px;">
            <td>
              <label>고객ID</label> <input type="text" value="CC10001046" disabled>
            </td>
            <td>
              <label>고객명</label> <input type="text" value="주식회사 시너샛코리아" disabled>
            </td>
            <td>
              <label>고객유형</label> <input type="text" value="" disabled>
            </td>
            <td>
              <label>국가</label> <input type="text" value="" disabled>
            </td>
            <td>
              <label style="width: 130px;">사업자등록번호</label> <input type="text" value="6268700031" disabled>
            </td>
          </tr>
          <tr style="padding-left: 10px;">
            <td>
              <label>고객구분</label> <input type="text" value="영리법인" disabled>
            </td>
            <td>
              <label>전화번호</label> <input type="text" value="01012341234" disabled>
            </td>
            <td>
              <label>내외구분</label> <input type="text" value="" disabled>
            </td>
            <td>
              <label>주소</label> <input style="width:30px;" type="text" value="">&nbsp;<input type="text" value="" disabled>
            </td>
          </tr>
    </table>
  </div>
    <div class="contList" >
      <span>▶서비스 계약목록</span>
      <span style="float: right; margin: 3px; padding: 4px; font-size:10px; border: solid thin">전체접기</span>
      <span style="float: right; margin: 3px 3px 0px 3px; padding: 4px; font-size:10px; border: solid thin">전체펼치기</span>
      <div  style="margin:10px; width: 100%; height: 100%; border: groove;"></div>
    </div>
    <div style="left :30%;">
    <div>
      <div class="clList">
        <span>▶청구목록 (6건)</span>
        <span style="float: right; margin: 3px; padding: 4px; font-size:10px; border: solid thin">엑셀다운</span>
        <span style="float: right; margin: 3px;"><select style="width: 100px; height: 21.5px;"></select></span>
        <span style="float: right; margin: 3px;">최근 개월 수</span>
        <div style="margin:10px; width: 100%; height: 100%; border: groove;"></div>
      </div>
      <div style="width:100%;">
        <div class="feeSear" >
          <span>▶요금항목별 조회 (18건)</span>
          <span style="float: right; margin: 3px; padding: 4px; font-size:10px; border: solid thin">엑셀다운</span>
          <div style="margin:10px; width: 100%; height: 100%; border: groove;"></div>
        </div>
        <span class="sevSear" >
          <span>▶서비스계정별 조회 (62건)</span>
          <span style="float: right; margin: 3px; padding: 4px; font-size:10px; border: solid thin">선박별 요약</span>
          <span style="float: right; margin: 3px; padding: 4px; font-size:10px; border: solid thin">선박별 상세</span>
          <span style="float: right; margin: 3px; padding: 4px; font-size:10px; border: solid thin">선박파일</span>
          <span style="float: right; margin: 3px; padding: 4px; font-size:10px; border: solid thin">선박파일</span>
          <span style="float: right; margin: 3px; padding: 4px; font-size:10px; border: solid thin">선박발송</span>
          <span style="float: right; margin: 3px;"><select style="width: 100px; height: 21.5px;"></select></span>
          <div style="margin:10px; width: 100%; height: 100%; border: groove;"></div>
        </span>
      </div>
    </div>

    </div>
  </section>
</div>

</template>

<script>
export default {
  name: "ChageInfoRetv",
}
</script>

<style scoped>
div.layout{
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow-y: scroll;
}
section > div.cusInfo {
  float: left;
  width: 89vw;
  margin: 10px ;
  height: 120px;
}
td > input{

  background-color: antiquewhite;
}
section > div.contList{
  float: left;
  width: 15vw;
  margin: 10px;
  padding-bottom:10px;
  height: 680px;
}
.clList{
  width: 73vw;
  float: left;
  margin: 10px;
  padding-bottom:25px;
  height: 410px;
}
.feeSear{
  float: left;
  width: 25vw;
  height: 225px;
  margin: 10px;
}
td > label {
  display:inline-block;
  width: 70px;
  padding-left: 10px;
}
section {
  position: relative;
  /* top: 177px; border: #F00 solid 1px; */
  min-height: calc(100% - 297px);
  padding: 40px 0 143px;
  box-sizing: border-box;
}
.sevSear{
  float: left;
  margin: 10px;
  width: 47vw;
  height: 225px;
}
</style>