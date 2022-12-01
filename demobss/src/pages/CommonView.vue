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
        v-model="selectBox1"
        @input="
          (value) => {
            selectBox1 = value;
          }
        "
      />
      : {{ selectBox1 }}
      <br />
      <br />
      <br />
      <select-box-component
      :selectClass="'select_input2'"
      :cdGroup="'optionsSearchDiv'"
      :width="200"
      :defaultValue="'선택'"
      v-model="selectBox2"
      @input="
        (value) => {
          selectBox2 = value;
        }
        "
      />
      : {{ selectBox2 }}

      <br />
      <br />
      <br />
      <select-box-component
      :selectClass="'select_input3'"
      style="width:200px; height:30px;"
      :cdGroup="'optionsSearchDiv'"
      :defaultValue="'선택'"
      v-model="selectBox3"
      @input="
        (value) => {
          selectBox3 = value;
        }
        "
      />
      : {{ selectBox3 }}
      <br />
      <br />
      <br />
      조회조건 (default 값 청구계정ID)
      <select-box-component
        :selectClass="'select_input'"
        :width="250"
        :cdGroup="'optionsSearchDiv'"
        :defaultValue="'선택'"
        :defaultcdId="'05'"
        v-model="selectBox4"
        @input="
          (value) => {
            selectBox4 = value;
          }
        "
      />
      : {{ searchDiv2 }}
      <br />
      <br />
      <br />

      조회조건 값에 따른 추가 selectBox 추가(값에 따라 생겨남)
      <select-box-component
          :selectClass="'select_input'"
          :width="250"
          :cdGroup="'optionsSearchDiv'"
          :defaultValue="'선택'"
          :defaultNum="3"
          :secndShow="true"
          v-model="searchDiv2"
          @input="
          (value) => {
            searchDiv2 = value;
          }
        "
        />
      <br />
      <br />
      <br />

      조회조건 값에 따른 추가 selectBox 추가(기존에 존재함)
      <select-box-component
          :selectClass="'select_input'"
          :width="250"
          :cdGroup="'optionsSearchDiv'"
          :defaultValue="'선택'"
          :defaultNum="3"
          :dcidShow="true"
          v-model="searchDiv2"
          @input="
          (value) => {
            searchDiv2 = value;
          }
        "
      />
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
      <div style="display: flex">
        <span style="padding: 5px 10px">날짜</span>
        <date-picker-component
            :classWrapper="'calender_input'"
            :width="200"
            :pPlaceholder="'2022.01.01'"
            :pDate="date3"
            @input="
              (value) => {
                date3 = value;
              }
            "
        />
        <span style="padding: 5px 10px">~</span>
        <date-picker-component
            :classWrapper="'calender_input'"
            :width="200"
            :pPlaceholder="'2022.01.01'"
            :pDate="date4"
            @input="
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

    <h1 style="font-size: 30px">file input</h1>
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
    <div> <ButtonComponent :btnClass="'btnClass1'" :btnName="'btnClass1'" /></div>
    <div><ButtonComponent :btnClass="'btnclass2'" :btnName="'btnClass2'" /></div>
    <div><ButtonComponent :btnClass="'btnClass3'" :btnName="'btnClass3'"   /></div>
    <div><ButtonComponent :btnClass="'btnClass4'" :btnName="'btnClass4'" :btnWidth="'90px'" :btnHeight="'20px'"/></div>
    <div><ButtonComponent :btnClass="'btnClass5'" :btnName="'btnClass5'"   /></div>
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
    <div style="border-top: solid black 1px; margin: 10px; padding: 10px">
      <form-data-component
      :FormDataclass="'infoOfCust'"
      :subInfoTitleNm="'고객 정보'"
      />
      <br>
      <form-data-component
      :FormDataclass="'infoOfCont'"
      :subInfoTitleNm="'계약 정보'"
      />
      <br>
      <form-data-component
      :FormDataclass="'infoOfAccount'"
      :subInfoTitleNm="'청구 계정 정보'"
      />
      <br>
      <form-data-component
      :FormDataclass="'infoOfSubs'"
      :subInfoTitleNm="'신청자 정보'"
      />
      <br>
      <form-data-component
      :FormDataclass="'infoOfOrg'"
      :subInfoTitleNm="'영업 조직 정보'"
      />
      <br>

    </div>

    <h1 style="font-size: 30px">PopupComponent</h1>
    <div class="commondiv1">
    <button-component :btnClass="'btnClass5'" :btnName="'공통 PopUp'" @click="popup"/>

    <popup-component
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
    <button-component :btnClass="'btnClass4'" :btnName="'출력 PopUp'" :btnWidth="'120px'" @click="FormPopup1"/>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <FormDataPopupComponent
      ref="form-data-popup-component"
      v-if="isFormModalShow2"
      @FormPopup="isFormModalShow2 = false"
      @AGREE = "''"
      :popupmsg="' '"
      :reqtype="'2'"
    />
    <button-component :btnClass="'btnClass3'" :btnName="'입력 PopUp'" @click="FormPopup2"/>
      <br />
      <p>화면 전체를 회색으로 감싸려면 z-index:7을 주면 적용</p>
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
      <br>
      <input-component
      :input-class="'class3'"
      :value="'input 컴포넌트 - class3 '"
      />
      <div>
      <input-component
      :input-class="'class4'"
      :value="'input 컴포넌트 - class4 '"
      />
      </div>


      <input-component
      :input-class="'class5'"
      :value="'input 컴포넌트 - class5 '"
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


    <h1 style="font-size: 30px">PostCodeComponent</h1>
    <span></span>
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
      />
      <br /><br /><br />
    </div>



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
      <form-data-component
      :FormDataclass="'infoOfCust'"
      :subInfoTitleNm="'고객 정보'"
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

    <h1 style="font-size: 30px">LodingSpinnerComponent</h1>
    <span></span>
    <div class="commondiv1"  >
      <LoadingSpinnerComponent />
    </div>
    <br /><br /><br />

    <h1 style="font-size: 30px">BlcComponent</h1>
    <span></span>
    <div class="commondiv2">
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
    <h1 style="font-size: 30px">TreeComponent</h1>
    <span></span>
    <div class="commondiv2">

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
    <br /><br /><br />
    <h1 style="font-size: 30px">ValdtnComponent</h1>
    <span></span>
    <div class="commondiv2">
      <ValdtnComponent/>
    </div>
    <br /><br /><br />
    <h1 style="font-size: 30px">FloatingLabelsComponent</h1>
    <span></span>
    <div class="commondiv2">
      <FloatingLabelsComponent>
        <input  type="text" placeholder="Label">
      </FloatingLabelsComponent>
      <br>
      <FloatingLabelsComponent_2 />
    </div>
    <br /><br /><br />
    <h1 style="font-size: 30px">ToastComponent</h1>
    <span></span>
    <div class="commondiv2">
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
    <div class="commondiv2">
      <AtcRegComponent/>
    </div>
    <br /><br /><br />
    <h1 style="font-size: 30px">AtcListComponent</h1>
    <span></span>
    <div class="commondiv2">
      <AtcListComponent/>
    </div>
    <br /><br /><br />

    <h1 style="font-size: 30px">TextAreaComponent</h1>
    <span></span>
    <div
    class="commondiv2"
    style="height: 100px;  "
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
    class="commondiv2"
    style="width: 1000px; overflow: auto;"
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
import TitleArea from "@/components/common/TitleArea";
import PopupComponent from "@/components/common/PopupComponent.vue";
import CustInfoComponent from "@/components/common/CustInfoComponent";
import CustRetvComponent from "@/components/common/CustRetvComponent";
import BlcComponent from "@/components/common/BlcComponent";
import FormDataComponent from "@/components/common/FormDataComponent.vue";
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
import PostCodeComponent from "@/components/common/PostCodeComponent";
import ApiMixin from "@/service/common.js";
import msfTree from "@/components/common/Tree/msf-tree";
import InputComponent from '@/components/common/InputComponent.vue';
import LabelComponent from '@/components/common/LabelComponent.vue';
import LoadingSpinnerComponent from "@/components/common/LoadingSpinnerComponent";

