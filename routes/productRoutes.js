import express from 'express'
import { addnewProducts, getAllProducts } from '../controller/productController.js';
const router=express.Router();


router.get('/',getAllProducts)
router.post('/add',addnewProducts)











export default router