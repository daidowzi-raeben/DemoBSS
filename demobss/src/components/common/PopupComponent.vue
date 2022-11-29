<template>
  <div>
    <!-- popup이외 영역 , 팝업 이외 영역 클릭 시, 팝업 닫음 -->
    <transition name="fade" appear>
      <div :class="popupOverlay" @click="$emit(closeFunc)"></div>
    </transition>
    
    <!-- start : popup영역 출력 -->
    <transition name="modal" appear>
      <div class="popup360">
        <h1>알림</h1>

        <article>
          <!-- 취소가 있는 팝업 -->
          <div class="btn_area" >
            <div>
            {{popupmsg}}
            <div>
            &nbsp;&nbsp; </div>
            </div>
            <button
              type="button"
              class="button_05"
              @click="[$emit('popup', true), $emit('AGREE')]"
            >확인
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              class="button_04"
              @click="$emit('popup')"
            >취소
            </button>
          </div>
          <!-- <div class="btn_area" >
            <button
              type="button"
              class="button_04"
              @click="$emit(closeFunc)"
              @keyup.enter="$emit(closeFunc)"
              tabindex="0"
              ref="modal"
            >닫기
            </button>
          </div> -->
        </article>
      </div>
    </transition>
    <!-- end : popup영역 -->
  </div>
</template>

<script>
export default {
  name: "CommonPopup",
  data() {
    return {};
  },
  props: {
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
/* @import '../../css/popup.css'; */

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

.maxTabOverlay{
  background-color: rgba(0, 0, 0, 0.116);
  bottom: 0;
  cursor: default;
  left: 0;
  opacity: 10%;
  position: fixed;
  right: 0;
  top: 0;
  /* visibility: hidden; */
  z-index: 6;
  transition: opacity 0.5s;
}

.popup360 {
  background-color: #fff;
  border: 1px solid #656565;
  display: inline-block;
  left: 50%;
  /* opacity: 0; */
  padding: 25px;
  position: fixed;
  top: 50%;
  /* visibility: hidden; */
  z-index: 100;
  width: 400px;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s, top 0.5s;
}

.popup360 > h1 {
  font-size: 14pt;
  font-weight: bold;
  padding-bottom: 13px;
  border-bottom: #e4e4e4 solid 2px;
  margin-bottom: 20px;
}

.popup360 > article {
  padding: 0 15px;
}

.popup360 > article > .contents {
  text-align: center;
  word-break: break-all;
  line-height: 22px;
  margin-bottom: 30px;
}

.popup360 .btn_area {
  text-align: center;
  margin: auto;
}
.popup360 .btn_area > div{
  font-size: 12pt;
  margin: auto;
}

.button_04 {
  display: inline-block;
  color: #fff;
  padding: 0 25px 2px 25px;
  height: 34px;
  line-height: 32px;
  border-radius: 20px;
  border: none;
  font-weight: normal;
  font-size: 12pt;
  cursor: pointer;
  background-color: #5e5e5e;
}

.button_05 {
  display: inline-block;
  color: #fff;
  padding: 0 25px 2px 25px;
  height: 34px;
  line-height: 32px;
  border-radius: 20px;
  border: none;
  font-weight: normal;
  font-size: 12pt;
  cursor: pointer;
  background-color: #ed1820;
}

</style>
