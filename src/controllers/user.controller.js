import { request, response } from "express"
import { getUsers } from "../services/user.services.js"

export const getAllUsers = async (req = request, res = response)=>{
   
   res.json(getUsers());
    
} 