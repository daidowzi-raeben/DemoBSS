<template>
  <div class="container">
    <h1 style="font-size: 30px">InputComponent</h1>
    <div class="commondiv1" >
      <label-component label-nm="'class1'" />
      &nbsp;&nbsp;
      <input-component
          :type="'search'"
          :height="20"
          :width="150"
          :input-class="'class1'"
          v-model="searchValue"
          :placeholder="'class1'"
          @input="
          (value) => {
            searchValue = value;
          }
        "
      />
      <p>- class1의 경우 입력받은 width와  height에 의해 가로 세로 길이가 정해짐 /*정보 스타일*/</p>
      <br /><br />
      <label-component label-nm="'class3'" />
      &nbsp;&nbsp;
      <input-component
          :type="'search'"
          :input-class="'class3'"
          v-model="searchValue"
          :placeholder="'class3'"
          @input="
          (value) => {
            searchValue = value;
          }
        "
      />
      <p>- class3의 경우 가로 세로 길이는 고정 /*상단 메뉴 스타일*/</p>
      <br /><br />
      <label-component label-nm="'class4'" />
      &nbsp;&nbsp;
      <div style="width: 150px; height: 20px; display: inline-block">
        <input-component
            :input-class="'class4'"
            :value="'class4 '"
        />
      </div>
      <p>- class4의 경우 input 태그를 감싸는 div에 맞춰 크기 지정 width 100% height 100% /*상단 메뉴 스타일*/</p>
      <br /> <br />
      <label-component label-nm="'class5'" />
      &nbsp;&nbsp;
      <input-component
          :input-class="'class5'"
          :value="'class5 '"
      />
      |&nbsp;
      <label-component label-nm="'class5'" />
      &nbsp;&nbsp;
      <input-component
          :input-class="'class5'"
          :value="'short1 '"
      />
      <br />
      <label-component label-nm="'class5'" />
      &nbsp;&nbsp;
      <input-component
          :input-class="'class5'"
          :class5-width="'64px'"
          :class5-margin-right="'3px'"
          :value="'short2'"
      />
      |&nbsp;
      <label-component label-nm="'class5 class5_long1'" />
      &nbsp;&nbsp;
      <input-component
          :input-class="'class5 class5_long1'"
          :class5Width="'200px'"
          :value="'long1 '"
      />
      <p>- class5의 width: 140px height:24px을 기준</p>
      <p>- class5 short1은 width: 80px을 기준</p>
      <p>- class5 short2은 width: 64px을 기준</p>
      <p>- class5 long1은 입력받은 longwidth 값에 의해 크기 지정</p>
      <br /><br />
      <label-component label-nm="'class6'" />
      &nbsp;&nbsp;
      <input-component
          :input-class="'class6'"
          :value="'class6 '"
      />

      <label-component label-nm="'class6'" />
      &nbsp;&nbsp;
      <input-component
          :input-class="'class6'"
          :value="'class6'"
          :class6-background-color="'rgb(251, 253, 255)'"
      />
      <p>- class6의 width는 입력받은 class6Width, height는 24px을 기준</p>
      <p>- class6-background-color를 추가하여 경우 배경색 변경</p>
    </div>
    <br /><br />

    <h1 style="font-size: 30px">ButtonComponent</h1>
    <div class="commondiv1">
      <label-component label-nm="'btnClass1'" />
      <ButtonComponent :btnClass="'btnClass1'" :btnName="'btnClass1'" />
      <p>- btnClass1의 경우 오른쪽 정렬되어 있고 hover시 파란색 배경과 하얀색 글씨로 변경</p>
      <br /><br />
      <label-component label-nm="'btnClass3'" />
      <ButtonComponent :btnClass="'btnclass3'" :btnName="'btnClass3'" btn-height="'30px'" />
      <p>- btnClass3의 경우 입력받은 btnHeight에 의해 세로 길이가 정해짐</p>
      <p>- hover 시 기존 색상에서 좀더 진한 배경색으로 변경</p>
      <br /><br />
      <label-component label-nm="'btnClass4'" />
      <ButtonComponent :btnClass="'btnClass4'" :btnName="'btnClass4'" :btnFontWeight="'bold'" :btnWidth="'90px'" :btnHeight="'20px'"/>
      <p>- btnClass4의 경우 입력받은 btnWitdh와 btnHeight에 의해 세로 가로 길이가 정해짐</p>
      <p>- 글자 굵기의 경우 btnFontWeight에 의해 변경 가능</p>
      <p>- hover시 연한 색상의 배경색으로 변경</p>
      <br /><br />
      <label-component label-nm="'btnClass5'" />
      <ButtonComponent :btnClass="'btnClass5'" :btnName="'btnClass5'" btn-width="'100px'" btn-height="'24px'"   />
      <p>- btnClass5의 경우 btnClass4와 비슷하지만 좀더 둥근 형태로 색상또한 하얀색 계열임</p>
      <p>- 버튼 크기, 글자 굵기는 btnClass4와 같이 입력으로 변경 가능</p>
    </div>
    <br />

    <h1 style="font-size: 30px">ChkBoxComponent</h1>
    <div class="commondiv1" >
      <ChkBoxComponent
          :CheckOptions='["체크옵션1","체크옵션2","체크옵션3","체크옵션4","체크옵션5",]'
          :check-box-size="'20px'"
          :check-text-size="'10px'"
      />
      <p>- ChkBox의 경우 CheckOptions을 통해 보여줄 값을 배열의 형태로 입력 받는다.</p>
      <p>- showCheckOpt 옵션의 true/false값에 따라 체크된 항목을 볼 수 있다.</p>
      <p>- box의 크기와 글자 크기는 checkBoxSize와 checkTextSize 값을 입력하여 수정 가능</p>
    </div>
    <br />

    <h1 style="font-size: 30px">LabelComponent</h1>
    <div class="commondiv1" >
      <LabelComponent
          :label-nm="'Label 컴포넌트'"
      />
      <p>- Label의 경우 LabelClass로 스타일 지정이 가능하다. 현재는 기본값만 존재</p>
      <p>- Label에 적을 내용은 labelNm을 통해 입력 가능</p>
    </div>
    <br />

    <h1 style="font-size: 30px">SubInfoTitle</h1>
    <div class="commondiv1">
      <SubInfoTitle :subInfoTitleNm="'고객정보'" /> &emsp;
      <SubInfoTitle :subInfoTitleNm="'요금정보'" :font-size="'30pt'" />
      <p>- SubInfoTitle의 경우 subInfoTitleNm을 통해 제목명을 지정할 수 있다.</p>
      <p>- 글자 크기의 경우 fontSize를 통해 지정가능하고 단위는 pt다.</p>
    </div>
    <br />

    <h1 style="font-size: 30px">DragGrid</h1>
    <div class="commondiv1">
      <div style="width: 60%; height: 600px; margin: 10px">
        <DragGrid
            :left-row-data="leftRowData"
            :right-row-data="rightRowData"
            :Columns="GridToGridColumns"
            :header-color="'rgb(113,156,205)'"
            :overlayNoRowsTemplate="
          `<span> <br>` + '<br />조회 결과가 없습니다.' + ` </span>`"
        />
      </div>
      <p>- DragGrid의 경우 leftRowData에는 첫번째 Row데이터를 넣는다.</p>
      <p>- rightRowData에는 두번째 Row데이터를 넣는다.</p>
      <p>- Columns에는 공통으로 사용할 헤더정보를 넣는다.</p>
      <p>- Gird간의 이동이 완료된 후에는 확정 버튼을 통해 이동된 Row데이터의 값을 바꿔줘야 한다.</p>
      <p>- 헤더 색상의 경우 headerColor를 통해 변경 가능하다.</p>
      <p>- overlayNoRowsTemplate는 데이터 값이 없을 때 보여주는 메시지를 지정한다.</p>
    </div>

    <h1 style="font-size: 30px">linkComponent</h1>
    <div class="commondiv1" >
      <link-component
          :destination="'/'"
          :linkNm="'링크 컴포넌트(mounse over)'"  />
      <br />
      <p>- LinkComponent의 경우 destination 옵션을 통해 이동할 url을 지정할 수 있다. </p>
      <p>- linkNm은 링크명, textsize는 글자 크기를 지정 가능하다.</p>
    </div>
    <br />

    <h1 style="font-size: 30px">PageTtile</h1>
    <div class="commondiv1" >
      <PageTitle
          :current-menu="currentMenu"
          :stateOfBookMark="false"
          @stateOfBookMark="stateOfBookMark = value"
        />
      <br />
      <p>- PageTitle의 경우 currentMenu를 통해 현재 보여줄 타이틀 제목을 지정해줄 수 있다. </p>
      <p>- stateOfBookMark의 경우 현재 즐겨찾기 여부를 지정한다.</p>
      <p>- @stateOfBookMark의 경우 클릭에 따른 즐겨찾기 여부를 부모 컴포넌트에 전달하기 위해 사용</p>
    </div>
    <br />

    <h1 style="font-size: 30px">PopupComponent</h1>
    <div class="commondiv1">
      <button-component :btnClass="'btnClass5'" :btnName="'공통 PopUp'" @click="popup" :btnWidth="'90px'"/>

      <popup-component
          v-if="isModalShow"
          @popup="isModalShow = false"
          @AGREE = "''"
          :popupmsg="'여기가 팝업 메세지 '"
      />
      <p>- 팝업의 경우 버튼 클릭 이벤트를 통해 팝업 출력 여부를 v-if를 통해 결정한다.</p>
      <P>- 팝업 메세지의 경우에는 popupmsg를 통해 전달할 수 있다.</P>
      <p>- 팝업 창에서 취소를 누를 경우 emit를 통해 @popup을 호출하여 창을 닫는다.</p>
      <p>- 팝업 창에서 확인을 누를 경우 emit를 통해 @AGREE를 호출하여 @AGREE에서 받는 함수를 실행한다.</p>
    </div>


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
    <p>- TabComponent의 경우 초기 화면 컴포넌트를 설정해 줘야 한다. </p>
    <p>- 초기 화면 컴포넌트와 추후 추가될 컴포넌트는 같은 폴더에 위치해 있어야 한다.</p>
    <p>- menuType은 폴더명과 동일해야 한다.</p>
    <p>- 선택된 탭은 파란색, 비활성화된 탭은 하늘색이다.</p>
    <br />


    <h1 style="font-size: 30px">ag-cell-Render</h1>
    <div class="commondiv1">
      <div style="width: 90%; height: 100px; margin: 10px">
        <ag-grid-component
            :rowData="renderRowData"
            :columnDefs="renderColumns"

        />
        <p>- AutCdGpNm의 경우 RowData의 값이 코드그룹이면 코드그룹 셀렉트 박스 출력</p>
        <p>- AutYn의 경우 라디오 박스인 적용 제외 출력</p>
        <p>- HoliChageDiv의 경우 +버튼과 설치비 출력</p>
        <p>- HOliDesc의 경우 input태그 출력</p>
        <p>- HOliDiv의 경우 휴일구분선택 셀렉트박스 출력</p>
        <p>- 사용법은 column배열의 각 필드 설정할때 CellRenderer 추가</p>
        <p>- 데이터 반환은 cellRendererParams을 통해 반환 </p>
      </div>

    </div>
      <br /><br /><br /><br /><br /><br />

    <h1 style="font-size: 30px">TreeComponent</h1>
    <span></span>
    <div class="commondiv2">

      <msf-tree :source="contentTree"
                label-field="directoryName"
                ref="tree"
                @itemClick="(value)=>{treeItemClick = value}"
                style="width:100%; height:100%;font-size: 12pt;"
      ></msf-tree>
      <br />
      <p>- source에 들어갈 데이터는 json 형태의 데이터로 children 필드의 값이 하위 트리가 된다.</p>
      <p>- labelFiled에 들어간 필드명이 트리의 내용이 된다.</p>
      <p>- @itemClick과 연결된 함수에서 클릭된 트리에 대한 행 데이터와 후처리가 가능하다.</p>
      <p>- filterFunction은 출력된 내용중 필터를 통해 출력할 내용을 정하는 것으로 함수는 트리를 호출하는 곳에서 정의한다. 반환값은 true/ false이고 매개변수로는 각행에대한 데이터를 받는다.</p>
      <p>- 뱃지의 경우 데이터의 필드 중 chk와 chk2의 true/false에 따라 출력된다</p>
    </div>
    <br /><br /><br />

    <h1 style="font-size: 30px">PopupComponent Form</h1>
    <span></span>
    <div class="commondiv2">
      <label-component label-nm="'BtExeInfoPopup'" />
      <buttonComponent
          :btnClass="'btnClass3'"
          :btnName="'배치실행 상세정보'"
          :btnWidth="'auto'"
          @click="isModelBtExeInfoShow=true"
      />
      &nbsp;&nbsp;
      <BtExeInfoPopup
          v-if="isModelBtExeInfoShow"
          :value="null"
          @close="closeBtInfoModal"
      />
      <p>- 정보를 보여주기 위한 팝업이라 별도의 확인버튼은 존재하지 않는다. </p>
      <p>- 정보의 경우 전달된 value를 통해 팝업 내부에서 axios통신을 통해 DB에서 받아 출력할 예정</p>
      <br />
      <label-component label-nm="'CdGpLstPopup'" />
      <buttonComponent
          :btnClass="'btnClass3'"
          :btnName="'코드그룹리스트'"
          :btnWidth="'auto'"
          @click="isCdGpModalShow=true"
      />
      &nbsp;&nbsp;
      <CdGpLstPopup
          v-if="isCdGpModalShow"
          :type="1"
          :value="null"
          @close="closeCdGpModal"
          @submit="''"
          @update="''"
        />
      <p>- type 값에 따라 등록 / 변경으로 Form이 바뀐다.</p>
      <p>- 변경의 경우 일부 입력창이 disabled 되서 입력 불가 상태가 된다.</p>
      <p>- value의 경우 Json 형태의 데이터를 받는다.</p>
      <p>- 등록의 경우 @submit와 연결된 함수가 실행되고 변경의 경우 @update에 연결된 함수가 실행된다.</p>
      <br />
      <label-component label-nm="'CdLstPopup'" />
      <buttonComponent
          :btnClass="'btnClass3'"
          :btnName="'코드리스트'"
          :btnWidth="'auto'"
          @click="isCdLstModalShow=true"
      />
      &nbsp;&nbsp;
      <CdLstPopup
          v-if="isCdLstModalShow"
          :type="1"
          :value="null"
          @close="closeCdLstModal"
          @submit="''"
      />
      <p>- 코드그룹리스트와 로직은 동일하다. </p>
      <p>- 입력 형태와 value의 값만 다르다.</p>
    </div>

    <h1 style="font-size: 30px">AtcListComponent</h1>
    <span></span>
    <div class="commondiv2">
      <AtcListComponent/>
      <p>- 첨부된 파일들의 정보를 보여주기 위한 컴포넌트</p>
    </div>
    <br /><br /><br />

    <h1 style="font-size: 30px">AtcRegComponent</h1>
    <span></span>
    <div class="commondiv2">
      <AtcRegComponent/>
      <p>- 파일을 첨부해야 하는 페이지에서 사용될 컴포넌트</p>
    </div>
    <br /><br /><br />


    <h1 style="font-size: 30px">FloatingLabelsComponent</h1>
    <span></span>
    <div class="commondiv1">

      <FloatingLabelsComponent
        :placeholder="'입력'"
        @emitValue="(value) =>{data = value}"
      />
      <br />
      <p>- 값을 입력하지 않아도 focus에 따라 필드명이 위로 떠오른다.</p>
    </div>
    <br />

    <h1 style="font-size: 30px">RangeComponent</h1>
    <span></span>
    <div class="commondiv1" >
      <RangeComponent />
      <p>-슬라이더를 통해 1~100까지의 값 조절 가능</p>
    </div>
    <br />

    <h1 style="font-size: 30px">ToastComponent</h1>
    <span></span>
    <div class="commondiv1">
      <ButtonComponent @click="ToastCall" :btnClass="'btnClass3'" :btnName="'Toast버튼'" />
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
      <p>- position값 조정해서 출력 위치 조정 가능</p>
      <p>- duration값 조정해서 일정 시간 뒤 자동 삭제</p>
      <p>- 클래스 지정 방식은 입력받은 postion값을 wk-{position}의 형태로 만든후 join하여 class변수에 입력</p>
      <p>- className : wk-alert ,wk-warn, wk-info  </p>
      <p>- transition : 'slide-down', 'slide-up', 'slide-left', 'slide-right', 'fade'</p>
    </div>
    <br />

    <h1 style="font-size: 30px">ValdtnComponent</h1>
    <span></span>
    <div class="commondiv1">
      <ValdtnComponent/>
    </div>
    <br /><br /><br />






  </div>
