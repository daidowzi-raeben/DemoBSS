<template>
  <article class="AutAdmView">
    <div class="item"> <!--1번 -->
      <div class="AutType">
      <span>
        코드구분
      </span>
        <span>
        <select-box-component
            :selectClass="'select_input3'"
            :cdGroup="'codeDiv'"
            :disabled="true"
            :defaultValue="'코드구분선택'"
            @input=" (value) => { searchDiv = value;}"
            v-model="searchDiv"
        />
      </span>
        <span>
        <input-component
            :type="'search'"
            :inputClass="'class4'"
            :placeholder="'검색어 입력'"
            @input=" (value) => { searchValue = value;}"
            v-model="searchValue"
            style="width:100%; height:100%"
        />
      </span>
        <span>
          사용여부
        </span>
        <span>
        <select-box-component
            :selectClass="'select_input3'"
            :cdGroup="'useYn'"
            :defaultValue="'사용여부 선택'"
            @input=" (value) => { searchDiv = value;}"
            v-model="searchDiv"
        />
      </span>
        <span>
        <button-component
            :btn-class="'btnClass4'"
            :btnFontWeight="'bold'"
            :btn-name ="'초기화'"
            :btnHeight="'28px'"
            :btnWidth ="'100px'"
        />
      </span>
        <span>
        <button-component
            :btn-class="'btnClass4'"
            :btnFontWeight="'bold'"
            :btn-name ="'검색'"
            :btnHeight="'28px'"
            :btnWidth ="'100px'"
        />
      </span>
      </div>
    </div>
    <div class="item"> <!--2번 -->

    </div>
    <div class="item"> <!--3번 -->

    </div>
  </article>
</template>

<script>
import pagingArea from "@/components/common/PagingArea";
import selectBoxComponent from "@/components/common/SelectBoxComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
import AgGridComponent from "@/components/common/AgGridComponent";
import InputComponent from "@/components/common/InputComponent";
import SubInfoTitle from "@/components/common/SubInfoTitle";
import ApiMixin from "@/service/common";
export default {
  mixins:[ApiMixin],
  name: "AutAdm",
  components: {
    pagingArea,
    selectBoxComponent,
    ButtonComponent,
    AgGridComponent,
    SubInfoTitle,
    InputComponent
  },
  data(){
    return{

    }
  },
}
</script>

<style scoped>
.AutAdmView{
  display: grid;
  grid-template-columns: 790px minmax(790px,1fr);
  grid-template-rows: 50px minmax(500px, 1fr);
  gap: 20px 10px;
}

.AutAdmView > .item:nth-child(1) {
  grid-column: 1/3;
  grid-row: 1;
}
.AutAdmView > .item:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}
.AutAdmView > .item:nth-child(3) {
  grid-column: 2;
  grid-row: 2;
}
.AutType{
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  display: flex;
  align-items: center;
  height: 50px;
}
.AutType > span:nth-child(1){
  min-width: 59px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12pt;
}
.AutType > span:nth-child(2){
  width: 200px;
  height: 28px;
  margin-right: 5px;
}
.AutType > span:nth-child(3){
  width: 200px;
  height: 28px;
  margin-left: 10px;
}
.AutType > span:nth-child(4){
  margin-left: 300px;
  min-width: 59px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12pt;
}
.AutType > span:nth-child(5){
  width: 200px;
  height: 28px;
  margin-right: 300px;

}
.AutType > span:nth-child(6){
  margin-left: 10px;
}
.AutType > span:nth-child(7){
  margin-left: 10px;
}
</style>