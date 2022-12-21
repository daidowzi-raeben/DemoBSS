<template>
  <textarea
  name=""
  :placeholder="placeholder"
  v-model="value"
  :maxlength="maxlength"
  />
</template>

<script>
export default {
  name: "TextAreaComponent",
  data(){
    return{
      value:""
    }
  },
  props:{
    contents:String,
    placeholder:{
      type:String,
      default:"내용을 입력해주세요."
    },
    maxlength:{
      type:Number,
      default:100,
    },
    textAreaHeight:{
      type:String,
      default: '80%'
    },textAreaWidth:{
      type:String,
      default:'95%'
    }
  },
  computed:{
    isContentsValid(){  //최대 글자수 체크 관련 함수
      return this.contents.length < this.maxlength;
    }
  },
  beforeMount() {                 // 기본 값이 있을 때, 출력
    this.value = this.contents;
  },
  beforeUpdate() {                // 변경 값이 있을 때, 해당 값 출력
    this.value = this.contents;
  }

}
</script>

<style scoped>

textarea{
  width:  v-bind("textAreaWidth");
  height: v-bind("textAreaHeight");
  border: 1px solid #e4e4e4;
  resize: none;
}
</style>
