<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <div>这里是主应用11</div>
    <WujieVue url="http://127.0.0.1:5173/" name="react"></WujieVue>
    <WujieVue url="http://127.0.0.1:5174/" name="vue"></WujieVue>
  </div>
</template>

<style scoped></style>
