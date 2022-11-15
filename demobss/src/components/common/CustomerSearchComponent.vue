<template>
  <SubInfoTitle
      :subInfoTitleNm="'고객조회'"
      v-show="titleShow"
  />
  <table>
    <tr>
      <td class="seach_sp">
        <div style="float: left ">
        <label>고객조회</label>&nbsp;&nbsp;
          <select-box-component
              :selectClass="'select_input3'"
              :width="200"
              :cdGroup="cdGroup"
              :defaultValue="'선택'"
              v-model="searchDiv"
              @input="
          (value) => {
            searchDiv = value;
          }
        "
        />
        &nbsp;
        <input-component
            :type="'search'"
            :height="15"
            :width="150"
            v-model="searchValue"
            :placeholder="''"
            @input="
                (value) => {
                  searchValue = value;
                }
              "
          />

        </div>
      </td>
      <td class="search_btn">
        <ButtonComponent
            :btn-class="'btnSearchImgClass'"
            :btn-name="'검색'"
        />
      </td>
    </tr>
  </table>
</template>

<script>
import SubInfoTitle from "@/components/common/SubInfoTitle";
import InputComponent from "@/components/common/InputComponent";
import SelectBoxComponent from "@/components/common/SelectBoxComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
export default {
  name: "CustomerSearchComponent",
  components:{SubInfoTitle, SelectBoxComponent, InputComponent,ButtonComponent},
  data(){
    return{
      searchDiv :null,
      searchValue:null,
    }
  },
  props:{
    cdGroup:null,
    titleShow:null,
  }
}
</script>

<style scoped>
table {
  width: 100%
}
table > tr {
  height: 12px
}
.seach_sp{
  width: 95%;
  border: solid 2px slategrey;
  padding-left: 10px;
}
.search_btn {
  background-color: #bdbdce;
  text-align: center;
  border: solid 2px slategrey;
  height: 12px;
  width: 30px;
  margin: 100px 0px;
}
</style>
