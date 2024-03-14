<template>
  <div class="flex justify-between mt-5">
    {{ colName }}
    <button @click="taskAdd = !taskAdd" class="text-[#828282] text-2xl">
      <i class="fa-solid fa-circle-plus"></i>
    </button>
  </div>
  <div class="bg-[#c2c2c2] p-4 flex rounded-lg relative" v-if="taskAdd">
    <div>
      <input type="text" class="focus:outline-none rounded-lg p-1 bg-[#eee] " />
    </div>
    <button class="bg-[#F2F6FE] w-20 absolute top-50 left-48 rounded-lg p-1">
      Add
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const taskAdd = ref(false);
const props = defineProps(["colName"]);
</script>
