import {create} from 'zustand';
import API from '../services/api';

export const useAtsStore=create((set)=>({
    ats:[],

    atsvehiclesfn:async()=>{
          const response=await API.get("/ats/allatsIds");
          set({ats:response.data});
    },
    addATS:async(atsData)=>{
        const response =await API.post("/ats/createnew",atsData)
    }
}))
