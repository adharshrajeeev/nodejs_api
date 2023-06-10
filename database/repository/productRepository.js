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


export const fetchAllProducts  = async ()=>{
    try{
        const products =  await Products.find()
        return products
    }catch(err){
        throw err
    }
}

export const fetchProductByName = async (query)=>{
    try{
        const product = await Products.findOne({productName:query})
        return product
    }catch(err){
        throw err
    }
}