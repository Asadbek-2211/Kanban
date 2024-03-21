<template>
  <div @drop="aaa">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-4">
        <button class="text-[#999]">
          <i class="fa-solid fa-bars"></i>
        </button>
        <el-input
          v-model="input4"
          style="width: 400px; height: 40px"
          placeholder="Search"
          clearable
        >
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
          </template>
        </el-input>
      </div>
      <div class="flex items-center gap-6">
        <button class="text-[#999]">
          <i class="fa-solid fa-location-dot"></i>
        </button>
        <button class="text-[#999]">
          <i class="fa-regular fa-calendar"></i>
        </button>
        <div class="bg-[#999] w-[2px] h-[25px]"></div>
        <div class="flex gap-4 items-center">
          <img
            src="../assets/img.jpg"
            alt=""
            class="w-[50px] h-[50px] rounded-[100%]"
          />
          <p>Asadbek</p>
          <img src="../assets/select.png" class="w-[25px] h-[25px]" alt="" />
        </div>
      </div>
    </div>
    <el-row :gutter="20">
      <el-col :span="18">
        <div class="bg-[#FCFBFC] h-[670px] mt-4 rounded-2xl p-5">
          <div class="flex justify-between mb-9">
            <h2 class="text-2xl font-bold">Projects</h2>
            <button class="bg-[#754BE5] p-2 w-[150px] rounded-2xl text-[#eee]">
              Create Project
            </button>
          </div>
          <div>
            <VueDraggable class="flex gap-5 justify-between">
              <div
                class="w-[30%] overflow-y-auto h-[600px]"
                v-for="col in cols"
                :key="col"
              >
                <TaskColomen :colName="col" />
              </div>
            </VueDraggable>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <Statistic v-for="task in taskStore.tasks"
        :rate="task.rate"
        :name="task.name"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { Search } from "@element-plus/icons-vue";
import TaskColomen from "@/components/TaskColumen.vue";
import { VueDraggable } from "vue-draggable-plus";
import { tasksStore } from "@/store/index";
import Statistic from "@/components/Statistic.vue";
const taskStore = tasksStore();
const props = defineProps(["name","comment","rate","id"])
const input4 = ref("");
const cols = ["started", "going", "completed"];
onMounted(async () => {
  taskStore.getTasks();
});
const aaa = () => {};
</script>
<style>
.el-input__wrapper {
  border-radius: 50px;
}
</style>
