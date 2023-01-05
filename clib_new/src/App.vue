<script setup>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
console.log(import.meta.env.VITE_SOME_API_URL);
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style></style>
