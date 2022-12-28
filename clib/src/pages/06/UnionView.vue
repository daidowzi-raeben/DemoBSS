<template>
  <div class="container">
    <h1 style="font-size: 30px">AutRetvComponent</h1>
    <div class="commondiv1">
      <aut-retv-component
          :title="'조회기준'"
          :sel-default-value="'조회기준 선택'"
          :cd-group="'orgBase'"
          @input="(value)=>{
        this.selectValues.searchValue = value[0];
        this.selectValues.selValue = value[1];
      }"
      />
    </div>
    <p>- 권한매핑 관리페이지에서 사용된 조회폼 </p>
    <p>- title : 제목명</p>
    <p>- selDefaultValue : 셀렉트 박스 기본 값</p>
    <p>- cdGroup : 셀렉트 박스에 넣을 데이터에 대한 코드그룹</p>
    <br />

    <h1 style="font-size: 30px">blc2Component</h1>
    <div class="commondiv1">
      <div style="width: 1000px;  height: 300px;">
        <blc2-component
            :sub-info-title-nm="'청약리스트'"
            :row-data="rowData"
            :column-defs="columnDefs"
            :select-box-show="false"
            :cdGroup="'optionsSearchDiv'"
            :btnName1="'일괄정지 신청'"
            :btnName2="'숨김해제'"
            :btnName3="'엑셀 다운로드'"
            :agGirdHeight="'500px'"
          />
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <p>- 청약리스트 페이지에서 사용된 청약리스트 테이블 폼 </p>
      <p>- subInfoTitleNm : 해당 오브젝트에 대한 제목명</p>
      <p>- rowData : Ag Grid에 들어갈 행 데이터</p>
      <p>- columnDefs : Ag Grid에 들어갈 컬럼 데이터</p>
      <p>- selectBoxShow : 셀렉트 박스 출력 여부</p>
      <p>- agGirdHeight : Ag Grid 셀의 높이</p>
      <p>- cdGroup : 셀렉트 박스에 넣을 데이터에 대한 코드그룹</p>
      <p>- btnName1~3 : 버튼 3개에 대한 버튼명</p>
    </div>
    <br />


    <h1 style="font-size: 30px">blcComponent</h1>
    <div class="commondiv1">
      <div style="width: 1000px;  height: 300px;">
        <blc-component
            :sub-info-title-nm="'요금정보'"
            :row-data="rowData"
            :column-defs="columnDefs"
            :select-box-show="false"
            :cdGroup="'optionsSearchDiv'"
            :btnName="'엑셀다운'"
            style="height: 110%"
        />
      </div>
      <p>- AgGrid와 제목, 버튼을 포함한 정보 출력 폼 </p>
      <p>- subInfoTitleNm : 해당 오브젝트에 대한 제목명</p>
      <p>- rowData : Ag Grid에 들어갈 행 데이터</p>
      <p>- columnDefs : Ag Grid에 들어갈 컬럼 데이터</p>
      <p>- selectBoxShow : 셀렉트 박스 출력 여부</p>
      <p>- agGirdHeight : Ag Grid 셀의 높이</p>
      <p>- cdGroup : 셀렉트 박스에 넣을 데이터에 대한 코드그룹</p>
      <p>- headerColor: Ag Grid 헤더 색상</p>
      <p>- btnName : 버튼에 대한 버튼명</p>
    </div>
    <br />

    <h1 style="font-size: 30px">custInfoComponent</h1>
    <div class="commondiv1">
      <div style="width: 1560px;  height: 200px;">
        <cust-info-component />
      </div>
      <p>- 고객에 대한 정보를 보여주는 고객 정보 출력 테이블 폼 </p>
      <p>- custInfo : 고객에 대한 정보를 담은 객체</p>

    </div>
    <br />

    <h1 style="font-size: 30px">custRetvComponent</h1>
    <div class="commondiv1">
      <div style="width: 1000px;  height: 50px;">
        <cust-retv-component />
      </div>
      <p>- 고객에 대한 정보를 조회하기 위한 고객 조회 폼 </p>
      <p>- cdGroup : 셀렉트 박스에 넣을 데이터에 대한 코드그룹</p>

    </div>
    <br />

    <h1 style="font-size: 30px">PostCodeComponent</h1>
    <span></span>
    <div class="commondiv1">
      <div>
        <table style="border:1px solid" >
          <tr>
            <th> <label-component :labelNm="'우편번호'" /> </th>
            <td> <input-component :value="postCodeObj.zipNo" /> </td>
          </tr>
          <tr>
            <th> <label-component :labelNm="'도로명주소'" /> </th>
            <td> <input-component :value="postCodeObj.roadAddr" /> </td>
          </tr>
          <tr>
            <th> <label-component :labelNm="'지번주소'" />   </th>
            <td> <input-component :value="postCodeObj.jibunAddr" /> </td>
          </tr>
          <tr>
            <th> <label-component :labelNm="'상세주소'" /> </th>
            <td> <input-component :value="postCodeObj.detailPostAddress" /> </td>
          </tr>
        </table>
      </div>
    </div><div>
    <span> 주소 검색  </span>
    <input-component
        :inputClass="'class5'"
        style="width:210px; margin:0 3px;"
        :height="'30px'"
        :placeholder="'주소를 입력해 주세요.'"
        @click="postCodePopup"
    />
    <button-component
        @click="postCodePopup"
        :btnClass="'btnClass3'"
        :btnName="'주소 검색'"
        :btnHeight="'30px'"
    />
    <post-code-component
        @FormPopup="isPostCodeModalShow = false"
        @selected-juso-data="selectedJuso"
        :formDataPopupFrameWidth="'800px'"
        :PopupTitleMsg="'주소 검색'"
        :reqtype="'searchPostCode'"
        ref="PostCodeComponent"
        v-if="isPostCodeModalShow"
        :btnClicked ="0"
    />
    <p>- 주소 검색을 위해 만든 주소 조회 팝업 폼</p>
    <p>- 주소를 검색하여 선택하면 상단의 테이블에 데이터가 들어가게 된다.</p>
    <p>- 데이터는 @selectedJusoData를 통해 전달받는다. 전달받은 데이터는 selectedJuso 함수에서 변수에 넣어진다.</p>
    <br /><br /><br />
  </div>

    <h1 style="font-size: 30px">RetvCondComponent</h1>
    <div class="commondiv1">
      <div style="width: 1400px;  height: 50px;">
        <retv-cond-component
            :retvCondNm="'조회기준'"
            :selectCdGroup="'retvCond'"
            :selectDefltValue="'조회기준 선택'"
        />
      </div>
      <p>- 메뉴 관리 페이지에서 사용한 메뉴 조회 폼 </p>
      <p>- retvCondNm : 셀렉트 박스에 넣을 데이터에 대한 코드그룹</p>
      <p>- selectCdGroup : 셀렉트 박스에 넣을 데이터에 대한 코드그룹</p>
      <p>- selectDefltValue: 셀렉트 박스 기본 값 </p>

    </div>
    <br />

    <h1 style="font-size: 30px">SubsRetvComponent</h1>
    <div class="commondiv1">
      <div style="width: 1400px;  height: 150px;">
        <subs-retv-component
            cd-group="'retvCond'"
        />
      </div>
      <p>- 청약 리스트 페이지에서 사용한 청약 조회 폼 </p>
      <p>- cdGroup : 셀렉트 박스에 넣을 데이터에 대한 코드그룹</p>
    </div>
    <br />

    <h1 style="font-size: 30px">UserAdmRetvComponent</h1>
    <div class="commondiv1">
      <div style="width: 1400px;  height: 100px;">
        <user-adm-retv-component />
      </div>
      <p>- 사용자관리 페이지에서 사용한 사용자 조회 폼 </p>
      <p>- cdGroup : 셀렉트 박스에 넣을 데이터에 대한 코드그룹</p>
    </div>
    <br />


  </div>
