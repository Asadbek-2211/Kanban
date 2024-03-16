<template>
  <div
    class="flex justify-between input_div sticky top-0 bg-white p-2 mb-2 rounded-xl"
  >
    <p class="capitalize font-[600]">{{ colName }}</p>
    <button @click="taskAdd = !taskAdd" class="text-[#828282] text-2xl">
      <i class="fa-solid fa-circle-plus"></i>
    </button>
  </div>
  <div class="bg-[#c2c2c2] p-4 flex rounded-lg relative" v-if="taskAdd">
    <div>
      <input type="text" class="focus:outline-none rounded-lg p-1 bg-[#eee]" />
    </div>
    <button class="bg-[#F2F6FE] w-20 absolute top-50 left-48 rounded-lg p-1">
      Add
    </button>
  </div>
  <div v-for="task in store.filterTasks(colName)" :key="task.id">
    <TaskItem
      :name="task.name"
      :comment="task.comment"
      :rate="task.rate"
      :id="task.id"
      class="mb-5"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import TaskItem from "@/components/TaskItem.vue";
import { tasksStore } from "@/store";
const taskAdd = ref(false);
const props = defineProps(["colName"]);

const store = tasksStore();
</script>
<style></style>
