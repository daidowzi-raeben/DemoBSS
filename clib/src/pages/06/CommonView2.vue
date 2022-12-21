<template>
  <div class="container">
    <h1 style="font-size: 30px">select box</h1>
    <div class="commondiv1">
      <div>
        select Box componenet 
        <p>  </p>
      </div>

      <div> 
        <select-box-component
        :selectClass="'select-type1'"
        :cdGroup="'wjtOptions'"
        :width="'150px'"
        :height="'25px'"
        :isDisabled="true"
        :defaultValue="'업무유형 선택'"
        :defaultcdId="selectBoxCompData.Option1"
        :selectedValue="selectBoxCompData.Option1"
        @emitValue="(value) => {selectBoxCompData.Option1 = value;}"
        />
      
        <select-box-component
        v-if="selectBoxCompData.Option1==='butt'"
        :selectClass="'select-type1'"
        :width="'120px'"
        :height="'25px'"
        :cdGroup="'wjtButtOptions'"
        :isDisabled="true"
        :defaultValue="'버튼 선택'"
        :defaultcdId="selectBoxCompData.Option2"
        :selectedValue="selectBoxCompData.Option2"
        @emitValue="(value) => {selectBoxCompData.Option2 = value;}"
        /> <br /><br />
        <p v-if="selectBoxCompData.Option1"> [Option1 값 : {{ selectBoxCompData.Option1 }}]  &nbsp; <span v-if="selectBoxCompData.Option2"> [Option2 값 :  {{ selectBoxCompData.Option2 }}] </span></p>
        <p> * optional 셀렉트 박스 ( 버튼 선택 시, 두번째 박스 활성화 )</p>
        <p> * disabled : true --> 특정 값 선택 시, 기본 값(버튼 선택) hidden 처리 및 선택 불가</p>
        
      </div>
      <div>
        <select-box-component
        :cdGroup="'emailDomain'"
        :width="'170px'"
        :height="'30px'"
        :defaultValue="'기본 선택'"
        :defaultcdId="selectBoxCompData.Option3"
        :selectedValue="selectBoxCompData.Option3"
        @emitValue="(value) => {selectBoxCompData.Option3 = value;}"
        />
        <p v-if="selectBoxCompData.Option3"> [Option3 값 : {{ selectBoxCompData.Option3 }}]  </p>
      </div>
    </div>

    <div class="commondiv0">
      <div>
        select Box componenet 
        <p>  </p>
      </div>

      <div> 
        <select-box-component
        :selectClass="'select-type1'"
        :cdGroup="'wjtOptions'"
        :width="'150px'"
        :height="'25px'"
        :isDisabled="true"
        :defaultValue="'업무유형 선택'"
        :defaultcdId="selectBoxCompData.Option1"
        :selectedValue="selectBoxCompData.Option1"
        @emitValue="(value) => {selectBoxCompData.Option1 = value;}"
        />
      
        <select-box-component
        v-if="selectBoxCompData.Option1==='butt'"
        :selectClass="'select-type1'"
        :width="'120px'"
        :height="'25px'"
        :cdGroup="'wjtButtOptions'"
        :isDisabled="true"
        :defaultValue="'버튼 선택'"
        :defaultcdId="selectBoxCompData.Option2"
        :selectedValue="selectBoxCompData.Option2"
        @emitValue="(value) => {selectBoxCompData.Option2 = value;}"
        /> <br /><br />
        <p v-if="selectBoxCompData.Option1"> [Option1 값 : {{ selectBoxCompData.Option1 }}]  &nbsp; <span v-if="selectBoxCompData.Option2"> [Option2 값 :  {{ selectBoxCompData.Option2 }}] </span></p>
        <p> * optional 셀렉트 박스 ( 버튼 선택 시, 두번째 박스 활성화 )</p>
        <p> * disabled : true --> 특정 값 선택 시, 기본 값(버튼 선택) hidden 처리 및 선택 불가</p>
        
      </div>
      <div>
        <select-box-component
        :cdGroup="'emailDomain'"
        :width="'170px'"
        :height="'30px'"
        :defaultValue="'기본 선택'"
        :defaultcdId="selectBoxCompData.Option3"
        :selectedValue="selectBoxCompData.Option3"
        @emitValue="(value) => {selectBoxCompData.Option3 = value;}"
        />
        <p v-if="selectBoxCompData.Option3"> [Option3 값 : {{ selectBoxCompData.Option3 }}]  </p>
      </div>
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

    
    <h1 style="font-size: 30px">TextAreaComponent</h1>
    <div
      class="commondiv2"
      style="height: 100px;  "
      >
        <TextAreaComponent
            :rows="10"
            :placeholder="'내용을 입력'"
            :maxlength="10"
        />
        <br /><br /><br />
      </div>
    
    
    <h1 style="font-size: 30px">Date Picker</h1>
    <div class="commondiv0">
      <a
        href="https://icehaunter.github.io/vue3-datepicker/examples.html"
        style="width: 100%"
        target="_blank"
        > <p> https://icehaunter.github.io/vue3-datepicker/examples.html </p>
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
            :width="'200px'"
            :pPlaceholder="'2022.01.01'"
            :pDate="date1"
            @emitValue="
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
            @emitValue="
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
              @emitValue="
              (value) => {
                date2 = value;
              }
            "
          />
        </div>
      </div>
      <div style="display: flex">
        <span style="padding: 5px 10px">날짜</span>
        <date-picker-component
            :classWrapper="'calender_input'"
            :width="'200px'"
            :pPlaceholder="'2022.01.01'"
            :pDate="date3"
            @emitValue="
              (value) => {
                date3 = value;
              }
            "
        />
        <span style="padding: 5px 10px">~</span>
        <date-picker-component
            :classWrapper="'calender_input'"
            :width="'200px'"
            :pPlaceholder="'2022.01.01'"
            :pDate="date4"
            @emitValue="
              (value) => {
                date4 = value;
              }
            "
        />
        <span>&nbsp;&nbsp;날짜간의 차이 일수 {{getDiffDate(date3,date4)}}</span>
      </div>
      <div style="width: 420px; height: 50px">
        {{ date1 }} <br />{{ date2 }}
      </div>
    </div>


    <h1 style="font-size: 30px">DepthTitleComponent</h1>
    <span></span>
    <div class="commondiv1" style="width:1960px;" >
      <DepthTitle :currentMenu="currentMenu" />
    </div>
    <br /><br /><br />
    

    <h1 style="font-size: 30px">FileInputComponent</h1>
    <div class="commondiv0">
      <div style="width: 70%">
        <input type="file"> adsfsdf

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
        @currentPage="(value) => {page1 = value;}"
      />
      page size 5 페이징 데이터 {{ pageableData2 }} 현재페이지 : {{ page2 }}
      <paging-area
        :pageableData="pageableData2"
        :pageSize="2"
        @currentPage="(value) => {page2 = value;}"
      />
    </div>

    <h1 style="font-size: 30px">PostCodeComponent</h1>
    <div>
      <div class="commondiv1">
        <div>
          <table style="border:1px solid" >
            <tr>
              <th> <label-component :labelNm="'우편번호'" /> </th>
              <td> <input-component :inputClass="'class5_short1'" :value="postCodeObj.zipNo" /> </td>
            </tr>
            <tr>
              <th> <label-component :labelNm="'도로명주소'" /> </th>
              <td> <input-component :inputClass="'class5_long1'" :value="postCodeObj.roadAddr" /> </td>
            </tr>
            <tr>
              <th> <label-component :labelNm="'지번주소'" />   </th>
              <td> <input-component :inputClass="'class5_long1'" :value="postCodeObj.jibunAddr" /> </td>
            </tr>
            <tr>
              <th> <label-component :labelNm="'상세주소'" /> </th>
              <td> <input-component :inputClass="'class5_long1'" :value="postCodeObj.detailPostAddress" /> </td>
            </tr>
          </table>
        </div>
        </div><div>
        <span> 주소 검색  </span>
        <input-component
        :inputClass="'class5'"
        style="width:210px; margin:0 3px;"
        :height="'30px'"
        :placeholder="'주소를 입력해 주세요.'"
        @click="postCodePopup"
        />
        <button-component
        @click="postCodePopup"
        :btnClass="'btnClass3'"
        :btnName="'주소 검색'"
        :btnHeight="'30px'"
        />
        <post-code-component
        @FormPopup="isPostCodeModalShow = false"
        @selected-juso-data="selectedJuso"
        :formDataPopupFrameWidth="'800px'"
        :PopupTitleMsg="'주소 검색'"
        :reqtype="'searchPostCode'"
        ref="PostCodeComponent"
        v-if="isPostCodeModalShow"
        :btnClicked ="0"
        />
        <br /><br /><br />
    </div>
    </div>

    
    <h1 style="font-size: 30px">LodingSpinnerComponent</h1>
    <span></span>
    <div class="commondiv1"  >
      <LoadingSpinnerComponent />
    <br /><br /><br />
    </div>




  </div>
