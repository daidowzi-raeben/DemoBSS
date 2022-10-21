<template>
  <div class="title_area">
    <div class="icon"></div>
    <h1>메뉴 > 메뉴2 ></h1>
    <span> {{ menuNm }} [BILL_01_001]</span>
    <div class="right">
      <div class="home_menu">홈화면 설정</div>
      <div class="view_reset">화면초기화</div>
    </div>
  </div>
</template>

<script>
export default {
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
