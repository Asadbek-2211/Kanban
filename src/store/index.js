import { defineStore } from 'pinia'
import { supabase } from "@/lib/supabase.Client";
 export const tasksStore = defineStore('index',{
    state: () => {
        return {
            tasks:[]
        }
    },
    actions:{
        getTasks(){
             supabase.from("tasks").select("*").then(res => {
                tasks = res.data
                
         })
        }
    }
 })