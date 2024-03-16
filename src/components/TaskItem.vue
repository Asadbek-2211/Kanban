<template>
  <div class="shadow p-2 rounded overflow-y-auto">
    <div class="flex justify-between items-center ">
      <button class="bg-[#eee] p-2 rounded-2xl w-[150px] mb-5 text-[#754BE5]">{{ name }}</button>
      <button>
        <i class="fa-solid fa-ellipsis"></i>
      </button>
    </div>
    <p class="h-[40px] overflow-y-auto">{{ comment }}</p>
    <div class="bg-[#d2d2d2] rounded-lg">
      <div class="bg-[#754BE5] rounded-lg h-[10px] my-7" :style="`width:${rate}%`">
      {{  }}
    </div>
    </div>
    <div class="flex justify-between items-center text-[#999]">
      <img class="w-[100px] h-[50px]" src="../assets/users.jpg" alt="" />
     <div class="flex justify-center items-center gap-1">
      <button>
        <i class="fa-regular fa-comment"></i>
      </button>
      <p>4</p>
     </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["name", "comment", "rate"]);
</script>

