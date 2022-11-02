<template>
  <div>
    <!-- start : popup영역 -->
    <transition name="fade" appear>
      <div class="cm_popup_overlay" @click="$emit(closeFunc)"></div>
    </transition>
    <transition name="modal" appear>
      <div class="popup360">
        <h1>알림</h1>

        <article>
          <!-- 취소가 있는 팝업 -->
          <div class="btn_area" >
            <div style="font-size:20px;">
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
import CustomerSeachComponent from "@/components/common/CustomerSearchComponent";
export default {
  name: "CommonPopup",
  components: {CustomerSeachComponent},
  data() {
    return {};
  },
  props: {
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
  z-index: 5;
  transition: opacity 0.5s;
}

.popup360 {
  background-color: #fff;
  border: 1px solid #656565;
  display: inline-block;
  left: 50%;
  /* opacity: 0; */
  padding: 26px;
  position: fixed;
  top: 50%;
  /* visibility: hidden; */
  z-index: 100;
  width: 360px;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s, top 0.5s;
}

.popup360 > h1 {
  font-size: 18px;
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
  margin: 20px 0 0 0;
}

.button_04 {
  font-family: 맑은 고딕;
  display: inline-block;
  color: #fff;
  padding: 0 25px 2px 25px;
  height: 34px;
  line-height: 32px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  background-color: #5e5e5e;
}

.button_05 {
  font-family: 맑은 고딕;
  display: inline-block;
  color: #fff;
  padding: 0 25px 2px 25px;
  height: 34px;
  line-height: 32px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  background-color: #ed1820;
}

</style>
