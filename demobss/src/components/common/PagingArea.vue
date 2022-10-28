<template>
  <div id="paging_area">
    <div class="page_navi">
      <a class="arrow last" @click="moveToFirstPage">
        <span class="txt-hidden">첫페이지</span>
      </a>
      <a class="arrow next_link" @click="moveToBeforePage">
        <span class="txt-hidden">이전 목록</span>
      </a>
      <a
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
      </a>

      <a class="arrow prev_link" @click="moveToNextPage">
        <span class="txt-hidden">다음 목록</span>
      </a>
      <a class="arrow first" @click="moveToLastPage">
        <span class="txt-hidden">마지막페이지</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PagingArea",
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
      console.log(val);
      this.$emit("input", val); //현재 페이지! 부모에 전달
    },
  },
  methods: {
    setPage(page) {
      this.pageNumber = page;
    },
    //목록 페이징 세팅
    setPageableData(data) {
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