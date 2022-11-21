<template>

  <div class="container">
    <h1 style="font-size: 30px">select box</h1>
    <div class="commondiv0">
      조회조건
      <select-box-component
        :selectClass="'select_input'"
        :width="400"
        :cdGroup="'optionsSearchDiv'"
        :defaultValue="'선택'"
        v-model="searchDiv1"
        @input="
          (value) => {
            searchDiv1 = value;
          }
        "
      />
      : {{ searchDiv1 }}
      <br />
      <br />
      <br />

      조회조건 (default 값 청구계정ID)
      <select-box-component
        :selectClass="'select_input'"
        :width="250"
        :cdGroup="'optionsSearchDiv'"
        :defaultValue="'선택'"
        :defaultNum="3"
        v-model="searchDiv2"
        @input="
          (value) => {
            searchDiv2 = value;
          }
        "
      />
      : {{ searchDiv2 }}
    </div>

    <h1 style="font-size: 30px">date picker</h1>
    <div class="commondiv0">
      <a
        href="https://icehaunter.github.io/vue3-datepicker/examples.html"
        style="width: 100%"
        target="_blank"
        >https://icehaunter.github.io/vue3-datepicker/examples.html
      </a>
      <br />
      css : classWrapper *수정*
      <br />
      <br />
      <br />
      <div style="display: flex">
        <div style="display: flex">
          <span style="padding: 5px 10px">일력</span>
          <date-picker-component
            :classWrapper="'calender_input'"
            :width="200"
            :pPlaceholder="'2022.01.01'"
            :pDate="date1"
            @input="
              (value) => {
                date1 = value;
              }
            "
          />
        </div>
        <div style="display: flex">
          <span style="padding: 5px 10px">월력</span>
          <date-picker-component
            :classWrapper="'calender_input'"
            :width="150"
            :type="'month'"
            :dateFormat="'yyyy-MM'"
            :pDate="date2"
            @input="
              (value) => {
                date2 = value;
              }
            "
          />
        </div>
        <div style="display: flex">
          <span style="padding: 5px 10px">일력시분</span>
          <date-picker-component
              :classWrapper="'calender_input'"
              :width="150"
              :time-show=true
              :pDate="date2"
              @input="
              (value) => {
                date2 = value;
              }
            "
          />
        </div>
      </div>
      <div style="width: 420px; height: 50px">
        {{ date1 }} <br />{{ date2 }}
      </div>
    </div>

    <h1 style="font-size: 30px">file input</h1>
    <div class="commondiv0">
      <div style="width: 70%">
        <file-input-component
          :atcNoti="'첨부파일은 최대 10MB 이내로 첨부 가능합니다.'"
        />
      </div>

      <div style="width: 70%; margin: 10px 0">
        <button @click="fileDisable">file input disable</button>
        {{ pDisable }}
        <file-input-component
          :atcNoti="'버튼을 눌러 파일업로드 비활성화 가능'"
          :pDisable="pDisable"
        />
      </div>
    </div>




    <h1 style="font-size: 30px">paging</h1>
    <div class="commondiv0">
      page size 10 페이징 데이터 {{ pageableData1 }} 현재페이지 : {{ page1 }}
      <paging-area
        :pageableData="pageableData1"
        @input="
          (value) => {
            page1 = value;
          }
        "
      />
      page size 5 페이징 데이터 {{ pageableData2 }} 현재페이지 : {{ page2 }}
      <paging-area
        :pageableData="pageableData2"
        :pageSize="5"
        @input="
          (value) => {
            page2 = value;
          }
        "
      />
    </div>

    <h1 style="font-size: 30px">ag grid</h1>
    <div class="commondiv1">
      <div style="width: 60%; height: 360px; margin: 10px">
        <ag-grid-component
          :rowData="rowData1"
          :columnDefs="columnDefs1"
          :isWidthFit="false"
        />
      </div>

      <div style="width: 30%; height: 360px; margin: 10px">
        <ag-grid-component :rowData="rowData2" :columnDefs="columnDefs2" />
      </div>
    </div>

    <h1 style="font-size: 30px">ButtonComponent</h1>
    <span>각 버튼의 클래스 이름</span>
    <div class="commondiv1">
    <ButtonComponent :btnClass="'btnClass1'" :btnName="'btnClass1'" />
    <ButtonComponent :btnClass="'btnclass2'" :btnName="'btnClass2'" />
    <ButtonComponent :btnClass="'btnClass3'" :btnName="'btnClass3'"   />
    <ButtonComponent :btnClass="'btnLeftImgClass'"/>btnLeftImgClass &nbsp;
    <ButtonComponent :btnClass="'btnRightImgClass'"/> btnRightImgClass&nbsp;
    <ButtonComponent :btnClass="'btnDeleteImgClass'"/> btnDeleteImgClass &nbsp;
    </div>
    <br /><br />

    <h1 style="font-size: 30px">subInfoTitle</h1>
    <span></span>
    <div class="commondiv1">
      <SubInfoTitle :subInfoTitleNm="'고객정보'" /> &emsp;
      <SubInfoTitle :subInfoTitleNm="'요금정보'" />
      <br /><br /><br />
    </div>

    <h1 style="font-size: 30px">FormDataComponent</h1>
    <span></span>
    <div style="border-top: solid black 1px; margin: 10px; padding: 10px">
      <FormDataComponent
        :FormDataclass="'InfoOfAccount'"
        :subInfoTitleNm="'청구계정 정보'"
      />

      <br />

      <FormDataComponent
        :FormDataclass="'InfoOfOrg'"
        :subInfoTitleNm="'영업조직정보'"
      />
    </div>

    <h1 style="font-size: 30px">PopupComponent</h1>
    <div class="commondiv1">
    <button @click="popup">공통 PopUp</button>
    <PopupComponent
      v-if="isModalShow"
      @popup="isModalShow = false"
      @AGREE = "''"
      :popupmsg="'데이터바인딩: isModalShow,  함수 : popup() '"
    />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <FormDataPopupComponent
      v-if="isFormModalShow"
      ref="form-data-popup-component"
      @FormPopup="isFormModalShow = false"
      @AGREE = "''"
      :popupmsg="' '"
      :reqtype="'1'"
    />
    <button @click="FormPopup1">출력 PopUp </button>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <FormDataPopupComponent
      ref="form-data-popup-component"
      v-if="isFormModalShow2"
      @FormPopup="isFormModalShow2 = false"
      @AGREE = "''"
      :popupmsg="' '"
      :reqtype="'2'"
    />
    <button @click="FormPopup2">입력 PopUp </button>
    </div>
    <br /><br />

    <h1 style="font-size: 30px">InputComponent</h1>
    <span></span>
    <div class="commondiv1" >
    <input-component
        :type="'search'"
        :height="20"
        :width="150"
        :input-class="'class2'"
        v-model="searchValue"
        :placeholder="'입력'"
        @input="
          (value) => {
            searchValue = value;
          }
        "
      />
      <input-component
        :type="'search'"
        :height="20"
        :width="150"
        :input-class="'class1'"
        v-model="searchValue"
        :placeholder="'입력'"
        @input="
          (value) => {
            searchValue = value;
          }
        "
      />
    </div>
    <br /><br /><br />


    <h1 style="font-size: 30px">RangeComponent</h1>
    <span></span>
    <div class="commondiv1" >
    <RangeComponent />
    </div>
    <br /><br /><br />


    <h1 style="font-size: 30px">linkComponent</h1>
    <div class="commondiv1" >
    <linkComponent
    :destination="'/'"
    :linkName="'링크 컴포넌트(mounse over)'"  />
    </div>
    <br /><br /><br />



    <h1 style="font-size: 30px">ChkBoxComponent</h1>
    <div class="commondiv1" >
    <ChkBoxComponent :CheckOptions='["체크옵션1","체크옵션2","체크옵션3","체크옵션4","체크옵션5",]' />
    </div>
    <br /><br /><br />

    <h1 style="font-size: 30px">RadioComponent</h1>
    <div class="commondiv1" >
    <RadioComponent :RadioOptions='["radio1","radio2","radio3","radio4","radio5",]' />
    </div>
    <br /><br /><br />

    <h1 style="font-size: 30px">CustInfoComponent</h1>
    <div
      style="
        display: inline-block;
        border-top: solid black 1px;
        margin: 10px;
        padding: 10px;
        height: auto;
        width: 100%;
        margin: 10px;
      "
    >
      <CustInfoComponent
          :custInfo="custInfo"
      />
    </div>
    <br /><br /><br />

    <h1 style="font-size: 30px">CustRetvComponent</h1>
    <span></span>
    <div
      style="
        display: inline-block;
        border-top: solid black 1px;
        margin: 10px;
        padding: 10px;
        height: auto;
        width: 86%;
        margin: 10px;
      "
    >
      <CustRetvComponent :cdGroup="'optionsSearchDiv'" />
    </div>
    <br /><br /><br />

    <h1 style="font-size: 30px">TitleAreaComponent</h1>
    <span></span>
    <div class="commondiv1" style="width:1960px;" >
      <title-area :currentMenu="currentMenu" />
    </div>
    <br /><br /><br />

    <h1 style="font-size: 30px">BlcComponent</h1>
    <span></span>
    <div
      style="
        width: 80%;
        margin: 10px;
        padding: 10px;
        height: 300px;
        display: inline-block;
        border-top: solid black 1px;
      "
    >
      <BlcComponent
        :sub-info-title-nm="'청구목록'"
        :column-defs="columnDefs1"
        :row-data="rowData1"
        :select-box-show="true"
        :total="'3'"
        :cdGroup="'optionsSearchDiv'"
        :btnName="'엑셀다운'"
      />
    </div>
    <br /><br /><br />
    <h1 style="font-size: 30px">TreeGridComponent</h1>
    <span></span>
    <div
      style="
        width: 80%;
        margin: 10px;
        padding: 10px;
        height: 300px;
        display: inline-block;
        border-top: solid black 1px;
      "
    >
      <TreeGridComponent :tableData="tableData" :columns="columns" />
    </div>
    <br /><br /><br />
    <h1 style="font-size: 30px">ValdtnComponent</h1>
    <span></span>
    <div
        style="
        width: 80%;
        margin: 10px;
        padding: 10px;
        height: 100px;
        display: inline-block;
        border-top: solid black 1px;
      "
    >
      <ValdtnComponent/>
    </div>
    <br /><br /><br />
    <h1 style="font-size: 30px">FloatingLabelsComponent</h1>
    <span></span>
    <div
        style="
        width: 80%;
        margin: 10px;
        padding: 10px;
        height: 100px;
        display: inline-block;
        border-top: solid black 1px;
      "
    >
      <FloatingLabelsComponent>
        <input  type="text" placeholder="Label">
      </FloatingLabelsComponent>
      <br>
      <FloatingLabelsComponent_2 />
    </div>
    <br /><br /><br />
    <h1 style="font-size: 30px">ToastComponent</h1>
    <span></span>
    <div
        style="
        width: 80%;
        margin: 10px;
        padding: 10px;
        height: 100px;
        display: inline-block;
        border-top: solid black 1px;
      "
    >
      <ButtonComponent @click="chk=true" :btnClass="'btnClass1'" :btnName="'btnClass1'" />
      <ToastComponent
          v-if="chk"
          :message="'hello'"
          :vertical-position="'bottom'"
          :horizontal-position="'right'"
          :class-name="'wk-info'"
          :closeable="true"
          :duration="2000"
          :transition="'slide-right'"
      />
    </div>
    <br /><br /><br />
    <h1 style="font-size: 30px">AtcRegComponent</h1>
    <span></span>
    <div
        style="
        width: 80%;
        margin: 10px;
        padding: 10px;
        height: 300px;
        display: inline-block;
        border-top: solid black 1px;
      "
    >
      <AtcRegComponent/>
    </div>
    <br /><br /><br />
    <h1 style="font-size: 30px">AtcListComponent</h1>
    <span></span>
    <div
        style="
        width: 80%;
        margin: 10px;
        padding: 10px;
        height: 300px;
        display: inline-block;
        border-top: solid black 1px;
      "
    >
      <AtcListComponent/>
    </div>
    <br /><br /><br />

    <h1 style="font-size: 30px">AtcRegComponent</h1>
    <span></span>
    <div
        style="
        width: 80%;
        margin: 10px;
        padding: 10px;
        height: 300px;
        display: inline-block;
        border-top: solid black 1px;
      "
    >
      <AtcRegComponent/>
    </div>
    <br /><br /><br />
    <h1 style="font-size: 30px">TextAreaComponent</h1>
    <span></span>
    <div
        style="
        width: 80%;
        margin: 10px;
        padding: 10px;
        height: 100px;
        display: inline-block;
        border-top: solid black 1px;
      "
    >
      <TextAreaComponent
          :rows="10"
          :placeholder="'내용을 입력'"
          :maxlength="10"
      />
    </div>
    <br /><br /><br />
    <h1 style="font-size: 30px">TabComponent</h1>
    <span></span>
    <div
        style="
        width: 1000px;
        margin: 10px;
        padding: 10px;
        height: 300px;
        display: inline-block;
        border-top: solid black 1px;
        overflow: auto;
      "
    >
      <TabComponent
          :menu-type="'Cont'"
          :comp-array="compm"
          :comp-name="comp"
          :comp-value="component"
        />
    </div>
    <br /><br /><br />
  </div>
