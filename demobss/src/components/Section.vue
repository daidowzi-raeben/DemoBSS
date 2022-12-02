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
              <span v-if="this.comp ===item.menuId" class="tab_x_on" @click.prevent.stop="DeleteComponent(index)"
              >x</span>
              <span v-else class="tab_x_off" @click.prevent.stop="DeleteComponent(index)"
              >x</span>
            </div>
          </div>
        </div>
        <div
            :class="{
            menuTabButtOff: navOn === false,
            menuTabButtOn: navOn === true,
          }"
            class="menu_tab_buttons">
          <button-component
            :btnClass="'btnLeftImgClass'"
            :btnHeight="'25px'"
            :btnwWidth="'25px'"
            @click="moveScrollLeft"
          />
          <button-component
            :btnClass="'btnRightImgClass'"
            :btnHeight="'25px'"
            :btnwWidth="'25px'"
            @click="moveScrollRight"
          />
          <button-component
            :btnClass="'btnDeleteImgClass'"
            :btnHeight="'20px'"
            :btnWidth="'30px'"
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
        <Suspense>
          <template #default>
        <component
          v-bind:is="this.compm2[index]"
          v-show="index === this.cur_num"
          :style=" navOn ? '' : 'margin-left:2%;' "

        ></component>
          </template>
          <template #fallback>
            <LoadingSpinnerComponent/>
          </template>
        </Suspense>
        <popup-component
        v-if="isModalShow"
        :popupOverlay="'maxTabOverlay'"
        @MaxTaNumnPopup="isModalShow = false"
        @AGREE = "''"
        :popupmsg="'10개를 초과하는 화면을 열 수 없습니다.'"
        />
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
import PopupComponent from './common/PopupComponent.vue';
import LoadingSpinnerComponent from "@/components/common/LoadingSpinnerComponent";

export default {
  name: "Section",
  components: {
    LoadingSpinnerComponent,
    // TitleArea,
    TitleArea2,
    Nav,
    ButtonComponent,
    PopupComponent,
  },
  data() {
    return {
      comp: "L01M01S01",
      cur_num: 0,
      compm: [
        {
          cmpnId: "Cus360",
          menuId: "L01M01S01",
          menuNm: "고객 360 View",
          upMenuId: "L01M01",
        },
      ],
      compm2: [],
      component: markRaw(
          defineAsyncComponent(() => import("../pages/Cus360.vue"))
      ),
      iconDelWhite:require("../img/icon_delete_white.png"),
      iconDelBlack:require("../img/icon_delete_black.png"),
      isModalShow :false,
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
    MaxTabNumPopup(){
      if (this.isModalShow == false) this.isModalShow = true
      else this.isModalShow = false
    },
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
      let component_length = this.compm.length;
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
    async AddComponent(param) {
      if(await param.cmpnId === "Login") 
      {this.$router.push("/login")
      }else{
        if (param.menuId != "" && param.menuId != null) {
          const st = this.compm.find( (element) => element.menuId === param.menuId);
          if (st != null) {
            let i = this.compm.indexOf(st);
            this.cur_num = i;
            } else {
              if (this.compm.length < 10) {
                this.compm.push(param);
                this.cur_num = this.compm.length - 1;
                this.component = markRaw(
                  defineAsyncComponent(() =>
                  import(`../pages/${this.compm[this.cur_num].cmpnId}.vue`))
                  );
                this.compm2.push(this.component);
                } else { this.MaxTabNumPopup();
                }
              }
        }
      }
    }
  },
};
</script>

<style scoped>
.menu_tab_line {
  padding-top: 17px;
  height: 30px;
  display: inline-flex;
  width: 100%;
  background-color: rgb(113,156,205);
  position: fixed;
  overflow: hidden;
  z-index: 3;
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
  padding-left: 258px;
  position: fixed;
  white-space: nowrap;
  flex-grow: 0;
  display: flex;
  z-index: 4;
}

div.tabon {
  /* 탭 선택되었을 때 */
  background-color: rgb(27,114,212);
  border-radius: 5px 5px 0 0;
  color: white;
}

div.taboff {
  /* 탭 선택x */
  background-color: rgb(184,208,235);
  border-right: rgb(113,156,205) 1px solid;
  color: black;
  border-radius: 5px 5px 0 0;
}
div.taboff:hover {
  background-color: rgb(204,228,250);
}
.menu_tab_line {
  height: 30px;
  display: inline-flex;
  width: 100%;
  background-color: rgb(113,156,205);
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
}
.menu_tab > span.tab_x_off {
  color: #444444;
  font-size: 14pt;
  float: right;
  width: 20px;
  text-align: right;
}
.menu_tab > span.tab_x_off:hover{
  color: white;
}
.menu_tab > span.tab_x_on {
  color: white;
  font-size: 14pt;
  float: right;
  width: 20px;
  text-align: right;
}

.menu_tab > span.tab_x_on:hover {
  color: black;
}
.menu_tab > span#tab_nm {
  display: block;
  float: left;
  width: 100px;
  font-size: 10pt;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  padding-left: 290px;
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
