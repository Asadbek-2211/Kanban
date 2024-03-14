import { defineStore } from 'pinia'
import { supabase } from "@/lib/supabaseClient";
 export const tasksStore = defineStore('index',{
    state: () => {
        return {
            tasks:[]
        }
    },
    actions:{
        getTasks(state){
             supabase.from("tasks").select("*").then(res => {
                state.tasks = res.data
                console.log(res.data);
         })
        }
    }
 })