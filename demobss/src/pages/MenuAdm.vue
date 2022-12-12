<template>
  <article class="menuAdmContainer">
    <div class="item1">
      <retv-cond-component
      :selectCdGroup="'retvCond'"
      :selectDefltValue="'조회기준 선택'" />
    </div>
    
    <div class="item2">

    </div>

    <div class="item3">
      <div>
        <sub-info-title :subInfoTitleNm="'메뉴 상세정보'"/>
        <span style="float: right">
          <button-component :btnClass="'btnClass5'" :btnWidth="'60px'" :btnName="menuAdmObject.sttus=='amend'? '변경':'등록'" @click="popup" />
        </span>
      </div>
      <div>
        <form action="">
          <table class="menuDtlInfoTable">
            <tr>
              <th><label-component :labelNm="'메뉴ID'"/> </th>
              <td> 
                <input-component 
                :class6Width="'180px'" 
                :input-class="'class6 class6_2'" 
                :disabled="true"
                :value="menuAdmObject.menuId" 
                :placeholder="'메뉴ID'"
                />  
              </td>
              <th><label-component :labelNm="'상위메뉴ID'"/> </th>
              <td> 
                <input-component 
                :class6Width="'180px'" 
                :input-class="'class6 class6_2'" 
                :disabled="true"
                :value="menuAdmObject.upperMenuId" 
                :placeholder="'----'"
                />  
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'메뉴명'"/> </th>
              <td colspan="3"> 
                <input-component 
                :input-class="'class6'" 
                :class6Width="'300px'" 
                :value="menuAdmObject.menuNm" 
                :placeholder="'계약'"
                />
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'정렬순서'"/> </th>
              <td colspan="3"> 
                <input-component 
                :input-class="'class6'" 
                :class6Width="'300px'" 
                :value="menuAdmObject.sortingCond" 
                :placeholder="'숫자'"
                />
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'URL'"/> </th>
              <td colspan="3"> 
                <input-component 
                :input-class="'class6'" 
                :class6Width="'300px'" 
                :value="menuAdmObject.url" 
                :placeholder="'URL'"
                />
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'메뉴사용기간'"/> </th>
              <td colspan="3">
                <div style="display: inline-block;">
                  <date-picker-component
                  :classWrapper="'calender_input'"
                  :calenderBackgroundColor="'rgb(247, 247, 248)'"
                  />
                </div>
                <span> ~ </span>
                <div style="display: inline-block;"> 
                  <date-picker-component
                  :classWrapper="'calender_input'"
                  :calenderBackgroundColor="'rgb(247, 247, 248)'"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'메뉴노출여부'"/> </th>
              <td> <radio-component :RadioOptions='["사용","미사용"]' /> </td>
              <th><label-component :labelNm="'메뉴 사용여부'"/> </th>
              <td> <radio-component :RadioOptions='["사용","미사용"]' /> </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'등록자/등록일시'"/> </th>
              <td colspan="3">
                <input-component 
              :input-class="'class6 class6_2'" 
              :class6Width="'180px'" 
              :disabled="true"
              :value="'김케이티'" 
              />
                <input-component 
              :input-class="'class6 class6_2'" 
              :class6Width="'180px'" 
              :disabled="true"
              :value="menuAdmObject.regrDt" 
              />   </td>
            </tr>
            
            <tr>
              <th><label-component :labelNm="'수정자/수정일시'"/> </th>
              <td colspan="3">
                <input-component 
                :input-class="'class6 class6_2'" 
                :class6Width="'180px'" 
                :disabled="true"
                :value="' 김클라우드  '" 
                /> 

                <input-component 
                :input-class="'class6 class6_2'" 
                :class6Width="'180px'" 
                :disabled="true"
                :value="menuAdmObject.amdrDt" 
                /> 
              </td>
            </tr>
          </table>

        </form>
        
        <popup-component
        v-if="isModalShow"
        :popupmsg="`${menuAdmObject.sttus=='amend'? '변경' :'등록'}하시겠습니까?`"
        @popup="isModalShow = false"
        @AGREE = "popupAgree()"
        />
      </div>
    </div>

    <div class="item4">
      <div>
        <sub-info-title :subInfoTitleNm="'업무처리 정보'"/>
        <span style="float: right">
          <button-component :btnClass="'btnClass5'" :btnWidth="'60px'" :btnName="'추가'" @click="popup" />
        </span>
      </div>
      <div>
        <form action="">
          <table class="wrkJobTrtInfoTable">
            <tr>
              <th><label-component :labelNm="'업무유형'"/> </th>
              <td colspan="3"> 
                <input-component 
                :class6Width="'140px'" 
                :input-class="'class6 class6_2'" 
                :disabled="true"
                :value="menuAdmObject.menuId" 
                :placeholder="'메뉴ID'"
                />  
                <select-box-component
                style="height:28px;"
                :selectClass="'select_input4'"
                :cdGroup="'wjtOptions'"
                :defaultValue="'업무유형 선택'"
                :defaultcdId="''"
                :isDisabled="true"
                :width="140"
                :selectedValue="''"
                @input=" (value) => { test = value;}"
                /> 
              </td>
            </tr>
            <tr>
              <th><label-component :labelNm="'메뉴사용기간'"/> </th>
              <td style="width:50%;">
                <div style="display: inline-block;">
                  <date-picker-component
                  :classWrapper="'calender_input'"
                  :calenderBackgroundColor="'rgb(247, 247, 248)'"
                  />
                </div>
                <span> ~ </span>
                <div style="display: inline-block;"> 
                  <date-picker-component
                  :classWrapper="'calender_input'"
                  :calenderBackgroundColor="'rgb(247, 247, 248)'"
                  />
                </div>
              </td>
              <th style="width:35px;"><label-component :labelNm="'사용여부'"/> </th>
              <td style="width:100px;" > <radio-component :RadioOptions='["사용","미사용"]' /> </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'권한적용대상'"/> </th>
              <td colspan="3"> <radio-component :RadioOptions='["적용 대상","적용 제외"]' /> </td>
            </tr>

            <tr>
              <th><label-component :labelNm="'등록자/등록일시'"/> </th>
              <td colspan="3">
                <input-component 
              :input-class="'class6 class6_2'" 
              :class6Width="'180px'" 
              :disabled="true"
              :value="'김케이티'" 
              />
                <input-component 
              :input-class="'class6 class6_2'" 
              :class6Width="'180px'" 
              :disabled="true"
              :value="menuAdmObject.regrDt" 
              />   </td>
            </tr>
            
            <tr>
              <th><label-component :labelNm="'수정자/수정일시'"/> </th>
              <td colspan="3">
                <input-component 
                :input-class="'class6 class6_2'" 
                :class6Width="'180px'" 
                :disabled="true"
                :value="' 김클라우드  '" 
                /> 

                <input-component 
                :input-class="'class6 class6_2'" 
                :class6Width="'180px'" 
                :disabled="true"
                :value="menuAdmObject.amdrDt" 
                /> 
              </td>
            </tr>
          </table>

        </form>
      </div>
    
    
    </div>
    
    

  
  </article>
