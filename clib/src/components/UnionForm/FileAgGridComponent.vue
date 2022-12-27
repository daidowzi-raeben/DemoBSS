<template>
  <div>
    <div style="width: 100%">
      <SubInfoTitle :subInfoTitleNm="'첨부파일'" />
      <span style="float: right">
        <button-component
          v-show="fileRowData.length>0"
          :btnClass="'btnClass4'"
          :btnName="'파일삭제'"
          :btnHeight="'28px'"
          :btnWidth="'78px'"
          @click="deleteFile(selectedData)"
        />
        <input
          type="file"
          id="file"
          name="file"
          multiple
          @change="uploadFiles"
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
      :rowData="fileLstRowData"
      :columnDefs="fileColumnDefs"
      :rowHeight="rowHeight"
      :rowSelection="'multiple'"
      :rowClicked="fileAgGridRowClicked"
      :overlayNoRowsTemplate="noRowTemplateMsg"
      :isDeselect="true"
      :isAutoSize="[false, 'type1']"
      @getGridApi="(value) => { gridApi = value;}" 
      :headerHeight="headerHeight"
      />
    <!-- :rowClicked="msgLstRowClicked" -->
        <li :class="liClass" v-for="(file, i) in fileRowData" :key="i">
          파일명 :  {{ file.name }}
          <strong class="txt"> {{ getFileSize(file.size) }}</strong>
          <a class="delete" @click="deleteFile(file)">X</a>
        </li>
      <br/><br/><br/><br/><br/>
  </div>
</template>

<script>
import AgGridComponent from "../common/AgGridComponent.vue";
import ButtonComponent from "../common/ButtonComponent.vue";
import SubInfoTitle from "../common/SubInfoTitle.vue";
import FileLst from "@/components/common/AgGridCellRender/FileLst";
import ApiMixin from "@/service/common.js";
import { formatFileSize } from "@/service/formatService.js";

const MAXSIZE = 10 * 1024 * 1024;
const FILETYPE = ",xlsx,xls,docx,doc,pptx,ppt,txt,pdf,zip,jpg,jpeg,png,gif,"; //업로드 가능 유형


export default {
  mixins: [ApiMixin],
  components: { AgGridComponent, SubInfoTitle, ButtonComponent,FileLst },
  data() {
    return {
      fileLstRowData: Object,
      fileRowHeight: 40,
      rowHeight: 40,
      headerHeight:40,
      fileRowData:[{
        name:"abcd",
        size:65
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
          field: "name",
          width: 400,
          cellClass: '"cell"-span',
          cellRenderer:'FileLst',
          cellRendererParams: { //업무유형이 공통코드일때 셀렉트반환값
            clicked: function (field) {
              console.log("field입니다.",field)
            }
          }
        },
        {
          headerName: "용량",
          field: "size",
          width: 150,
        },
      ],
      noRowTemplateMsg: `<span> <strong>  조회 결과가 없습니다. </strong> <br><br><br> </span>`,
      files: [],
      deleteFiles: [], //지울 파일 번호
      prevFiles: [],   //이전 파일
      isModalShow: false,
      selectedData : "",
    };
  },
  props:{
    atcNoti: String,
    pPrevFiles: [], //이전 파일
    placeholder: {
      type: String,
      default: "파일 불러오기",
    },
    isMultiple: {
      //다중선택 가능
      type: Boolean,
      default: true,
    },
    gridApi: "",
    liClass: {
      type: String,
      default: "",
    }
  },
  computed:{
    agGridHeightByRow(){
      // return ( (this.gridApi.getRenderedNodes().length)+2)*(this.rowHeight)+this.headerHeight +'px' ;
      return '200px';
    }
  },
  methods: {
    fileAgGridRowClicked(params){
      let selectedRowData = params.api.getSelectedRows(); 
      console.log("클릭 row Data",selectedRowData );
      this.selectedData = selectedRowData[0];
      // this.gridApi.applyTransaction({remove: selectedRowData}); 
      return selectedRowData;
      },
    getFileSize(size) {
      return formatFileSize(size);
    },
    uploadFiles() {
      // 실제 파일 정보 다루기
      var isUpload = false;
      let fileList = this.$el.querySelector("#file").files;
      let validFileList = [];
      
      for (var i = 0; i < fileList.length; i++) {
        var fileDot = fileList[i].name.lastIndexOf(".");
        var fileType = fileList[i].name.substring(
          fileDot + 1,
          fileList[i].name.length
        );
        fileType = "," + fileType + ","; //구분자 추가


        if (
          fileList[i].size > MAXSIZE ||
          FILETYPE.indexOf(fileType.toLowerCase()) == -1
        )
          isUpload = true;
        else {
          // validation 후 해당 파일 여기서 push 
          this.fileRowData.push(fileList[i]);
          validFileList.push(fileList[i]);
        }
      }; //업로드 가능한 것만 push
      this.gridApi.applyTransaction({add: validFileList });     // 새로 첨부 된 파일 추가 
      console.table(this.fileRowData);

      if (isUpload) {
        this.isModalShow = true;
        this.popupMsg = {
          title: "알림",
          contents:
            "첨부파일은 최대 10MB 이내로 xlsx, xls, docx, doc, pptx, ppt, txt, pdf, zip, jpg, jpeg, png, gif 형식만 첨부 가능합니다.",
        };
        alert("업로드 불가");
        return;
      } //크기 초과, 업로드할 수 없는 유형

      this.$el.querySelector("#file").value = "";
      // this.fileLstRowData = this.fileRowData
      // console.log(fileLstRowData)

    },
    loadFile() {
      // 파일 불러오기 클릭
      if (!this.pDisable) this.$el.querySelector("#file").click();
    },
    deleteFile() {
      let removeFile = this.gridApi.getSelectedRows();        // ag-grid에서 여러 파일 선택한 값을 removeFile 변수에 저장
      for(let i =0; i < removeFile.length ; i ++){            // 해당 변수에서 파일 하나씩 loop로 삭제
        const name = removeFile[i].name;
        let index = -1;
        let emptyfileData = this.fileRowData
        emptyfileData.forEach((f, idx) => {      
          if (f.name === name) index = idx;
        }); //지울 파일 인덱스
        // console.log("idx", index);
        if (index != -1)  emptyfileData.splice(index, 1);
      }
      // this.fileLstRowData = this.fileRowData;
      this.gridApi.applyTransaction({remove: removeFile });   // 선택 된 파일 삭제 
    },
    // deleteFileNo(file) {
    //   //이미 가지고있던 파일에서 삭제했을때 --atcOdrg사용
    //   const no = file.fileNo;
    //   let index = -1;
    //   let fNo = -1;
    //   this.prevFiles.forEach((f, idx) => {
    //     if (f.fileNo === no) {
    //       index = idx;
    //       fNo = f.atcOdrg;
    //     }
    //   }); //지울 파일 인덱스
    //   // console.log("idx", index);

    //   if (index != -1) {
    //     this.prevFiles.splice(index, 1); //이전파일 목록에서 삭제
    //     this.deleteFiles.push(fNo);
    //   }
    // },
    save() {
      //상위 컴포넌트로 데이터 전달
      var data = {
        files: this.files,
        deleteFiles: this.deleteFiles,
        prevFiles: this.prevFiles,
      };
      return data;
    },
  },
  created(){
    this.prevFiles = this.pPrevFiles;
    this.fileLstRowData= this.fileRowData
  },
};
</script>

<style></style>
