<template>
  <div class="container">
    <header class="loginHeader">
      <div style="display:inline-block;">
        <a><img style="width:100px;  " src="../../img/logo_login.png" /></a>
      </div>
      <span style="font-size:20px; margin-left:90px; font-weight:bold;">kt cloud 영업전산 로그인 </span>
    </header>

    <div class="loginImg">
      <p style=" text-align : center; line-height : 200px;  color:white;">  고객의 클라우드를 책임지는 kt 클라우드</p>
    </div>

    <div class="loginWrap">
      <div class="loginBox">
        <div> 
          <img src="../../img/login_word.png" alt="로그인 글자">   
          <img class="loginIcon" src="../../img/icon_login.png" alt="login icon">  
        </div>
        <div> 
          <input type="text" placeholder="아이디를 입력해주세요.">  
        </div>
        <div> 
          <input type="text" placeholder="비밀번호를 입력해주세요.">
        </div>

        <div> 
          <span>
            <check-box-component
            :CheckOptions="['아이디기억']"
            :showCheckOpt="false"
            :checkTextSize="'10pt'"
            :checkBoxSize="'20px'"
            />  </span>
          <span>
            <linkComponent 
            :linkName="'아이디 찾기'"
            :destination="'/'" /> 
          </span>
          <span>
            <linkComponent 
            :linkName="'비밀번호 찾기'"
            :destination="'/'" /> 
          </span> 
        </div>  

        <div> 
            <img class="captcha" src="../../img/sample_captch.png" alt="captcha">
          <input class="solve_captcha" type="text" placeholder="보안문자">
          <img class="icon1" src="../../img/icon_recursive.png" alt="재시도">
          <img class="icon2" src="../../img/icon_voice2.jpg" alt="청취">
        </div>

        <div>
          <button-component class="loginCheck" :btnName="'확인'" /> 
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import CheckBoxComponent from '@/components/common/CheckBoxComponent.vue'
import linkComponent from '@/components/common/linkComponent.vue'
import ButtonComponent from '@/components/common/ButtonComponent.vue'

export default {
  components:{
    CheckBoxComponent,
    linkComponent,
    ButtonComponent,
  },
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display:grid;
  grid-template-columns: minmax(0px, 15%) minmax(600px,40%) minmax(500px,30%) minmax(0px, 15%) ;
  grid-template-rows: 120px 36px 500px minmax(70px, 1fr);
}
.loginHeader{
  grid-column: 2/3;
  grid-row: 2/3 ;
  overflow: hidden;
}
.loginImg{
  grid-column: 2/3;
  grid-row: 3 ;
  overflow: hidden;
  background-image: url('../../img/login.png'); 
  background-size:     cover;                  
  background-repeat:   no-repeat;
  background-position: center center;
}
.loginWrap{
  grid-column: 3/4;
  grid-row: 3 ;
  z-index: 6;
  border: 1px solid black;
  display:grid;
}
.loginBox{
  width: 80%;
  height: 80%;
  margin: 10%;

  /* 해당 box 안에 그리드 지정하여 로그인 폼 만듦 */
  display: grid;
  grid-template-columns: 33% 34% 33%;
  grid-template-rows: 18% 13% 13% 10% 15% 8% 15% minmax(5%,1fr) ;
}

.loginBox > div:nth-child(1){
  grid-row: 1;
  grid-column: 1/4;
  width: 100%;
}

.loginBox > div:nth-child(1) > img:nth-child(1){
  float: left;
  height: 50px;
  padding: 10px 30px;
}
.loginBox > div:nth-child(1) > .loginIcon{
  float: right;
  height: 60px;
  padding: 10px 30px;
}

.loginBox > div:nth-child(2){
  grid-column: 1/4;
  grid-row: 2;
  padding: 10px 30px;
}
.loginBox > div:nth-child(2) > input{
  width: 100%;
  height: 100%;
}

.loginBox > div:nth-child(3){
  grid-column: 1/4;
  grid-row: 3;
  padding: 10px 30px;
}
.loginBox > div:nth-child(3) > input{
  width: 100%;
  height: 100%;
}

.loginBox > div:nth-child(4) {
  grid-column: 1/4;
  grid-row: 4;
  padding: 0px 30px;
  display: grid;
  grid-template-columns: 30% 22% 24% 26%;
}
.loginBox > div:nth-child(4) > span:nth-child(1) {
  grid-column: 1;
}
.loginBox > div:nth-child(4) > span:nth-child(2) {
  text-align: center;
  grid-column: 3;
}
.loginBox > div:nth-child(4) > span:nth-child(3) {
  text-align: right;
  grid-column: 4;
}

.loginBox > div:nth-child(5){
  grid-row: 5;
  grid-column: 1/4;
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.loginBox > div:nth-child(5) > .captcha{
  width: 35%;
  height: 70%;
}
.loginBox > div:nth-child(5) > .solve_captcha{
  height: 70%;
  width: 35%;
}
.loginBox > div:nth-child(5) > .icon1{
  width: 10%;
  height: 50%;
  border-radius: 50px;
  cursor: pointer;
}
.loginBox > div:nth-child(5) > .icon2{
  width: 10%;
  height: 50%;
  border-radius: 50px;
  cursor: pointer;
}

.loginBox > div:nth-child(6){
  grid-row: 7;
  grid-column: 1/4;
  padding: 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginBox > div:nth-child(6) > .loginCheck{
  width: 100%;
  height: 100%;
  border-radius: 60px;
  text-align: center;
  align-items: center;
  background-color: rgb(4, 163, 187);
  color: black;
  cursor:pointer;
  border: none;
  z-index: 10;
}
.loginBox > div:nth-child(6) > .loginCheck:hover {
  background-color: #82b1ff;
}
</style>