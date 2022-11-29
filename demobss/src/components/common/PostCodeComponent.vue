<template>
  <transition appear> <div class="cm_popup_overlay" ></div> </transition>   <!-- 오버레이 -->

  <div class="searchPostCode">
    <transition appear>
      <div class="formDataPopupFrame" >
        <h1>{{ PopupTitleMsg }} </h1>
        <!-- 팝업 메세지 내용 -->
        <article>
          <div class="formDataBind" >
            <form>
              <label for=""> 주소 : </label>
              <input-component
              :inputClass="'class1'"
              :width="'320'"
              :height="'35'"
              :placeholder="'주소를 입력해 주세요.'"
              />

              <button-component
              :btnClass="'btnclass3'"
              :btnName="'검색'"
              style="width:50px; height:40px;"
              @click="getPostCode()" />

              <table v-if="postCodeSearchData.length>0">
                <tr>
                  <th style="width:10%;">우편번호 </th>
                  <th style="width:30%;">도로명주소  </th>
                  <th style="width:30%;">지번주소</th>
                  <th style="width:10%;">상세주소</th>
                  <th style="width:5%;">선택</th>
                </tr>
                <tr v-for="(item) in currentFivePostCodeSearchData" :key="item">
                  <td>{{item.zipNo}}</td>
                  <td> {{item.roadAddr}} </td>
                  <td> {{item.jibunAddr}}</td>
                  <td> <InputComponent
                  v-model="detailPostAddress"/></td>
                  <td> 
                  <button-component
                  :btnClass="'btnclass3'"
                  :btnName="'선택'"
                  style="width:100%; height:100%;"
                  @click="selectPostCode(item,detailPostAddress)"
                  />
                  </td>
                </tr>
              </table>
              
            <div style="text-align:center; font-size:20px;"> 
              <paging-area 
              v-if="postCodeNums>0"
              :pageableData="pageableData"
              :pageSize="5"
              @currentPage="(value) => {currentPage = value;}"
              />
            </div>
            </form>
          </div>
          <!-- 확인/취소 영역 -->
          <div class="btn_area" >
            <div> {{popupmsg}} </div>  <!-- 팝업 메세지 -->
            
            <button
              type="button"
              class="button_05"
              @click="[$emit('FormPopup', true), $emit('AGREE')]"  
            >확인 
            </button> <!-- 확인을 누르면, emit으로 formpopup이라는 변수에다가 true라는 값을 전달하며, agree라는 함수도 호출 -->
            &nbsp;&nbsp;
            <button
              type="button"
              class="button_04"
              @click="$emit('FormPopup')"
            >취소
            </button>
          </div>
        </article>
      </div>
    </transition>


  </div>


</template>

<script>
import { computed } from '@vue/runtime-core';
import ButtonComponent from './ButtonComponent.vue';
import InputComponent from './InputComponent.vue';
import PagingArea from './PagingArea.vue';
import RadioComponent from './RadioComponent.vue';

export default {
  components: { ButtonComponent, InputComponent, RadioComponent, PagingArea },
  name: "CommonPopup",
  data() {
    return {
      postCodeSearchData:[],
      col_1 : '8.33%',
      col_2 : '16.66%',
      detailPostAddress:'',
      currentPage:'',    // 현재 페이지
      postCodeNums:0,   // 주소 개수
      pageableData : {
        pageNumber: 1,
        currentMinPage: 1,
        currentMaxPage: 5,
        totalPages: 0,
      },
      currentFivePostCodeSearchData:[],
    };
  },
  props: {
    reqtype  : String,
    popupmsg : String,
    PopupTitleMsg : {
      type: String,
      default : '팝업 입니다.'
    },
    formDataPopupFrameWidth:{
      type:String,
      default:'1000px'
  },
    formDataPopupFrameHeight:{
      type:String,
      default:'500px'
  },
  },
  watch:{
    currentPage(newData, oldData){
      this.currentFivePostCodeSearchData = this.postCodeSearchData.slice((newData-1)*5 , ((newData-1)*5)+5)
    }
  },
  beforeMount(){
  },
  methods:{
    async getPostCode(){
      await this.axios.get('/postCodeEx.json').then((response) => {
        this.postCodeSearchData = response.data.results.juso
      this.postCodeNums = this.postCodeSearchData.length;     // 주소 개수
      if (this.postCodeNums >0) this.currentPage =1 
      if(this.postCodeNums > 5) {
        this.pageableData.totalPages = parseInt(this.postCodeNums/5)
        if(this.postCodeNums%5 > 0) this.pageableData.totalPages +=1
      }
      })
    },
    // 주소 선택 시, 부모 컴포넌트에 해당 주소 객체 보냄
    selectPostCode(postCode, detailPostAddress){     
      this.$emit('selectedJusoData',postCode,detailPostAddress);
    },
  },
  computed(){
  },
}
</script>

<style>
.cm_popup_overlay {
  background-color: rgba(0, 0, 0, 0.6);
  cursor: default;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  opacity: 30%;
  position: fixed;
  z-index: 6;
  transition: opacity 0.5s;
}

.formDataPopupFrame {
  width: v-bind('formDataPopupFrameWidth');
  height:auto;
  background-color: #fff;
  border: 1px solid #656565;
  display: grid;
  left: 50%;
  padding: 26px;
  position: fixed;
  top: 40%;
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

.formDataBind table  {
  border: 2px groove black ; 
  width: 100%;
}
.formDataBind tr > th  {
  background-color: #f9f9f9;
  border-style: groove;
  width: v-bind(col_2);
  height: 32px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}
.formDataBind tr > td{
  border: groove; 
  background-color: blanchedalmond;
  width: v-bind(col_1);
  font-size: 12px;
}

.formDataPopupFrame .btn_area {
  text-align: center;
  margin: 20px 0 0 0;
}

.formDataPopupFrame .btn_area > div {
  font-size:20px; 
  margin-bottom:10px;
}

.button_04 {
  font-family: 맑은 고딕;
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
  font-family: 맑은 고딕;
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