</template>

<script>
import PagingComponent from "../../components/common/PagingComponent.vue";
import PageTitle from "@/components/common/PageTitle";
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
import DragGrid from "@/components/common/DragGrid";
import AutCdGpNm from "@/components/common/AgGridCellRender/AutCdGpNm";
import AutYn from "@/components/common/AgGridCellRender/AutYn";
import BillChageDiv from "@/components/common/AgGridCellRender/BillChageDiv";
import HoliDesc from "@/components/common/AgGridCellRender/HoliDesc";
import HoliDiv from "@/components/common/AgGridCellRender/HoliDiv";
import BtExeInfoPopup from "@/components/common/PopupComponent/BtExeInfoPopup";
import CdGpLstPopup from "@/components/common/PopupComponent/CdGpLstPopup";
import CdLstPopup from "@/components/common/PopupComponent/CdLstPopup";
export default {
  mixins:[ApiMixin],
  name: "CommonView",
  components: {
    DragGrid,
    PageTitle,
    CdGpLstPopup,
    CdLstPopup,
    BtExeInfoPopup,
    LoadingSpinnerComponent,
    msfTree,
    PostCodeComponent,
    TabComponent,
    TextAreaComponent,
    AtcListComponent,
    AtcRegComponent,
    ToastComponent,
    FloatingLabelsComponent,
    ValdtnComponent,
    PagingComponent,
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
    AutCdGpNm,
    AutYn,
    BillChageDiv,
    HoliDesc,
    HoliDiv
  },
  data() {
    return {
      chk:false,
      isModelBtExeInfoShow: false,
      isCdGpModalShow : false,
      isCdLstModalShow : false,
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
      leftRowData: [
        {model1:"Michael Phelps",sport:"Swi214312ming"},
        {model1:"Mic1123lps",sport:"Swi222ng"},
        {model1:"Mic455elps",sport:"Swimming"},
      ],
      rightRowData: [
        {model1:"233",sport:"Swimm22ing"},
        {model1:"Mic24521lps",sport:"Swi252151ming"},
        {model1:"111helps",sport:"Sw244512ng"},
      ],
      GridToGridColumns: [
        {
          rowDrag: true,
          maxWidth: 50,
          suppressMenu: true,
          rowDragText: function(params, dragItemCount) { //드래그해서 이동될때 보이는 값
            if (dragItemCount > 1) {
              return dragItemCount + ' model1';
            }
            return params.rowNode.data.model1;
          },
        },
        {
          colId: 'checkbox',
          maxWidth: 50,
          checkboxSelection: true,
          suppressMenu: true,
          headerCheckboxSelection: true
        },
        { field: "model1" },
        { field: "sport" }
      ],
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
      contentTree2: [{

      }
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
          defineAsyncComponent(() => import("../../components/Cont/ContMgt.vue")),
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
      renderRowData:[
        {
          model1:"코드그룹명", model2:"2", model3:"3",model4:"4", model5:"5"
        }
      ],
      renderColumns:[
        {headerName:"AutCdGpNm" , field:"model1",
          cellRenderer :'AutCdGpNm',
          cellRendererParams: {
            clicked: function (field) {
              console.log(field);
            }
          },
          width: 250
        },
        {headerName:"AutYn" , field:"model2",
          cellRenderer :'AutYn',
          cellRendererParams: {
            clicked: function (field) {
              console.log(field);
            }
          },
          width: 150
        },
        {headerName:"BillChageDiv" , field:"model3",
          cellRenderer :'BillChageDiv',
          cellRendererParams: {
            clicked: function (field) {
              console.log(field);
            }
          },
          width: 120
        },
        {headerName:"HoliDesc" , field:"model4",
          cellRenderer :'HoliDesc',
          cellRendererParams: {
            clicked: function (field) {
              console.log(field);
            }
          },
          width: 400
        },
        {headerName:"HoliDiv" , field:"model5",
          cellRenderer :'HoliDiv',
          cellRendererParams: {
            clicked: function (field) {
              console.log(field);
            }
          },
          width: 350
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
  created() {
  },
  methods: {
    filter(param){
      console.log(param);
      if(param.directoryName === "요금제명(서비스계약ID)2022-10-13~2022-10-15서울시 강남구 학동로 1123")return true;
      else return false;
    },
    ToastCall(){
      if(this.chk===true)this.chk=false;
      else this.chk=true;
    },
    fileDisable() {
      this.pDisable = !this.pDisable;
    },
    closeBtInfoModal(){
      this.isModelBtExeInfoShow = false;
    },
    //코드 그룹 팝업 닫기
    closeCdGpModal(){
      this.isCdGpModalShow = false;
      this.cdGpType = null;
    },
    //코드리스트 팝업 닫기
    closeCdLstModal(){
      this.isCdLstModalShow = false;
      this.cdLstType = null;
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
  grid-template-columns:minmax(900px, 1fr) ;
}

.commondiv0{
  border-top: solid black 1px;
  margin: 10px;
  padding: 10px
}

.commondiv1{
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
