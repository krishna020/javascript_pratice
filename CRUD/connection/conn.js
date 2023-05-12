require('dotenv').config();
const mongoose=require('mongoose')
let URL=process.env.url;
mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>
{
    console.log('connected')
}).catch((err)=>
{
    console.log('error')
})