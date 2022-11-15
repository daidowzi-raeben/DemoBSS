<template>
  <div class="wrap">
    <div class="menu_tab_line">
      <div class="menu_tab_line_detail">
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
            <span class="tab_x" @click.prevent.stop="DeleteComponent(index)">X</span>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(item, index) in compm2" :key="item" class="view_wrap">
      <component
          v-bind:is="this.compm2[index]"
          v-show="index === this.cur_num"
          @input="AddComponent"
      ></component>
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent, markRaw} from "vue";
export default {
  name: "ContSection",
  data() {
    return {
      comp: "cont_01_01_01",
      cur_num: 0,
      compm: [
        {
          "menuId": "cont_01_01_01",
          "menuNm": "계약상세",
          "upMenuId": "cont_01_01",
          "cmpnId": "ContMgt"
        },
      ],
      compm2: [],
      test: "ChageInfoRetv",
      component: markRaw(
          defineAsyncComponent(() => import("../components/Cont/ContMgt.vue")),
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
.menu_tab_line .menu_tab_line_detail {
  width: 94%;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
}

.menu_tab_line .menu_tab_line_detail_on {
  width: 81%;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
}

div.tabon {
  /* 탭 선택되었을 때 */
  background-color: #ffffff;
  border-style: ridge;
  color: #444444;
  font-weight: bold;
}

div.taboff {
  /* 탭 선택x */
  background-color: #707070;
  color: #aeaeae;
  border-style: ridge;
  border-right: #343434 solid 1px;
}

.menu_tab_line {
  height: 25px;
  display: inline-flex;
  width: 100%;
}

.menu_tab {
  float: left;
  width: 120px;
  height: inherit;
  padding: 0px 5px;
  line-height: 30px;
  cursor: pointer;
}

.menu_tab > span#tab_nm {
  display: block;
  float: left;
  width: calc(100% - 10px );
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

.menu_tab > span.tab_x {
  color: #aeaeae;
  font-size: 15px;
  float: right;
}

.menu_tab_line .menu_tab_buttons {
  width: 5%;
  padding-top: 2px;
  float: right;
  display: flex;
}

.menu_tab_line .menu_button {
  float: right;
  color: #ffffff;
  /* padding: 0 10px; */
  font-size: 20px;
  cursor: pointer;
  width: 5%;
  display: flex;
}
</style>