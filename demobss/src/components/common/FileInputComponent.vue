<template>
  <div>
    <span class="txt02">{{ atcNoti }}</span>
    <div class="attach">
      <div class="input">
        <input
          type="text"
          class="text_input_bbs02"
          style="width: 100%"
          @click="loadFile"
          :placeholder="placeholder"
        />
      </div>
      <div class="btn">
        <input
          v-if="isMultiple"
          type="file"
          id="file"
          name="file"
          multiple
          @change="changeFileValue"
          style="display: none"
        />
        <input
          v-else
          type="file"
          id="file"
          name="file"
          @change="changeFileValue"
          style="display: none"
        />
        <button type="button" class="button_06" @click="loadFile">
          불러오기
        </button>
      </div>
    </div>

    <div class="attach_txt">
      <!-- 이전에 있던 파일 목록 -->
      <ul>
        <li :class="liClass" v-for="file in prevFiles" :key="file.fileNo">
          {{ file.atcFileNm }}
          <strong class="txt"> {{ getFileSize(file.fileSize) }}</strong>
          <a class="delete" @click="deleteFileNo(file)">X</a>
        </li>
      </ul>
      <!-- 새로 등록한 파일 목록 -->
      <ul>
        <li :class="liClass" v-for="(file, i) in files" :key="i">
          {{ file.name }}
          <strong class="txt"> {{ getFileSize(file.size) }}</strong>
          <a class="delete" @click="deleteFile(file)">X</a>
        </li>
      </ul>
    </div>
    <!-- <common-popup
      v-if="isModalShow"
      @closeModal="isModalShow = false"
      :popup="popupMsg"
    /> -->
  </div>
</template>

<script>
import { formatFileSize } from "@/service/FormatService.js";
const MAXSIZE = 10 * 1024 * 1024;
const FILETYPE = ",xlsx,xls,docx,doc,pptx,ppt,txt,pdf,zip,jpg,jpeg,png,gif,"; //업로드 가능 유형

export default {
  name: "FileInputComponent",
  data() {
    return {
      files: [],
      deleteFiles: [], //지울 파일 번호
      prevFiles: [], //이전 파일
      isModalShow: false,
    };
  },
  props: {
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
    liClass: {
      type: String,
      default: "",
    },
    pDisable: {
      //파일 업로드 가능여부
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.prevFiles = this.pPrevFiles;
  },
  methods: {
    getFileSize(size) {
      return formatFileSize(size);
    },
    changeFileValue() {
      // 실제 파일 정보 다루기
      var isUpload = false;
      let fileList = this.$el.querySelector("#file").files;
      for (var i = 0; i < fileList.length; i++) {
        var fileDot = fileList[i].name.lastIndexOf(".");
        var fileType = fileList[i].name.substring(
          fileDot + 1,
          fileList[i].name.length
        );
        fileType = "," + fileType + ","; //구분자 추가

        console.log(fileList);

        if (
          fileList[i].size > MAXSIZE ||
          FILETYPE.indexOf(fileType.toLowerCase()) == -1
        )
          isUpload = true;
        else this.files.push(fileList[i]);
      } //업로드 가능한 것만 push

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
    },
    loadFile() {
      // 파일 불러오기 클릭
      if (!this.pDisable) this.$el.querySelector("#file").click();
    },
    deleteFile(file) {
      const name = file.name;
      let index = -1;
      this.files.forEach((f, idx) => {
        if (f.name === name) {
          index = idx;
        }
      }); //지울 파일 인덱스
      // console.log("idx", index);

      if (index != -1) {
        this.files.splice(index, 1);
      }
    },
    deleteFileNo(file) {
      //이미 가지고있던 파일에서 삭제했을때 --atcOdrg사용
      const no = file.fileNo;
      let index = -1;
      let fNo = -1;
      this.prevFiles.forEach((f, idx) => {
        if (f.fileNo === no) {
          index = idx;
          fNo = f.atcOdrg;
        }
      }); //지울 파일 인덱스
      // console.log("idx", index);

      if (index != -1) {
        this.prevFiles.splice(index, 1); //이전파일 목록에서 삭제
        this.deleteFiles.push(fNo);
      }
    },
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
};
</script>

<style></style>