<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue';
</script>
<template>
    <div class="flex items-start">
      <SideBar/>
     <div class="mt-5 px-6 flex-1">
      <RouterView />
     </div>
    </div>
</template>
<style>
body {
  overflow: hidden;
  background-color: #F2F6FE;
}
</style>

