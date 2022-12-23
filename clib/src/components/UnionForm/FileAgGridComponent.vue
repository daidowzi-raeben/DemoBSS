<template>
  <div>
    <div style="width: 100%">
      <SubInfoTitle :subInfoTitleNm="'첨부파일'" />
      <span style="float: right">
        <button-component
          :btnClass="'btnClass4'"
          :btnName="'파일삭제'"
          :btnHeight="'28px'"
          :btnWidth="'78px'"
        />
        
        <input
          type="file"
          id="file"
          name="file"
          @change="changeFileValue"
          style="display: none"
        />
        <button-component
          :btnClass="'btnClass4'"
          :btnName="'파일첨부'"
          :btnHeight="'28px'"
          :btnWidth="'78px'"
          @click="loadFile"
        />
      </span>
    </div>
    <ag-grid-component
      :style="{height:agGridHeightByRow}"
      ref="agGridComponent"
      :rowData="fileRowData"
      :columnDefs="fileColumnDefs"
      :rowHeight="rowHeight"
      :overlayNoRowsTemplate="noRowTemplateMsg"
      :isDeselect="true"
      :isAutoSize="[false, 'type1']"
      :headerHeight="headerHeight"
    />
    <!-- :rowClicked="msgLstRowClicked" -->
  </div>
</template>

<script>
import AgGridComponent from "../common/AgGridComponent.vue";
import ButtonComponent from "../common/ButtonComponent.vue";
import SubInfoTitle from "../common/SubInfoTitle.vue";
import FileLst from "@/components/common/AgGridCellRender/FileLst";
import ApiMixin from "@/service/common.js";

export default {
  mixins: [ApiMixin],
  components: { AgGridComponent, SubInfoTitle, ButtonComponent,FileLst },
  data() {
    return {
      fileRowHeight: 40,
      rowHeight: 40,
      headerHeight:40,
      fileRowData:[
        {
          "fileNm":"가나다라.pdf",
          "fileByte":"65byte"
        },
        {
          "fileNm":"가나다라1.pdf",
          "fileByte":"652byte"
        },
        {
          "fileNm":"abcd.pdf",
          "fileByte":"825byte"
        },
        {
          "fileNm":"wow.pdf",
          "fileByte":"765byte"
        }

      ],
      fileColumnDefs: [
        {
          headerName: "",
          field: "select",
          width: 40,
          checkboxSelection: true,
          headerCheckboxSelection: true,
        },
        {
          headerName: "파일명",
          field: "fileNm",
          width: 400,
          cellClass: '"cell"-span',
          cellRenderer:'FileLst',
          cellRendererParams: { //업무유형이 공통코드일때 셀렉트반환값
            clicked: function (field) {
              console.log(field)
            }
          }
        },
        {
          headerName: "용량",
          field: "fileByte",
          width: 150,
        },
      ],
      noRowTemplateMsg: `<span> <strong>  조회 결과가 없습니다. </strong> <br><br><br> </span>`,
    };
  },
  
  async beforeMount() {
    // await this.$connect("application/json", "/info", "get", "")
    //   .then((res) => {
    //     console.log("inf22o", res);
    //     this.fileRowData = res.data.fileRowData;
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  },
  computed:{
    agGridHeightByRow(){
      return (this.fileColumnDefs.length+2)*(this.rowHeight)+this.headerHeight +'px' ;
    }
  }
};
</script>

<style></style>
