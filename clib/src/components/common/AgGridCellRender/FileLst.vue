<template>
  <div>
    <link-component :linkNm="linkNm" @click="fileOutput()" />
  </div>
</template>

<script>
import linkComponent from "../linkComponent.vue";
export default {
  components: { linkComponent },
  name: "FileLst",
  setup(props) {
    const linkNm = props.params.value;
    console.log(props.params)
    return {
      linkNm,
    };
  },
  methods:{
    fileOutput(){
      console.log("파일 나갑니다.");
    },
  }
  // data() {
  //   return {
  //     linkNm: null,
  //   };
  // },
  // watch: {
  //   linkNm() {
  //     this.params.clicked(this.linkNm);
  //   },
  // },
  // beforeMount() {
  //   // console.log("cell Render link",this.params);
  // },
};
</script>

<style scoped></style>
