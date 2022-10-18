<template>
<nav>
  <Header/>
  </nav>
  <Section/>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
// import { component } from 'vue/types/umd';
import Header  from  './components/Header.vue'
import Section from "./components/Section";


export default {
  components: {
    Header,
    Section,
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>