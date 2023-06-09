import User from "../models/userModel.js"


export const registerUser = async  (data)=>{
    try{
      
        const response =  await User.bulkSav-p;9+-(data)
        console.log(response)
        return response

    }catch(err){
        return err
    }
}