<template>
  <div>
    <!-- popup이외 영역 , 팝업 이외 영역 클릭 시, 팝업 닫음 -->
    <transition name="fade" appear>
      <div :class="popupOverlay" @click="$emit('close')"></div>
    </transition>

    <!-- start : popup영역 출력 -->
    <transition name="modal" appear>
      <div class="cdGpPopupView">
        <span style="float: left">
          <label class="title" v-if="type===1">코드그룹 등록</label>
          <label class="title" v-if="type===2">코드그룹 변경</label>
        </span>
        <span style="float: right; margin-left: 20px;">
          <label style="font-size: 20px;" @click="$emit('close')">X</label>
        </span>
        <span style="float: right">
          <button-component
              v-if="type===1"
              :btn-class="'btnClass4'"
              :btnFontWeight="'bold'"
              :btn-name ="'등록'"
              :btnHeight="'28px'"
              :btnWidth ="'100px'"
              @click="[$emit('close'),$emit('submit')]"
          />
          <button-component
              v-if="type===2"
              :btn-class="'btnClass4'"
              :btnFontWeight="'bold'"
              :btn-name ="'변경'"
              :btnHeight="'28px'"
              :btnWidth ="'100px'"
              @click="[$emit('close'),$emit('update')]"
          />
        </span>
        <br><br><br>
        <article>
          <!-- 취소가 있는 팝업 -->
          <div class="content_area" >
            <label class="sub_title">코드 정보 입력</label>
            <table>
              <tr>
                <th>코드그룹ID</th>
                <td>
                  <input-component :input-class="'input-type5'" :class="this.type===2 ? 'input_disabled':'input'" :disabled="disabled" v-model="this.cdGpId" :value="this.cdGpId" />
                </td>
                <th>상위코드그룹ID</th>
                <td>
                  <input-component :input-class="'input-type5'" :class="this.type===2 ? 'input_disabled':'input'" :disabled="disabled" v-model="this.upCdGpId" :value="this.upCdGpId" />
                </td>
              </tr>
              <tr>
                <th>코드그룹명</th>
                <td>
                  <input-component class="input" :input-class="'input-type5 '" :width="'220px'" v-model="this.cdGpNm" :value="this.cdGpNm" />
                </td>
                <th>코드그룹영문명</th>
                <td>
                  <input-component class="input" :input-class="'input-type5 '" :width="'220px'" v-model="this.cdGpEngNm" :value="this.cdGpEngNm" />
                </td>
              </tr>
              <tr>
                <th>코드그룹 설명</th>
                <td colspan="3">
                  <input-component class="input" :input-class="'input-type5 '" :width="'625px'" v-model="this.cdGpDesc" :value="this.cdGpDesc" />
                </td>
              </tr>
              <tr>
                <th>사용여부</th>
                <td>
                  <span style="margin-right: 50px;"><input type="radio" v-model="useAble" value="use">사용</span>
                  <span><input type="radio" v-model="useAble"  value="unuse">미사용</span>
                </td>
              </tr>
              <tr>
                <th>유효시작일자</th>
                <td><date-picker-component
                    :classWrapper="'calender_input'"
                    :pDate ="this.efctStDate"
                    @emitValue="
                    (value) => {this.efctStDate = value}"
                /></td>
                <th>유효종료일자</th>
                <td><date-picker-component
                    :classWrapper="'calender_input'"
                    :pDate="this.efctFnsDate"
                    @emitValue="
                    (value) => {this.efctFnsDate = value}"
                /></td>
              </tr>
            </table>
          </div>
        </article>
      </div>
    </transition>
    <!-- end : popup영역 -->
  </div>
</template>

<script>
import DatePickerComponent from "@/components/common/DatePickerComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
import InputComponent from "@/components/common/InputComponent";
export default {
  name: "CommonPopup",
  components: {
    InputComponent,
    DatePickerComponent,
    ButtonComponent
  },

  data() {
    return {
      disabled : false, //input box disabled관련 변수
      useAble:null, //사용여부 라디오 value

      cdGpId:null,      //코드그룹ID
      upCdGpId:null,    //상위코드그룹ID
      cdGpNm:null,      //코드그룹명
      cdGpEngNm:null,   //코드그룹영문명
      cdGpDesc:null,    //코드그룹 설명
      cdLen:null,       //코드길이값
      useYn:null,       //사용여부
      efctStDate:null,  //유효시작일자
      efctFnsDate:null, //유효종료일자

    };
  },
  beforeMount() {
    if(this.type===2) {                     // type 1 : 등록 / 2 변경 
      this.disabled = true;
      if (this.value !== null) {           //초기값 셋팅
        this.cdGpId = this.value.model2;
        this.cdGpNm = this.value.model4;
        this.cdGpEngNm = this.value.model5;
        this.cdGpDesc = this.value.model6;
        this.cdLen = this.value.model7;
        this.efctStDate = this.value.StartDate;
        this.efctFnsDate = this.value.EndDate;
        if (this.value.model8 === "사용") this.useAble = 'use';
        else this.useAble = 'unuse';
      }
    }
    else{
      this.efctStDate = new Date();
      this.efctFnsDate = new Date(9999,11,31);
    }
  },
  props: {
    type:{
      type:Number,
      default : 1
    },
    value:{
      type:Object,
      default:null
    },
    popupOverlay:{
      type: String,
      default:'cm_popup_overlay'
    },
    popupmsg : String,
    popup: Object,
    closeFunc: {
      type: String,
      default: "popup",
    },
    isCancel: {
      //취소버튼 유무
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  mounted() {
    // if (!this.isCancel) this.$refs.modal.focus(); //엔터로 닫기 가능
  },
  methods: {},
};
</script>

<style scoped>
.cm_popup_overlay {
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  cursor: default;
  left: 0;
  opacity: 30%;
  position: fixed;
  right: 0;
  top: 0;
  /* visibility: hidden; */
  z-index: 6;
  transition: opacity 0.5s;
}


.cdGpPopupView {
  background-color: #fff;
  border: 1px solid #656565;
  display: inline-block;
  left: 50%;
  padding: 25px;
  position: fixed;
  top: 50%;
  width: 800px;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s, top 0.5s;
  z-index: 100;
}

.title{
  font-size: 18pt;
  font-weight: bold;
}
table, tr {
  border: 1px solid rgb(232, 238,246);
  border-collapse: collapse;
  width: 100%;
}
table > tr{
  height: 38px;
}
table > tr > th{
  width: 120px;
  text-align: left;
  border-left: 1px solid rgb(232, 238,246);
  background-color:  rgb(239, 245, 252);
  padding-left: 1%;
}
table > tr > td{
  width: 174px;
  /* text-align:right; */
  padding-left: 8px;
}

table > tr > td > span{
  display: inline-block;
}
.input_disabled{
  background-color: rgb(239, 245, 252);
}
.input{
  background-color: white;
}
.sub_title{
  font-size: 12pt;
  font-weight: bold;
  float: left;
}
.content_area{
  width: 100%;
  height: 250px;
}


</style>
