import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";
export const tasksStore = defineStore("index", {
  state: () => {
    return {
      tasks: [],
    };
  },
  actions: {
    getTasks() {
      supabase
        .from("tasks")
        .select("*")
        .then((res) => {
          this.tasks = res.data;
        });
    },
  },
  getters: {
    filterTasks: (state) => (status) => {
      return state.tasks.filter((task) => task.status === status);
    },
  },
});
