<template>
<div>
<div class="c1">고객 정보 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</div>

<div class="c2"> 두번째 큰 박스

  <div class="c2-1">보유 상품</div>

  <div class="c2-2">청구계정 정보</div>

</div>

<div class="c3">계약 상세
  <table width="100%">
      <tr>
        <th width="40%">계약 상세</th>
        <th width="40%">계약 상세</th>
      </tr>
      <tr>
        <th>td 3</th>
        <td>td3 </td>
      </tr>

    </table>



</div>
<div class="c4">계약 상세
    
</div>

</div>

</template>

<script>
export default {
  name: "ContMgt"
}
</script>

<style scoped>
.c1 {
  width: 800px;
  height:200px;
  /* position : center; */
  background-color: aqua;
}
.c2 {
  width: 800px;
  height: 200px;
  display: inline-block;
  /* position : relative; */
  /* background-color: violet; */
}
.c2-1 {
  width: 100px;
  height: 80px;
  /* position : relative; */
  background-color: bisque;
}
.c2-2 {
  width: 100px;
  height: 80px;
  /* position : relative; */
  background-color: chocolate;
}
.c3 {
  width: 800px;
  height: 200px;
  /* position : relative; */
  background-color: rgb(186, 192, 175);
}
.c4 {
  width: 800px;
  height: 200px;
  /* position : relative; */
  background-color: orange;
}

</style>
