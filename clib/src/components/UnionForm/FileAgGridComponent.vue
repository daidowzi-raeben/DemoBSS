<template>
  <div>
    <div style="width: 100%">
      <SubInfoTitle :subInfoTitleNm="'첨부파일'" />
      <span style="float: right">
        <button-component
          v-show="fileRowData.length>0"
          :btnClass="'btn-type4'"
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
          :btnClass="'btn-type4'"
          :btnName="'파일첨부'"
          :btnHeight="'28px'"
          :btnWidth="'78px'"
          @click="loadFile"
        />
      </span>
    </div>
    <ag-grid-component
      ref="agGridComponent"
      :style="{height:agGridHeightByRow}"
      :rowData="fileRowData"
      :columnDefs="fileColumnDefs"
      :rowHeight="rowHeight"
      :rowSelection="'multiple'"
      :rowClicked="fileAgGridRowClicked"
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
  </div>
</template>

<script>
import AgGridComponent from "../common/AgGridComponent.vue";
import ButtonComponent from "../common/ButtonComponent.vue";
import SubInfoTitle from "../common/SubInfoTitle.vue";
import FileLst from "@/components/common/AgGridCellRender/FileLst.vue";
import ApiMixin from "@/service/common.js";
import { formatFileSize } from "@/service/formatService.js";

const MAXSIZE = 10 * 1024 * 1024;
const FILETYPE = ",xlsx,xls,docx,doc,pptx,ppt,txt,pdf,zip,jpg,jpeg,png,gif,"; //업로드 가능 유형


export default {
  mixins: [ApiMixin],
  components: { AgGridComponent, SubInfoTitle, ButtonComponent,FileLst },
  data() {
    return {
      rowHeight: 40,
      headerHeight:40,
      agGridHeightByRow: '180px',
      fileRowData:[],
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
          width: 500,
          cellClass: '"cell"-span',
          cellRenderer:'FileLst',
          cellRendererParams: { //업무유형이 공통코드일때 셀렉트반환값
            clicked: function (field) {
              //console.log("field입니다.",field)
            }
          }
        },
        {
          headerName: "용량",
          field: "size",
          width: 150,
        },
      ],
      files: [],
      deleteFiles: [], //지울 파일 번호
      prevFiles: [],   //이전 파일
      isModalShow: false,
      selectedData : "",
      gridApi: "",
      emitFileData:[],
    };
  },
  props:{
    pPrevFiles: [], //이전 파일
    liClass: {
      type: String,
      default: "",
    }
  },
  methods: {
    fileAgGridRowClicked(params){
      let selectedRowData = params.api.getSelectedRows(); 
      //console.log("클릭 row Data",selectedRowData );
      this.selectedData = selectedRowData[0];
      // this.gridApi.applyTransaction({remove: selectedRowData}); 
      return selectedRowData;
    },
    getFileSize(size) {
      return formatFileSize(size);
    },
    uploadFiles() {
      // 실제 파일 정보 다루기
      let isUpload = false;
      let fileList = this.$el.querySelector("#file").files;
      let validFileList = [];
      
      for (let i = 0; i < fileList.length; i++) {
        let fileDot = fileList[i].name.lastIndexOf(".");
        let fileType = fileList[i].name.substring(
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
      console.table(this.fileRowData);
      this.gridApi.applyTransaction({add: validFileList });     // 새로 첨부 된 파일 추가 

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
      this.emitFiles();
    },
    loadFile() {
      // 파일 불러오기 클릭
      if (!this.pDisable) this.$el.querySelector("#file").click();
    },
    async deleteFile() {
      let removeFile = this.gridApi.getSelectedRows();        // ag-grid에서 여러 파일 선택한 값을 removeFile 변수에 저장
      for(let i =0; i < removeFile.length ; i ++){            // 해당 변수에서 파일 하나씩 loop로 삭제
        const name = removeFile[i].name;
        let index = -1;
        this.fileRowData.forEach((f, idx) => {      
          if (f.name === name) index = idx;
        }); //지울 파일 인덱스
        // console.log("idx", index);
        if (index != -1)  this.fileRowData.splice(index, 1);
      }
      
      await setTimeout(() => {
        this.gridApi.applyTransaction({remove: removeFile });   // 선택 된 파일 삭제 
        this.emitFiles();
      }, 100);
    },
    emitFiles(){
      let emitFileData2 = [];
      this.gridApi.forEachNodeAfterFilter(node => emitFileData2.push(node.data)) ;
      this.$emit( "emitUploadFile" ,emitFileData2) ;    // ag-grid 모든 데이터 가져오기 
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
      let data = {
        files: this.files,
        deleteFiles: this.deleteFiles,
        prevFiles: this.prevFiles,
      };
      return data;
    },
  },
  created(){
    this.prevFiles = this.pPrevFiles;
  },
};
</script>

<style></style>
