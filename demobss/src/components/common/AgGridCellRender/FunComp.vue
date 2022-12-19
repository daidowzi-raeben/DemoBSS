<template>
  <div @click="Click()">
    <img :src="close" v-if="expend"/>
    <img :src="open" v-if="!expend"/>
    <span>설치비</span>
  </div>
</template>

<script>
export default {
  name: "FunComp",
  // setup(props){    //props로 후처리 할때
  //   console.log(props.params.value);
  //   console.log(11);
  // },
  data(){
    return{
      expend : {
        type:Boolean,
        default : true
      },
      close : require("../../../img/icon_minus_2.png"),
      open : require("../../../img/icon_plus_2.png"),
    }
  },

  methods:{
    Click(){
      this.params.clicked(this.params.value);
      if(this.expend==true)this.expend=false;
      else this.expend = true;
    }
  }
}
</script>

<style scoped>
img {
  padding-top: 10px;
  width:20px;
  height:15px;
  object-fit: contain
}
</style>