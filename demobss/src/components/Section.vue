<template>
  <section :style=" !this.navOn ? 'width:100%;' : 'width: calc(100% + 45px ); '" >
    <Nav v-show="navOn" @input="AddComponent" />
    <div class="wrap" :style=" navOn ? 'margin-left:245px;' : 'margin-left:10%;' ">
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
                >x</span
              >
            </div>
          </div>
        </div>
        <div class="menu_tab_buttons">
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
      <title-area :currentMenu="currentMenu" :style=" !this.navOn ? 'width:91%;':'' "/>

      <div
        v-for="(item, index) in compm2"
        :key="item"
        :class="{
          view_wrap_on: navOn,
          view_wrap_off: !navOn,
          view_wrap: true,
        }"
      >
        <component style="top:40px;"
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
import { defineAsyncComponent, markRaw } from "vue";
import ButtonComponent from "@/components/common/ButtonComponent.vue";

export default {
  name: "Section",
  components: {
    TitleArea,
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
      let menuTabScroll = document.querySelector(".menu_tab_line_detail_on");
      menuTabScroll.scrollLeft += 100;
    },
    moveScrollLeft: function () {
      let menuTabScroll = document.querySelector(".menu_tab_line_detail_on");
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
  position: fixed;
  display: inline-flex;
  width: 100%;
  background-color: #5ad3cd;
  z-index: 1;
  /* overflow-x: scroll; */
}

.menu_tab_line .menu_tab_line_detail {
  width: calc(100% - 70px);
  overflow: hidden;
  white-space: nowrap;
  display: flex;
}

.menu_tab_line .menu_tab_line_detail_on {
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
}

div.tabon {
  /* 탭 선택되었을 때 */
  background-color: #ffffff;
  color: #444444;
}

div.taboff {
  /* 탭 선택x */
  background-color: #707070;
  color: #aeaeae;
  border-right: #343434 solid 1px;
}


.menu_tab {
  float: left;
  width: 140px;
  height: 30px;
  padding: 0 10px;
  line-height: 30px;
  cursor: pointer;
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

.menu_tab_line .menu_tab_buttons {
  width: 5%;
  padding-top: 2px;
  float: right;
  margin-right: 15%;
  
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
</style>
