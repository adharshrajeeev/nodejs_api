import Products from "../models/productsModel.js"



export const addNewProduct =  async (data)=>{
    try{
         const newProduct =  new Products(data)
       const respones =  await newProduct.save();
        return respones
    }catch(err){
        throw err
    }
} 