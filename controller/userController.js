import { registerUser } from "../database/repository/userRepository.js"

export const fetchUser = (req,res)=>{
    try{
        res.status(200).json({status:200,data:{name:"Shelvin",gatePass:"RestAPi"}})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}


export const registerNewUser  =async (req,res)=>{
    try{
        const response = await registerUser(req.body)
        res.status(200).json({message:response})

    }catch(err){
        res.status(500).json({error:"Server Error"})
    }
}