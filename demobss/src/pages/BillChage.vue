<template>
  <article class="billChageView">
    <div class="item">   <!-- 1 -->
      <cust-retv-component
          :cdGroup="'optionsSearchDiv'" />
    </div>

    <div class="item"> <!-- 2 -->
      <form-data-component
          :FormDataclass="'infoOfCust'"
          :subInfoTitleNm="'고객 정보'"
      />
    </div>

    <div class="item"> <!-- 3 -->
      <div class="product_box">
        <SubInfoTitle
            :subInfoTitleNm="'보유상품'"
        />
      </div>
      <div class="product_box_sel">
        <span>
        <select-box-component
            :selectClass="'select_input3'"
            :width="120"
            :cdGroup="'optionsSearchDiv'"
            :defaultValue="'청구계정(전체)'"
            v-model="searchDiv1"
            @input="
          (value) => {
            searchDiv1 = value;
          }
        "
        />
        </span>
        <span style="margin-left: 10px;">
        <input-component
            :type="'search'"
            :input-class="'class4'"
            :placeholder="'서비스계약ID 입력'"
            style="width:100%; height:100%"
        />
        </span>
        <div>
          <img :src="logo_search" />
        </div>
      </div>
      <div class="product_box_tree">
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
    </div>

    <div class="item"> <!-- 4 -->
      <div class="product_box">
        <SubInfoTitle
            :subInfoTitleNm="'청구요금'"
        />
        <button-component
            :btn-name="'즉시수납'"
            :btn-class="'btnClass5'"
            style="float: right;"
            :btnWidth="'auto'"
        />
        <button-component
            :btn-name="'수납이력'"
            :btn-class="'btnClass5'"
            style="float: right;"
            :btnWidth="'auto'"
        />
        <button-component
            :btn-name="'요금조정'"
            :btn-class="'btnClass5'"
            style="float: right;"
            :btnWidth="'auto'"
        />
        <button-component
            :btn-name="'가상계좌'"
            :btn-class="'btnClass5'"
            style="float: right;"
            :btnWidth="'auto'"
        />
        <button-component
            :btn-name="'실시간 요금'"
            :btn-class="'btnClass5'"
            style="float: right;"
            :btnWidth="'auto'"
        />
        <button-component
            :btn-name="'해지 예상요금'"
            :btn-class="'btnClass5'"
            style="float: right;"
            :btnWidth="'auto'"
        />
      </div>
      <div class="product_box_sel" style="background-color: white">
        <div style="display: flex; width: 100%">
        <select-box-component
            :selectClass="'select_input3'"
            :width="120"
            :cdGroup="'optionsSearchDiv'"
            :defaultValue="'선택'"
            style="float: left"
            v-model="searchDiv1"
            @input="
          (value) => {
            searchDiv1 = value;
          }
        "
        />

        <button-component
            :btn-name="'E-mail 발송 현황'"
            :btn-class="'btnClass3'"
            style="float: right; width: 170px;"
        />

        <button-component
            :btn-name="'명세서이미지'"
            :btn-class="'btnClass3'"
            style="float: right; width: 120px;"
        />


        <button-component
            :btn-name="'엑셀 다운로드'"
            :btn-class="'btnClass3'"
            style="float: right; width: 130px; margin-right: 10px;"
        />

        </div>
      </div>
      <div class="product_box_grid">
        <ag-grid-component
            :rowData="this.rowData"
            :columnDefs="this.columnDefs"
            :isWidthFit="false"
        />
      </div>
    </div>

    <div class="item"> <!-- 5 -->
      <div style="width: 100%">
        <div>
          <div>
            <SubInfoTitle :subInfoTitleNm="'청구계정정보'"/>
            <div style="display:inline-block; float:right;" >
              <ButtonComponent
                  :btnClass="'btnClass3'"
                  :btnName="'이력보기'"
              />
            </div>
          </div>
          <div class="infoDataTable" >
            <table>
              <tr>
                <th>
                  <label-component
                      :labelNm="'청구계정ID'"
                      :labelClass="'label-type'"/>
                </th>
                <td>
                  <input-component :input-class="'class5'" :disabled="true" :value="'999900005' " />
                </td>
                <th> <label-component
                    :labelNm="'청구고객명'"
                    :labelClass="'label-type'"/>
                </th>
                <td>
                  <input-component :input-class="'class5'" :disabled="true" :value="'김포파인쇼****' " />
                </td>
                <td style="width: 187px;"></td>
                <!-- <th style="background-color:white; width:90px; border:none;"></th> -->
                <!-- <th></th> -->
                <th> <label-component
                    :labelNm="'식별변호'"
                    :labelClass="'label-type'"/>
                </th>
                <td colspan="2">
                  <input-component :input-class="'class5 class5_short1'" :disabled="true" :value="'801212' " />
                  -
                  <input-component :input-class="'class5 class5_short1'" :disabled="true" :value="'1*****' " />
                </td>
                <td colspan="5"></td>
              </tr>
              <tr>
                <th> <label-component
                    :labelNm="'청구유형'"
                    :labelClass="'label-type'"/>
                </th>
                <td>
                  <input-component :input-class="'class5'" :disabled="true" :value="'이메일' " />
                </td>
                <th> <label-component
                    :labelNm="'이메일'"
                    :labelClass="'label-type'"/>
                </th>
                <td colspan="2">
                  <input-component :input-class="'class5'" :disabled="true" :value="'aaa***' " />
                  <span style="margin-right: 6px;">@</span>
                  <input-component :input-class="'class5'" :disabled="true" :value="'kt.com' " />
                </td>
                <th> <label-component
                    :labelNm="'청구서 언어'"
                    :labelClass="'label-type'"/>
                </th>
                <td>
                  <input-component :input-class="'class5'" :disabled="true" :value="'한글' " />
                </td>
                <td style="width: 20px"></td>
              </tr>
              <tr>
                <th> <label-component
                    :labelNm="'청구 주소'"
                    :labelClass="'label-type'"/>
                </th>
                <td colspan="5">
                  <input-component :input-class="'class5 class5_short1'" :disabled="true" :value="'12345'" />
                  <input-component :input-class="'class5 class5_long1'" :disabled="true" :value="'서울시 강남구 학동로 111'" />
                  <input-component :input-class="'class5'" style="margin-right: 0; width: 284px;" :disabled="true" :value="'상세주소'" />
                </td>
              </tr>

              <tr>
                <th> <label-component
                    :labelNm="'납부방법'"
                    :labelClass="'label-type'"/>
                </th>
                <td colspan="5">
                  <input-component :input-class="'class5'" :disabled="true" :value="'신용카드 자동이체' " />
                  <input-component :input-class="'class5 class5_short1'" :disabled="true" :value="'매월말일'" />
                  <input-component :input-class="'class5 class5_short1'" :disabled="true" :value="'국민카드'" />
                  <input-component :input-class="'class5'" :disabled="true" :value="'1234567891****' " />
                  <input-component :input-class="'class5 class5_short1'" :disabled="true" :value="'홍길*' " />
                  <input-component :input-class="'class5'" :disabled="true" :value="'11월/2024년' " />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="item"> <!-- 6 엔터프라이즈버전의 Row Selection 사용 예정 -->
      <blc-component
          :sub-info-title-nm="'청구계정 요금'"
          :row-data="rowDataBill1"
          :column-defs="columnDefs1"
          :select-box-show=false
          :total="'10'"
          :bill="true"
          :cdGroup="'optionsSearchDiv'"
          :btnName="'엑셀다운로드'"
          style="height:110%"
          :header-color="'rgb(239 245 252)'"
      />
    </div>

    <div class="item"> <!-- 7 -->
      <blc-component
          :sub-info-title-nm="'서비스계약별 요금'"
          :row-data="rowDataBill2"
          :column-defs="columnDefs2"
          :select-box-show=false
          :total="'10'"
          :bill="true"
          :cdGroup="'optionsSearchDiv'"
          :btnName="'엑셀다운로드'"
          style="height:110%"
          :header-color="'rgb(239 245 252)'"
      />
    </div>


  </article>
