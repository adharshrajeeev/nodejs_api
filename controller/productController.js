import { addNewProduct } from "../database/repository/productRepository.js"


export const addnewProducts = async(req,res)=>{
    try{
        const response = await addNewProduct(req.body)
        console.log(response)
        res.status(200).json({ message: "Product added successfully" });
    }catch(err){
        res.status(500).json({error:"Server Error"})
    }
}