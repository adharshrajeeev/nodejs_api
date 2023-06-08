const express = require('express')
const cors =  require('cors')
const app = express()




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
    res.json({message:"THIS IS NODEJS API"})
})

app.listen(4000,()=>console.log("SERVER RUNNING IN PORT 4000")) 