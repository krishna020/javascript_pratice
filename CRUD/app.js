const express=require('express')
const app=express();
const studentRouter=require('./controller/student')
require('./connection/conn')
require('dotenv').config();
PORT=process.env.port

app.use('/student',studentRouter)

app.listen(PORT,()=>
{
    console.log(`port ${PORT} is listening`)
})
