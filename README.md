# kt cloud clib

## Index
- [kt cloud clib](#kt-cloud-clib)
  - [Index](#index)
  - [프로젝트 설치 및 실행](#프로젝트-설치-및-실행)
  - [폴더구조](#폴더구조)
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

## 폴더구조
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

* Common
  * 파일명
  * 파일명
  * ###### ag-cell Render
    * ag
  * ###### Popup
    * ㅁㄴㅇㄹ
  * ###### Etc

* UnionForm
  * 파일명

***

### Common
####  파일명
설명


---


#### 파일명
설명


---

### UnionForm


## VueX

## 참고
```
ag - grid : https://www.ag-grid.com/vue-data-grid/getting-started/ 
폴더 구조 : https://joshua1988.github.io/web-development/vuejs/vue-structure/ 
```
