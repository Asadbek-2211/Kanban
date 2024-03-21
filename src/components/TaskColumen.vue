<template>
  <div @drop="updateTaskStatus" class="min-h-[70vh] ">
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
        <input
          type="text"
          v-model="inp_taskAdd"
          class="focus:outline-none rounded-lg p-1 bg-[#eee]"
        />
      </div>
      <button
        @click="insertTask"
        class="bg-[#F2F6FE] w-20 absolute top-50 left-48 rounded-lg p-1"
      >
        Add
      </button>
    </div>
    <VueDraggable>
      <div v-for="task in store.filterTasks(colName).reverse()" :key="task.id" @dragstart="saveStidentId(task.id)">
        <TaskItem
          :name="task.name"
          :comment="task.comment"
          :rate="task.rate"
          :id="task.id"
          class="mb-5"
        />
      </div>
    </VueDraggable>
  </div>
</template>
<script setup>
import { ref } from "vue";
import TaskItem from "@/components/TaskItem.vue";
import { tasksStore } from "@/store";
import { supabase } from "@/lib/supabaseClient";
import { VueDraggable } from "vue-draggable-plus";
const taskAdd = ref(false);
const props = defineProps(["colName"]);
const store = tasksStore();
const inp_taskAdd = ref("");
const insertTask = async () => {
  await supabase
    .from("tasks")
    .insert([
      {
        name: inp_taskAdd.value,
        status: props.colName,
        comment: "No comment",
        rate: Math.floor(Math.random() * 100),
      }
    ]).then(() => {
      store.getTasks()
      inp_taskAdd.value = ""
    })
};
const updateTaskStatus = async () => {
  const id = store.dragStId;
  await supabase 
  .from("tasks")
  .update({status: props.colName})
  .eq("id",id)
  .select()
  .then(()=> {
    store.getTasks()
  })
}
const saveStidentId = (id) => {
  store.setDragStuId(id)
}
</script>
<style></style>
