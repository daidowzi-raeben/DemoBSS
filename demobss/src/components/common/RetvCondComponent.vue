<template>
  <div class="retvCondType">
    <span> {{ retvCondNm }} </span>
    <span>
      <select-box-component
        :selectClass="'select_input4'"
        :cdGroup="selectCdGroup"
        :disabled="true"
        :isDisabled="true"
        :defaultValue="selectDefltValue"
        @input="
          (value) => {
            searchDiv = value;
          }
        "
        v-model="searchDiv"
        :width="140"
        style="height: 28px"
      />
    </span>
    <span>
      <input-component
        :type="'search'"
        :inputClass="'class4'"
        :placeholder="'검색어 입력'"
        @input="
          (value) => {
            searchValue = value;
          }
        "
        v-model="searchValue"
        style="width: 100%; height: 100%"
      />
    </span>
    <span> 사용여부 </span>
    <span>
      <select-box-component
        :selectClass="'select_input4'"
        :cdGroup="'useYn'"
        :is-disabled="true"
        :defaultValue="'사용여부 선택'"
        @input="
          (value) => {
            searchDiv = value;
          }
        "
        v-model="searchDiv"
        :width="140"
        style="height: 28px"
      />
    </span>
    <span>
      <button-component
        :btn-class="'btnClass4'"
        :btnFontWeight="'normal'"
        :btn-name="'초기화'"
        :btnHeight="'28px'"
        :btnWidth="'100px'"
      />
    </span>
    <span>
      <button-component
        :btn-class="'btnClass4'"
        :btnFontWeight="'bold'"
        :btn-name="'검색'"
        :btnHeight="'28px'"
        :btnWidth="'100px'"
      />
    </span>
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";
import InputComponent from "./InputComponent.vue";
import SelectBoxComponent from "./SelectBoxComponent.vue";
export default {
  components: { SelectBoxComponent, InputComponent, ButtonComponent },
  props: {
    retvCondNm: String,
    selectCdGroup: {
      type: String,
      required: true,
    },
    selectDefltValue: {
      type: String,
      default: "구분 선택",
    },
  },
};
</script>

<style>
.retvCondType {
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  display: flex;
  align-items: center;
  height: 100%;
}
.retvCondType > span:nth-child(1) {
  min-width: 59px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12pt;
}
.retvCondType > span:nth-child(2) {
  height: 28px;
  margin: 0 5px 0 20px;
}
.retvCondType > span:nth-child(3) {
  width: 200px;
  height: 28px;
}
.retvCondType > span:nth-child(4) {
  margin-left: 300px;
  min-width: 59px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12pt;
}
.retvCondType > span:nth-child(5) {
  width: 200px;
  height: 28px;
  margin-right: 300px;
}
.retvCondType > span:nth-child(6) {
  margin-left: 10px;
}
.retvCondType > span:nth-child(7) {
  margin-left: 10px;
}
</style>
