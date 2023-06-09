import express from 'express'
import { fetchUser, registerNewUser } from '../controller/userController.js';
const router=express.Router();
/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: OK
 */


router.get('/',fetchUser)
router.post('/signup',registerNewUser)


export default router