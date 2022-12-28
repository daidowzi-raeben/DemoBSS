<template>
  <div>
    <div class="menu_tab_line">
      <div class="menu_tab_line_detail">
        <div v-for="(item, index) in fixTab" v-bind:key="index">
          <div
            :class="{
              tabon: this.compId === item.menuId,
              taboff: this.compId !== item.menuId,
              menu_tab: true,
            }"
            @click="ChageComponent(item.menuId, index)"
          >
            <span id="tab_nm">
              {{ item.menuNm }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div
      v-for="(item, index) in fixTabCompAddr"
      :key="item"
      style="margin-top: 20px"
    >
      <div v-show="index === this.cur_num">
        <component v-bind:is="this.fixTabCompAddr[index]" :autId="autId" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, markRaw } from "vue";

export default {
  data() {
    return {
      fixTabCompAddr: [],
      fixTab: [],
      cur_num: 0,
    };
  },
  watch: {
    cur_num: function (newVal) {
      this.compId = this.fixTab[newVal].menuId;
      this.component = this.fixTabCompAddr[this.cur_num];
    },
  },
  methods: {
    ChageComponent: function (componentName, index) {
      this.compId = componentName;
      this.cur_num = index;
    },
  },
  beforeMount() {
    (this.fixTab = [
      {
        menuId: "01",
        menuNm: "서비스 정보",
      },
      {
        menuId: "02",
        menuNm: "부가/장비 정보",
      },
      {
        menuId: "03",
        menuNm: "첨부파일",
      },
      {
        menuId: "04",
        menuNm: "담당자 정보",
      },
    ]),
      (this.compId = this.fixTab[0].menuId);
  },

  created() {
    this.comp = markRaw(
      defineAsyncComponent(() =>
        import("@/components/FiexedMultiTab/test1.vue")
      )
    );
    this.fixTabCompAddr.push(this.comp);
    this.comp = markRaw(
      defineAsyncComponent(() =>
        import("@/components/FiexedMultiTab/test2.vue")
      )
    );
    this.fixTabCompAddr.push(this.comp);
    this.comp = markRaw(
      defineAsyncComponent(() =>
        import("@/components/FiexedMultiTab/test3.vue")
      )
    );
    this.fixTabCompAddr.push(this.comp);
    this.comp = markRaw(
      defineAsyncComponent(() =>
        import("@/components/FiexedMultiTab/test4.vue")
      )
    );
    this.fixTabCompAddr.push(this.comp);
  },
};
</script>

<style scoped>
.menu_tab_line {
  height: 25px;
  width: 100%;
  padding-bottom: 5px;
  border-bottom: 1px solid;
}
.menu_tab_line .menu_tab_line_detail {
  width: 94%;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
}
div.tabon {
  /* 탭 선택되었을 때 */
  background-color: rgb(27, 114, 212);
  color: white;
}

div.taboff {
  /* 탭 선택x */
  background-color: rgb(184, 208, 235);
  border-right: rgb(113, 156, 205) 1px solid;
  color: black;
}
div.taboff:hover {
  background-color: rgb(204, 228, 250);
}

.menu_tab {
  float: left;
  width: 130px;
  height: inherit;
  padding: 0px 5px;
  margin-right: 10px;
  line-height: 30px;
  cursor: pointer;
}
.menu_tab > span#tab_nm {
  display: block;
  float: left;
  width: 100%;
  font-size: 10pt;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
