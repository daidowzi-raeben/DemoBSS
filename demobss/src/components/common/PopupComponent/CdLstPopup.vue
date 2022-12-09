<template>
  <div>
    <!-- popup이외 영역 , 팝업 이외 영역 클릭 시, 팝업 닫음 -->
    <transition name="fade" appear>
      <div :class="popupOverlay" @click="$emit('close')"></div>
    </transition>

    <!-- start : popup영역 출력 -->
    <transition name="modal" appear>
      <div class="cdLstPopupView">
        <span style="float: left">
          <label class="title" v-if="type===1">코드 등록</label>
          <label class="title" v-if="type===2">코드 변경</label>
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
              @click="$emit('close')"
          />
          <button-component
              v-if="type===2"
              :btn-class="'btnClass4'"
              :btnFontWeight="'bold'"
              :btn-name ="'변경'"
              :btnHeight="'28px'"
              :btnWidth ="'100px'"
              @click="$emit('close')"
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
                  <input-component :class="this.type===2 ? 'input_disabled':'input'" :input-class="'class5'" :disabled="disabled" :value="'ACRND_TYPE_CD' " />
                </td>
                <th>상위코드그룹ID</th>
                <td>
                  <input-component :class="this.type===2 ? 'input_disabled':'input'" :input-class="'class5'" :disabled="disabled" :value="'' " />
                </td>
              </tr>
              <tr>
                <th>코드ID</th>
                <td>
                  <input-component :class="this.type===2 ? 'input_disabled':'input'" :input-class="'class5'" :disabled="disabled" :value="'코드그룹ID 입력' " />
                </td>
                <th>상위코드ID</th>
                <td>
                  <input-component :class="this.type===2 ? 'input_disabled':'input'" :input-class="'class5'" :disabled="disabled" :value="'상위코드그룹ID 입력' " />
                </td>
              </tr>
              <tr>
                <th>코드명</th>
                <td>
                  <input-component class="input" :input-class="'class5 class5_long1'" :long-width="'220px'" :value="'코드그룹명 입력' " />
                </td>
                <th>표준코드ID</th>
                <td>
                  <input-component :class="this.type===2 ? 'input_disabled':'input'" :input-class="'class5 class5_long1'" :disabled="disabled" :long-width="'220px'" :value="'표준코드ID 입력' " />
                </td>
              </tr>
              <tr>
                <th>코드설명</th>
                <td colspan="3">
                  <input-component class="input" :input-class="'class5 class5_long1'" :long-width="'625px'" :value="'코드그룹설명 입력' " />
                </td>
              </tr>
              <tr>
                <th>사용여부</th>
                <td>
                  <input type="radio" selected>사용
                  <input type="radio">미사용
                </td>
                <th>코드출력순서</th>
                <td>
                  <input-component class="input" :input-class="'class5'" :value="'순서 입력' " />
                </td>
              </tr>
              <tr>
                <th>유효시작일자</th>
                <td><date-picker-component
                    :classWrapper="'calender_input'"
                /></td>
                <th>유효종료일자</th>
                <td><date-picker-component
                    :classWrapper="'calender_input'"
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
      disabled:false,

    };
  },
  beforeMount() {
    if(this.type==2) this.disabled=true;
  },
  props: {
    type:{
      type:Number,
      default: 1
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


.cdLstPopupView {
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
  height: 300px;
}

</style>
