<template>
  <div class="textAreaDiv">
    <textarea
        id="contents"
        rows=":5"
        placeholder="내용을 입력해주세요"
        v-model="contents"
      :maxlength="10"
    />
    <p v-if="!isContentsValid">글자수가 최대입니다.</p>
  </div>
</template>

<script>
export default {
  name: "TextAreaComponent",
  data(){
    return{
      contents:"",
    }
  },
  computed:{
    isContentsValid(){  //최대 글자수 체크 관련 함수
      return this.contents.length < 10;
    }
  },
  methods:{

  }

}
</script>

<style scoped>
.textAreaDiv{
  width: 1000px;
  height: 500px;
}
textarea{
  width: 100%;
  height: 6.25em;
  border: 1px solid;
  resize: none;
}
</style>