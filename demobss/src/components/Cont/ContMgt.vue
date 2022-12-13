<template>
  <div>
    <div class="container">
      <!-- 1 고객 조회 -->
      <div class="item">
        <CustRetvComponent
          :cdGroup="'optionsSearchDiv'"
          :titleShow="false"
          style="height: 60px"
        />
      </div>

      <!-- 2 고객 정보 -->
      <div class="item" style="display: block">
        <FormDataComponent
          :FormDataclass="'infoOfCust'"
          :subInfoTitleNm="'고객정보'"
        />
      </div>

      <!-- 3 요금정보  -->
      <div class="item feeInfo">
        <blc-component
          :sub-info-title-nm="'요금정보'"
          :row-data="rowData"
          :column-defs="columnDefs"
          :select-box-show="false"
          :total="'10'"
          :cdGroup="'optionsSearchDiv'"
          :btnName="'엑셀다운'"
          style="height: 110%"
        />
      </div>

      <!-- 4 계약 정보 -->
      <div class="item">
        <form-data-component
          :FormDataclass="'infoOfCont'"
          :subInfoTitleNm="'계약 정보'"
        />
      </div>

      <!-- 5 신청자정보 -->
      <div class="item">
        <FormDataComponent
          :FormDataclass="'infoOfSubs'"
          :subInfoTitleNm="'신청자 정보'"
        />
      </div>

      <!-- 6 영업조직 정보 -->
      <div class="item">
        <FormDataComponent
          :FormDataclass="'infoOfOrg'"
          :subInfoTitleNm="'영업조직정보'"
        />
      </div>

      <!-- 7 청구계정정보 -->
      <div class="item">
        <form-data-component
          :FormDataclass="'infoOfAccount'"
          :subInfoTitleNm="'청구계정 정보'"
          @input="addComp"
          @modalShow="FormPopup"
        />
      </div>

      <!-- 8 보유상품 -->
      <div class="item">
        <!-- 3 -->
        <div class="product_box">
          <sub-info-title :subInfoTitleNm="'보유상품'" />
          <button-component
            :btn-name="'청약등록'"
            :btn-class="'btnClass3'"
            style="float: right"
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
              style="width: 100%; height: 100%"
            />
          </span>
          <div>
            <img :src="logo_search" />
          </div>
        </div>
        <div class="product_box_tree">
          <msf-tree
            :source="contentTree"
            :activeItem="activeItemObj"
            :selectedList="selectedItemList"
            id-field="directoryName"
            label-field="directoryName"
            ref="tree"
            @itemClick="treeItemClick"
            style="width: 100%; height: 100%; font-size: 12pt"
          ></msf-tree>
        </div>
      </div>
    </div>
    <FormDataPopupComponent
      ref="form-data-popup-component"
      v-if="isFormModalShow"
      @FormPopup="isFormModalShow = false"
      @AGREE="''"
      :popupmsg="' '"
      :reqtype="'2'"
    />
  </div>
</template>

<script>
import CustRetvComponent from "@/components/common/CustRetvComponent.vue";
import SubInfoTitle from "@/components/common/SubInfoTitle.vue";
import CustInfoComponent from "@/components/common/CustInfoComponent.vue";
import FormDataComponent from "@/components/common/FormDataComponent.vue";
import ApiMixin from "@/service/common";
import FormDataPopupComponent from "@/components/common/FormDataPopupComponent.vue";
import BlcComponent from "../common/BlcComponent.vue";
import SelectBoxComponent from "../common/SelectBoxComponent.vue";
import InputComponent from "../common/InputComponent.vue";
import MsfTree from "../common/TreeComponent/msf-tree.vue";

