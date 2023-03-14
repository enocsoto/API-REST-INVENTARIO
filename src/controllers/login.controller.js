import { request, response } from "express"
import { loginServices } from "../services/login.services.js"

export const login = async (req = request, res = response)=>{
    
    await res.json(loginServices())
} 