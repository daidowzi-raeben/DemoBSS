<template>
  <form @submit.prevent="onSubmit">
    <!-- Email -->
    <div :class="{ error: v$.form.email.$errors.length }">
      <label-component label-nm="'Email'" />
      <input :class="{
        ch1 : v$.form.email.$errors.length ===0,
        ch2 : v$.form.email.$errors.length >0
      }" placeholder="Enter your username" type="email" v-model="v$.form.email.$model">
      <!-- error message -->
      <div v-for="(error, index) of v$.form.email.$errors" :key="index">
        <div>발생한 에러 : {{ error.$message }}</div>
      </div>
    </div>
    <p>- 입력여부 확인 및 이메일 형식 확인</p>
    <!-- password -->
    <div :class="{ error: v$.form.password.$errors.length }">
      <label-component label-nm="'Password'" />
      <input :class="{
        ch1 : v$.form.password.$errors.length ===0,
        ch2 : v$.form.password.$errors.length >0
      }" placeholder="Enter your password" type="password" v-model="v$.form.password.$model">

      <!-- error message -->
      <div v-for="(error, index) of v$.form.password.$errors" :key="index">
        <div>{{ error.$message }}</div>
      </div>
    </div>
    <p>- 입력여부 확인 및 최소 글자수 제한</p>
    <!-- Submit Button -->
    <div >
      <button :disabled="v$.form.$invalid" >Login</button>
    </div>
  </form>
  <p>- helpers.withMessage를 통한 에러 메세지 지정가능</p>
  <p>- 에러가 발생하면 입력 라인 red</p>
  <p>- 에러가 발생하게 되면 해당 에러는 v$.form.type(email or password).$erros에 들어간다.</p>
  <p>- 변수를 선언할때는 form 객체 안에 정의해야 한다.</p>
</template>

<script>
import useVuelidate from '@vuelidate/core'                                    
import {required, email, minLength, helpers} from '@vuelidate/validators'     // validators 문서 참고하여 형식 추가 가능 
import labelComponent from "@/components/common/LabelComponent";
export default {
  name: "ValidateExampleComponent",
  components:{
    labelComponent
  },
  setup(){
    return {v$: useVuelidate()}           // import한 컴포넌트 변수로 축약 
  },
  data(){
    return {
      form:{
        email :'',
        password : '',
      }
    }
  },
  validations(){
    return {
      form:{
        email:{     // data에서 선언한 변수  helpers.withMessage를 통한 에러 메세지 지정
          required:helpers.withMessage('필수사항으로 입력하셔야합니다.',required),    // validators에서 import한 email 에러 형식을 의미 
          email : helpers.withMessage('이메일형식이 아닙니다.',email)                 // validators에서 import한 email 에러 형식을 의미
        },
        password: {
          required:helpers.withMessage('필수사항으로 입력하셔야합니다.',required),
          minLength : helpers.withMessage('최소 글자수는 6자입니다.',minLength(6)),
        }
      }
    }
  }
}
</script>

<style scoped>
.ch1 {
  border-color :black;
}
.ch2 {
  border-color : red;
}
</style>