<template>
  <div class="container">
    
    <div class="commondiv0">
    <h1 style="font-size: 30px">FileAgGridComponent</h1>
      <div style="width: 700px;  height: 400px;">
        <FileAgGridComponent 
          @emitUploadFile="(value) => { 
            uploadFiles = [];
            uploadFiles = value;  }"  
        />
        <p v-for="uploadFile in uploadFiles" :key="uploadFile"> emit Files 객체 : {{ uploadFile}} &emsp; 파일명 : {{ uploadFile.name }} </p>
      </div>


      <p>- 파일 ag - grid  </p>
      <p>- cdGroup : 셀렉트 박스에 넣을 데이터에 대한 코드그룹</p>
    </div>



    
    <div class="commondiv0"></div>
    <div class="commondiv0">
      <!--[O] select Box -->
      <h1 class="commondiv-title">select box</h1>
      <label-component label-nm="'select'" />&nbsp;&nbsp;
      <select-box-component
        :selectClass="'select-type1'"
        :cdGroup="'wjtOptions'"
        :width="'150px'"
        :height="'25px'"
        :isDisabled="true"
        :defaultValue="'업무유형 선택'"
        :defaultcdId="selectBoxCompData.Option1"
        :selectedValue="selectBoxCompData.Option1"
        @emitValue=" (value) => { selectBoxCompData.Option1 = value;}"
      />

      <select-box-component
        v-if="selectBoxCompData.Option1 === 'butt'"
        :selectClass="'select-type1'"
        :width="'120px'"
        :height="'25px'"
        :cdGroup="'wjtButtOptions'"
        :isDisabled="true"
        :defaultValue="'버튼 선택'"
        :defaultcdId="selectBoxCompData.Option2"
        :selectedValue="selectBoxCompData.Option2"
        @emitValue="
          (value) => {
            selectBoxCompData.Option2 = value;
          }
        "
      />
      <br />
      <p v-if="selectBoxCompData.Option1">
        [Option1 값 : {{ selectBoxCompData.Option1 }}] &nbsp;
        <span v-if="selectBoxCompData.Option2">
          [Option2 값 : {{ selectBoxCompData.Option2 }}]
        </span>
      </p>
      <p>
        * optional 셀렉트 박스 ( 버튼 선택 시, 두번째 박스 활성화 ) --> 두번재
        select box에서 첫번째 셀렉트박스의 emitValue에서 받는 변수 조건문에따라
        출력
      </p>
      <p>
        * disabled : true --> 특정 값 선택 시, 기본 값(버튼 선택) hidden 처리 및
        선택 불가
      </p>
      <p>
        width, height 기본 값으로 부모 tag의 100%로 지정되어 있기때문에 별도의
        :width, :height로 사이즈 지정 필요.
      </p>
      <br /><br />
      <label-component label-nm="'select-type1'" />&nbsp;&nbsp;
      <select-box-component
        :cdGroup="'emailDomain'"
        :width="'170px'"
        :height="'30px'"
        :defaultValue="'기본 선택'"
        :defaultcdId="selectBoxCompData.Option3"
        :selectedValue="selectBoxCompData.Option3"
        @emitValue="
          (value) => {
            selectBoxCompData.Option3 = value;
          }
        "
      />
      <br />
      <p v-if="selectBoxCompData.Option3">
        [Option3 값 : {{ selectBoxCompData.Option3 }}]
      </p>
      <p>
        * disabled : false --> 특정 값 선택에도 기본 값(기본 선택) 선택 가능
      </p>
      <br /><br />

      <label-component label-nm="'select-type1'" />&nbsp;&nbsp;
      <select-box-component
        :cdGroup="'dutySelect'"
        :width="'170px'"
        :height="'30px'"
        :defaultValue="'기본 선택'"
        :defaultcdId="'role2'"
        :selectedValue="selectBoxCompData.Option4"
        @emitValue="
          (value) => {
            selectBoxCompData.Option4 = value;
          }
        "
      /><br />
      <p v-if="selectBoxCompData.Option4">
        [Option4 값 : {{ selectBoxCompData.Option4 }}]
      </p>
      <p>*defaultcdId 지정 시, 처음 기본 값을 해당 코드를 가진 값 출력</p>
      <p>사용자관리(UserAdm.vue) 데이터 클릭부터 출력까지의 로직 참고</p>
    </div>

    <div class="commondiv0" style="padding-bottom:30px;"> <!-- Radio Component  -->
      <div>
        <h1 class="commondiv-title">RadioComponent</h1>
        <div>
          <br/>
          <radio-component 
          :RadioOption="'RmnyOpt'" 
          :selectedRadio="radioData1"
          :defaultcdId="radioData1" 
          @radioEmit="(radioValue) => { radioData1 = radioValue }"
          /> 
          <br/>
          <p v-show="radioData1"> 선택 값 : {{ radioData1 }}</p>
          <p> * RadioOption으로 라디오 선택 옵션 선택 (현재는 json)  </p>
          <p> * defultcdId 주어지지 않아서 기본 값 선택 X  </p>
          <br/><br/><br/>

          <radio-component 
          :RadioOption="'scrtOptions'" 
          :selectedRadio="radioData2"
          :defaultcdId="radioData2"
          @radioEmit="(radioValue) => {radioData2 = radioValue }" />
          <br/>
          <p> 선택 값 : {{ radioData2 }}</p>
          <p> * defaultcdId props를 이용해 특정 값의 코드(ex 공개(02))를 데이터로 넣어 줄 경우, 해당 값 선택되어 출력</p>
          <p> * selectedRadio props를 이용해 table에서 데이터 클릭 등 데이터가 변경 되는 경우에 변경 데이터를 컴포넌트로 보내어 값 변경 </p>


        </div>
      </div>
    </div>

    <div class="commondiv0">
      <!-- ag grid -->
      <h1 class="commondiv-title">ag grid</h1>
      <br />
      <div class="commondiv1" style="width: 100%; height: 800px; border:none;">
        <div style="height: 300px">
          <ag-grid-component
            :header-color="'rgb(239 245 252)'"
            :rowData="rowData0"
            :columnDefs="columnDefs0"
            :row-height="40"
            :overlayNoRowsTemplate="
              `<span> <br>` + '<br />조회 결과가 없습니다.' + ` </span>`
            "
          />
          <br />
          <div class="commondiv1" style="border:none;"> 
          <div class="commondiv0" style="height: 400px; width:800px; border:none;">
            <ag-grid-component
              ref="agGridComponent"
              :rowData="rowData1"
              :columnDefs="columnDefs1"
              :rowHeight="40"
              :isDeselect="true"
              :isAutoSize="[false,'type1']"
              :headerHeight="60"
              :rowClicked="agGridRowClicked"
              :overlayNoRowsTemplate="noRowTemplateMsg"
              
            />
            <span>
          </span>
          
        </div>
          
          <div> <br /> 
            <p> * 위쪽 ag-grid는 박스 크기에 맞춰 테이블 출력  </p>
            <p> * 왼쪽 ag-grid는 지정된 width에 맞춰 테이블 출력 (isAutoSize props) 예시 :  </p>
            <p> * isDeselect = true 일 경우, 클릭 했던 row 클릭 취소 가능 </p>
            <p> * columnDefs에서 컬럼명, 너비, css style 클래스 등 다양한 속성 사용 가능.  </p>
            <p> * 참고 : <span> <link-component :destination="'https://www.ag-grid.com/vue-data-grid/getting-started'" :linkNm="'(링크) ag-grid Docs'" /> </span></p>
            <p> * 왼쪽 ag-grid 클릭 데이터 :  {{ selectedData }} </p>
          </div>
        </div>

        </div>
      </div>
    </div>

    <div class="commondiv0">
      <!--[O] textArea -->
      <h1 class="commondiv-title">TextAreaComponent</h1>
      <TextAreaComponent
        :textAreaHeight="'100px'"
        :textAreaWidth="'600px'"
        :maxlength="70"
        :placeholder="'내용 입력'"
        :contents="textAreaData"
        v-model="textAreaData"
      />
      <p>textAreaData 출력 값 : {{ textAreaData }}</p>
      <p>textAreaData 변수에 값이 없을 경우 placeholder props 값 출력</p>
      <p>textAreaData 변수에 기본 값 or 변경 있을 경우 해당 값 출력</p>
      <p>v-model : 해당 변수(textAreaData)에 연결하여 입력 값에 따라 동기화</p>
      <p>contents : 해당 변수 값을 textArea컴포넌트로 전송하여 출력.</p>
      <br /><br /><br />
    </div>

    <div class="commondiv0">
      <!-- Date Picker -->
      <h1 class="commondiv-title">Date Picker</h1>
      <div style="display: flex">
        <span> <label-component label-nm="월력" />&nbsp;&nbsp;</span>
        <div style="display: inline-block">
          <date-picker-component
            :width="150"
            :dateFormat="'yyyy-MM'"
            :type="'month'"
            :pPlaceholder="'2022-12-23'"
            :p-date="date.date1"
            @emitValue="(value) => {date.date1 = value;}"
          />
          <br /><br />
        </div>
        <span style="margin-left: 20px">
          {{ new Date(date.date1).toLocaleString() }}
        </span>
      </div>
      <div style="display: flex">
        <span> <label-component label-nm="일력" />&nbsp;&nbsp;</span>
        <div style="display: inline-block">
          <date-picker-component
            :pPlaceholder="'2022.01.01'"
            :p-date="date.date2"
            :width="'200px'"
            @emitValue="(value) => {date.date2 = value;}"
          />
          <br /><br />
        </div>
        <span style="margin-left: 20px">
          {{ new Date(date.date2).toLocaleString() }}
        </span>
      </div>

      <div style="display: flex">
        <span> <label-component label-nm="일력 시 분" />&nbsp;&nbsp;</span>
        <date-picker-component
          :width="150"
          :type="'time'"
          :dateFormat="'yyyy-MM-dd HH:mm'"
          :pDate="date.date3"
          @emitValue=" (value) => {date.date3 = value;}
          "
        />
        <span style="margin-left: 20px">
          {{ new Date(date.date3).toLocaleString() }}
        </span>
      </div>
      <br /><br />
      <div>
        <span> <label-component label-nm="기간" />&nbsp;&nbsp;</span>
        <div style="display: inline-block">
          <date-picker-component
            :p-date="date.date4"
            @emitValue="
              (value) => {
                date.date4 = value;
              }
            "
          />
        </div>
        <span> ~ </span>
        <div style="display: inline-block">
          <date-picker-component
            :calenderBackgroundColor="'rgb(247, 247, 248)'"
            :p-date="date.date5"
            @emitValue="
              (value) => {
                date.date5 = value;
              }
            "
          />
        </div>
        <span>
          날짜간의 차이 일수 {{ getDiffDate(date.date4, date.date5) }}</span
        >
      </div>
      <br /><br />

      <div style="display: flex">
        <span>
          <label-component label-nm="일력( 날짜 제한 )" />&nbsp;&nbsp;</span
        >
        <div style="display: inline-block">
          <date-picker-component
            :pPlaceholder="'2023.01.01'"
            :p-date="date.date6"
            :isMinDate="new Date('2023.01.03')"
            :isMaxDate="new Date('2023.01.15')"
            :width="'200px'"
            @emitValue="
              (value) => {
                date.date6 = value;
              }
            "
          />
          <br /><br />
        </div>
        <span style="margin-left: 20px">
          {{ new Date(date.date6).toLocaleString() }}
        </span>
      </div>
      <p>
        * date picker는 block형식이므로 두 개의 date picker 사용 시,
        inline-block 또는 flex 사용 해야합니다.
      </p>
      <p>* background color, width, height 설정으로 크기 및 색상 조절</p>
      <p>
        *emitValue로 date-picker에서 변경한 날짜 값을 data 변수에 저장 필요.
      </p>
      <p>*x버튼 (clear) 클릭 시, pPlaceholder로 설정한 값을 표시합니다.</p>
      <p>* type props를 이용해서 월/일/시분 력 선택 가능</p>
      <p>
        * isMinDate / isMaxDate 를 이용해서 특정 날짜 구간 지정 가능 ( 두개의
        props 모두 사용해야 가능합니다.)
      </p>
    </div>

    <div class="commondiv0">
      <!--[O] DepthTitleComponent  -->
      <h1 class="commondiv-title">DepthTitleComponent</h1>
      <DepthTitle :currentMenu="currentMenu" />
      <p>
        * DepthTitle의 경우 currentMenu를 통해 메뉴의 최상단 Depth부터 현재
        보여줄 타이틀 제목까지 3Depth를 출력
      </p>
      <p>* 현재는 PageTitle 사용.</p>
      <br /><br />
    </div>

    <div class="commondiv0"> <!-- FileInputComponent  -->
      <h1 class="commondiv-title">FileInputComponent</h1>
      <div style="width: 70%">
        <input type="file" style="border: 1px solid #bdbdbd" /> 
        <p>* 기본 input 태그의 file 타입  </p>
        <br/><br/>

        <label-component label-nm="파일 컴포넌트 (1)" />
        <file-input-component :atcNoti="'첨부파일은 최대 10MB 이내로 첨부 가능합니다.'" />
      </div>

      <br/><br/>
      <div style="width: 70%; margin: 10px 0">
        <button @click="fileDisable">file input disable</button> {{ pDisable ? "업로드 불가":" 업로드 가능" }}
        <file-input-component :fileBoxWidth="'200px'" :atcNoti="'버튼을 눌러 파일업로드 비활성화 가능'" :pDisable="pDisable" />
      </div>
      
      <p> * 파일 업로드시, 파일명.확장자(크기) 로 출력  </p>
      <p> * 파일 업로드시, 업로드 불가 파일의 경우 팝업 생성  </p>
      <p> * 파일 업로드 후 x버튼 클릭 시, 해당 파일 삭제  </p>
      <p> * 파일 업로드 시 add로 파일 리스트에 추가  (초기화 X )</p>
      <p> * 버튼을 통해 파일 업로드 가능 여부 상태 기능  </p>
    </div>

    <div class="commondiv0">
      <!-- paging  -->
      <h1 class="commondiv-title">paging</h1>
      <p>pageSize: 10</p>
      <p>pageableData : {{ pageableData1 }}</p>
      <P>현재페이지 : {{ page1 }}</P>
      <div>
        <paging-component
          style="float: left"
          :pageableData="pageableData1"
          @currentPage="
            (value) => {
              page1 = value;
            }
          "
        />
      </div>
      <br /><br /><br /><br />

      <p>pageSize: 5</p>
      <p>pageableData : {{ pageableData2 }}</p>
      <P>현재페이지 : {{ page2 }} </P> 
      <paging-component
        style="float: left"
        :pageableData="pageableData2"
        :pageSize="5"
        @currentPage="
          (value) => {
            page2 = value;
          }
        "
      />
      <br/><br/><br/><br/>
      <p>* pageSize, pageableData(페이징 데이터 객체) props에 해당하는 데이터 지정하여 컴포넌트로 전달</p>
      <p>* emitValue로 변하는 값 전달</p>
    </div>


    <div class="commondiv0">
      <!--[O] LodingSpinnerComponent -->
      <h1 class="commondiv-title">LodingSpinnerComponent</h1>
      <p>* 로딩 화면</p>
      <LoadingSpinnerComponent style="width: 300px; height: 400px" />

      <br /><br /><br />
    </div>
  </div>
