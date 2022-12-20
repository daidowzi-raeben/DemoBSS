<template>
<div>
  <p> grid 화면 템플릿 입니다.</p>

  <article class="thisContainer">
    <div class="item1"> a</div>
    <div class="item2"> a</div>
    <div class="item3"> a</div>
  </article>

</div>


</template>

<script>
export default {

}
</script>

<style>
.thisContainer {
  display: grid;
  grid-template-columns: 850px 700px 1fr;
  grid-template-rows: 100px 640px 1fr;
  gap: 20px 30px;
}

.thisContainer > .item1 {
  grid-row: 1;
  grid-column: 1/3;
  background-color: burlywood;
}
.thisContainer > .item2 {
  grid-row: 2;
  grid-column: 1;
}
.thisContainer > .item3 {
  grid-row: 2;
  grid-column: 2;
}
</style>