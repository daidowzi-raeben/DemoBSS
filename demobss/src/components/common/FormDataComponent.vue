<template>  
  <div 
  v-show="FormDataclass=='InfoOfOrg'"
  class="InfoOfOrg">
    <div>
      <SubInfoTitle
      :subInfoTitleNm='subInfoTitleNm'
      />
      <table id="selectSearch" >
        <tr>
          <th> BM </th>
          <td> 
            <SelectBoxComponent
              :selectClass="'select_input2'"
              :cdGroup="'optionsSearchDiv'"
              :defaultValue="'선택'"
              v-model="searchDiv1"
              @input="(value) => {searchDiv1 = value;}" />
          </td>
          <th> Service </th>
          <td>
            <SelectBoxComponent
              :selectClass="'select_input2'"
              :cdGroup="'optionsSearchDiv'"
              :defaultValue="'선택'"
              v-model="searchDiv1"
              @input="(value) => {searchDiv1 = value;}" />
          </td>
          <td>
            <ButtonComponent
            :btnClass="'btnClass3'"
            :btnName="'조회'"
            />
          </td>
        </tr>
      </table>

      <!-- 정보 Data Form -->
      <table class="formDataTable">
          <tr v-for="item in DataOfOrg" :key="item" >
            <th > {{item.thId}} </th>
            <td > <input type="text" :value='item.tdId' disabled /> </td>
            <th > {{item.thBm}} </th>
            <td > <input type="text" :value='item.tdBm' disabled /> </td>
            <th > {{item.thP}} </th>
            <td > <input type="text" :value='item.tdP'  disabled /></td>
        </tr>
      </table>
    </div>
  </div>

<div 
  v-show="FormDataclass=='InfoOfShip'"
  class="InfoOfShip">
    <div>
      <SubInfoTitle
      :subInfoTitleNm='subInfoTitleNm'
      />
      

      <!-- 정보 Data Form -->
      <table class="formDataTable">
          <tr v-for="item in DataOfShip" :key="item" >
            <th > {{item.thId}} </th>
            <td > <input type="text" :value='item.tdId' disabled /> </td>
            <th > {{item.thBm}} </th>
            <td > <input type="text" :value='item.tdBm' disabled /> </td>
            <th > {{item.thP}} </th>
            <td > <input type="text" :value='item.tdP'  disabled /></td>
        </tr>
      </table>
    </div>
  </div>

  <div 
  v-show="FormDataclass=='InfoOfBasic'"
  class="InfoOfBasic">
    <div>
      <SubInfoTitle
      :subInfoTitleNm='subInfoTitleNm'
      />
      <table style=" display: inline-block; float: right;">
        <tr>
          <td>
            <SelectBoxComponent
            :selectClass="'select_input3'"
            :cdGroup="'optionsSearchDiv'"
            :defaultValue="'선택'"
            v-model="searchDiv1"
            @input=" (value) => { searchDiv1 = value;}"
            />
            
            <InputComponent
            :type="'text'"
            :inputClass="'ContMemInfo_inputbox'"
            v-model="searchValue2"
            :placeholder="'내용 입력'"
            @input=" (value) => { searchValue2 = value;}"
            />
            <ButtonComponent
            :btnClass="'btnClass3'"
            :btnName="'조회 버튼'"
            style="height:25px;"
          />
          </td>
        </tr>
      </table>
      <table class="formDataTable">
          <tr v-for="item in DataOfBasic" :key="item" >
            <th > {{item.thId}} </th>
            <td > <input type="text" :value='item.tdId' disabled /> </td>
            <th v-show="item.th0"> {{item.th0}} </th>
            <td v-show="item.td0"> <input type="text" :value='item.td0' disabled /> </td>
            <th v-show="item.th1"> {{item.th1}} </th>
            <td v-show="item.td1"> <input type="text" :value='item.td0' disabled /> </td>
        </tr>
      </table>
    </div>
  </div>

  
  <div 
  v-show="FormDataclass=='InfoOfAccount'"
  class="InfoOfAccount">
    <div>
      <SubInfoTitle
      :subInfoTitleNm='subInfoTitleNm'
      />
      <table style=" display: inline-block; float: right;">
        <tr>
          <td>
            <SelectBoxComponent
            :selectClass="'select_input3'"
            :cdGroup="'optionsSearchDiv'"
            :defaultValue="'선택'"
            v-model="searchDiv1"
            @input=" (value) => { searchDiv1 = value;}"
            />
            <InputComponent
            :type="'text'"
            :inputClass="'ContMemInfo_inputbox'"
            v-model="searchValue2"
            :placeholder="'내용 입력'"
            @input=" (value) => { searchValue2 = value;}"
            />
            <ButtonComponent
            :btnClass="'btnClass3'"
            :btnName="'조회 버튼'"
            style="height:25px;"
          />
          </td>
        </tr>
      </table>
      <table class="formDataTable">
          <tr v-for="item in DataOfAccount" :key="item" >
            <th > {{item.thId}} </th>
            <td > <input type="text" :value='item.tdId' disabled /> </td>
            <th > {{item.th0}} </th>
            <td > <input type="text" :value='item.td0' disabled /> </td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script>
