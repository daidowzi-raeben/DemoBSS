# kt cloud clib 프로젝트

## 목차
- [kt cloud clib 프로젝트](#kt-cloud-clib-프로젝트)
  - [목차](#목차)
  - [프로젝트 설치 및 실행](#프로젝트-설치-및-실행)
  - [폴더 구조](#폴더-구조)
  - [컴포넌트](#컴포넌트)
    - [Common](#common)
      - [파일명](#파일명)
      - [파일명](#파일명-1)
    - [UnionForm](#unionform)
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

* [common](#common)
  * [InputComponent](#InputComponent)
  * [SelectBoxComponent](#SelectBoxComponent)
  * [ButtonComponent](#ButtonComponent)
  * [AgGridComponent](#AgGridComponent)
  * [ChkBoxComponent](#ChkBoxComponent)
  * [TextAreaComponent](#TextAreaComponent)
  * [LabelComponent](#LabelComponent)
  * [DatePickerComponent](#DatePickerComponent)
  * [SubInfoTitle](#SubInfoTitle)
  * [DepthTitle](#DepthTitle)
  * [DragGrid](#DragGird)
  * [FileInputComponent](#FileInputComponent)
  * [linkComponent](#linkComponent)
  * [LoadingSpinnerComponent](#LoadingSpinnerComponent)
  * [PageTitle](#PageTitle)
  * [PagingArea](#PagingArea)
  * [PopupComponent](#PopupComponent)
  * [RadioComponent](#RadioComponent)
  * [TabComponent](#TabComponent)
  * **[ag-cell-Render](#ag-cell-Render)**
    * [AutCdGpNm](#ag-cell-Render>AutCdGpNm)
    * [AutYn](#AutYn)
    * [BillChageDiv](#BillChageDiv)
    * [HoliDesc](#HoliDesc)
    * [HoliDiv](#HoliDiv)
  * **[treeComponent](#TreeComponent)**
    * [msf-tree](#msf-tree)
    * [msf-tree-item](#msf-tree-item)
  * **[popupComponent](#PopupComponent)**
    * [BtExeInfoPopup](#BtExeInfoPopup)
    * [CdGpLstPopup](#CdGpLstPopup)
    * [CdLstPopup](#CdLstPopup)
  * **[etc](#Etc)**
    * [AtcLstComponent](#AtcLstComponent)
    * [AtcRegComponent](#AtcRegComponent)
    * [FloatingLabelsComponent](#FloatingLabelsComponent)
    * [FloatingLabelsComponent2](#FloatingLabelsComponent)
    * [RangeComponent](#RangeComponent)
    * [ToastComponent](#ToastComponent)
    * [ValdtnComponent](#ValdtnComponent)
* [unionForm](#UnionForm)
  * [AutRetvComponent](#AutRetvComponent)
  * [Blc2Component](#Blc2Component)
  * [BlcComponent](#BlcComponent)
  * [CustInfoComponent](#CustInfoComponent)
  * [CustRetvComponent](#CustRetvComponent)
  * [FormDataComponent](#FormDataComponent)
  * [FormDataPopupComponent](#FormDataPopupComponent)
  * [PostCodeComponent](#PostCodeComponent)
  * [RetvCondComponent](#RetvCondComponent)
  * [SubsRetvComponent](#SubsRetvComponent)
  * [UserAdmRetvComponent](#UserAdmRetvComponent)

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
