import { create } from "zustand";
import API from "../services/api";

export const useVehiclestore=create((set)=>({
    vehicles:[],
    vehiclesByAts:[],
    getVehicles:async()=>{

        const response=await API.get("/vehicles/getVehices");
        set({vehicles:response.data})
    },
    getVehiclesById:async(id)=>{
        const response =await API.get(`vehicles/getVehices/${id}`);
        set({vehiclesByAts:response.data})

    },
    setVehicles:()=>{
       set({vehiclesByAts:[]});
    }
}))