</template>

<script>
import PagingArea from "../../components/common/PagingArea.vue";
import FileInputComponent from "../../components/common/FileInputComponent.vue";
import DatePickerComponent from "../../components/common/DatePickerComponent.vue";
import AgGridComponent from "../../components/common/AgGridComponent.vue";
import SelectBoxComponent from "../../components/common/SelectBoxComponent.vue";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import SubInfoTitle from "@/components/common/SubInfoTitle.vue";
import DepthTitle from "@/components/common/DepthTitle";
import PopupComponent from "@/components/common/PopupComponent.vue";
import CustInfoComponent from "@/components/UnionForm/CustInfoComponent";
import CustRetvComponent from "@/components/UnionForm/CustRetvComponent";
import BlcComponent from "@/components/UnionForm/BlcComponent";
import FormDataComponent from "@/components/UnionForm/FormDataComponent.vue";
import FormDataPopupComponent from '../../components/UnionForm/FormDataPopupComponent.vue';
import RangeComponent from "../../components/common/Etc/RangeComponent.vue"
import ChkBoxComponent from '../../components/common/ChkBoxComponent.vue';
import RadioComponent from '../../components/common/RadioComponent.vue'
import ValdtnComponent from "@/components/common/Etc/ValdtnComponent";
import FloatingLabelsComponent from "@/components/common/Etc/FloatingLabelsComponent";
import FloatingLabelsComponent_2 from "@/components/common/Etc/FloatingLabelsComponent_2";
import ToastComponent from "@/components/common/Etc/ToastComponent";
import linkComponent from '@/components/common/linkComponent.vue';
import AtcRegComponent from "@/components/common/Etc/AtcRegComponent";
import AtcListComponent from "@/components/common/Etc/AtcListComponent";
import TextAreaComponent from "@/components/common/TextAreaComponent";
import {defineAsyncComponent, markRaw} from "vue";
import TabComponent from "@/components/common/TabComponent";
import ApiMixin from "@/service/common.js";
import msfTree from "@/components/common/TreeComponent/msf-tree";
import InputComponent from '@/components/common/InputComponent.vue';
import LabelComponent from '@/components/common/LabelComponent.vue';
import LoadingSpinnerComponent from "@/components/common/LoadingSpinnerComponent";
import PostCodeComponent from '@/components/UnionForm/PostCodeComponent.vue';
import AgGridComponent3 from "@/components/common/DragGrid";

