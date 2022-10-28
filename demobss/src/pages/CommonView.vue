<template>
  <div>
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
  </div>
</template>

<script>
import PagingArea from "../components/common/PagingArea.vue";
import FileInputComponent from "../components/common/FileInputComponent.vue";
import DatePickerComponent from "../components/common/DatePickerComponent.vue";
import AgGridComponent from "../components/common/AgGridComponent.vue";
import SelectBoxComponent from "../components/common/SelectBoxComponent.vue";
export default {
  name: "CommonView",
  components: {
    PagingArea,
    FileInputComponent,
    DatePickerComponent,
    AgGridComponent,
    SelectBoxComponent,
  },
  data() {
    return {
      searchDiv1: null,
      searchDiv2: null,
      date1: new Date(2021, 9, 5),
      date2: new Date(),
      pDisable: true,
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
    };
  },
  created() {
    // this.rowData2 = [];
  },
  methods: {
    fileDisable() {
      this.pDisable = !this.pDisable;
    },
  },
};
</script>

<style scoped></style>
