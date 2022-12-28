<template>
<div>
  <p> grid 화면 템플릿 입니다.</p>

  <article class="gridContainer">
    <div class="item1"> 1번 div</div>
    <div class="item2"> 2번 div</div>
    <div class="item3"> 3번 div</div>
  </article>

</div>


</template>

<script>
export default {

}
</script>

<style>
.gridContainer {
  display: grid;
  grid-template-columns: 850px 700px 1fr;
  grid-template-rows: 100px 640px 1fr;
  gap: 20px 30px;
}

.gridContainer > .item1 {
  grid-row: 1;
  grid-column: 1/3;
  background-color: wheat;
}
.gridContainer > .item2 {
  grid-row: 2;
  grid-column: 1;
  
  background-color: antiquewhite;
}
.gridContainer > .item3 {
  grid-row: 2;
  grid-column: 2;
  background-color: beige;

}
</style>