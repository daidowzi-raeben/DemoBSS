<template>
<article class="UserAdmContainer">
  <div class="item1">
    <user-adm-retv-component />
  </div>
  
  <div class="item2">
    <div>
      <sub-info-title :subInfoTitleNm="subInfoTitleNm_Item2"/>
      <p style="margin-left:5px; display:inline-block;">(총 <label style="font-weight: bold">{{total}}</label>건)</p>
      <span style="float: right">
        <button-component :btnClass="'btnClass3'" :btnName="btnName1" @click="clickUserRegister()"/>
        <button-component :btnClass="'btnClass3'" :btnName="btnName2" @click="clickUserAmend()"/>
        <button-component :btnClass="'btnClass3'" :btnName="btnName3" />
        <button-component :btnClass="'btnClass3'" :btnName="btnName4" />
      </span>
    </div>
    <div>
      <ag-grid-component-2
      :rowData="rowData"
      :columnDefs="columnDefs"
      :rowHeight="rowHeight"
      />
      <div class="pcSelectAndPagingFlex" > 
        <div>
        <paging-area 
        class="pcPagingArea"
        ref="PagingArea"
        :pageableData="pageableData"
        style="padding:0;"
        @currentPage="(value) => {currentPage = value;}"
        />
        </div><div>
        <select-box-component
        class="pcSelectBox"
        :selectClass="'select_input3'"
        :cdGroup="'optionSearchNum'"
        :defaultValue="'선택'"
        :defaultcdId="showTheNum"
        :isDisabled="true"
        v-model="showTheNum"
        @input=" (value) => { showTheNum = value;}"
        />
        </div>
      </div>
    </div>
  </div>

  <div class="item3">
    
    <div>
      <sub-info-title :subInfoTitleNm="subInfoTitleNm_Item3"/>
      <span style="float: right">
        <button-component :btnClass="'btnClass3'" :btnName="userAdmObject.sttus=='amend'? '변경':'등록'" />
      </span>
    </div>
    
    <div>
      <form action="">
        <table class="userDtlInfoTable">
          <tr>
            <th><label-component :labelNm="'사번'"/> </th>
            <td> 
              <input-component 
              :class6Width="'180px'" 
              :input-class="userAdmObject.inputClass" 
              :disabled="userAdmObject.isDisabled"
              :value="userAdmObject.cmpno" 
              :placeholder="'사번 입력'"
              />  
            </td>
            <th><label-component :labelNm="'재직상태'"/> </th>
            <td>           </td>
          </tr>

          
          <tr>
            <th><label-component :labelNm="'사용자명'"/> </th>
            <td> <input-component 
            :input-class="'class6'" 
            :class6Width="'180px'" 
            :value="userAdmObject.userNm" 
            :placeholder="'이름 입력'"
            />   </td>
            <th><label-component :labelNm="'사용여부'"/> </th>
            <td> radio </td>
          </tr>

          
          <tr>
            <th><label-component :labelNm="'알림방법'"/> </th>
            <td> 셀렉트박스 </td>
            <th><label-component :labelNm="'OTP사용여부'"/> </th>
            <td>           </td>
          </tr>

          
          <tr>
            <th><label-component :labelNm="'조직'"/> </th>
            <td colspan="2">
              <input-component 
            :input-class="'class6 class6_2'" 
            :class6Width="'180px'" 
            :disabled="true"
            :value="userAdmObject.org" 
            :placeholder="' 조직검색 '"
            />   </td>
            <td>           </td>
          </tr>

          
          <tr>
            <th><label-component :labelNm="'직책'"/> </th>
            <td>            </td>
            <th><label-component :labelNm="'직무'"/> </th>
            <td>           </td>
          </tr>

          
          <tr>
            <th><label-component :labelNm="'이메일주소'"/> </th>
            <td colspan="3">
              <input-component 
              :input-class="'class6 '" 
              :class6Width="'180px'" 
              :value="userAdmObject.email" 
              :placeholder="' 이메일주소 '"
              />
            </td>
          </tr>

          
          <tr>
            <th><label-component :labelNm="'휴대전화번호'"/> </th>
            <td colspan="3">
              <input-component 
              :input-class="'class6 '" 
              :class6Width="'180px'" 
              :value="userAdmObject.mphon" 
              :placeholder="' 휴대 전화 번호 '"
              />
            </td>
          </tr>
          <tr>
            <th><label-component :labelNm="'전화번호'"/> </th>
            <td colspan="3">
              <input-component 
              :input-class="'class6 '" 
              :class6Width="'180px'" 
              :value="userAdmObject.ppon" 
              :placeholder="' 전화번호 '"
              />
            </td>
          </tr>

          <tr>
            <th><label-component :labelNm="'비밀번호'"/> </th>
            <td colspan="3">
              <input-component 
              :input-class="userAdmObject.inputClass"
              :disabled="userAdmObject.isDisabled"
              :class6Width="'180px'"  
              :value="userAdmObject.pwd"
              :placeholder=" userAdmObject.sttus=='register'? '비밀번호 입력':''" /> 
            </td>
          </tr>

          <tr>
            <th><label-component :labelNm="'비밀번호변경일'"/> </th>
            <td colspan="3"> 
            <input-component 
            :input-class="'class6 class6_2'" 
            :class6Width="'180px'" 
            :disabled="true"
            :value="userAdmObject.pwdChgDt" 
            :placeholder="' - '"
            />   </td>
          </tr>
          
          <tr>
            <th><label-component :labelNm="'최종로그인일시'"/> </th>
            <td colspan="3">
              <input-component 
            :input-class="'class6 class6_2'" 
            :class6Width="'180px'" 
            :disabled="true"
            :value="userAdmObject.lastLogIn" 
            :placeholder="' - '"
            />   
            </td>
          </tr>
          
          <tr>
            <th><label-component :labelNm="'로그인실패'"/> </th>
            <td colspan="3"><input-component 
            :input-class="'class6 class6_2'" 
            :class6Width="'180px'" 
            :disabled="true"
            :value="userAdmObject.failLogIn" 
            :placeholder="' - '"
            />   </td>
          </tr>
          
          <tr>
            <th><label-component :labelNm="'등록자/등록일시'"/> </th>
            <td colspan="3"><input-component 
            :input-class="'class6 class6_2'" 
            :class6Width="'180px'" 
            :disabled="true"
            :value="userAdmObject.regrDt" 
            :placeholder="' 2022-12-09 20:03:30 '"
            />   </td>
          </tr>
          
          <tr>
            <th><label-component :labelNm="'수정자/수정일시'"/> </th>
            <td colspan="3"><input-component 
            :input-class="'class6 class6_2'" 
            :class6Width="'180px'" 
            :disabled="true"
            :value="userAdmObject.amdrDt" 
            :placeholder="' 2022-12-09 19:20:30 '"
            />   </td>
          </tr>
        </table>

      </form>
      
    </div>
  </div>
