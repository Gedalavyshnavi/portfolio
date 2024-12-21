const express=require('express')
const dotenv=require('dotenv')
const mongoose=require("mongoose")
const bodyParser = require('body-parser')
const router=require('./routes/studentRounter')
const app=express()
dotenv.config()
mongoose.connect(process.env.URI)
.then(()=>{
    console.log("Databased connected")
})
.catch((err)=>{
    console.log("error in connecting with database",err)
})
app.use(bodyParser.json())
app.use('/',router)
app.listen(5050,()=>{
    console.log("server started")
})