export default {
  mixins:[ApiMixin],
  name: "CommonView",
  components: {
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
    InputComponent,
    LabelComponent
  },
  data() {
    return {
      chk:false,
      selectBox1 : null,
      selectBox2 : null,
      selectBox3 : null,
      selectBox4 : null,
      searchValue: null,
      date1: new Date(2021, 9, 5),
      date2: new Date(),
      date3: new Date(),
      date4: new Date(),
      pDisable: true,
      comp: "L01M05S01",
      contentTree: [{
        groupId: 0,
        directoryName: '청구계정ID 홍길* 은행계좌자동이체',
        chk:true,
        children: [
          {groupId: 1, directoryName: '요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111', chk:true, chk2:false},
        ]
      },
        {groupId: 5, directoryName: '청구계정ID 홍길* 은행계좌자동이체', children: [
            {groupId: 2, directoryName: '요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111',chk:false, chk2:true},
            {groupId: 3, directoryName: '요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 1123',chk:true, chk2:true},
            {groupId: 4, directoryName: '요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111',chk:true, chk2:true},
            {groupId: 2, directoryName: '요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111',chk:false, chk2:true},
            {groupId: 3, directoryName: '요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111',chk:true, chk2:true},
            {groupId: 4, directoryName: '요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111',chk:true, chk2:true},
            {groupId: 2, directoryName: '요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111',chk:false, chk2:true},
            {groupId: 3, directoryName: '요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111',chk:true, chk2:true},
            {groupId: 4, directoryName: '요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 111',chk:true, chk2:true}
          ]},
        {groupId: 6, directoryName: '청구계정ID 홍길* 은행계좌자동이체'}
      ],
      activeItemObj: {}, // 활성화 시킬 객체
      selectedItemList: [], // 선택시킬 객체
      compm: [
        {
          "menuId": "L01M05S01",
          "menuNm": "청약정보",
          "upMenuId": "L01M05S00",
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
      isPostCodeModalShow : false,
      OutputFormData : [],
      SubmitFormData : [],
      postCodeObj : {},
    };
  },
  created() {
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
    }
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

.commondiv2{
  width: 80%;
  margin: 10px;
  padding: 10px;
  height: 300px;
  display: inline-block;
  border-top: solid black 1px;
}
</style>
