<template>
  <article class="HoliAdmView">
    <div class="item"> <!--1번 -->
      <div class="holiSearch">
        <table>
          <tr>
            <th><label-component :labelNm="'조회년월'" /></th>
            <td>
             <date-picker-component
                 :classWrapper="'calender_input'"
                 :width="'200px'"
                 :height="'28px'"
                 :type="'month'"
                 :dateFormat="'yyyy-MM'"
                 :pDate="selectValues.holiStDt"
                 @emitValue="
              (value) => {
                selectValues.holiStDt = value;
              }
            "
               />
            </td>
            <td>~</td>
            <td>
              <date-picker-component
                  :classWrapper="'calender_input'"
                  :width="'200px'"
                  :height="'28px'"
                  :type="'month'"
                  :dateFormat="'yyyy-MM'"
                  :pDate="selectValues.holiEndDt"
                  @emitValue="
              (value) => {
                selectValues.holiEndDt = value;
              }
            "
              />
            </td>
            <td class="emptyBox1"></td>
            <th><label-component :labelNm="'휴일여부'" /></th>
            <td>
              <select-box-component
                  style="height: 28px"
                   
                  :width="'200px'"
                  :cdGroup="'holiYn'"
                  :defaultValue="'휴일여부 선택'"
                  :isDisabled="true"
                  :selectedValue="selectValues.holiYn"
                  @emitValue="(value) => {selectValues.holiYn = value;}"
              />
            </td>
            <td class="emptyBox2"></td>

            <td class="btnBox">
              <button-component
                  :btn-class="'btnClass4'"
                  :btnFontWeight="'bold'"
                  :btn-name="'검색'"
                  :btnHeight="'28px'"
                  :btnWidth="'78px'"
                  @click="search"
              />
            </td>
          </tr>

          <tr>
            <th><label-component :labelNm="'휴일구분'" /></th>
            <td>
              <select-box-component
                  style="height: 28px"
                   
                  :width="'200px'"
                  :cdGroup="'holiDiv'"
                  :defaultValue="'휴일구분 선택'"
                  :isDisabled="true"
                  :selectedValue="selectValues.holiDiv"
                  @emitValue="(value) => {selectValues.holiDiv = value;}"
              />
            </td>

            <td colspan="6"></td>
            <td>
              <button-component
                  :btnClass="'btnClass2'"
                  :btnHeight="'28px'"
                  :btnWidth="'78px'"
                  :btnFontWeight="'bold'"
                  :btnName="'초기화'"
                  @click="reset"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="item"> <!--2번 -->
      <div style="width: 100%">
        <subInfoTitle :subInfoTitleNm="'휴일 리스트'"/>
        <p style="margin-left:5px; display:inline-block;">(총 <label style="font-weight: bold">{{ total }}</label>건)</p>

        <span style="float: right">
      <buttonComponent
          :btnClass="'btnClass3'"
          :btnName="'엑셀다운로드'"
          :btnWidth="'auto'"
      />
        </span>
        <span style="float: right">
      <buttonComponent
          :btnClass="'btnClass4'"
          :btnName="'변경'"
          :btnWidth="'100px'"
          @click="isModalChgShow=true"
      />
        </span>
      </div>
      <div class="ag-grid_sp">
        <ag-grid-component
            :header-color="'rgb(239 245 252)'"
            :rowData="holiRowData"
            :columnDefs="holiColumnDefs"
            :row-height="40"
            :isWidthFit="false"
            :overlayNoRowsTemplate="
          `<span> <br>` + '<br />조회 결과가 없습니다.' + ` </span>`
          "
        />
      </div>
    </div>
    <div class="item"> <!--3번 -->
      <div style="width: 100%">
        <subInfoTitle :subInfoTitleNm="'달력생성'"/>

        <span style="float: right">
      <buttonComponent
          :btnClass="'btnClass4'"
          :btnName="'달력생성'"
          :btnWidth="'100px'"
          @click="isModalCretShow=true"
      />
        </span>
      </div>
      <table class="cretTable">
        <tr>
        <th><label-component :labelNm="'조회년월'" /></th>
        <td>
          <date-picker-component
              :classWrapper="'calender_input'"
              :width="'100px'"
              :type="'year'"
              :date-format="'yyyy년'"
              :pDate="holiAdmObject.caldrStDt"
              @emitValue="
              (value) => {
                holiAdmObject.caldrStDt = value;
              }
            "
          />
        </td>
        <td>~</td>
        <td>
          <date-picker-component
              :classWrapper="'calender_input'"
              :width="'100px'"
              :type="'year'"
              :date-format="'yyyy년'"
              :pDate="holiAdmObject.caldrEndDt"
              @emitValue="
              (value) => {
                holiAdmObject.caldrEndDt = value;
              }
            "
          />
        </td>
        </tr>
      </table>
    </div>
    <popup-component
        v-if="isModalChgShow"
        @popup="isModalChgShow = false"
        @AGREE = "''"
        :popupmsg="'변경하시겠습니까?'"
    />
    <popup-component
        v-if="isModalCretShow"
        @popup="isModalCretShow = false"
        @AGREE = "''"
        :popupmsg="'생성하시겠습니까?'"
    />
  </article>
