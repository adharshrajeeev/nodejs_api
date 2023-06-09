export const fetchUser = (req,res)=>{
    try{
        res.status(200).json({status:200,data:{name:"Shelvin",gatePass:"RestAPi"}})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}