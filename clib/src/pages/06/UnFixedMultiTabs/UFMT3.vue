<template>
  <div class="item3">
    <p>test3</p>
      <button @click="AddCompMethod('UFMT1', '메뉴명1')">1번 컴포넌트</button>
      <button @click="AddCompMethod('UFMT2', '메뉴명2')">2번 컴포넌트</button>
  </div>
</template>

<script>
export default {
  methods: {
    AddCompMethod(pageFileName, pageTabName) {
      let pageFileData = {
        menuId: pageFileName,
        menuNm: pageTabName,
        // "cmpnId": "ContMgt"
      };
      this.$emit("emitPageTitle", pageFileData);
    },
  },
};
</script>

<style scoped>
.item3 {
  margin: 50px;
  float: right;
  width: 300px;
  height: 300px;
  background-color: burlywood;
  text-align: center;
  top: 60px;
}
.item3 > p {
  position: relative;
  top: 50%;
}
</style>
