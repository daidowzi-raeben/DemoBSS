<template>
  <section>
    <Nav v-show="navOn" @input="AddComponent" />
    <div class="wrap">
      <div class="menu_tab_line">
        <div class="menu2" style="width: 80vw; overflow:hidden; white-space: nowrap; display: flex">
        <div v-for="(item, index) in compm" v-bind:key="index" style="display: inline-block">
          <div
            :class="{
              tabon: this.comp === item.menuId,
              taboff: this.comp !== item.menuId,
              menu_tab: true,
            }"
            @click="ChageComponent(item.menuId, index)"
          >
            <span id="tab_nm">
              {{ item.menuNm }}
            </span>
            <span class="tab_x" @click.prevent.stop="DeleteComponent(index)">x</span>
          </div>
        </div>
        </div>
        <div style="width: 5vw; float: right; display: flex">
          <div class="menu_close" @click="moveScrollLeft">◀</div>
          <div class="menu_close" @click="moveScrollRight">▶</div>
         <div class="menu_close" @click="AllDeleteComponent">x</div>

        </div>
      </div>
      <!-- 상세 화면 주소  -->
      <title-area :currentMenu="currentMenu" />

      <div v-for="(item, index) in compm2" :key="item" class="view_wrap">
        <component
          v-bind:is="this.compm2[index]"
          v-show="index === this.cur_num"
        ></component>
      </div>
    </div>
  </section>
</template>

<script>
import TitleArea from "./common/TitleArea.vue";
import Nav from "./Nav.vue";
import $ from 'jquery';
import { defineAsyncComponent, markRaw } from "vue";

export default {
  name: "Section",
  components: {
    TitleArea,
    Nav,
  },
  data() {
    return {
      comp: "bill_01_01_01",
      cur_num: 0,
      compm: [
        {
          cmpnId: "ChageInfoRetv",
          menuId: "bill_01_01_01",
          menuNm: "청구요금정보조회",
          upMenuId: "bill_01_01",
        },
      ],
      compm2: [],
      test: "ChageInfoRetv",
      component: markRaw(
        defineAsyncComponent(() => import("../pages/ChageInfoRetv.vue"))
      ),
    };
  },
  watch: {
    cur_num: function (newVal, oldVal) {
      this.comp = this.compm[newVal].menuId;
      this.component = this.compm2[this.cur_num];
    },
  },
  created() {
    this.compm2.push(this.component);
  },
  computed: {
    navOn() {
      return this.$store.state.navOn;
    },
    currentMenu() {
      return this.compm[this.cur_num];
    },
  },
  methods: {
    moveScrollRight:function (){
      var _scrollX = $('.menu2').scrollLeft();
      $('.menu2').scrollLeft(_scrollX+100);
    },
    moveScrollLeft:function () {
      var _scrollX = $('.menu2').scrollLeft();
      $('.menu2').scrollLeft(_scrollX-100);
    },
    ChageComponent: function (componentName, index) {
      this.comp = componentName;
      this.cur_num = index;
    },
    AllDeleteComponent() {
      var component_length = this.compm.length;
      this.compm.splice(1, component_length - 1);
      this.compm2.splice(1, component_length - 1);
      this.cur_num = 0;
    },
    DeleteComponent: function (index) {
      if (index != 0) {
        this.compm.splice(index, 1);
        this.compm2.splice(index, 1);
        if (
          index == this.cur_num ||
          (index < this.cur_num && index <= this.compm.length)
        ) {
          this.cur_num = this.cur_num - 1;
        }
      }
    },
    AddComponent: function (param) {
      if (param.menuId != "" && param.menuId != null) {
        const st = this.compm.find(
          (element) => element.menuId === param.menuId
        );
        if (st != null) {
          var i = this.compm.indexOf(st);
          this.cur_num = i;
        } else {
          if (this.compm.length < 10) {
            this.compm.push(param);
            this.cur_num = this.compm.length - 1;
            this.component = markRaw(
              defineAsyncComponent(() =>
                import("../pages/" + this.compm[this.cur_num].cmpnId + ".vue")
              )
            );
            this.compm2.push(this.component);
          } else {
            console.log("10개를 넘었습니다.");
          }
        }
      }
    },
  },
};
</script>

<style scoped></style>