</template>

<script>
import RetvCondComponent from '@/components/common/RetvCondComponent.vue' 
import RadioComponent from '@/components/common/RadioComponent.vue'
import LabelComponent from '@/components/common/LabelComponent.vue'
import InputComponent from '@/components/common/InputComponent.vue'
import SelectBoxComponent from '@/components/common/SelectBoxComponent.vue'
import SubInfoTitle from '@/components/common/SubInfoTitle.vue'
import ButtonComponent from '@/components/common/ButtonComponent.vue'
import DatePickerComponent from '@/components/common/DatePickerComponent.vue'
import PopupComponent from '@/components/common/PopupComponent.vue'

export default {
  components: { RetvCondComponent, 
  RadioComponent, 
  LabelComponent, 
  InputComponent, 
  SelectBoxComponent,
  SubInfoTitle, 
  ButtonComponent,
  DatePickerComponent,
  PopupComponent 
  },

  data(){
    return{
      menuAdmObject:{
        sttus:'amend',
      },
      isModalShow:false,
      test:'',
    }
  },
  methods:{
    popup(){
      if (this.isModalShow == false) this.isModalShow = true
      else this.isModalShow = false
    },
  }

}
</script>


<style scoped>

.menuAdmContainer{

  display: grid;
  grid-template-columns: 850px 700px 1fr;
  grid-template-rows: 50px 350px 300px 1fr;
  gap: 20px 30px;
}


.menuAdmContainer > .item1{
  grid-row: 1;
  grid-column: 1/3;
}

.menuAdmContainer > .item2{
  grid-row: 2/4;
  grid-column: 1;
  background-color: aquamarine;
}
.menuAdmContainer > .item3{
  grid-row: 2;
  grid-column: 2;
}
.menuAdmContainer > .item4{
  grid-row: 3;
  grid-column: 2;
}


.menuDtlInfoTable{
  width: 100%;
  border-collapse: collapse;
}
.menuDtlInfoTable tr{
  height: 40px;
}
.menuDtlInfoTable th{
  width: 15%;
  border: 1px solid #bdbdbd;
  text-align: left;
  padding-left: 1%;
  background-color: rgb(247, 247, 248);
  
}
.menuDtlInfoTable td{
  width: 33%;
  padding-left: 1%;
  border: 1px solid #bdbdbd;
}



.wrkJobTrtInfoTable{
  width: 100%;
  border-collapse: collapse;
}
.wrkJobTrtInfoTable tr{
  height: 40px;
}
.wrkJobTrtInfoTable th{
  width: 15%;
  border: 1px solid #bdbdbd;
  text-align: left;
  padding-left: 1%;
  background-color: rgb(247, 247, 248);
  
}
.wrkJobTrtInfoTable td{
  width: 33%;
  padding-left: 1%;
  border: 1px solid #bdbdbd;
}

</style>