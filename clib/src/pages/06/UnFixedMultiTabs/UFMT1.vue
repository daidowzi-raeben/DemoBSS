<template>
  <div class="item1">
    <p> test1 </p>
    <div>
      <button @click="AddCompMethod('UFMT2', '메뉴명2')">2번 컴포넌트</button>
      <button @click="AddCompMethod('UFMT3', '메뉴명3')">3번 컴포넌트</button>
    </div>
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
.item1 {
  margin: 50px;
  float:left;
  width: 300px;
  height: 300px;
  background-color: steelblue;
  text-align: center;
}
.item1 > p {
  position: relative;
  top: 50%;
}
</style>
