<template>
  <form @submit.prevent="onSubmit">
    <!-- Email -->
    <div class="form-group" :class="{ error: v$.form.email.$errors.length }">
      <label for="">Email</label>
      <input class="form-control" placeholder="Enter your username" type="email" v-model="v$.form.email.$model">
      <div class="pre-icon os-icon os-icon-user-male-circle"></div>
      <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <!-- password -->
    <div class="form-group" :class="{ error: v$.form.password.$errors.length }">
      <label for="">Password</label>
      <input :class="{
        ch1 : v$.form.password.$errors.length ===0,
        ch2 : v$.form.password.$errors.length >0
      }" placeholder="Enter your password" type="password" v-model="v$.form.password.$model">

      <div class="pre-icon os-icon os-icon-fingerprint"></div>
      <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.form.password.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="buttons-w">
      <button :disabled="v$.form.$invalid" class="btn btn-primary">Login</button>
    </div>

  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {required, email, minLength, helpers} from '@vuelidate/validators'

export default {
  name: "ValidateExampleComponent",
  setup(){
    return {v$: useVuelidate()}
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
        email:{
          required:helpers.withMessage('입력하슈',required),
          email : helpers.withMessage('이메일로 입력',email)
        },
        password: {
          required,
          minLength : helpers.withMessage('최소 6자이상',minLength(6)),
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