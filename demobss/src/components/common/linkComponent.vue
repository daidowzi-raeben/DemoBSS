<template>
  <div>
    <a class="link" :href="destination" > {{ linkNm }}</a>
  </div>
</template>

<script>
export default {
props:{
  destination: String,
  linkNm:{
    type:String,
    default: "링크 이름" 
  },
  textsize: {
    type: String,
    default:'10pt'
  }
},
}
</script>

<style>
.link{
  font-size: v-bind('textsize');
  font-weight: normal ;
  cursor: pointer;
  }

.link:hover{
  color: blue;
  text-decoration: underline;
}

</style>
