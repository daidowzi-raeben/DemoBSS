# kt cloud clib 프로젝트

## 목차
- [kt cloud clib 프로젝트](#kt-cloud-clib-프로젝트)
  - [목차](#목차)
  - [프로젝트 설치 및 실행](#프로젝트-설치-및-실행)
  - [폴더 구조](#폴더-구조)
  - [컴포넌트](#컴포넌트)
  - [common](#common)
    - [InputComponent](#inputcomponent)
    - [SelectBoxComponent](#selectboxcomponent)
    - [ButtonComponent](#buttoncomponent)
    - [AgGridComponent](#aggridcomponent)
  - [](#)
    - [ChkBoxComponent](#chkboxcomponent)
    - [TextAreaComponent](#textareacomponent)
    - [LabelComponent](#labelcomponent)
    - [DatePickerComponent](#datepickercomponent)
    - [SubInfoTitle](#subinfotitle)
    - [DepthTitle](#depthtitle)
    - [DragGrid](#draggrid)
    - [FileInputComponent](#fileinputcomponent)
    - [linkComponent](#linkcomponent)
    - [LoadingSpinnerComponent](#loadingspinnercomponent)
    - [PageTitle](#pagetitle)
    - [PagingArea](#pagingarea)
    - [PopupComponent](#popupcomponent)
    - [RadioComponent](#radiocomponent)
    - [TabComponent](#tabcomponent)
    - [ag-cell-Render](#ag-cell-render)
    - [ag-cell-Render \> AutCdGpNm](#ag-cell-render--autcdgpnm)
    - [ag-cell-Render \> AutYn](#ag-cell-render--autyn)
    - [ag-cell-Render \> BillChageDiv](#ag-cell-render--billchagediv)
    - [ag-cell-Render \> HoliDesc](#ag-cell-render--holidesc)
    - [ag-cell-Render \> HoliDiv](#ag-cell-render--holidiv)
    - [treeComponent](#treecomponent)
    - [treeComponent \> msf-tree](#treecomponent--msf-tree)
    - [treeComponent \> msf-tree-item](#treecomponent--msf-tree-item)
    - [popupComponent](#popupcomponent-1)
    - [popupComponent \> BtExeInfoPopup](#popupcomponent--btexeinfopopup)
    - [popupComponent \> CdGpLstPopup](#popupcomponent--cdgplstpopup)
    - [popupComponent \> CdLstPopup](#popupcomponent--cdlstpopup)
    - [etc](#etc)
    - [etc \> AtcLstComponent](#etc--atclstcomponent)
    - [etc \> AtcRegComponent](#etc--atcregcomponent)
    - [etc \> FloatingLabelsComponent](#etc--floatinglabelscomponent)
    - [etc \> FloatingLabelsComponent2](#etc--floatinglabelscomponent2)
    - [etc \> RangeComponent](#etc--rangecomponent)
    - [etc \> ToastComponent](#etc--toastcomponent)
    - [etc \> ValdtnComponent](#etc--valdtncomponent)
  - [unionForm](#unionform)
    - [AutRetvComponent](#autretvcomponent)
    - [Blc2Component](#blc2component)
    - [BlcComponent](#blccomponent)
    - [CustInfoComponent](#custinfocomponent)
    - [CustRetvComponent](#custretvcomponent)
    - [FormDataComponent](#formdatacomponent)
    - [FormDataPopupComponent](#formdatapopupcomponent)
    - [PostCodeComponent](#postcodecomponent)
    - [RetvCondComponent](#retvcondcomponent)
    - [SubsRetvComponent](#subsretvcomponent)
    - [UserAdmRetvComponent](#useradmretvcomponent)
  - [VueX](#vuex)
  - [참고](#참고)

## 프로젝트 설치 및 실행
```
프로젝트 설치 npm install
프로젝트 실행 npm run serve
```

## 폴더 구조
```
clib
├── node_modules
├── public
├── src
│    ├── App.vue
│    ├── main.js
│    ├── components
│    │     ├── header.vue                     # 상단 헤더
│    │     ├── Nav.vue                        # 좌측 Nav바
│    │     ├── section.vue                    # 세션 - multi tab & Show Pages
│    │     ├── common                         # 공통 컴포넌트 폴더
│    │     │      ├── ★☆★☆.vue              # multiple vue component files
│    │     │      ├── agGridCellRender
│    │     │      ├── treeComponent
│    │     │      ├── popupComponent
│    │     │      └── etc                     # 아직 한 번도 쓰지 않은 컴포넌트
│    │     │
│    │     ├── autMappg                       #
│    │     ├── cont                           #
│    │     └── unionForm                      # 2개 이상의 common 컴포넌트가 조합 된 컴포넌트
│    │            └── ★☆★☆.vue              # multiple union vue form component
│    │
│    ├── pages                                # 각 메뉴 폴더명 미정
│    │     ├── 01                             # 고객/청약
│    │     ├── 02                             # 요금/수납/미납
│    │     ├── 03                             # 청구/정산/매출
│    │     ├── 04                             # 업무현황
│    │     ├── 05                             # 업무지원
│    │     └── 06                             # 공통
│    │  
│    ├── assets
│    │     ├── css
│    │     ├── img
│    │     └── fonts
│    │
│    ├── service  
│    │     ├── common.js                      # 공통 함수 ( axios 함수 등 )
│    │     └── formatService.js               # 공통 formating 함수 ( axios 함수 등 )
│    │
│    ├── store
│    │     ├── index.js
│    │     └── moudeuls                       # 각 메뉴에서 사용하는 vuex 모듈
│    │            ├── L01Store.js             # 고객/청약
│    │            ├── L02Store.js             # 요금/수납/미납
│    │            ├── L03Store.js             # 청구/정산/매출
│    │            ├── L04Store.js             # 업무현황      
│    │            └── L05Store.js             # 업무지원       
│    │
│    └── router
│          └── index.js
├── .idea
├── .gitignore
├── dist
├── babel.config.js
└── README.md
```
***

## 컴포넌트

- [kt cloud clib 프로젝트](#kt-cloud-clib-프로젝트)
  - [목차](#목차)
  - [프로젝트 설치 및 실행](#프로젝트-설치-및-실행)
  - [폴더 구조](#폴더-구조)
  - [컴포넌트](#컴포넌트)
  - [common](#common)
    - [InputComponent](#inputcomponent)
    - [SelectBoxComponent](#selectboxcomponent)
    - [ButtonComponent](#buttoncomponent)
    - [AgGridComponent](#aggridcomponent)
  - [](#)
    - [ChkBoxComponent](#chkboxcomponent)
    - [TextAreaComponent](#textareacomponent)
    - [LabelComponent](#labelcomponent)
    - [DatePickerComponent](#datepickercomponent)
    - [SubInfoTitle](#subinfotitle)
    - [DepthTitle](#depthtitle)
    - [DragGrid](#draggrid)
    - [FileInputComponent](#fileinputcomponent)
    - [linkComponent](#linkcomponent)
    - [LoadingSpinnerComponent](#loadingspinnercomponent)
    - [PageTitle](#pagetitle)
    - [PagingArea](#pagingarea)
    - [PopupComponent](#popupcomponent)
    - [RadioComponent](#radiocomponent)
    - [TabComponent](#tabcomponent)
    - [ag-cell-Render](#ag-cell-render)
    - [ag-cell-Render \> AutCdGpNm](#ag-cell-render--autcdgpnm)
    - [ag-cell-Render \> AutYn](#ag-cell-render--autyn)
    - [ag-cell-Render \> BillChageDiv](#ag-cell-render--billchagediv)
    - [ag-cell-Render \> HoliDesc](#ag-cell-render--holidesc)
    - [ag-cell-Render \> HoliDiv](#ag-cell-render--holidiv)
    - [treeComponent](#treecomponent)
    - [treeComponent \> msf-tree](#treecomponent--msf-tree)
    - [treeComponent \> msf-tree-item](#treecomponent--msf-tree-item)
    - [popupComponent](#popupcomponent-1)
    - [popupComponent \> BtExeInfoPopup](#popupcomponent--btexeinfopopup)
    - [popupComponent \> CdGpLstPopup](#popupcomponent--cdgplstpopup)
    - [popupComponent \> CdLstPopup](#popupcomponent--cdlstpopup)
    - [etc](#etc)
    - [etc \> AtcLstComponent](#etc--atclstcomponent)
    - [etc \> AtcRegComponent](#etc--atcregcomponent)
    - [etc \> FloatingLabelsComponent](#etc--floatinglabelscomponent)
    - [etc \> FloatingLabelsComponent2](#etc--floatinglabelscomponent2)
    - [etc \> RangeComponent](#etc--rangecomponent)
    - [etc \> ToastComponent](#etc--toastcomponent)
    - [etc \> ValdtnComponent](#etc--valdtncomponent)
  - [unionForm](#unionform)
    - [AutRetvComponent](#autretvcomponent)
    - [Blc2Component](#blc2component)
    - [BlcComponent](#blccomponent)
    - [CustInfoComponent](#custinfocomponent)
    - [CustRetvComponent](#custretvcomponent)
    - [FormDataComponent](#formdatacomponent)
    - [FormDataPopupComponent](#formdatapopupcomponent)
    - [PostCodeComponent](#postcodecomponent)
    - [RetvCondComponent](#retvcondcomponent)
    - [SubsRetvComponent](#subsretvcomponent)
    - [UserAdmRetvComponent](#useradmretvcomponent)
  - [VueX](#vuex)
  - [참고](#참고)

***

## common

**컴포넌트간 데이터 송수신**
```
- 송신 : this.$emit("emitValue",자식변수)  
- 수신 : @emitValue = "(자식변수)=> { 부모변수 = 자식변수}"
```

###  InputComponent
**props:**
- placeholder : 입력 전 예시 값
- type : 입력창의 타입 (ex. text, search)
- width : 입력창 가로 길이 (기본 : 150px)
- height :  입력창 세로 길이 (기본 : 20px)
- inputClass : 입력창 스타일 지정을 위한 클래스 (기본 : class1)
- disabled : 입력창 입력 불가 여부 (기본 : false)
- value : 입력창 값

**주요특징:**
- emit가 아닌 v-model을 통해 데이터 송수신
- 입력창 스타일 (`class1`, `class3`, `class4`, `class5`, `class6 class6_2`)
##
### SelectBoxComponent
**props**
- selectedValue :
- cdGroup       : 선택 사항(option) 지정하는 변수
- selectClass   : 셀렉트박스 스타일 지정을 위한 클래스
- defaultValue  : 기본 선택 사항을 지정하는 변수(placeholder 역할)
- defaultcdId   : 기본 선택 값(코드)을 지정하는 변수    ( cdId)
- selectedValue : 부모 컴포넌트에서 선택 된 데이터를 전달받아 출력하기 위한 변수
- width         : 가로 크기 지정 ( 기본 값 : 100%)
- height        : 세로 크기 지정 ( 기본 값 : 100%)
- isDisabled    : 셀렉트박스 선택 사항 클릭 시, 기본 선택 사항(placeholder) 선택 불가 및 hidden 처리에 대한 여부
- selectType1MarginLeft : 셀렉트박스 스타일 클래스 select-type1에 margin-left 적용  ( default : 10px)

**emit:**
- 예시

**주요특징:**
- 예시

### ButtonComponent

**props:**
- btnClass : 버튼의 스타일 지정 클래스
- btnName : 버튼의 이름
- btnWitdh : 버튼 가로 크기 (지정안할 시 기본 값 25px)
- btnHeight : 버튼 세로 크기 (지정안할 시 기본 값 25px)
- btnFontWeight : 버튼 이름 굵기 (지정안할 시 기본)


**주요특징:**
- 버튼 스타일 (`btnClass1`, `btnClass3`, `btnClass4`, `btnClass5`)

### AgGridComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

##

### ChkBoxComponent
**props:**
- CheckOptions : 체크박스로 보여줄 데이터 배열
- showCheckOpt : 체크된 내역 출력 여부
- checkTextSize : 체크박스 글자 크기
- checkBoxSize : 체크박스 박스 크기
- chkBoxColor : 체크박스 색상

**emit:**
- 현재 설정 안되있음

**주요특징:**
- 누른 순서대로 checkedValues 변수에 들어간다.
##
### TextAreaComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

##
### LabelComponent
**props:**
- labelNm : 라벨 이름
- labelClass : 라벨의 스타일 지정 클래스

**주요특징:**
- 주로 table의 th 부분에서 많이 사용됨.

### DatePickerComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### SubInfoTitle
**props:**
- subInfoTitleNm : 제목 명 지정
- subInfoTitle : 제목 스타일 지정 클래스
- fontSize : 제목 글자 크기

**주요특징:**
- 각 Object마다의 서브 제목으로 사용

### DepthTitle
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### DragGrid
**props:**
- leftRowData : 첫번째 Row데이터 값
- leftTitle : 첫번째 Row의 제목
- rightRowData : 두번째 Row데이터 값
- rightTitle : 두번째 Row의 제목
- Columns : 첫번째 두번째 Row에 대한 공통 Columns 값
- headerColor : header 셀의 색상 지정
- overlayNoRowsTemplate : Row 데이터값이 없을 때 출력되는 문구

**주요특징:**
- 좌측에 위치한 드래그 버튼을 통해 Grid 간 데이터 이동 가능
- 확정 버튼을 통해 Grid 간의 이동을 확정한다.

### FileInputComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### linkComponent
**props:**
- destination : 이동할 url
- linkNm : 링크명
- textsize : 글자 크기

**주요특징:**
- hover 시 파란색 글자에 밑줄이 생긴다.

### LoadingSpinnerComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### PageTitle
**props:**
- currentMenu : Menu.json에 있는 메뉴 정보
- stateOfBookMark : 즐겨찾기 등록 여부

**emit:**
- stateOfBookMark 클릭 여부에 따라 false, true값 전달

**주요특징:**
- 각 페이지마다 보여지는 페이지 제목
- 아이콘을 통해 즐겨찾기 추가 가능, 추가시 아이콘 색상 변경

### PagingArea
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### PopupComponent
**props:**
- popupOverlay : 팝업창 이외의 영역에 대한 스타일 지정
- popupmsg : 팝업창에서 보여줄 메세지 지정
- closeFunc : 'popup' 이아닌 다른 값 입력시 팝업창 이외의 영역 클릭시에도 창 안 닫힘
- isCancel : 현재 비활성화 시킨 기능 -> 엔터로 닫기 가능한 기능과 관계 있음.

**emit:**
- @popup : 취소 버튼 클릭 시 호출 되어 창을 닫을 수 있게 변수에 false값 전달
- @AGREE : 확인 버튼 클릭 시 변수 전달은 없지만 연결된 함수 호출

**주요특징:**
- v-if를 통해 팝업 출력 여부를 결정
- @AGREE에 함수 입력해야 확인버튼 클릭시 함수 호출 가능
- poupOverlay를 별도로 입력하지 않을 시 팝업창 이외 영역 클릭시 창 닫힘

### RadioComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시


### TabComponent
**props:**
- menuType : 탭으로 불어와야될 폴더이름
- compArray : 컴포넌트 값을 넣는 배열
- compValue : 처음 보여줄 컴포넌트의 주소
- compName : 현재 컴포넌트의 menuId


**주요특징:**
- 특정 페이지에서 사용되는 컴포넌트 내부의 탭을 추가하여 탭마다 각기 다른 컴포넌트 호출
- 다른 탭으로 이동해도 기존 탭 상태 유지
- 메뉴나 버튼 클릭을 통해 탭을 추가함

### ag-cell-Render
```
Ag-Grid 내부 cell에 글자가 아닌 input, selectBox, button 등의
컴포넌트를 넣기 위한 문법
데이터를 반환받을때는 cellRendererParams를 통해 데이터를 반환 받는다.
```
### ag-cell-Render > AutCdGpNm
- Rowdata의 필드값이 코드그룹일 경우 코드그룹 셀렉트 박스 출력
- 코드그룹이 아닐 경우 RowData에 들어간 값 출력

### ag-cell-Render > AutYn
- 라디오 박스형태 데이터 출력
- 적용, 비적용 라디오 박스 형태로 출력되고 둘중 하나의 값만 선택 가능

### ag-cell-Render > BillChageDiv
- 버튼 형태의 데이터와 내용 출력
- 버튼 클릭시 +, - 아이콘 변경

### ag-cell-Render > HoliDesc
- 내용을 적을 수 있는 input박스 출력
- 휴일관리 페이지에서 사용되었기에 휴일일 경우 빨간색 글씨로 출력

### ag-cell-Render > HoliDiv
- 휴일구분 선택 셀렉트박스 출력

### treeComponent
```

```

### treeComponent > msf-tree
**props:**

**emit:**

**주요특징:**

### treeComponent > msf-tree-item
설명

### popupComponent
설명

### popupComponent > BtExeInfoPopup
설명

### popupComponent > CdGpLstPopup
설명

### popupComponent > CdLstPopup
설명

### etc
설명

### etc > AtcLstComponent
설명

### etc > AtcRegComponent
설명

### etc > FloatingLabelsComponent
설명

### etc > FloatingLabelsComponent2
설명

### etc > RangeComponent
설명

### etc > ToastComponent
설명

### etc > ValdtnComponent
설명

---

## unionForm

### AutRetvComponent
설명

### Blc2Component
설명

### BlcComponent
설명

### CustInfoComponent
설명

### CustRetvComponent
설명

### FormDataComponent
설명

### FormDataPopupComponent
설명

### PostCodeComponent
설명

### RetvCondComponent
설명

### SubsRetvComponent
설명

### UserAdmRetvComponent
설명

---

## VueX

## 참고
```
ag - grid : https://www.ag-grid.com/vue-data-grid/getting-started/
폴더 구조 : https://joshua1988.github.io/web-development/vuejs/vue-structure/
```