export default {
  mixins: [ApiMixin],
  name: "ContMgt",
  components: {
    BlcComponent,
    CustInfoComponent,
    CustRetvComponent,
    SubInfoTitle,
    FormDataComponent,
    FormDataPopupComponent,
    SelectBoxComponent,
    InputComponent,
    MsfTree,
  },
  data() {
    return {
      logo_search: require("../../img/logo_search.png"),
      contentTree: [
        {
          groupId: 0,
          directoryName: "청구계정ID 홍길* 은행계좌자동이체",
          chk: true,
          children: [
            {
              groupId: 1,
              directoryName:
                "요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111",
              chk: true,
              chk2: false,
            },
          ],
        },
        {
          groupId: 5,
          directoryName: "청구계정ID 홍길* 은행계좌자동이체",
          children: [
            {
              groupId: 2,
              directoryName:
                "요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111",
              chk: false,
              chk2: true,
            },
            {
              groupId: 3,
              directoryName:
                "요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 1123",
              chk: true,
              chk2: true,
            },
            {
              groupId: 4,
              directoryName:
                "요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111",
              chk: true,
              chk2: true,
            },
            {
              groupId: 2,
              directoryName:
                "요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111",
              chk: false,
              chk2: true,
            },
            {
              groupId: 3,
              directoryName:
                "요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111",
              chk: true,
              chk2: true,
            },
            {
              groupId: 4,
              directoryName:
                "요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111",
              chk: true,
              chk2: true,
            },
            {
              groupId: 2,
              directoryName:
                "요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111",
              chk: false,
              chk2: true,
            },
            {
              groupId: 3,
              directoryName:
                "요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111",
              chk: true,
              chk2: true,
            },
            {
              groupId: 4,
              directoryName:
                "요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111",
              chk: true,
              chk2: true,
            },
          ],
        },
        { groupId: 6, directoryName: "청구계정ID 홍길* 은행계좌자동이체" },
      ],
      activeItemObj: {}, // 활성화 시킬 객체
      selectedItemList: [], // 선택시킬 객체
      gridOptions: null,
      tableData: [
        {
          name: "인말새트 C국내협력점",
          id: "P10001257",
          state: "사용중",
          children: [
            {
              name: "Regional MVSAT 128/256 요금(80cm 안테나용) 3년약정 [YC CLOVER]",
              id: "P10000012679",
              state: "사용중",
            },
          ],
        },
        {
          name: "인말새트 C국내협력점",
          id: "P10001257",
          state: "사용중",
          children: [
            {
              name: "Regional MVSAT 128/256 요금(80cm 안테나용) 3년약정 [YC CLOVER]",
              id: "P10000012679",
              state: "사용중",
            },
          ],
        },
        {
          name: "인말새트 C국내협력점",
          id: "P10001257",
          state: "사용중",
          children: [
            {
              name: "Regional MVSAT 128/256 요금(80cm 안테나용) 3년약정 [YC CLOVER]",
              id: "P10000012679",
              state: "사용중",
              children: [
                {
                  name: "Regional MVSAT 128/256 요금(80cm 안테나용) 3년약정 [YC CLOVER]",
                  id: "P10000012679",
                  state: "사용중",
                },
              ],
            },
          ],
        },
      ],
      columns: [
        { label: "상품명", id: "name" },
        { label: "상품ID", id: "id" },
        { label: "상태", id: "state" },
      ],
      custInfo: [],
      columnDefs: [],
      rowData: [],
      isFormModalShow: false,
    };
  },
  async beforeMount() {
    await this.$connect("application/json", "/info.json", "get", "")
      .then((res) => {
        this.custInfo = res.data.info[0];
        this.columnDefs = res.data.columnDefs;
        this.rowData = res.data.rowData;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    addComp(param) {
      console.log(param);
      this.$emit("input", param);
    },

    FormPopup() {
      if (this.isFormModalShow == false) this.isFormModalShow = true;
      else this.isFormModalShow = false;
      this.$refs.form - data - popup - component.GetSubmitFormData();
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 780px 780px 1fr;
  grid-template-rows: 60px 140px 280px 70px 100px 200px minmax(250px, 1fr);
  gap: 15px 30px;
}

.item {
  display: flex;
  flex-wrap: wrap;
}

.item:nth-child(1) {
  grid-column: 1/3;
  grid-row: 1/2;
}

.item:nth-child(2) {
  grid-column: 1/3;
  grid-row: 2/3;
}

.item:nth-child(3) {
  grid-column: 1/2;
  grid-row: 3;
}

.item:nth-child(4) {
  grid-column: 2/3;
  grid-row: 3;
}

.item:nth-child(5) {
  grid-column: 2/3;
  grid-row: 4;
}

.item:nth-child(6) {
  grid-column: 2/3;
  grid-row: 5;
}

.item:nth-child(7) {
  grid-column: 1/2;
  grid-row: 4/6;
}

.item:nth-child(8) {
  grid-column: 2/3;
  grid-row: 6;
}

div.layout {
  height: 100vh;
  position: absolute;
  overflow-y: scroll;
}

.cmProducts {
  float: left;
  position: relative;
  /* height: 230px; */
  width: 100%;
  border: groove;
  overflow: scroll;
}

.feeInfo {
  height: 300px;
}

.product_box {
  padding-bottom: 8px;
  float: left;
  height: 20px;
  width: 100%;
}
.product_box_sel {
  border: 1px solid #e4e4e4;
  padding-left: 10px;
  display: flex;
  align-items: center;
  width: 770px;
  height: 40px;
  background-color: rgb(239, 245, 252);
}
.product_box_sel > span:nth-child(1),
span:nth-child(2),
span:nth-child(3) {
  width: 120px;
  height: 26px;
  margin-right: 5px;
}
.product_box_sel > span:nth-child(4) {
  width: 200px;
  height: 26px;
  margin-left: 10px;
}
.product_box_sel div {
  margin-left: 3px;
}
.product_box_tree {
  width: 100%;
  height: 225px;
  overflow: auto;
  border: 1px solid #e4e4e4;
}
/* .col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;} */
/*
.col-1 {width: 160px;}
.col-2 {width: 320px;}
.col-3 {width: 480px;}
.col-4 {width: 640px;}
.col-5 {width: 800px;}
.col-6 {width: 960px;}
.col-7 {width: 1120px;}
.col-8 {width: 1280px;}
.col-9 {width: 1440px;}
.col-10 {width: 1600px;}
.col-11 {width: 1720px;}
.col-12 {width: 1840px;} */
</style>
