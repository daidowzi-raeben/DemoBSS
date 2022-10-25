<template>
  <div class="title_area">
    <div class="icon"></div>
    <h1>메뉴 > 메뉴2 ></h1>
    <span> {{ menuNm }} [BILL_01_001]</span>
    <div class="right">
      <button-component :btnClass="'btnClass1'" :btnName="'홈화면설정'"></button-component>
      <button-component :btnClass="'btnClass1'" :btnName="'화면초기화'" ></button-component>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";

export default{
  components: { ButtonComponent }, 
  name: "TitleArea",
  data() {
    return {};
  },
  props: {
    menuNm: String,
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style scoped></style>
