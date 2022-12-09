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