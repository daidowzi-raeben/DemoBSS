<template>
  <div style="overflow:scroll;">
    <h1 style="font-size: 30px">select box</h1>
    <div style="border-top: solid black 1px; margin: 10px; padding: 10px">
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
    <div style="border-top: solid black 1px; margin: 10px; padding: 10px">
      <a
        href="https://icehaunter.github.io/vue3-datepicker/examples.html"
        style="width: 100%"
        target="_blank"
        >https://icehaunter.github.io/vue3-datepicker/examples.html
      </a>
      <br />
      겉 css : classWrapper 속 css : classInput
      <br />
      <br />
      <br />
      <div style="display: flex">
        <div style="display: flex">
          <span style="padding: 5px 10px">일력</span>
          <date-picker-component
            :classWrapper="'calender_input'"
            :classInput="'datepicker_class_in'"
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
            :classInput="'datepicker_class_in'"
            :width="100"
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
        <div style="width: 420px">{{ date1 }} <br />{{ date2 }}</div>
      </div>
    </div>

    <h1 style="font-size: 30px">file input</h1>
    <div style="border-top: solid black 1px; margin: 10px; padding: 10px">
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
    <div style="border-top: solid black 1px; margin: 10px; padding: 10px">
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
    <div
      style="
        display: flex;
        border-top: solid black 1px;
        margin: 10px;
        padding: 10px;
      "
    >
      <div style="width: 1500px; height: 360px; margin: 10px">
        <ag-grid-component
          :rowData="rowData1"
          :columnDefs="columnDefs1"
          :isWidthFit="false"
        />
      </div>

      <div style="width: 50%; height: 360px; margin: 10px">
        <ag-grid-component :rowData="rowData2" :columnDefs="columnDefs2" />
      </div>
    </div>

    <h1 style="font-size: 30px">ButtonComponent</h1>
    <span>각 버튼의 클래스 이름</span>
    <div
      style="
        display: flex;
        border-top: solid black 1px;
        margin: 10px;
        padding: 10px;
      "
    >
    <ButtonComponent
      :btnClass="'btnClass1'"
      :btnName="'btnClass1'"
    />
    <ButtonComponent
      :btnClass="'btnclass2'"
      :btnName="'btnClass2'"
    />
    <ButtonComponent
      :btnClass="'btnClass3'"
      :btnName="'btnClass3'"
    />
    <ButtonComponent
      :btnClass="'btnLeftImgClass'"/>btnLeftImgClass &nbsp;
    <ButtonComponent
      :btnClass="'btnRightImgClass'"/> btnRightImgClass&nbsp;
    <ButtonComponent
      :btnClass="'btnDeleteImgClass'"/> btnDeleteImgClass &nbsp;
    </div>
    <br><br>

    <h1 style="font-size: 30px">subInfoTitle</h1>
    <span></span>
    <div
      style="
        display: flex;
        border-top: solid black 1px;
        margin: 10px;
        padding: 10px;
      "
    >
    <SubInfoTitle
      :subInfoTitleNm="'고객정보'"
    /> &emsp;
    <SubInfoTitle
      :subInfoTitleNm="'요금정보'"
    />
    <br><br><br>
    </div>




    <h1 style="font-size: 30px">PopupComponent</h1>
    <div
      style="
        display: flex;
        border-top: solid black 1px;
        margin: 10px;
        padding: 10px;
      "
    >
    <button @click="popup">팝업 보이기 </button>
    <PopupComponent
      v-if="isModalShow"
      @popup="isModalShow = false"
      @AGREE = "''"
      :popupmsg="'데이터바인딩: isModalShow,  함수 : popup() '"
    />
    </div>

  <br><br>
    <h1 style="font-size: 30px">InputComponent</h1>
    <span></span>
    <div
        style="
        display: flex;
        border-top: solid black 1px;
        margin: 10px;
        padding: 10px;
      "
    >
    <input-component
        :type="'search'"
        :height="20"
        :width="150"
        v-model="searchValue"
        :placeholder="'입력'"
        @input="
                (value) => {
                  searchValue = value;
                }
              "
    />
    </div>
    <br><br><br>

    <h1 style="font-size: 30px">CustomerInfoComponent</h1>
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
      <CustomerInfoComponent />
    </div>
    <br><br><br>

    <h1 style="font-size: 30px">CustomerSearchComponent</h1>
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
      <CustomerSearchComponent />
    </div>
    <br><br><br>

    <h1 style="font-size: 30px">TitleAreaComponent</h1>
    <span></span>
    <div
        style="
        display: flex;
        border-top: solid black 1px;
        margin: 10px;
        padding: 10px;
        width:1960px;
      "
    >
      <title-area :currentMenu="currentMenu" />
    </div>
    <br><br><br>

    <h1 style="font-size: 30px">BoxComponent</h1>
    <span></span>
    <div
        style="
        width: 80vw;
        margin: 10px;
        padding: 10px;
        height: 300px;
        display: inline-block;
        border-top: solid black 1px;
      "
    >
      <BoxComponent
          :sub-info-title-nm="'청구목록'"
          :column-defs="columnDefs1"
          :row-data="rowData1"
      />
    </div>
    <br><br><br>

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
import PopupComponent  from  "@/components/common/PopupComponent.vue";
import CustomerInfoComponent from "@/components/common/CustomerInfoComponent";
import CustomerSearchComponent from "@/components/common/CustomerSearchComponent";
import BoxComponent from "@/components/common/BoxComponent";
export default {
  name: "CommonView",
  components: {
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
    CustomerInfoComponent,
    CustomerSearchComponent,
    BoxComponent,
  },
  data() {
    return {
      searchDiv1: null,
      searchDiv2: null,
      searchValue :null,
      date1: new Date(2021, 9, 5),
      date2: new Date(),
      pDisable: true,
      currentMenu:
        {
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
    };
  },
  created() {
    // this.rowData2 = [];
  },
  methods: {
    fileDisable() {
      this.pDisable = !this.pDisable;
    },

    popup(){
      if (this.isModalShow == false) this.isModalShow= true
      else this.isModalShow = false
    },
  },
};
</script>

<style scoped></style>
