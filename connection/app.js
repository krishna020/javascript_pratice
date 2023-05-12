const express=require('express')
const mongoose=require('mongoose')
const app=express();

mongoose.connect('mongodb://localhost:27017/krishna',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>
{
    console.log('connected......')
}).catch((err)=>
{
   console.log('error')
})
app.listen(3000,()=>
{
    console.log(`port 3000 is running`)
})