</template>

<script>
import ApiMixin from "@/service/common.js";
import AutRetvComponent from "@/components/UnionForm/AutRetvComponent";
import blc2Component from "@/components/UnionForm/Blc2Component";
import blcComponent from "@/components/UnionForm/BlcComponent";
import custInfoComponent from "@/components/UnionForm/CustInfoComponent";
import custRetvComponent from "@/components/UnionForm/CustRetvComponent";
import inputComponent from "@/components/common/InputComponent";
import postCodeComponent from "@/components/UnionForm/PostCodeComponent";
import labelComponent from "@/components/common/LabelComponent";
import buttonComponent from "@/components/common/ButtonComponent";
import retvCondComponent from "@/components/UnionForm/RetvCondComponent";
import subsRetvComponent from "@/components/UnionForm/SubsRetvComponent";
import userAdmRetvComponent from "@/components/UnionForm/UserAdmRetvComponent";
import FileAgGridComponent from "@/components/UnionForm/FileAgGridComponent.vue";
export default {
  mixins:[ApiMixin],
  name: "UnionView",
  components: {
    custInfoComponent,
    userAdmRetvComponent,
    subsRetvComponent,
    retvCondComponent,
    custRetvComponent,
    AutRetvComponent,
    blc2Component,
    blcComponent,
    inputComponent,
    postCodeComponent,
    labelComponent,
    buttonComponent,
    FileAgGridComponent
},
  data() {
    return {
      columnDefs: [],
      rowData: [],
      postCodeObj : {},
      isPostCodeModalShow : false,
    }
  },
  created() {
  },
  methods: {
    postCodePopup(){
      if (this.isPostCodeModalShow == false) this.isPostCodeModalShow = true
      else this.isPostCodeModalShow = false
      // this.$refs.postCodePopup.GetSubmitFormData()
    },
    selectedJuso(postCodeData,detailPostAddress){
      this.postCodeObj = postCodeData;
      this.postCodeObj["detailPostAddress"] = detailPostAddress
      this.isPostCodeModalShow = false;
    },
  },
  async beforeMount() {
    await this.$connect("application/json", "/info.json", "get", "")
        // await this.$connect("application/json", "/columnDefs", "get", "")
        .then((res) => {
          console.log(res);
          this.columnDefs = res.data.subsLstColumnDefs;
          this.rowData = res.data.subsLstRowData;
        })
        .catch((e) => {
          console.log(e);
        });
  },
};
</script>

<style scoped>
.container{
  display:grid;
  grid-template-columns:minmax(860px, 1fr) ;
}

.commondiv0{
  border-top: solid black 1px;
  margin: 10px;
  padding: 10px
}

.commondiv1{
  border-top: solid black 1px;
  margin: 10px;
  padding: 10px;
}

.commondiv2{
  width: 80%;
  margin: 10px;
  padding: 10px;
  height: 300px;
  display: inline-block;
  border-top: solid black 1px;
}
</style>