</template>

<script>
import agGridComponent from "@/components/common/AgGridComponent";
import datePickerComponent from "@/components/common/DatePickerComponent";
import selectBoxComponent from "@/components/common/SelectBoxComponent";
import buttonComponent from "@/components/common/ButtonComponent";
import subInfoTitle from "@/components/common/SubInfoTitle";
import labelComponent from "@/components/common/LabelComponent";
import popupComponent from "@/components/common/PopupComponent";
import HoliDiv from "@/components/common/AgGridCellRender/HoliDiv";
import HoliDesc from "@/components/common/AgGridCellRender/HoliDesc";
import ApiMixin from "@/service/common";

export default {
  mixins:[ApiMixin],
  name: "HoliAdm",
  components:{
    agGridComponent,
    labelComponent,
    popupComponent,
    datePickerComponent,
    selectBoxComponent,
    buttonComponent,
    subInfoTitle,
    HoliDiv,          //Ag Grid CellRender
    HoliDesc          //Ag Grid CellRender
  },
  data(){
    return{
      holiRowData:[],
      holiColumnDefs:[
        {headerName:"일자" , field:"model1",
          cellStyle:function (params){
            if(params.data.model2==='일요일' || params.data.model2==='토요일')
              return {color: 'red'};
          },
          width:100
        },
        {headerName:"요일" , field:"model2",
          cellStyle:function (params){
            if(params.data.model2==='일요일' || params.data.model2==='토요일')
              return {color: 'red'};
          },
          width: 80
        },
        {headerName:"휴일 구분" , field:"model3",
          cellRenderer :'HoliDiv',
          cellRendererParams: {   //휴일 선택에 대한 반환값
            clicked: function (field) {
              console.log(field);
            }
          },
          width: 220
        },
        {headerName:"휴일 설명" , field:"model4",
          cellRenderer :'HoliDesc',
          cellRendererParams: {   //휴일입력 대한 반환값
            clicked: function (field) {
              console.log(field);
            }
          },
          width: 200
        },
      ],
      selectValues: {     //휴일 검색 탭
        holiYn: null,        //휴일 여부
        holiDiv: null,      //휴일 구분
        holiStDt: null,   //조회시작년월
        holiEndDt: null,   //조회종료년월
      },


      isModalChgShow:false, //변경팝업
      isModalCretShow:false, //생성팝업

      holiAdmObject: {
        caldrStDt: new Date(),  //달력시작년
        caldrEndDt: new Date()   //달력종료년
      }
    }
  },
  methods:{
    reset(){
      this.selectValues.holiYn="";
      this.selectValues.holiDiv="";
      let date = new Date();
      date.setMonth(date.getMonth() -1);
      this.selectValues.holiStDt=date;
      this.selectValues.holiEndDt=new Date();
    },
    search(){
      this.$connect('application/json','/info','get','').then((res)=>{
        this.holiRowData = res.data.holiRowData;
      })
    }
  },
  async beforeMount() {
    await this.$connect('application/json','/info','get','').then((res)=>{
        this.holiRowData = res.data.holiRowData;
    })
    let date = new Date();
    date.setMonth(date.getMonth() -1);
    this.selectValues.holiStDt=date;
    this.selectValues.holiEndDt=new Date();

  }
}
</script>

<style scoped>
.HoliAdmView{
  display: grid;
  grid-template-columns: 790px minmax(790px,1fr);
  grid-template-rows: 100px minmax(640px, 1fr);
  gap: 20px 20px;
}

.HoliAdmView > .item:nth-child(1) {
  grid-column: 1/3;
  grid-row: 1;
}
.HoliAdmView > .item:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}
.HoliAdmView > .item:nth-child(3) {
  grid-column: 2;
  grid-row: 2;
}
.holiSearch {
  width: 100%;
  padding-left: 10px;
  background-color: rgb(239, 245, 252);
  height: 100%;
}
table {
  padding: 10px;
}
table > tr {
  height: 35px;
}
table > tr > th {
  margin-left: 10px;
  width: 60px;
  text-align: center;
}
.emptyBox1 {
  width: 370px;
}
.emptyBox2 {
  width: 370px;
}
.btnBox {
  width: 80px;
}
.ag-grid_sp{
  /* margin: 10px; */
  width: 100%;
  height: 600px;
}
.cretTable{
  padding :0
}
.cretTable > tr{
  height: 35px;
}
.cretTable > tr > th{
  padding-left: 10px;
  width: 200px;
  text-align: left;
  background-color: rgb(239 245 252);
}
.cretTable > tr > td {
  justify-content: center;
}
</style>