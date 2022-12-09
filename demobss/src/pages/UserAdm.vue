<template>
<article class="UserAdmContainer">
  <div class="item1">
    <user-adm-retv-component />
  </div>
  <div class="item2">
  </div>

  <div class="item3">
    </div>
  </div>
</article>


</template>

<script>
import UserAdmRetvComponent from '@/components/common/UserAdmRetvComponent.vue'
export default {
  mixins:[ApiMixin],
  components: { UserAdmRetvComponent, AgGridComponent2, SubInfoTitle, ButtonComponent, SelectBoxComponent, PagingArea, LabelComponent, InputComponent },
  data(){
    return{
    }
  },
  methods:{
  }

}
</script>

<style scoped>
.UserAdmContainer{
  display: grid;
  grid-template-columns: 850px 700px 1fr;
  grid-template-rows: 100px 640px 1fr;
  gap: 20px 30px;
}

.UserAdmContainer > .item1{
  grid-row: 1;
  grid-column: 1/3;
  background-color: burlywood;
}
.UserAdmContainer > .item2{
  grid-row: 2;
  grid-column: 1;
}
.UserAdmContainer > .item3{
  grid-row: 2;
  grid-column: 2;
}
</style>