</template>

<script>
import PagingComponent from "../../components/common/PagingComponent.vue";
import FileInputComponent from "../../components/common/FileInputComponent.vue";
import DatePickerComponent from "../../components/common/DatePickerComponent.vue";
import AgGridComponent from "../../components/common/AgGridComponent.vue";
import SelectBoxComponent from "../../components/common/SelectBoxComponent.vue";
import DepthTitle from "@/components/common/DepthTitle";
import RadioComponent from "../../components/common/RadioComponent.vue";
import TextAreaComponent from "@/components/common/TextAreaComponent";
import { defineAsyncComponent, markRaw } from "vue";
import ApiMixin from "@/service/common.js";
import LoadingSpinnerComponent from "@/components/common/LoadingSpinnerComponent";
import FileAgGridComponent from "@/components/UnionForm/FileAgGridComponent.vue";

export default {
  mixins: [ApiMixin],
  name: "CommonView2",
  components: {
    SelectBoxComponent,
    PagingComponent,
    FileInputComponent,
    DatePickerComponent,
    AgGridComponent,
    RadioComponent,
    TextAreaComponent,
    DepthTitle,
    LoadingSpinnerComponent,
    FileAgGridComponent
},
  data() {
    return {
      uploadFiles:[],
      noRowTemplateMsg: `<span> <strong>  조회 결과가 없습니다. </strong> <br><br><br> </span>`,
      selectBoxCompData: {
        Option1: "",
        Option2: "",
        Option3: "",
        Option4: "",
      },
      radioData1:"",
      radioData2:"02",
      textAreaData: "기본 글 입니다.",
      date: {
        date1: new Date(2023, 1, 25),
        date2: new Date(),
        date3: new Date(),
        date4: new Date(),
        date5: new Date(2022, 11, 31),
        date6: new Date(2023, 0, 1),
      },
      pDisable: true,
      comp: "L01M05S01",

      component: markRaw(
        defineAsyncComponent(() => import("../../components/Cont/ContMgt.vue"))
      ),
      columns: [
        { label: "상품명", id: "name" },
        { label: "상품ID", id: "id" },
        { label: "상태", id: "state" },
      ],

      currentMenu: {
        cmpnId: "CommonView2",
        menuId: "L06M01S02",
        menuNm: "공통화면참고2",
        upMenuId: "L06M01",
      },
      pageableData1: {
        pageNumber: 1,
        totalPages: 12,
      },
      pageableData2: {
        pageNumber: 3,
        totalPages: 16,
      },
      page1: 1,
      page2: 1,
      columnDefs0: [
        { headerName: "순서", field: "model1", width: 40 },
        { headerName: "고객ID", field: "model2", width: 120 },
        { headerName: "청구계정ID", field: "model3", width: 120 },
        { headerName: "고객명", field: "model4", width: 90 },
        { headerName: "서비스계약ID", field: "model5", width: 120 },
        { headerName: "유형", field: "model6", width: 90 },
        { headerName: "메뉴ID", field: "model7", width: 90 },
        { headerName: "메뉴명", field: "model8", width: 110 },
        { headerName: "URL", field: "model9", width: 120 },
        { headerName: "화면명", field: "model10", width: 110 },
        { headerName: "사용자ID", field: "model11", width: 110 },
        { headerName: "사용자명", field: "model12", width: 90 },
        { headerName: "사용자IP", field: "model13", width: 110 },
        {
          headerName: "파일명/데이터개수",
          field: "model14",
          width: 150,
          cellStyle: { justifyContent: "flex-start" },
        },
        {
          headerName: "작업일시",
          field: "model15",
          width: 90,
          cellStyle: { "white-space": "normal" },
          autoHeight: true,
        },
      ],
      rowData0: [],
      columnDefs1: [
        {
          headerName: "선택",
          field: "select",
          width: 64,
          cellClass: "agCellStyle ",
          headerCheckboxSelection: true,
          checkboxSelection: true,
          cellStyle: () => {
            return { "pointer-events": "none" };
          },
        },
        {
          headerName: "메시지ID",
          field: "msgId",
          width: 100,
          cellClass: '"cell"-span',
        },
        {
          headerName: "메시지유형",
          field: "msgType",
          width: 150,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "메시지제목",
          field: "msgTitle",
          width: 400,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "회신번호",
          field: "msgCallBack",
          width: 90,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "유효시작일시",
          field: "msgStDt",
          width: 100,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "유효종료일시",
          field: "msgEndDt",
          width: 100,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "작성자",
          field: "msgRegr",
          width: 100,
          cellClass: "agCellStyle ",
        },
        {
          headerName: "작성일자",
          field: "msgRegrDt",
          width: 100,
          cellClass: "agCellStyle ",
        },
      ],
      rowData1:[],
      isModalShow: false, // popup 조건
      isPostCodeModalShow: false,
      OutputFormData: [],
      postCodeObj: {},
      selectedData:"",
    };
  },
  async beforeMount() {
    await this.$connect("application/json", "/info", "get", "").then((res) => {
      this.rowData0 = res.data.securRowData;
      this.rowData1 = res.data.msgRowData;
    });
  },
  watch: {
    selectBoxCompData: {
      // 사용자 상세정보 변경이 감지되면 해당 변경 적용
      deep: true,
      handler(newSelect) {
        this.selectBoxCompData.Option2 =
          newSelect.Option1 == "butt" ? newSelect.Option2 : null;
      },
    },
  },
  methods: {
    fileDisable() {
      this.pDisable = !this.pDisable;
    },
    postCodePopup() {
      if (this.isPostCodeModalShow == false) this.isPostCodeModalShow = true;
      else this.isPostCodeModalShow = false;
      // this.$refs.postCodePopup.GetSubmitFormData()
    },
    selectedJuso(postCodeData, detailPostAddress) {
      this.postCodeObj = postCodeData;
      this.postCodeObj["detailPostAddress"] = detailPostAddress;
      this.isPostCodeModalShow = false;
    },
    getDiffDate(st, fns) {
      return this.diffDate(st, fns);
    },
    agGridRowClicked(params){
      let selectedRowData = params.api.getSelectedRows();
        this.selectedData = selectedRowData[0];
      }
    },
  };
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: minmax(860px, 1fr);
}

.commondiv0 {
  display: inline-block;
  border-bottom: solid black 1px;
  margin: 10px;
  padding: 10px;
}

.commondiv1 {
  display: flex;
  border-bottom: solid black 1px;
  margin: 10px;
  padding: 10px;
}

.commondiv1 > div {
  flex: 1;
}

.commondiv2 {
  margin: 10px;
  padding: 10px;
  display: inline-block;
  border-bottom: solid black 1px;
}

.commondiv-title {
  display: block;
  font-size: 30px;
  margin-bottom: 15px;
}
</style>