</template>

<script>
import PagingArea from "../components/common/PagingArea.vue";
import FileInputComponent from "../components/common/FileInputComponent.vue";
import DatePickerComponent from "../components/common/DatePickerComponent.vue";
import AgGridComponent from "../components/common/AgGridComponent.vue";
import SelectBoxComponent from "../components/common/SelectBoxComponent.vue";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import SubInfoTitle from "@/components/common/SubInfoTitle.vue";
import InputComponent from "@/components/common/InputComponent";
import TitleArea from "@/components/common/TitleArea";
import PopupComponent from "@/components/common/PopupComponent.vue";
import CustInfoComponent from "@/components/common/CustInfoComponent";
import CustRetvComponent from "@/components/common/CustRetvComponent";
import BlcComponent from "@/components/common/BlcComponent";
import FormDataComponent from "@/components/common/FormDataComponent.vue";
import TreeGridComponent from "@/components/common/TreeGridComponent";
import FormDataPopupComponent from '../components/common/FormDataPopupComponent.vue';
import RangeComponent from "../components/common/RangeComponent.vue"
import ChkBoxComponent from '../components/common/ChkBoxComponent.vue';
import RadioComponent from '../components/common/RadioComponent.vue'
import ValdtnComponent from "@/components/common/ValdtnComponent";
import FloatingLabelsComponent from "@/components/common/FloatingLabelsComponent";
import FloatingLabelsComponent_2 from "@/components/common/FloatingLabelsComponent_2";
import ToastComponent from "@/components/common/ToastComponent";
import linkComponent from '@/components/common/linkComponent.vue';
import AtcRegComponent from "@/components/common/AtcRegComponent";
import AtcListComponent from "@/components/common/AtcListComponent";
import TextAreaComponent from "@/components/common/TextAreaComponent";
import {defineAsyncComponent, markRaw} from "vue";
import TabComponent from "@/components/common/TabComponent";
export default {
  name: "CommonView",
  components: {
    TabComponent,
    TextAreaComponent,
    AtcListComponent,
    AtcRegComponent,
    ToastComponent,
    FloatingLabelsComponent_2,
    FloatingLabelsComponent,
    ValdtnComponent,
    TreeGridComponent,
    PagingArea,
    FileInputComponent,
    DatePickerComponent,
    AgGridComponent,
    SelectBoxComponent,
    ButtonComponent,
    SubInfoTitle,
    InputComponent,
    TitleArea,
    PopupComponent,
    CustInfoComponent,
    CustRetvComponent,
    BlcComponent,
    FormDataComponent,
    FormDataPopupComponent,
    RangeComponent,
    ChkBoxComponent,
    RadioComponent,
    linkComponent,
  },
  data() {
    return {
      chk:false,
      searchDiv1: null,
      searchDiv2: null,
      searchValue: null,
      date1: new Date(2021, 9, 5),
      date2: new Date(),
      pDisable: true,
      comp: "cont_01_01_01",
      compm: [
        {
          "menuId": "cont_01_01_01",
          "menuNm": "계약상세",
          "upMenuId": "cont_01_01",
          "cmpnId": "ContMgt"
        },
      ],
      component: markRaw(
          defineAsyncComponent(() => import("../components/Cont/ContMgt.vue")),
      ),
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
      custInfo: {
        customerId: "CC10001042",
        customerName: "주식회사 시너샛코리아",
        customerType: "일반",
        country: "한국",
        businessNumber: "6268700321",
        customerClass: "영리법인",
        phoneNumber: "01012345678",
      },
      currentMenu: {
        cmpnId: "ChageInfoRetv",
        menuId: "bill_01_01_01",
        menuNm: "청구요금정보조회",
        upMenuId: "bill_01_01",
      },
      pageableData1: {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 10,
        totalPages: 12,
      },
      pageableData2: {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 5,
        totalPages: 11,
      },
      page1: 1,
      page2: 1,
      columnDefs1: [
        {
          headerName: "Make",
          field: "make",
          cellStyle: {
            "border-left": "0px",
          },
          headerClass: "ag-header-first-child",
        },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" },
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" },
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" },
      ],
      rowData1: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
      ],
      columnDefs2: [
        {
          headerName: "Make",
          field: "make",
          cellStyle: {
            "border-left": "0px",
          },
          headerClass: "ag-header-first-child",
        },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" },
        { headerName: "Price", field: "price" },
        { headerName: "Price", field: "price" },
      ],
      rowData2: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
      ],
      isModalShow: false, // popup 조건
      isFormModalShow: false, // Form Data popup 조건
      isFormModalShow2: false, // Form Data popup 조건
      OutputFormData : [],
      SubmitFormData : [],
    };
  },
  created() {
  },
  methods: {
    fileDisable() {
      this.pDisable = !this.pDisable;
    },

    popup(){
      if (this.isModalShow == false) this.isModalShow = true
      else this.isModalShow = false
    },
    FormPopup1(){
      if (this.isFormModalShow == false) this.isFormModalShow = true
      else this.isFormModalShow = false
      this.$refs.form-data-popup-component.GetOutputFormData()
    },
    FormPopup2(){
      if (this.isFormModalShow2 == false) this.isFormModalShow2 = true
      else this.isFormModalShow2 = false
      this.$refs.form-data-popup-component.GetSubmitFormData()
    },
  },
};
</script>

<style scoped>
.container{
  display:grid;
  grid-template-columns:minmax(860px, 1fr) ;
}

.commondiv0{
  border-top: solid black 1px;
  margin: 10px;
  padding: 10px
}

.commondiv1{
  display: flex;
  border-top: solid black 1px;
  margin: 10px;
  padding: 10px;
}
</style>
