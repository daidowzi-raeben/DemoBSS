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
          <label class="title">배치실행 상세정보</label>
        </span>
        <span style="float: right; margin-left: 20px;">
          <label style="font-size: 20px;" @click="$emit('close')">X</label>
        </span>
        <br><br><br>
        <article>
          <!-- 취소가 있는 팝업 -->
          <div class="content_area" >
            <label class="sub_title">Step 정보</label>
            <text-area-component />
          </div>
          <div class="content_area" >
            <label class="sub_title">파라미터 정보</label>
            <text-area-component />
          </div>
        </article>
      </div>
    </transition>
    <!-- end : popup영역 -->
  </div>
</template>

<script>
import TextAreaComponent from "@/components/common/TextAreaComponent";
export default {
  name: "BtExeInfoPopup",
  components: {TextAreaComponent},
  data() {
    return {
      disabled:false,
      useAble:null,

      stepInfo:null,  //스탭 정보
      paramInfo:null, //파라미터 정보
    };
  },
  beforeMount() {
    if (this.value !== null) {       //초기값 셋팅

      this.cdId = this.value.model2;
      this.cdNm = this.value.model5;
      this.cdDesc = this.value.model6;
      this.cdOtputOdrg = this.value.model7;
      this.efctStDate = this.value.StartDate;
      this.efctFnsDate = this.value.EndDate;

      if (this.value.model8 === "사용") this.useAble = 'use';
      else this.useAble = 'unuse';
    }
  },
  props: {
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
}
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
  height: 300px;
}

</style>