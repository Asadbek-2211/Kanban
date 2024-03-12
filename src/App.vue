<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue';
</script>
<template>
  <header>
    <div class="flex items-start">
      <SideBar/>
     <div class="mt-5 px-6">
      <RouterView />
     </div>
    </div>
  </header>
</template>
<style>
body {
  overflow: hidden;
  background-color: #F2F6FE;
}
</style>

