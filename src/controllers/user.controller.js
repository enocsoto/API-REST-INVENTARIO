import { request, response } from "express"

export const getAllUsers = async (req = request, res = response)=>{
    res.json({
        msg: 'Get All Users'
    })
} 