</template>

<script>
import AgGridComponent from "@/components/common/AgGridComponent";
import CustRetvComponent from '@/components/common/CustRetvComponent.vue'
import FormDataComponent from '@/components/common/FormDataComponent.vue'
import SelectBoxComponent from "@/components/common/SelectBoxComponent";
import InputComponent from "@/components/common/InputComponent";
import msfTree from "@/components/common/TreeComponent/msf-tree";
import SubInfoTitle from "@/components/common/SubInfoTitle";
import ButtonComponent from "@/components/common/ButtonComponent";
import BlcComponent from "@/components/common/BlcComponent";
import LabelComponent from '@/components/common/LabelComponent.vue';
import FunComp from "@/components/common/AgGridCellRender/FunComp";
import ApiMixin from "@/service/common";
export default {
  mixins:[ApiMixin],
  name: "BillChage",
  components:{
    msfTree,
    InputComponent,
    SelectBoxComponent,
    CustRetvComponent,
    FormDataComponent,
    SubInfoTitle,
    AgGridComponent,
    ButtonComponent,
    BlcComponent,
    LabelComponent,
    FunComp,
  },
  data(){
    return{
      logo_search:require('../img/logo_search.png'),
      rowData:null,
      rowDataBill1:null,
      rowDataBill2:null,
      contentTree:null,
      activeItemObj: {}, // 활성화 시킬 객체
      selectedItemList: [], // 선택시킬 객체
      columnDefs2: [
        {
          headerName: "상품명",
          field: "model0",
          colSpan : params => {
            const model = params.data.model0;
            if(model === '소계'){return 4;}
            else if(model === '부가가치세'){return 4;}
            else if(model === '당월요금계'){return 4;}
            else if(model === '과납요금'){return 4;}
            else if(model === '요금계'){return 4;}
            else if(model === null) {return 3;}
            else {return 1;}
          },
          headerClass: "ag-header-first-child",
          width:180,
          cellStyle:function (params){
            if(params.value!=='소계' && params.value!=='부가가치세' && params.value!=='당월요금계' && params.value!=='과납요금' && params.value!=='요금계')
              return {justifyContent: "flex-start"};
          }
        },
        { headerName: "서비스번호", field: "model1",width:180, cellStyle:{justifyContent: "flex-start"} },
        { headerName: "대분류", field: "model2",  cellRenderer : 'FunComp',
          cellRendererParams:{
            clicked: function (field){
              console.log(field);
            }
          }, width:180,cellStyle:{justifyContent: "flex-start"}
        },
        { headerName: "요금항목", field: "model3",width:180, cellStyle:{justifyContent: "flex-start"} },
        { headerName: "할인전금액", field: "model4", width:150, cellStyle:{justifyContent: "flex-end", fontWeight:'bold'}},
        { headerName: "할인금액", field: "model5", width: 150, cellStyle:{justifyContent: "flex-end", fontWeight:'bold'}},
        { headerName: "납부금액", field: "model6", width: 150, cellStyle:{justifyContent: "flex-end", fontWeight:'bold'} },
        { headerName: "부가세", field: "model7", width: 150},
      ],
      columnDefs1: [
        {
          headerName: "상품명",
          field: "model0",
          colSpan : params => {
            const model = params.data.model0;
            if(model === '소계'){return 3;}
            else if(model === '부가가치세'){return 3;}
            else if(model === '당월요금계'){return 3;}
            else if(model === '과납요금'){return 3;}
            else if(model === '요금계'){return 3;}
            else if(model === null) {return 2;}
            else {return 1;}
          },
          headerClass: "ag-header-first-child",
          cellStyle:function (params){
            if(params.value!=='소계' && params.value!=='부가가치세' && params.value!=='당월요금계' && params.value!=='과납요금' && params.value!=='요금계')
            return {justifyContent: "flex-start"};
            else{
              return {backgroundColor:'rgb(247, 247, 248)'};
            }
          }
        },
        { headerName: "대분류", field: "model1",  cellRenderer : 'FunComp',
          cellRendererParams:{
            clicked: function (field){
              console.log(field);
            }
          }, width : 170,cellStyle:{justifyContent: "flex-start"}
        },
        { headerName: "요금항목", field: "model2", cellStyle:{justifyContent: "flex-start"} },
        { headerName: "할인전금액", field: "model3", width:120, cellStyle:{justifyContent: "flex-end"}},
        { headerName: "할인금액", field: "model4", width: 120, cellStyle:{justifyContent: "flex-end"}},
        { headerName: "납부금액", field: "model5", width: 120, cellStyle:{justifyContent: "flex-end"} },
        { headerName: "부가세", field: "model6", width: 120},
      ],
      columnDefs: [
        {
          headerName: "결제통화",
          field: "model0",
          headerClass: "ag-header-first-child",
        },
        { headerName: "요금항목명", field: "model1" },
        { headerName: "요금항목구분명", field: "model2" },
        { headerName: "협정금액", field: "model3" },
        { headerName: "협정할인금액", field: "model4" },
        { headerName: "협정청구금액", field: "model5" },
        { headerName: "유효시작일", field: "StartDate" },
        { headerName: "유효종료일", field: "EndDate" },
      ],
    }
  },
  async beforeMount() {
    // this.gridOptions = {
    //   pinnedBottomRowData: [{ model0: "합계", model1: null, model4: 0 }],
    // };
    await this.$connect('application/json','/info.json','get','').then((res)=>{

      this.rowData = res.data.rowData;
      this.rowData2 = res.data.rowData2;
      this.rowDataBill1 = res.data.rowDataBill1;
      this.rowDataBill2 = res.data.rowDataBill2;
      this.contentTree = res.data.contentTree;
    })


  },
}
</script>

