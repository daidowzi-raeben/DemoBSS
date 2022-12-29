<template>
  <div class="item2">
    <p>test2</p>
      <button @click="AddCompMethod('UFMT1', '메뉴명1')">1번 컴포넌트</button>
      <button @click="AddCompMethod('UFMT3', '메뉴명3')">3번 컴포넌트</button>
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
.item2 {
  margin: 50px auto;
  width: 300px;
  height: 300px;
  background-color: violet;
}
.item2 > p {
  position: relative;
  top: 50%;
}
</style>
