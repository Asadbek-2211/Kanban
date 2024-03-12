<template>
  <div class="sideBar">
    <RouterLink to="/" class=" text-white  mb-[80px] flex justify-center items-center rounded-[100%]"
      ><img src="../assets/Снимок экрана 2024-03-09 в 15.22.03.png" alt="">
    </RouterLink>
   <div class="flex justify-center items-center">
<div>
    <RouterLink to="/" class=" text-white w-[50px] mb-3 flex justify-center items-center h-[50px] rounded-[100%]"
      ><i class="fa-solid fa-house"></i>
    </RouterLink>
    <RouterLink to="/user" class=" text-white w-[50px] mb-3 flex justify-center items-center h-[50px] rounded-[100%]"
      ><i class="fa-regular fa-user"></i>
    </RouterLink>
    <RouterLink to="/message" class=" text-white w-[50px] mb-3 flex justify-center items-center h-[50px] rounded-[100%]"
      ><i class="fa-solid fa-money-bill"></i>
    </RouterLink>
    <RouterLink to="/minute" class=" text-white w-[50px] mb-3 flex justify-center items-center h-[50px] rounded-[100%]"
      ><i class="fa-regular fa-clock"></i>
    </RouterLink>
    <RouterLink to="/desk" class=" text-white w-[50px] mb-3 flex justify-center items-center h-[50px] rounded-[100%]"
      ><i class="fa-solid fa-desktop"></i>
    </RouterLink>
    <RouterLink to="/bar" class=" text-white w-[50px] mb-3 flex justify-center items-center h-[50px] rounded-[100%]"
      ><i class="fa-solid fa-gear"></i>
    </RouterLink>
</div>
</div>
<button class="text-white flex justify-center pl-6 mt-[200px]">
 <i class="fa-solid fa-arrow-right-from-bracket"></i>
</button>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<style>
.sideBar {
  width: 70px;
  height: 100vh;
  background-color: #1f0059;
  border-radius: 0 20px 20px 0;
  overflow: hidden;
}
.router-link-active {
    background-color: #6E41E4;
}
</style>
