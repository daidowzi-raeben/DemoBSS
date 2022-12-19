<template>
    <textarea
        name=""
        :rows="rows"
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
    rows:{
      type:Number,
      default:5,
    },
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
    }
  },
  computed:{
    isContentsValid(){  //최대 글자수 체크 관련 함수
      return this.contents.length < 100;
    }
  },
  methods:{

  },
  beforeUpdate() {
    this.value = this.contents;
  }

}
</script>

<style scoped>

textarea{
  width: 95%;
  height: v-bind('textAreaHeight');
  border: 1px solid rgb(239, 245, 252);
  resize: none;
}
</style>
