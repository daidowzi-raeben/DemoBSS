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
      :rowData="fileLstRowData"
      :columnDefs="fileColumnDefs"
      :rowHeight="rowHeight"
      :rowClicked="fileAgGridRowClicked"
      :overlayNoRowsTemplate="noRowTemplateMsg"
      :isDeselect="true"
      :isAutoSize="[false, 'type1']"
      @grid-ready="onGridReady($event)"
      :headerHeight="headerHeight"

    />
    <div v-for="item32 in selectedData" :key="item32"> asdfasdf <p>{{ item32  }}</p> </div>
    name : {{ selectedData.name }} <br/>
    <!-- :rowClicked="msgLstRowClicked" -->
        <li :class="liClass" v-for="(file, i) in fileRowData" :key="i">
          파일 네임 {{ file.name }}
          <strong class="txt"> {{ getFileSize(file.size) }}</strong>
          <a class="delete" @click="deleteFile(file)">X</a>
        </li>

        <p><strong>문제상황 : 데이터 한번 넣고 삭제/추가가 적용이 안됨</strong></p>
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
      fileLstRowData: [],
      fileRowHeight: 40,
      rowHeight: 40,
      headerHeight:40,
      fileRowData:[
      ],
      fileRowData2:[
    {
      "name":"가나다라.pdf",
      "size":"65byte"
    },
    {
      "name":"가나다라1.pdf",
      "size":"652byte"
    },
    {
      "name":"abcd.pdf",
      "size":"825byte"
    },
    {
      "name":"wow.pdf",
      "size":"765byte"
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
              console.log(field)
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

      // file Input component
      files: [],
      deleteFiles: [], //지울 파일 번호
      prevFiles: [], //이전 파일
      isModalShow: false,
      selectedData : "",
      emptyfileData:"",
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
    gridApi:'',
    liClass: {
      type: String,
      default: "",
    }
  },
  computed:{
    agGridHeightByRow(){
      return (this.fileColumnDefs.length+2)*(this.rowHeight)+this.headerHeight +'px' ;
    }
  },
  watch:{
    fileRowData:{
      handler(newSelectedData){
      console.log("바뀌었어요!!", this.fileRowData),
        console.log("새로운 값 ",newSelectedData)
        // this.fileRowData = newFileRowData;
        // console.log("감시해요",this.fileRowData)
      }


    }
  },
  methods: {
    fileAgGridRowClicked(params){
      // console.log("params",params)
      // console.log("params api",params.api)
      let selectedRowData = params.api.getSelectedRows();      
      this.selectedData = selectedRowData[0];
      return params.api;
      },
    getFileSize(size) {
      return formatFileSize(size);
    },
    changeFileValue() {
      // 실제 파일 정보 다루기
      var isUpload = false;
      let fileList = this.$el.querySelector("#file").files;
      console.log("file0 ", fileList, JSON.stringify(fileList));
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
        }
      } //업로드 가능한 것만 push
      
      console.log("여기가 맞아요  ", this.fileRowData );
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
      
      console.log("file2 ", JSON.stringify(fileList));
      this.fileLstRowData = this.fileRowData

    },
    loadFile() {
      // 파일 불러오기 클릭
      if (!this.pDisable) this.$el.querySelector("#file").click();
      console.log("absdagf")
    },
    deleteFile(file) {
      console.log("delete file",this.gridApi);
      // this.fileRowDat.applyTransaction({ remove: this.gridApi.getSelectedRows() });

      const name = file.name;
      let index = -1;
      // this.gridApi.applyTransaction({ remove: fileAgGridRowClicked(params) });
      let emptyfileData = this.fileRowData
      emptyfileData.forEach((f, idx) => {
        if (f.name === name) {
          index = idx;
        }
      }); //지울 파일 인덱스
      // console.log("idx", index);

      if (index != -1) {
        emptyfileData.splice(index, 1);
        this.fileRowData2 = emptyfileData;
        this.fileRowData = this.fileRowData2
        console.log("지웠어요 파일을",this.fileRowData, this.fileRowData2, emptyfileData)
      }
      // this.fileRowData = null; 
      // this.fileRowData = this.fileRowData2;
      // this.fileRowData = emptyfileData;
      this.fileLstRowData = this.fileRowData
    },

    
    onGridReady(params) {
      // console.log("onGridReady");
      this.gridApi = params.api;
      console.log("onGridReady",this.gridApi, params)
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
  created() {
    this.prevFiles = this.pPrevFiles;
  },
};
</script>

<style></style>
