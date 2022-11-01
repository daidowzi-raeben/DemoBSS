<template>
  <SubInfoTitle
      :subInfoTitleNm="'고객조회'"
  />
  <table style="width: 100%">
    <tr style="height: 40px">
      <td
          style="
              folat: left;
              width: 95%;
              border: solid 2px slategrey;
              padding-left: 10px;
            "
      >
        <label>고객조회</label>&nbsp;&nbsp;
        <select-box-component
            :selectClass="'select_input'"
            :width="200"
            :cdGroup="'optionsSearchDiv'"
            :defaultValue="'선택'"
            :defaultNum="3"
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
            :height="20"
            :width="150"
            v-model="searchValue"
            :placeholder="''"
            @input="
                (value) => {
                  searchValue = value;
                }
              "
        />
      </td>
      <td
          style="
              background-color: #bdbdce;
              text-align: center;
              border: solid 2px slategrey;
              margin: 100px 0px;
            "
      >
        <img src="../../img/icon_big_search.png" />&nbsp;검색
      </td>
    </tr>
  </table>
</template>

<script>
import SubInfoTitle from "@/components/common/SubInfoTitle";
import InputComponent from "@/components/common/InputComponent";
import SelectBoxComponent from "@/components/common/SelectBoxComponent";
export default {
  name: "CustomerInqComponent",
  components:{SubInfoTitle, SelectBoxComponent, InputComponent},
  data(){
    return{
      searchDiv:null,
    }
  },
  props:{
    searchDiv2:null,
  }
}
</script>

<style scoped>

</style>