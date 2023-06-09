import express from 'express'
import { addnewProducts } from '../controller/productController.js';
const router=express.Router();



router.post('/add',addnewProducts)











export default router