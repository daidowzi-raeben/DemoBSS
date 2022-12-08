<template>
  <article class="cus360View">
    <div class="item">   <!-- 1 -->
      <cust-retv-component
      :cdGroup="'optionsSearchDiv'" />
    </div>

    <div class="item"> <!-- 2 -->
      <form-data-component
      :FormDataclass="'infoOfCust'"
      :subInfoTitleNm="'고객 정보'"
      />
    </div>

    <div class="item"> <!-- 3 -->
      <div class="product_box">
        <SubInfoTitle
        :subInfoTitleNm="'보유상품'"
        />
        <button-component
        :btn-name="'청약등록'"
        :btn-class="'btnClass3'"
        style="float: right;"
        />
      </div>
      <div class="product_box_sel">
        <span>
        <select-box-component
            :selectClass="'select_input3'"
            :width="120"
            :cdGroup="'optionsSearchDiv'"
            :defaultValue="'선택'"
            v-model="searchDiv1"
            @input="
          (value) => {
            searchDiv1 = value;
          }
        "
        />
          </span>
        <span>
        <select-box-component
            :selectClass="'select_input3'"
            :width="120"
            :cdGroup="'optionsSearchDiv'"
            :defaultValue="'선택'"
            v-model="searchDiv1"
            @input="
          (value) => {
            searchDiv1 = value;
          }
        "
        />
          </span>
        <span>
        <select-box-component
            :selectClass="'select_input3'"
            :width="120"
            :cdGroup="'optionsSearchDiv'"
            :defaultValue="'선택'"
            v-model="searchDiv1"
            @input="
          (value) => {
            searchDiv1 = value;
          }
        "
        />
          </span>
        <span>
        <input-component
            :type="'search'"
            :input-class="'class4'"
            :placeholder="'서비스계약ID 입력'"
            style="width:100%; height:100%"
        />
        </span>
        <div>
          <img :src="logo_search" />
        </div>
      </div>
      <div class="product_box_tree">
        <msf-tree :source="contentTree"
                  :activeItem="activeItemObj"
                  :selectedList="selectedItemList"
                  id-field="directoryName"
                  label-field="directoryName"
                  ref="tree"
                  @itemClick="treeItemClick"
                  style="width:100%; height:100%;font-size: 12pt;"
        ></msf-tree>
      </div>
    </div>

    <div class="item"> <!-- 4 -->
      <form-data-component
      :FormDataclass="'infoOfCont'"
      :subInfoTitleNm="'계약 정보'"
      />
    </div>

    <div class="item"> <!-- 5 -->
      <form-data-component
      :FormDataclass="'infoOfAccount'"
      :subInfoTitleNm="'청구 계정 정보'"
      @input="addComp"
      @modalShow="FormPopup"
      />
    </div>

    <div class="item"> <!-- 6 -->
      <form-data-component
      :FormDataclass="'infoOfSubs'"
      :subInfoTitleNm="'신청자 정보'"
      />
    </div>

    <div class="item"> <!-- 7 -->
      <form-data-component
      :FormDataclass="'infoOfOrg'"
      :subInfoTitleNm="'영업 조직 정보'"
      />
    </div>


  </article>
</template>

<script>
import CustRetvComponent from '@/components/common/CustRetvComponent.vue'
import FormDataComponent from '@/components/common/FormDataComponent.vue'
import ButtonComponent from "@/components/common/ButtonComponent";
import SelectBoxComponent from "@/components/common/SelectBoxComponent";
import InputComponent from "@/components/common/InputComponent";
import msfTree from "@/components/common/TreeComponent/msf-tree";
import SubInfoTitle from "@/components/common/SubInfoTitle";
import ApiMixin from "@/service/common";
export default {
  mixins:[ApiMixin],
  data(){
    return{
      logo_search:require('../img/logo_search.png'),
      contentTree:null,
      activeItemObj: {}, // 활성화 시킬 객체
      selectedItemList: [] // 선택시킬 객체
    }
  },
  components: {
    msfTree,
    InputComponent,
    SelectBoxComponent, CustRetvComponent, FormDataComponent, ButtonComponent,
    SubInfoTitle,
  },
  async beforeMount() {
    // this.gridOptions = {
    //   pinnedBottomRowData: [{ model0: "합계", model1: null, model4: 0 }],
    // };
    await this.$connect('application/json','/info.json','get','').then((res)=>{
      this.contentTree = res.data.contentTree;
    })


  },
  methods:{
    treeItemClick(event){
      console.log(event);
    }
  }

}
</script>

<style scoped>
.cus360View{
  display: grid;
  grid-template-columns: 780px 780px 1fr;
  grid-template-rows: 40px 150px 300px 70px  minmax(140px,1fr);
  gap: 20px 30px;
}
.cus360View > .item:nth-child(1){
  grid-column: 1 / 3;
  grid-row: 1;
}
.cus360View > .item:nth-child(2){
  grid-column: 1 / 3;
  grid-row: 2;
}
.cus360View > .item:nth-child(3){
  grid-column: 1 / 2;
  grid-row: 3;
}
.cus360View > .item:nth-child(4){
  grid-column: 2/3;
  grid-row: 3;
}
.cus360View > .item:nth-child(5){
  grid-column: 1/2;
  grid-row: 4/6;
}
.cus360View > .item:nth-child(6){
  grid-column: 2/3;
  grid-row: 4;
}
.cus360View > .item:nth-child(7){
  grid-column: 2/3;
  grid-row: 5;
}
.cust_box{
  padding-bottom:15px;
  float:left;
  height:20px;
  width:70%;
}
.cust_box_butt{
  padding:5px 0;
  width: 30%;
  float: left;
}
.product_box{
  padding-bottom:8px;
  float:left;
  height:20px;
  width:100%;
}

.product_box_sel{
  border:1px solid #e4e4e4;
  padding-left: 10px;
  display: flex;
  align-items: center;
  width: 770px;
  height: 40px;
  background-color: rgb(239, 245, 252);
}
.product_box_sel > span:nth-child(1),span:nth-child(2),span:nth-child(3){
  width: 120px;
  height: 26px;
  margin-right: 5px;
}
.product_box_sel > span:nth-child(4){
  width: 200px;
  height: 26px;
  margin-left: 10px;
}
.product_box_sel div{
  margin-left:3px;
}
.product_box_tree{
  width: 100%;
  height: 225px;
  overflow: auto;
  border: 1px solid #e4e4e4;
}

</style>