</article>


</template>

<script>
import UserAdmRetvComponent from '@/components/common/UserAdmRetvComponent.vue'
import AgGridComponent2 from '@/components/common/AgGridComponent2.vue'
import ApiMixin from "@/service/common.js";
import SubInfoTitle from '@/components/common/SubInfoTitle.vue';
import ButtonComponent from '@/components/common/ButtonComponent.vue';
import SelectBoxComponent from '@/components/common/SelectBoxComponent.vue';
import PagingArea from '@/components/common/PagingArea.vue';
import LabelComponent from '@/components/common/LabelComponent.vue';
import InputComponent from '@/components/common/InputComponent.vue';

export default {
  mixins:[ApiMixin],
  components: { UserAdmRetvComponent, AgGridComponent2, SubInfoTitle, ButtonComponent, SelectBoxComponent, PagingArea, LabelComponent, InputComponent },
  data(){
    return{
      subInfoTitleNm_Item2:"사용자 리스트",
      subInfoTitleNm_Item3:"사용자 상세정보",
      total: "65",
      btnName1 : '등록',
      btnName2 : '변경',
      btnName3 : '숨김해제',
      btnName4 : '액셀다운로드',
      rowHeight:'48',
      rowData:[],
      columnDefs:[
        { headerName: "선택",      field: "select",       width:80,  cellClass: 'cell-span', checkboxSelection:true, 
        cellStyle:()=> {return {'pointer-events':'none' };}
        },
        { headerName: "사번",      field: "CMPNO",     width:110,  cellClass: '"cell"-span'},
        { headerName: "사용자명",  field: "userNm",      width:130,  cellClass: 'cell-span'},
        { headerName: "재직상태",  field: "inofficeSttus", width:90,  cellClass: 'cell-span'},
        { headerName: "조직",      field: "org",   width:140,   cellClass: 'cell-span'},
        { headerName: "직책",      field: "rspof", width:130,  cellClassRules: { 'cell-span': "true", }},
        { headerName: "직무",      field: "duty", width:158,  cellClassRules: { 'cell-span': "true", }}  
      ],
      
      pageableData: {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 10,
        totalPages: 30,
        },
        currentPage:'',
      userAdmObject:{ 
        sttus : "amend",
        inputClass : "class6 class6_2",
        isDisabled: true,
        cmpno:"사번",
        userNm:"사용자명",
        org:"조직",
        rspof: "직책",
        email : "이메일주소",
        mphon:"휴대전화번호",
        ppon:"전화번호",
        pwd : "비밀번호",
        pwdChgDt:"비밀번호변경일",
        lastLogIn:"최종로그인일시",
        failLogIn : "로그인실패",
        regrDt:"등록자/등록일시",
        amdrDt:"수정자/수정일시",
        }
    }
  },
  async beforeMount() {
    await this.$connect('application/json','/info2.json','get','').then((res)=>{
      this.rowData = res.data.userRowData;
      console.log(this.rowData);
    }).catch((e)=>{
      console.log(e);
    });
  },
  methods:{
    clickUserRegister(){
      if(this.userAdmObject.sttus=="amend"){
        this.userAdmObject.sttus = "register" ;
        this.userAdmObject.inputClass = "class6"; 
        this.userAdmObject.isDisabled = false;
        this.userAdmObject.cmpno = null;
        this.userAdmObject.userNm = null;
        this.userAdmObject.org = null;
        this.userAdmObject.rspof = null;
        this.userAdmObject.email  = null;
        this.userAdmObject.mphon = null;
        this.userAdmObject.ppon = null;
        this.userAdmObject.pwd  = null;
        this.userAdmObject.pwdChgDt = null;
        this.userAdmObject.lastLogIn = null;
        this.userAdmObject.failLogIn   = null;
        this.userAdmObject.regrDt = null;
        this.userAdmObject.amdrDt = null;
        console.log(this.userAdmObject);
      }
    },
    clickUserAmend(){
      if(this.userAdmObject.sttus=="register") {
        this.userAdmObject.sttus = "amend" ;
        this.userAdmObject.inputClass = "class6 class6_2";
        this.userAdmObject.isDisabled = true;
        console.log(this.userAdmObject);
      }
    }
    
  }

}
</script>

