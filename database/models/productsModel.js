import mongoose from "mongoose";

const ProductSchema=mongoose.Schema({
    
   date:{
    type:Date,
   default:Date.now
   },
   productName:{
    type:String,
    required:true,
    unique:true
   },
   quantity:{
    type:Number,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   description:{
    type:String
   }
},{timestamps:true})

const Products = mongoose.model('Product', ProductSchema);
export default Products