<template>
<div class="layout" style="margin-left:20px;">
  <div class="section0">
    <h1>계약 상세</h1>
  <div class="cusInfo0">
    <table style=" width: 100%;">
      <tr style="height: 50px; ">
        <td style="folat:left; width:90%; border: solid 2px; padding-left: 10px;">
          <label><h2>고객조회</h2></label>
          <select style="width: 100px; height: 25px; margin-right:10px; ">
            <option selected disabled value="">선택</option>
            <option value="A">고객ID</option>
            <option value="B">계약ID</option>
            <option value="C">선박ID</option>
            <option value="D">청구계정ID</option>
          </select>
          <input style="background-color: white; width:380px;" type="text">
        </td>
      </tr>
    </table></div>

   <div class="cusInfo">
    <!-- <span style="font-size:20px;"> ▶고객정보 </span> -->
    
    <span>
      <span style="background-color: #2dbdb6; border-radius: 5px; font-size:20px; color: #ffffff">▶</span>
      <span style="font-weight: bold; font-size:25px;">고객정보</span>
      </span>
    <div style="width: 98%; border: groove; padding:10px 0 10px 50px;  border: ridge ; border-top-color: #2dbdb6">
    <table >
          <tr>
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
          </table><table>
          <tr>
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
              <label>주소</label> <input style="width:80px; margin-right:20px;" type="text" value="">
              <input style="width:570px;" type="text" value="" disabled>
            </td>
          </tr>
    </table>
    </div>
  </div>
    <div class="cmProducts" >
      <span>
      <span style="background-color: #2dbdb6; border-radius: 5px; font-size:20px; color: #ffffff">▶</span>
      <span style="font-weight: bold; font-size:25px;">보유 상품</span>
      </span>
      <div></div>
      <ul>
        <TreeItem class="item" :model="treeData"></TreeItem>
      </ul>
    </div>
    <div></div>

    <div class="CommonInfo">
      <div style="margin: 10px ;">
        <span>
      <span style="background-color: #2dbdb6; border-radius: 5px; font-size:20px; color: #ffffff">▶</span>
      <span style="font-weight: bold; font-size:25px;">기본정보</span>
      </span>
        <span style="float:right; margin-right:100px;" >
        <table class="selectSearch">
        <tr>
          <td>
            <label><h2>BM</h2></label>
            <select style="width: 200px; height: 30px; margin-right:10px; ">
              <option selected disabled value="">선택</option>
              <option value="D">고객ID</option>
              <option value="A">계약ID</option>
              <option value="B">선박ID</option>
              <option value="C">청구계정ID</option>
            </select>
          </td>
          <td>
            <label><h2>Service</h2></label>
            <select style="width: 200px; height: 30px; margin-right:10px; ">
              <option selected disabled value="">선택</option>
              <option value="D">고객ID</option>
              <option value="A">계약ID</option>
              <option value="B">선박ID</option>
              <option value="C">청구계정ID</option>
            </select>
          </td>
          <td><button>신규등록</button></td>
        </tr>
        </table>
        </span>
    </div>
      <div style="width: 95%; border: groove; padding:10px 0 10px 50px;  border: ridge ;">
      <table>
        <tr>
          <td><label> 계약ID</label> <input type="text" value="S00000002710" disabled> </td>
          <td><label> BM</label> <input type="text" value="MVSAT" disabled> </td>
          <td><label> 계약상태</label> <input type="text" value="사용중" disabled> </td>
        </tr>
         </table>
        <table>
        <tr>
          <td><label> 개통일시</label> <input type="text" value="2022-10-19 09:59:31 " disabled> </td>
          <td><label> 약정기간</label> <input type="text" value="36개월 약정" disabled> </td>
          <td><label> 서비스오더ID</label> <input type="text" value="  " disabled> </td>
        </tr>

         </table>
        <table>
        <tr>
          <td><label> 상품</label> <input style="width:580px;" type="text" value="Regional MVSAT" disabled> </td>
          <td><label> 약정종료일</label> <input type="text" value="2022-12-01" disabled> </td>
        </tr>
      </table>
        <table>
        <tr>
          <td><label> 부가정보</label> <input style="width:940px;" type="text" value="오늘 점심 메뉴는 무엇일까요" disabled> </td>
          <!-- <td><label> 약정종료일</label> <input type="text" value="2022-12-01" disabled> </td> -->
        </tr>
      </table>
       </div>
    </div>

    <div class="shipInfo" >
      <div style="margin: 10px ;">
        <span>
      <span style="background-color: #2dbdb6; border-radius: 5px; font-size:20px; color: #ffffff">▶</span>
      <span style="font-weight: bold; font-size:25px;">선박정보</span>
      </span>
      <div style="width: 95%; border: groove; padding:10px 0 10px 50px;  border: ridge; margin-bottom:5px;">
      <table>
        <tr>
          <td><label> 선박ID</label> <input type="text" value="Going Merry" disabled> </td>
          <td><label> 선박명</label> <input type="text" value="고잉메리호" disabled> </td>
          <td><label> IMO Number</label> <input type="text" value="  " disabled> </td>
        </tr>
        </table>
        </div>
    </div>
    </div>

    <div class="svOrgInfo" >
      <div style="margin: 10px ;">
      <span>
      <span style="background-color: #2dbdb6; border-radius: 5px; font-size:20px; color: #ffffff">▶</span>
      <span style="font-weight: bold; font-size:25px;">영업조직정보</span>
      </span>

      <div style="width: 95%; border: groove; padding:10px 0 10px 50px;  border: ridge; margin-bottom:5px;">
      <table>
        <tr>
          <td><label> 영업조직</label> <input type="text" value="해양고객팀(C11116666)" disabled> </td>
          <td><label> 영업담당자</label> <input type="text" value="김해양" disabled> </td>
          <td><label> 승인상태</label> <input type="text" value="승인" disabled> </td>
        </tr>
        </table>
        </div>
        </div>
      </div>


    <div class="ContMemInfo" style="disply: inline-block;" >
      <div style="margin-top: 10px ;">
        <div>
        <span>
      <span style="background-color: #2dbdb6; border-radius: 5px; font-size:20px; color: #ffffff">▶</span>
      <span style="font-weight: bold; font-size:25px; margin:0 20px 5px 0px; ">청구계정 정보</span>
      </span>
        <span>
          <table style="display:inline-block;" >
            <tr>
              <td>
                <select style="width: 150px; height: 30px; ">
                <option selected disabled value="">선택</option>
                <option value="A">고객ID</option>
                <option value="B">계약ID</option>
                <option value="C">선박ID</option>
                <option value="D">청구계정ID</option>
              </select>
              <input style="background-color: white; width:150px; height: 25px;" type="text">
              </td>
            </tr>
          </table>
          </span>
      </div>
      <div style="width: 95%; height:230px; border: groove; padding:10px 0 10px 50px;  border: ridge; margin-bottom:5px;">
      <table class="accountInfo">
        <tr>
          <td><label> 청구계정ID</label> <input type="text" value="S00000002710" disabled> </td>
          <td><label> 수신인</label> <input type="text" value="MVSAT" disabled> </td>
        </tr>
        <tr>
          <td><label> 결제통화</label> <input type="text" value="2022-10-19 09:59:31 " disabled> </td>
          <td><label> 납부방법</label> <input type="text" value="36개월 약정" disabled> </td>
        </tr>
        <tr>
          <td><label> 수신 E-Mail</label> <input type="text" value="Regional MVSAT" disabled> </td>
          <td><label> 납부일자</label> <input type="text" value="2022-12-01" disabled> </td>
        </tr>
      </table>
        <table  class="accountInfo">
        <tr>
          <td><label> 청구서표기명</label> <input style="width:940px;" type="text" value="엘토스커뮤니케이션(주)" disabled> </td>
          </tr><tr>
          <td><label> 주소</label> <input style="width:940px;" type="text" value="서울특별시 서초구 효령로 1476 ktds" disabled> </td>
        </tr>
         </table>
    <div style="float:right; margin-right:70px;" >
    <button style="height:30px; margin-right:5px;">수시청구계정등록</button>
    <button style="height:30px; margin-right:5px;" >청구계정등록</button>
    <button style="height:30px; margin-right:5px;" > 청구계정조회/수정</button>
    <button style="height:30px; margin-right:5px;" > 청구계정변경</button>
    </div>
    </div>
    </div>
    </div>
    

    <div class="feeInfo" style="margin-left:20px; margin-top:20px; disply: inline-block;" >
      <span>
      <span style="background-color: #2dbdb6; border-radius: 5px; font-size:20px; color: #ffffff">▶</span>
      <span style="font-weight: bold; font-size:25px;">요금정보</span>
      </span>

      <div style="height:100%; width:100%;">
          <ag-grid-component
              :rowData="rowData1"
              :columnDefs="columnDefs1"
              :isWidthFit="false"
          />
          </div>
    </div>
    


  </div>
