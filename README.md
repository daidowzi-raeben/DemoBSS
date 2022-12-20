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
│    │     │      └── etc
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
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### SelectBoxComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### ButtonComponent

**props:**
- btnClass : 버튼 스타일 지정을 위한 클래스
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

---

### ChkBoxComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### TextAreaComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### LabelComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### DatePickerComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### SubInfoTitle
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### DepthTitle
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### DragGrid
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### FileInputComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### linkComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### LoadingSpinnerComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### PageTitle
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### PagingArea
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### PopupComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### RadioComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시


### TabComponent
**props:**
- 예시

**emit:**
- 예시

**주요특징:**
- 예시

### ag-cell-Render
설명

### ag-cell-Render > AutCdGpNm
설명

### ag-cell-Render > AutYn
설명

### ag-cell-Render > BillChageDiv
설명

### ag-cell-Render > HoliDesc
설명

### ag-cell-Render > HoliDiv
설명

### treeComponent
설명

### treeComponent > msf-tree
설명

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