export default {
  mixins:[ApiMixin],
  name: "CommonView",
  components: {
    AgGridComponent3,
    LoadingSpinnerComponent,
    msfTree,
    PostCodeComponent,
    TabComponent,
    TextAreaComponent,
    AtcListComponent,
    AtcRegComponent,
    ToastComponent,
    FloatingLabelsComponent_2,
    FloatingLabelsComponent,
    ValdtnComponent,
    PagingArea,
    FileInputComponent,
    DatePickerComponent,
    AgGridComponent,
    SelectBoxComponent,
    ButtonComponent,
    SubInfoTitle,
    DepthTitle,
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
    InputComponent,
    LabelComponent,
  },
  data() {
    return {
      selectBoxCompData:{
        Option1:"",
        Option2:"",
        Option3:""
      },
      chk:false,
      date1: new Date(2021, 9, 5),
      date2: new Date(),
      date3: new Date(),
      date4: new Date(),
      pDisable: true,
      comp: "L01M05S01",
      
      component: markRaw(
          defineAsyncComponent(() => import("../../components/Cont/ContMgt.vue")),
      ),
      columns: [
        { label: "상품명", id: "name" },
        { label: "상품ID", id: "id" },
        { label: "상태", id: "state" },
      ],
      
      currentMenu: {
        cmpnId: "CommonView",
        menuId: "L06M01S01",
        menuNm: "공통화면참고",
        upMenuId: "L06M01",
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
        totalPages: 16,
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
          rowDrag:true,
        },
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
      isPostCodeModalShow : false,
      OutputFormData : [],
      SubmitFormData : [],
      postCodeObj : {},
    };
  },
  watch: {
    selectBoxCompData:{
      // 사용자 상세정보 변경이 감지되면 해당 변경 적용
      deep: true,
      handler(newSelect) {
        this.selectBoxCompData.Option2 = newSelect.Option1 == "butt" ?   newSelect.Option2:null 
      },
    },
  },
  methods: {
    fileDisable() {
      this.pDisable = !this.pDisable;
    },
    postCodePopup(){
      if (this.isPostCodeModalShow == false) this.isPostCodeModalShow = true
      else this.isPostCodeModalShow = false
      // this.$refs.postCodePopup.GetSubmitFormData()
    },
    selectedJuso(postCodeData,detailPostAddress){
      this.postCodeObj = postCodeData;
      this.postCodeObj["detailPostAddress"] = detailPostAddress
      this.isPostCodeModalShow = false;
    },
    popup(){
      if (this.isModalShow == false) this.isModalShow = true
      else this.isModalShow = false
    },
    FormPopup1(){
      if (this.isFormModalShow == false) this.isFormModalShow = true
      else this.isFormModalShow = false
      // this.$refs.form-data-popup-component.GetOutputFormData()
    },
    FormPopup2(){
      if (this.isFormModalShow2 == false) this.isFormModalShow2 = true
      else this.isFormModalShow2 = false
      // this.$refs.form-data-popup-component.GetSubmitFormData()
    },
    getDiffDate(st,fns){
      return this.diffDate(st,fns);
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
  display: inline-block;
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

.commondiv1 > div{
  flex: 1;
}

.commondiv2{
  width: 80%;
  margin: 10px;
  padding: 10px;
  height: 300px;
  display: inline-block;
  border-top: solid black 1px;
}
</style>
