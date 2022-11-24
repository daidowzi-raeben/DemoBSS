<template>
  <section>
    <Nav v-show="navOn" @input="AddComponent" />
    <div class="wrap">
      <div class="menu_tab_line">
        <div
          :class="{
            menu_tab_line_detail: navOn === false,
            menu_tab_line_detail_on: navOn === true,
          }"
        >
          <div v-for="(item, index) in compm" v-bind:key="index">
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
              <span class="tab_x" @click.prevent.stop="DeleteComponent(index)"
                >
                <img v-if="this.comp === item.menuId" :src="iconDelBlack" />
                <img v-else :src="iconDelWhite" />
              </span
              >
            </div>
          </div>
        </div>
        <div
            :class="{
            menuTabButtOff: navOn === false,
            menuTabButtOn: navOn === true,
          }"
            class="menu_tab_buttons">
          <ButtonComponent
            :btnClass="'btnLeftImgClass'"
            :btnHeight="'25px;'"
            :btnwWidth="'25px;'"
            @click="moveScrollLeft"
          />
          <ButtonComponent
            :btnClass="'btnRightImgClass'"
            :btnHeight="'25px;'"
            :btnwWidth="'25px;'"
            @click="moveScrollRight"
          />
          <ButtonComponent
            :btnClass="'btnDeleteImgClass'"
            :btnHeight="'25px;'"
            :btnwWidth="'25px;'"
            @click="AllDeleteComponent"
          />
        </div>
      </div>
      <div
          :class="{
            contentNavOff: navOn === false,
            contentNavOn: navOn === true,
          }"
          class="content">
      <!-- <title-area :currentMenu="currentMenu" :style=" !this.navOn ? 'margin-left:10%; width:82%;':'' "/> -->
      <title-area2 :currentMenu="currentMenu"/>

      <div
        v-for="(item, index) in compm2"
        :key="item"
        :class="{
          view_wrap_on: navOn,
          view_wrap_off: !navOn,
          view_wrap: true,
        }"
      >
        <component
          v-bind:is="this.compm2[index]"
          v-show="index === this.cur_num"
          :style=" navOn ? '' : 'margin-left:2%;' "

        ></component>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import
  // TitleArea from "./common/TitleArea.vue";
  TitleArea2 from "./common/TitleArea2.vue";
import Nav from "./Nav.vue";
import { defineAsyncComponent, markRaw } from "vue";
import ButtonComponent from "@/components/common/ButtonComponent.vue";

export default {
  name: "Section",
  components: {
    // TitleArea,
    TitleArea2,
    Nav,
    ButtonComponent,
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
      iconDelWhite:require("../img/icon_delete_white.png"),
      iconDelBlack:require("../img/icon_delete_black.png"),
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
    moveScrollRight: function () {
      let menuTabScroll
      if(this.navOn===false){
        menuTabScroll = document.querySelector(".menu_tab_line_detail");
      }
      else{
        menuTabScroll = document.querySelector(".menu_tab_line_detail_on");
      }
      menuTabScroll.scrollLeft += 100;
    },
    moveScrollLeft: function () {
      let menuTabScroll
      if(this.navOn===false){
        menuTabScroll = document.querySelector(".menu_tab_line_detail");
      }
      else{
        menuTabScroll = document.querySelector(".menu_tab_line_detail_on");
      }
      menuTabScroll.scrollLeft -= 100;
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
      console.log(param);
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
            console.log(this.component);
          } else {
            console.log("10개를 넘었습니다.");
          }
        }
      }
    },
  },
};
</script>

<style scoped>

.menu_tab_line {
  height: 30px;
  display: inline-flex;
  width: 100%;
  background-color: #5ad3cd;
  position: fixed;
  overflow: hidden;
  z-index: 800;
  /* overflow-x: scroll; */
}
.menu_tab_line .menu_tab_line_detail {
  width: calc(100% - 70px);
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  z-index: 4;
}
img{
  width: 15px;
  height: 15px;
}
.menu_tab_line .menu_tab_line_detail_on {
  width: calc(100% - 400px);
  overflow: hidden;
  padding-left: 247px;
  position: fixed;
  white-space: nowrap;
  flex-grow: 0;
  display: flex;
  z-index: 4;
}

div.tabon {
  /* 탭 선택되었을 때 */
  background-color: rgb(255,255,255);
  border-radius: 10px 10px 0 0;
  color: rgb(27,114,212);
}

div.taboff {
  /* 탭 선택x */
  background-color: rgb(27,114,212);
  color: rgb(255,255,255);
  border-radius: 10px 10px 0 0;
  border-right: #343434 solid 1px;
}

.menu_tab_line {
  height: 30px;
  display: inline-flex;
  width: 100%;
  background-color: rgb(8,22,38);
  position: fixed;
  overflow: hidden;
  z-index: 3;
  /* overflow-x: scroll; */
}

.menu_tab {
  float: left;
  width: 140px;
  height: 30px;
  padding: 0 10px;
  line-height: 30px;
  cursor: pointer;
  font-weight: bolder;
}

.menu_tab > span#tab_nm {
  display: block;
  float: left;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.menu_tab > span.tab_x {
  color: #aeaeae;
  font-size: 20px;
  float: right;
}

/*네비게이션 열렸을 때 탭 버튼*/
.menu_tab_line .menuTabButtOn {
  width: 5%;
  padding-top: 2px;
  padding-left: calc(100% - 120px);
  position: fixed;
  display: flex;
}
/*네비게이션 닫혔을 때 탭 버튼*/
.menu_tab_line .menuTabButtOff {
  width: 5%;
  padding-top: 2px;
  padding-right: 50px;
  display: flex;
}


.menu_tab_line .menu_button {
  float: right;
  color: #ffffff;
  padding: 0 10px;
  font-size: 20px;
  cursor: pointer;
  width: 5%;
  display: flex;
}

/*네비게이션 열렸을 때 Component내용*/
.contentNavOn{
  overflow: hidden;
  padding-left: 300px;
  padding-top: 50px;
  z-index: 3;
}
/*네비게이션 닫혔을 때 Component내용*/
.contentNavOff{
  overflow: hidden;
  padding-top: 50px;
  z-index: 3;
}


/* .menu_tab_line .menu_tab_buttons {
  width: 5%;
  padding-top: 2px;
  float: right;
  margin-right: 15%;

  display: flex;
} */
</style>