</div>

</template>

<script>
import AgGridComponent from "@/components/common/AgGridComponent";
import TreeItem from "@/components/common/TreeItem.vue"
// import Section from "@/components/Section";
export default {
  name: "ContMgt",
  components: {
    AgGridComponent,
    TreeItem,
    },
  data() {
    return{
      treeData,
      gridOptions : null,
      columnDefs1: [
        { headerName: "결제통화",field: "model0",headerClass: "ag-header-first-child",},
        { headerName: "요금항목명", field: "model1" },
        { headerName: "요금항목구분명", field: "model2" },
        { headerName: "협정금액", field:      "model3" },
        { headerName: "협정할인금액", field:  "model4" },
        { headerName: "협정청구금액", field:  "model5" },
        { headerName: "유효시작일", field:    "StartDate" },
        { headerName: "유효종료일", field:    "EndDate" },
      ],
      rowData1: [
        {model0:"KRW",model1:"기본료",  model2:"정액요금", model3 :"133,500,000",model4:"1,500,000", model5:"132,000,000",model6:"0", model7:"0", StartDate: "2021-10-19", EndDate:"2023-12-31"},
        {model0:"KRW",model1:"프리미엄요금",model2:"정액요금", model3 :"220,225,000",model4:"225,000", model5:"220,000,000",model6:"0", model7:"0", StartDate: "2022-05-31", EndDate:"2024-07-31"},
        {model0:"KRW",model1:"설치비", model2:"정액요금", model3 :9200000000,model4:3000000, model5: 66665222  ,model6:"0", model7:"0", StartDate: "2022-10-19", EndDate:"2025-09-31"},        {model0:"KRW",model1:"기본료",  model2:"정액요금", model3 :"133,500,000",model4:"1,500,000", model5:"132,000,000",model6:"0", model7:"0", StartDate: "2021-10-19", EndDate:"2023-12-31"},
        {model0:"KRW",model1:"프리미엄요금",model2:"정액요금", model3 :"220,225,000",model4:"225,000", model5:"220,000,000",model6:"0", model7:"0", StartDate: "2022-05-31", EndDate:"2024-07-31"},
        {model0:"KRW",model1:"설치비", model2:"정액요금", model3 :9200000000,model4:3000000, model5: 66665222  ,model6:"0", model7:"0", StartDate: "2022-10-19", EndDate:"2025-09-31"},
        {model0:"KRW",model1:"기본료",  model2:"정액요금", model3 :"133,500,000",model4:"1,500,000", model5:"132,000,000",model6:"0", model7:"0", StartDate: "2021-10-19", EndDate:"2023-12-31"},
        {model0:"KRW",model1:"프리미엄요금",model2:"정액요금", model3 :"220,225,000",model4:"225,000", model5:"220,000,000",model6:"0", model7:"0", StartDate: "2022-05-31", EndDate:"2024-07-31"},
        {model0:"KRW",model1:"설치비", model2:"정액요금", model3 :9200000000,model4:3000000, model5: 66665222  ,model6:"0", model7:"0", StartDate: "2022-10-19", EndDate:"2025-09-31"},

      ],
    }
  },
  }

const treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        }
      ]
    }
  ]
}
</script>

<style scoped>

.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}

div.layout{
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow-y: scroll;
}
div.section0 {
  display: inline-block;
  position: relative;
  /* top: 177px; border: #F00 solid 1px; */
  min-height: calc(100% - 297px);
  padding: 40px 0 143px;
  box-sizing: border-box;
}

div.section0 > div.cusInfo0 {
  display: inline-block;
  float: left;
  width: 90vw;
  margin: 10px;
  height: auto;
}
.cusInfo0 table tr > td > label {
  display:inline-block;
  width: 70px;
  padding-left: 10px;
}
div.section0 > div.cusInfo {
  display: inline-block;
  float: left;
  height: auto;
  width: 90vw;
  margin: 10px;
}
.cusInfo table tr > td > label {
  display:inline-block;
  width: 70px;
  padding-left: 30px;
  font-size: 17px;
}
.cusInfo table tr > td > input{
  /* background-color: antiquewhite; */
  width: 250px;
}
div.section0 > div.cmProducts{
  display: inline-block;
  float: left;
  width: 45vw;
  margin: 0 10px auto;
  padding:0 0 10px auto;
  height: 400px;
  border: groove;
}
div.section0 > div.ContMemInfo {
  display: inline-block;
  float: left;
  width: 46vw;
  height: 350px;
  /* border: groove; */
}

