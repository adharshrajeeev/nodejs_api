import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
const app = express()
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
// import swaggerJSDoc from 'swagger-jsdoc'
// import SwaggerUI from  'swagger-ui-express'
import dotenv from 'dotenv'
import { connectDB } from './database/dbConnection.js'
import { format } from 'morgan'

dotenv.config();




app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// const options =  {
//     definition :{
//         openapi:'3.0.0',
//         info:{
//             title:"NODE JS API PROJECT FOR DEVELOPMENT",
//             version:"1.0.0"
//         },
//         servers:[
//         {
//             url:'http://localhost:4000/api/v1'
//         }
//         ]
//     },
//     apis:['./routes/userRoutes.js']
// }

// const swaggerSpec =  swaggerJSDoc(options)



// app.use('/api-docs',SwaggerUI.serve,SwaggerUI.setup(swaggerSpec))

app.use('/api/v1/users',userRoutes)
app.use('/api/v1/products',productRoutes)

app.all("*",(req,res)=>{
    res.status(404).json({error:"No api available"})
})

connectDB(process.env.MONGODB_URL).then((res)=>{
    app.listen(4000,()=>console.log("SERVER RUNNING IN PORT 4000"))    
})