import SubInfoTitle from "@/components/common/SubInfoTitle.vue";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import InputComponent from "@/components/common/InputComponent.vue";
import SelectBoxComponent from "@/components/common/SelectBoxComponent.vue";

export default {
  components:{
    SubInfoTitle,
    SelectBoxComponent,
    InputComponent,
    ButtonComponent
    },
  data(){
    return{
      DataOfOrg: [
        { 
          thId:'영업조직',    tdId:"기업고객팀", 
          thBm:'영업담당자',  tdBm:"김영업", 
          thP:'승인상태',     tdP:"승인" 
        },
      ],
      DataOfShip: [
        { 
          thId:'선박ID',    tdId:"EVGR0001", 
          thBm:'선박명',  tdBm:"에버그린1호", 
          thP:'IMO Number',     tdP:"AB000001" 
        },
      ],
      DataOfAccount:[
        {
          thId:'청구계정ID',    tdId:"P000022", 
          th0:'수신인',         td0:"김수신", 
        },
        {
          thId:'결제통화',       tdId:"USD", 
          th0:'납부방법',       td0:"지로",
        },
        { 
          thId:'수신 E-Mail',    tdId:"abc@kt.com", 
          th0:'납부일자',       td0:"2022-11-03", 
        },
        {
          thId:'청구서표기명',   tdId:"ABC기업",
          th0:'주소',           td0:"서울특별시 서초구 효령로 123 abc기업"
        }
      ],
      DataOfBasic:[
        {
          thId:'계약ID',    tdId:"K000001", 
          th0:'BM',         td0:"MVSAT", 
          th1:'계약상태',         td1:"사용중", 
        },
        {
          thId:'개통일시',       tdId:"2022-11-03", 
          th0:'약정기간',       td0:"24개월",
          th1:'서비스오더ID',         td1:"PA00123", 
        },
        { 
          thId:'상품',    tdId:" Global Premium MVSAT", 
          th0:'약정 종료일',       td0:"2024-11-02", 
          th1:'부가정보',         td1:" -", 
        },
        {
          thId:'비고',   tdId:"-----"
        }
      ],
    }
  },
  props:{
    subInfoTitleNm:String,
    FormDataclass:String,
  }
}
</script>

<style>
.InfoOfOrg {
  width: 100%;
  margin: 0 auto auto 5px;
  height: 80px;
}
.InfoOfOrg .formDataTable {
  border: groove; 
  width: 100%;
}
.InfoOfOrg .formDataTable tr > th  {
  background-color: #f9f9f9;
  border-style: groove;
  width: 10%;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.InfoOfOrg .formDataTable tr > td > input {
  background-color: #f9f9f9;
  width: 90%;
  height: 20px;
  font-size: 12px;
}



.InfoOfShip {
  width: 100%px;
  margin: 0 auto auto 5px;
  height: 80px;
}
.InfoOfShip .formDataTable {
  border: groove; 
  width: 100%;
}
.InfoOfShip .formDataTable tr > th  {
  background-color: #f9f9f9;
  border-style: groove;
  width: 80px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.InfoOfShip .formDataTable tr > td > input {
  background-color: #f9f9f9;
  width: 200px;
  height: 20px;
  font-size: 12px;
}


#selectSearch{
  float: right;
}
#selectSearch tr > th {
  display: inline-block;
  border:2px solid black;
  width: 80px;
  margin-top:2px;
  height: 20px;
  font-weight: bold;
  font-size: 14px;
}

#selectSearch tr > td > select {
  display: inline-block;
  background-color: #f9f9f9;
  width: 150px;
  height: 25px;
  font-weight: bold;
  font-size: 14px;
}



/* Account */

.InfoOfAccount {
  /* display: inline-block; */
  width: 100%;
  margin: 0 auto auto 5px;
}


.InfoOfAccount .formDataTable {
  border: groove; 
  width: 100%;
}

.InfoOfAccount .formDataTable tr > th  {
  /* display: inline-block; */
  background-color: #f9f9f9;
  border-style: groove;
  width: 12%;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}
.InfoOfAccount .formDataTable tr > td > input {
  background-color: #f9f9f9;
  width: 97%;
  height: 20px;
  font-size: 15px;
}


.InfoOfBasic {
  /* display: inline-block; */
  width: 100%;
  margin: 0 auto auto 5px;
}


.InfoOfBasic .formDataTable {
  border: groove; 
  width: 100%;
}

.InfoOfBasic .formDataTable tr > th  {
  /* display: inline-block; */
  background-color: #f9f9f9;
  border-style: groove;
  width: 10%;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}
.InfoOfBasic .formDataTable tr > td > input {
  background-color: #f9f9f9;
  width: 95%;
  height: 20px;
  font-size: 12px;
}

/*  */


</style>