.ContMemInfo table.accountInfo tr > td > label{
  display:inline-block;
  width: 120px;
  height : 30px;
  font-size: 18px;
}
.ContMemInfo table.accountInfo tr > td > input{
  width: 401px;
  height : 30px;
  font-size: 20px;
}

div.section0 > div.CommonInfo{
  display:inline-block;
  width: 44vw;
  margin: 0 auto auto 15px;
  padding:0 0 10px auto;
  height: 250px;
  /* border: groove; */
}

.CommonInfo table tr > td > label{
  display:inline-block;
  width: 115px;
  height : 30px;
  font-size: 18px;
}
.CommonInfo table tr > td > input{
  
  width: 225px;
  height : 30px;
  font-size: 20px;
}


.CommonInfo table.selectSearch tr > td > label{
  display:inline-block;
  width: 80px;
  height : 30px;
  font-size: 20px;
}

div.section0 > div.shipInfo{
  
  float: left;
  width: 44vw;
  margin: 0 auto auto 15px;
  padding:0 0 10px auto;
  height: 100px;

  /* border: groove; */
}

.shipInfo table tr > td > label {
  display:inline-block;
  width: 115px;
  height : 30px;
  font-size: 18px;
  border: 1px;
} 

.shipInfo table tr > td > input {
  width: 220px;
  height : 30px;
  font-size: 20px;
} 


div.section0 > div.svOrgInfo{
  float: left;
  width: 44vw;
  margin: 0 auto auto 15px;
  padding:0 0 10px auto;
  height: 100px;

  /* border: groove; */
}


.svOrgInfo table tr > td > label {
  display:inline-block;
  width: 115px;
  height : 30px;
  font-size: 18px;
  border: 1px;
}

.svOrgInfo table tr > td > input {
  /* margin-left: 5px; */
  width: 220px;
  height : 30px;
  font-size: 20px;
}


div.section0 > div.feeInfo{
  float: left;
  width: 44vw;
  /* border: solid; */
  /* margin: 0 auto auto 0px; */
  padding:0 0 10px auto;
  height: 300px;
}
</style>