<style scoped>
.billChageView{
  display: grid;
  grid-template-columns: 780px 780px 1fr;
  grid-template-rows: 40px 150px 300px 200px  minmax(300px,1fr) minmax(140px,1fr);
  gap: 20px 30px;
}
.billChageView > .item:nth-child(1){
  grid-column: 1 / 3;
  grid-row: 1;
}
.billChageView > .item:nth-child(2){
  grid-column: 1 / 3;
  grid-row: 2;
}
.billChageView > .item:nth-child(3){
  grid-column: 1/2;
  grid-row : 3;
}
.billChageView > .item:nth-child(4){
  grid-column: 2/3;
  grid-row: 3;
}
.billChageView > .item:nth-child(5){
  grid-column: 1/3;
  grid-row : 4;
}
.billChageView > .item:nth-child(6){
  grid-column: 1/3;
  grid-row : 5;
}
.billChageView > .item:nth-child(7){
  grid-column: 1/3;
  grid-row : 6;
}
.product_box{
  padding-bottom:8px;
  float:left;
  height:20px;
  width:100%;
}
.product_box_sel{
  border:1px solid #e4e4e4;
  padding-left: 10px;
  display: flex;
  align-items: center;
  width: 770px;
  height: 40px;
  background-color: rgb(239, 245, 252);
}
.product_box_tree{
  width: 100%;
  height: 225px;
  overflow: auto;
  border: 1px solid #e4e4e4;
}
.product_box_grid{
  width: 100%;
  height: 225px;
  border: 1px solid #e4e4e4;
}

table, tr {
  border: 1px solid rgb(232, 238,246);
  border-collapse: collapse;
  width: 100%;
}
.infoDataTable > table > tr{
  height: 38px;
}
.infoDataTable > table > tr > th{
  width: 92px;
  text-align: left;
  border-left: 1px solid rgb(232, 238,246);
  background-color: rgb(247, 247, 248);
  padding-left: 1%;
}
.infoDataTable > table > tr > td{
  width: 174px;
  /* text-align:right; */
  padding-left: 8px;
}
.infoDataTableButtons > span {
  margin-right: 4px;
}


.infoDataTableUpperButtons > button {
  margin-right: 3px;

}


</style>