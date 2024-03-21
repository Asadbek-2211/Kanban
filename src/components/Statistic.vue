<template>
  <div class="flex justify-center items-center">
    <div class="bg-white p-6 w-[300px] h-[480px] rounded-xl mt-5">
      <div class="flex justify-between px-4 p-2 rounded-2xl bg-[#ECF2FF]">
        <div>
          <p class="text-gray-400">SELECTED</p>
          <h3 class="font-bold">Design Team</h3>
        </div>
        <div
          class="w-[50px] h-[50px] bg-[#F07D13] flex justify-center items-center rounded-full"
        >
          <i class="fa-solid fa-users text-2xl text-[#F9C391]"></i>
        </div>
      </div>
      <div
        class="bg-[#F1ECFE] w-[200px] h-[200px] flex justify-center items-center rounded-full mt-4 mx-auto"
      >
      <div class="border-4 border-[#7349E5] w-[170px] h-[170px] rounded-full flex justify-center items-center" :style="`border:${rate}%`"  >
        <div
          class="bg-[#fff] w-[130px] h-[130px] rounded-full flex justify-center items-center  "
        >
          <div class="text-black">{{ rate }}%</div>
        </div>
      </div>
      </div>
      <h2 class="font-bold text-xl">Projects</h2>
      <div class="flex justify-center items-center gap-3 mb-3">
        <div class="w-[120px] h-[60px] bg-[#ECF2FF] rounded-xl flex justify-start pl-3">
         <div>
          <span class="text-sm text-[#999] mt-2">TOTAL</span>
          <div class="flex justify-start items-center gap-2">
            <div class="w-[4px] h-[22px] rounded-xl bg-[#0E5FFF] "></div>
            <p class="font-bold">{{ name }}</p>
          </div>
         </div>
        </div>
        <div class="w-[120px] h-[60px] bg-[#FEEFE1] rounded-xl flex justify-center ">
          <div>
            <span class="text-sm text-[#999] mt-2">COMPLETED</span>
           <div class="flex justify-start items-start gap-2">
            <div  class="w-[4px] h-[22px] rounded-xl bg-[#F07807]"></div>
            <p class="font-bold">{{  }}</p>
           </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center gap-3">
        <div class="w-[120px] h-[60px] bg-[#FEEDFF] rounded-xl flex justify-center ">
        <div>
          <span class="text-sm text-[#999] mt-2">IN PROGRESS</span>
        <div class="flex justify-start items-center gap-2">
         <div  class="w-[4px] h-[22px] rounded-xl bg-[#F83AFF]"></div>
            <p class="font-bold">{{  }}</p>
        </div>
        </div>
        </div>
        <div class="w-[120px] h-[60px] bg-[#F1ECFE] rounded-xl flex justify-start pl-5 ">
        <div>
          <span class="text-sm text-[#999] mt-2">WAITING</span>
        <div class="flex justify-start items-center gap-2">
          <div class="w-[4px] h-[22px] rounded-xl bg-[#7349eb]"></div>
          <p class="font-bold">{{ 24 }}</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="bg-white w-[300px] h-[160px] rounded-xl mt-7 mx-auto flex justify-center items-center"
  >
    <div>
      <div class="mb-3 flex items-center gap-2">
        <div
          class="w-[50px] h-[50px] bg-[#754BE5] flex justify-center items-center rounded-lg"
        >
          <i class="fa-regular fa-clock text-gray-300 text-2xl"></i>
        </div>
        <div>
          <h4>Sunday,20 December</h4>
          <h4 class="font-bold">8:00-11:00 AM</h4>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div
          class="w-[50px] h-[50px] bg-[#1463FF] flex justify-center items-center rounded-lg"
        >
          <i class="fa-regular fa-message text-2xl text-white"></i>
        </div>
        <div>
          <div>
            <h4>Sunday,20 December</h4>
          </div>
          <div>
            <h4 class="font-bold">8:00-11:00 AM</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>
<script setup>
import { tasksStore } from "@/store";
const taskStore = tasksStore()
const props = defineProps(["name","comment","rate","id"])
</script>
