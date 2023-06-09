import express from 'express'
import cors from 'cors'
const app = express()
import userRoutes from './routes/userRoutes.js'
import swaggerJSDoc from 'swagger-jsdoc'
import SwaggerUI from  'swagger-ui-express'





app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const options =  {
    definition :{
        openapi:'3.0.0',
        info:{
            title:"NODE JS API PROJECT FOR DEVELOPMENT",
            version:"1.0.0"
        },
        servers:[
        {
            url:'http://localhost:4000/api/v1'
        }
        ]
    },
    apis:['./routes/userRoutes.js']
}

const swaggerSpec =  swaggerJSDoc(options)

app.use('/api-docs',SwaggerUI.serve,SwaggerUI.setup(swaggerSpec))

app.use('/api/v1',userRoutes)

app.listen(4000,()=>console.log("SERVER RUNNING IN PORT 4000"))    