<style scoped>
.UserAdmContainer{
  display: grid;
  grid-template-columns: 850px 700px 1fr;
  grid-template-rows: 100px 640px 1fr;
  gap: 20px 30px;
}

.UserAdmContainer > .item1{
  grid-row: 1;
  grid-column: 1/3;
  background-color: burlywood;
}
.UserAdmContainer > .item2{
  grid-row: 2;
  grid-column: 1;
}
.UserAdmContainer > .item3{
  grid-row: 2;
  grid-column: 2;
}
.item2 > div:nth-child(1){
  width: 100%;
  height: 25px;
}
.item2 > div:nth-child(2){
  width: 100%;
  height: calc(100% - 100px);
  margin-top: 5px;
  
}

.pcSelectAndPagingFlex{ 
  font-size:20px; 
  margin-top:20px;
  display:grid;
  grid-template-columns: 100px calc(100% - 200px) 100px;
  }

.pcSelectAndPagingFlex > div:nth-child(1) {
  grid-column: 2;
  padding: 0px;
}
.pcSelectAndPagingFlex > div:nth-child(2) {
  grid-column: 3;
  width:100px;
  height:22px;
}

.userDtlInfoTable{
  width: 100%;
  border-collapse: collapse;
}
.userDtlInfoTable tr{
  height: 40px;
}
.userDtlInfoTable th{
  width: 15%;
  border: 1px solid #bdbdbd;
  text-align: left;
  padding-left: 1%;
  background-color: rgb(247, 247, 248);
  
}
.userDtlInfoTable td{
  width: 33%;
  padding-left: 1%;
  border: 1px solid #bdbdbd;
}
</style>