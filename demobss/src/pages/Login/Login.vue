<template>

</template>

<script>
<<<<<<< Updated upstream
=======
import CheckBoxComponent from '@/components/common/ChkBoxComponent.vue'
import linkComponent from '@/components/common/linkComponent.vue'
import ButtonComponent from '@/components/common/ButtonComponent.vue'
>>>>>>> Stashed changes
import ApiMixin from "@/service/common.js";

export default {
  mixins: [ApiMixin],
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      userId: "",
      userPwd: "",
      captchaText: "",
      idMem: false, //아이디 기억하기
      isModalShow: false, //공통팝업
      isFindIdModalShow: false, //아이디찾기 팝업
      isChangePwdModalShow: false,  //비밀번호 변경 팝업
      isOtpModalShow: false,  //OTP 팝업
      isPwdModalShow: false, //비밀번호 만료시 변경 팝업
      captchaImage: "",
      popupMsg: null,
      firstUser:false,
    }
  },
  mounted() {
    if (this.$cookies.isKey("userId")) {
      //아이디 기억 셋팅
      this.userId = this.$cookies.get("userId");
      this.idMem = true;
    }
    this.captchaRefresh();
  },
  methods: {
    check() {
      if (this.userId == "") {
        this.isModalShow = true;
        this.popupMsg = {
          title: "아이디 미입력",
          contents: "아이디를 입력해주세요.",
        };
        return false;
      }//아이디 입력 체크
      if (this.userPwd == "") {
        this.isModalShow = true;
        this.popupMsg = {
          title: "비밀번호 미입력",
          contents: "비밀번호를 입력해주세요.",
        };
        return false;
      } //비밀번호 입력 체크
      if (this.captchaText == "") {
        this.isModalShow = true;
        this.popupMsg = {
          title: "확인 코드 미입력",
          contents: "확인 코드를 입력해주세요.",
        };
        return false;
      } //캡차 입력 체크
      return true;
    },
    login(){
      if(!this.check())return; //입력체크

      if(this.idMem){
        this.$cookies.set("userId", this.userId); //쿠키에 아이디 저장
      }else{
        //아이디 기억하기 체크해제 시 쿠키 삭제
        this.$cookies.remove("userId");
      }

      this.$connect('application/json','/info.json','get','')
          .then((res)=>{

          }).catch((error)=>{
        console.log("에러가 발생하였습니다.", error);
      });
    },
    async getUserData(){
      this.$connect()
          .then((response)=>{
            if(response.data.data != null){
              //vuex에 유저 정보 데이터 저장
            }
          }).catch((error)=>{
        console.log("에러가 발생하였습니다.", error);
      });
    },
    closeOtpModal(otpCheck){
      this.isOtpModalShow = false;
      if(otpCheck != false){
        this.moveToMain(otpCheck);
      }
    },
    closePwdModal(otpCheck){
      this.isPwdModalShow = false; //비밀번호 변경팝업 닫기
      this.firstUser = false;
      if(otpCheck == "SUCCESS_LOGIN_USE_OTP"){
        this.isOtpModalShow = true; //OTP 팝업 열기
      }else if(otpCheck != false){
        this.moveToMain(otpCheck);
      }
    },
    moveToMain(token){

      if (this.$route.query.redirect) {
        //이전 페이지로 리다이렉트
        this.$router.push(this.$route.query.redirect).catch((error) => {
          console.info(error.message);
        });
      } else {
        this.$router.push("/").catch((error) => {
          console.info(error.message);
        });
      }
    },
    captchaRefresh() {
      //캡챠 불러오기
      this.$connect()
          .then((response) => {
            let blob = new Blob([response.data], {
              type: response.headers["content-type"],
            });
            this.captchaImage = window.URL.createObjectURL(blob);
            this.captchaText = "";
          })
          .catch((error) => {
            console.log("에러가 발생하였습니다.", error);
          });
    },
    captchaVoice() {  //캡챠 음성 출력
      this.$connect()
          .then((response) => {
            let blob = new Blob([response.data], {
              type: "audio/wave",
            });
            var url = window.URL.createObjectURL(blob);
            // console.log(url);
            var audio = new Audio(url);
            audio.play();
          })
          .catch((error) => {
            console.log("에러가 발생하였습니다.", error);
          });
    },
    showCommonPop(str) {
      this.isModalShow = true;
      this.popupMsg = {
        title: "임시",
        contents: str,
      };
      return;
    },
  }
}

</script>

<style scoped>

</style>