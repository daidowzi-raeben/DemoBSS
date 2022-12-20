<template>
  <div>
    <!-- popup이외 영역 , 팝업 이외 영역 클릭 시, 팝업 닫지 못하도록 클릭함수  -->
    <transition appear> <div class="cm_popup_overlay"></div> </transition>
    <!-- start : popup영역 출력 -->
    <div>
      <transition appear>
        <div class="formDataPopupFrame" v-if="reqtype == '1'">
          <h1>{{ PopupTitleMsg }}</h1>
          <!-- 팝업 메세지 내용 -->
          <article>
            <div class="formDataBind">
              <form>
                <table>
                  <tr v-for="item in OutputFormData" :key="item">
                    <th>
                                    {{ item.title }}
                    </th>
                    <td>
                      <input
                        v-if="item.value"
                        class="input1"
                        type="text"
                        :value="item.value"
                        disabled
                      />
                      <input
                        v-else
                        class="formInput"
                        type="text"
                        placeholder=" 입력해주세요"
                      />
                    </td>
                  </tr>
                </table>
              </form>
            </div>
            <!-- 취소가 있는 팝업 -->
            <div class="btn_area">
              <div>
                <!-- 팝업 메세지 -->
                {{ popupmsg }}
              </div>
              <button
                type="button"
                class="button_05"
                @click="[$emit('FormPopup', true), $emit('AGREE')]"
              >
                확인
                <!-- 확인을 누르면, emit으로 formpopup이라는 변수에다가 true라는 값을 전달하며, agree라는 함수도 호출 -->
              </button>
              &nbsp;&nbsp;
              <button
                type="button"
                class="button_04"
                @click="$emit('FormPopup')"
              >
                취소
              </button>
            </div>
          </article>
        </div>
      </transition>

      <transition appear>
        <div class="formDataPopupFrame" v-if="reqtype == '2'">
          <h1>
            {{ PopupTitleMsg }}
            <!-- <ButtonComponent @click="GetSubmitFormData" :btnClass="'btnclass2'" :btnName="'입력 형식 출력'" style=" float:right;"/> -->
          </h1>
          <!-- 팝업 메세지 내용 -->
          <article>
            <div class="formDataBind">
              <form>
                <table>
                  <tr v-for="item in SubmitFormData" :key="item">
                    <th>
                      {{ item.title }}
                    </th>
                    <td>
                      <input
                        class="formInput"
                        type="text"
                        placeholder=" 입력해주세요"
                      />
                    </td>
                  </tr>
                </table>
              </form>
            </div>
            <!-- 취소가 있는 팝업 -->
            <div class="btn_area">
              <div>
                <!-- 팝업 메세지 -->
                {{ popupmsg }}
              </div>
              <button
                type="button"
                class="button_05"
                @click="[$emit('FormPopup', true), $emit('AGREE')]"
              >
                확인
                <!-- 확인을 누르면, emit으로 formpopup이라는 변수에다가 true라는 값을 전달하며, agree라는 함수도 호출 -->
              </button>
              &nbsp;&nbsp;
              <button
                type="button"
                class="button_04"
                @click="$emit('FormPopup')"
              >
                취소
              </button>
            </div>
          </article>
        </div>
      </transition>

      <transition appear>
        <div class="formDataPopupFrame" v-if="reqtype == 'login'">
          <h1>{{ PopupTitleMsg }}</h1>
          <!-- 팝업 메세지 내용 -->
          <article>
            <div class="formDataBind">
              <form>
                <table v-if="formtype == 'id'">
                  <tr v-for="item in findIdFormData" :key="item">
                    <th>
                      {{ item.title }}
                    </th>
                    <td>
                      <input
                        class="formInput"
                        type="text"
                        :placeholder="item.title + '을(를) 입력해주세요'"
                      />
                    </td>
                  </tr>
                </table>

                <table v-if="formtype == 'pw'">
                  <tr v-for="item in findPwFormData" :key="item">
                    <th>
                      {{ item.title }}
                    </th>
                    <td>
                      <input
                        class="formInput"
                        type="text"
                        :placeholder="item.title + '을(를) 입력해주세요'"
                      />
                    </td>
                  </tr>
                </table>
              </form>
            </div>
            <!-- 취소가 있는 팝업 -->
            <div class="btn_area">
              <div>
                <!-- 팝업 메세지 -->
                {{ popupmsg }}
              </div>
              <button
                type="button"
                class="button_05"
                @click="[$emit('FormPopup', true), $emit('AGREE')]"
              >
                확인
                <!-- 확인을 누르면, emit으로 formpopup이라는 변수에다가 true라는 값을 전달하며, agree라는 함수도 호출 -->
              </button>
              &nbsp;&nbsp;
              <button
                type="button"
                class="button_04"
                @click="$emit('FormPopup')"
              >
                취소
              </button>
            </div>
          </article>
        </div>
      </transition>
    </div>
    <!-- end : popup영역 -->
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";
export default {
  components: { ButtonComponent },
  name: "CommonPopup",
  data() {
    return {
      OutputFormData: [],
      SubmitFormData: [],
      findIdFormData: [],
      findPwFormData: [],
      col_1: "8.33%",
      col_2: "16.66%",
      col_3: "25%",
      col_4: "33.33%",
      col_5: "41.66%",
      col_6: "50%",
      col_7: "58.33%",
      col_8: "66.66%",
      col_9: "75%",
      col_10: "83.33%",
      col_11: "91.66%",
      col_12: "100%",
    };
  },
  props: {
    formtype: String,
    reqtype: String,
    popupmsg: String,
    PopupTitleMsg: {
      type: String,
      default: "팝업 입니다.",
    },
    formDataPopupFrameWidth: {
      type: String,
      default: "1000px",
    },
    formDataPopupFrameHeight: {
      type: String,
      default: "500px",
    },
  },
  computed: {},
  async beforeMount() {
    await this.axios.get("/formDataFormat.json").then((response) => {
      this.OutputFormData = response.data.OutputFormData;
    });
    await this.axios.get("/formDataFormat.json").then((response) => {
      this.SubmitFormData = response.data.SubmitFormData;
    });
    await this.axios.get("/formDataFormat.json").then((response) => {
      this.findIdFormData = response.data.findIdFormData;
    });
    await this.axios.get("/formDataFormat.json").then((response) => {
      this.findPwFormData = response.data.findPwFormData;
    });
  },
  methods: {
    // async GetOutputFormData(){
    //   await this.axios.get('/submit.json').then((response) => {
    //     this.OutputFormData = response.data.OutputFormData
    //   })
    // },
    // async GetSubmitFormData(){
    //   await this.axios.get('/submit.json').then((response) => {
    //     this.SubmitFormData = response.data.SubmitFormData
    //   })
    // }
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.cm_popup_overlay {
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  cursor: default;
  left: 0;
  opacity: 30%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 6;
  transition: opacity 0.5s;
}

.formDataPopupFrame {
  width: v-bind("formDataPopupFrameWidth");
  height: auto;
  background-color: #fff;
  border: 1px solid #656565;
  display: grid;
  left: 50%;
  padding: 26px;
  position: fixed;
  top: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s, top 0.5s;
}

.formDataPopupFrame > h1 {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 13px;
  border-bottom: #e4e4e4 solid 2px;
  margin-bottom: 20px;
}

.formDataPopupFrame > article {
  padding: 0 15px;
}

.formDataBind table {
  border: 2px groove black;
  width: 100%;
}
.formDataBind tr > th {
  background-color: #f9f9f9;
  border-style: groove;
  width: v-bind(col_2);
  height: 32px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.formDataBind tr > td > .input1 {
  border: groove;
  background-color: whitesmoke;
  width: v-bind(col_12);
  height: 32px;
  font-size: 12px;
}
.formDataBind tr > td > .formInput {
  border: groove;
  background-color: blanchedalmond;
  width: v-bind(col_12);
  height: 32px;
  font-size: 12px;
}

.formDataBind tr > td > .formInput:hover {
  border: groove;
  background-color: rgb(255, 205, 215);
  width: v-bind(col_12);
  height: 32px;
  font-size: 12px;
}

.formDataPopupFrame .btn_area {
  text-align: center;
  margin: 20px 0 0 0;
}

.formDataPopupFrame .btn_area > div {
  font-size: 20px;
  margin-bottom: 10px;
}

.button_04 {
  display: inline-block;
  color: #fff;
  padding: 0 25px 2px 25px;
  height: 34px;
  line-height: 32px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  background-color: #5e5e5e;
}

.button_05 {
  display: inline-block;
  color: #fff;
  padding: 0 25px 2px 25px;
  height: 34px;
  line-height: 32px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  background-color: #ed1820;
}
</style>
