import { defineStore } from 'pinia'
import { supabase } from "@/lib/supabaseClient";
 export const tasksStore = defineStore('index',{
    state: () => {
        return {
            tasks:[]
        }
    },
    actions:{
        getTasks(){
             supabase.from("tasks").select("*").then(res => {
               this.tasks = res.data
               console.log(res.data);
         })
        }
    },
    getters: {
        taskGetters: state => {
            //  const filteredTasks = state.tasks.filter("task" , () => {
            //     // store.state.status == started
            //  })
        }
    }
 })