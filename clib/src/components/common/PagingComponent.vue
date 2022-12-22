<template>
  <div id="paging-component">
    <div class="page_navi">
      <button type="button" class="arrow last" @click="moveToFirstPage"
        ><span class="txt-hidden">첫페이지</span></button
      >
      <button type="button" class="arrow next_link" @click="moveToBeforePage"
        ><span class="txt-hidden">이전 목록</span></button
      >
      <button type="button"
        v-for="page in currentMaxPage"
        :key="page"
        :class="page == pageNumber ? 'current' : 'page'"
        @click="setPage(page)"
        v-show="page >= currentMinPage && page <= totalPages"
      >
        <strong v-if="page == pageNumber">
          <span>
            {{ page }}
          </span>
        </strong>
        <span v-else>{{ page }}</span>
      </button>

      <button type="button" class="arrow prev_link" @click="moveToNextPage">
        <span class="txt-hidden">다음 목록</span>
      </button>
      <button type="button" class="arrow first" @click="moveToLastPage">
        <span class="txt-hidden">마지막페이지</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PagingComponent",
  data() {
    return {
      pageNumber: 1, // 현재 페이지
      currentMinPage: 1, // 현재 페이지에서 보이는 최소 페이지
      currentMaxPage: this.pageSize, // 현재 페이지에서 보이는 최대 페이지
      totalPages: 0, // 최대 페이지 수
    };
  },
  props: {
    pageableData: Object,
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  created() {
    // vuex사용 x
    this.setPageableData(this.pageableData); //부모에서 받아온 페이징 데이터 셋팅
  },
  watch: {
    pageNumber(val) {
      // console.log(val);
      this.$emit("currentPage", val); //현재 페이지! 부모에 전달
    },
    pageableData: {
      deep: true,
      handler() {
        this.totalPages = this.pageableData.totalPages;
        this.setPageableData(this.pageableData);
        // console.log("paging watch 성공")
      },
    },
  },
  methods: {
    setPage(page) {
      this.pageNumber = page;
    },
    //목록 페이징 세팅
    setPageableData(data) {
      this.resetPageableData();
      this.totalPages = data.totalPages;
      if (this.totalPages <= this.pageSize)
        this.currentMaxPage = data.totalPages;
      this.pageNumber = data.pageNumber;
      // console.log("setData" ,data);
    },
    //목록 페이징 초기화
    resetPageableData() {
      this.totalPages = 1;
      this.pageNumber = 1;
      this.currentMinPage = 1;
      this.currentMaxPage = this.pageSize;
      // console.log("reset", );
    },
    // 다음 페이지 이동
    moveToNextPage() {
      if (this.pageNumber + 1 > this.totalPages) return;
      this.pageNumber += 1;

      if (
        this.pageNumber > this.currentMaxPage &&
        this.pageNumber <= this.totalPages
      ) {
        this.currentMinPage += this.pageSize;
        this.currentMaxPage += this.pageSize;
      } //다음장으로
      // console.log("next page", );
    },
    // 이전 페이지로 이동
    moveToBeforePage() {
      if (this.pageNumber <= 1) return;
      this.pageNumber -= 1;

      if (this.pageNumber < this.currentMinPage) {
        let mod = this.currentMaxPage % this.pageSize;
        this.currentMinPage -= this.pageSize;
        this.currentMaxPage -= mod == 0 ? this.pageSize : mod;
      }
      // console.log("prev page", );
    },
    // 첫번째 페이지로 이동
    moveToFirstPage() {
      this.pageNumber = 1;
      this.currentMaxPage =
        this.totalPages < this.pageSize ? this.totalPages : this.pageSize;
      this.currentMinPage = 1;
      // console.log("first page", );
    },
    // 마지막 페이지로 이동
    moveToLastPage() {
      this.pageNumber = this.totalPages;
      this.currentMaxPage = this.totalPages;
      let mod = this.totalPages % this.pageSize;
      if (mod != 0) this.currentMinPage = this.totalPages - (mod - 1);
      //10 20이면
      else this.currentMinPage = this.totalPages - (this.pageSize - 1);
      // console.log("last page", );
    },
  },
};
</script>
<style>
#paging-component {
  position: relative;
  padding: 20px 0px 25px 0px;
}
#paging-component > .page_navi {
  position: relative;
  text-align: center;
}

#paging-component > .page_navi > button {
  margin: 0 2px;
}

#paging-component > .page_navi > button,
.page_navi > strong {
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  text-align: center;
  font-size: 9pt;
  cursor: pointer;
}
#paging-component > .page_navi .first {
  background: url(../../assets/img/icon_board_firstPage.png) no-repeat 50%;
}
#paging-component > .page_navi .next_link {
  background: url(../../assets/img/icon_board_nextPage.png) no-repeat 50%;
}
#paging-component > .page_navi .prev_link {
  background: url(../../assets/img/icon_board_prevPage.png) no-repeat 50%;
}
#paging-component > .page_navi .last {
  background: url(../../assets/img/icon_board_lastPage.png) no-repeat 50%;
}
#paging-component > .page_navi .current {
  background: #5e5e5e;
  color: #fff;
}
#paging-component .txt-hidden {
  font-size: 0;
  text-indent: -1000em;
}
</style>
