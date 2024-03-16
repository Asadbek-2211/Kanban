<template>
  <div
    class="p-3 rounded-xl overflow-y-auto bg-white"
    style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px"
  >
    <div class="flex justify-between items-center my-2">
      <div
        class="py-2 rounded-[40px] w-[130px] text-center"
        :class="{
          'bg-blue-50': id % 3 == 0,
          'bg-orange-50': id % 3 == 1,
          'bg-red-50': id % 3 == 2,
          'text-blue-400': id % 3 == 0,
          'text-orange-400': id % 3 == 1,
          'text-red-400': id % 3 == 2,
        }"
      >
        {{ name }}
      </div>
      <button>
        <i class="fa-solid fa-ellipsis"></i>
      </button>
    </div>
    <p class="h-[40px] overflow-y-auto">{{ comment }}</p>
    <div class="text-end">{{ rate }}%</div>
    <div class="bg-[#d2d2d2] rounded-lg">
      <div
        class="bg-[#754BE5] rounded-lg h-[10px]"
        :style="`width:${rate}%`"
      ></div>
    </div>
    <div class="flex justify-between items-center text-[#999] mt-4">
      <div class="flex">
        <img
          src="https://cdn-icons-png.freepik.com/256/3135/3135715.png"
          alt=""
          class="w-10 h-10 object-cover rounded-full border-[2px] border-solid border-white"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Wh1D73jizzMqnIFvft91Xt8Pti2pWeLv0g&usqp=CAU"
          alt=""
          class="w-10 h-10 object-cover rounded-full -ms-3 border-[2px] border-solid border-white"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGaLCKw9aX104Mw6hadYMIwCD5zZcb6OaE6g&usqp=CAU"
          alt=""
          class="w-10 h-10 object-cover rounded-full -ms-3 border-[2px] border-solid border-white"
        />
      </div>
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
const props = defineProps(["name", "comment", "rate", "id"]);
</script>
