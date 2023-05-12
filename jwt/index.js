const express=require('express')
const jwt=require('jsonwebtoken')
const app=express();
const secretKey='krishna'

app.get('/',(req,res)=>
{
    res.json({'msg':"hii my name is krishna"})
})

app.post('/login',(req,res)=>
{
    const user=
    {
        name:'krishna',
        email:'test@gmail.com',
        branch:'cse'
    }
    jwt.sign({user},secretKey,{expiresIn:'300s'},(err,token)=>
    {
        res.json(token)
    })
})

app.post('/profile',verifyToken,(req,res)=>
{
  jwt.verify(req.token,secretKey,(err,data)=>
  {
    if(err)
    {
        res.send('error')
    }
    else{
        res.json({message:'profile accessed',
    data})
    }
  })
})

function verifyToken(req,res,next)
{
   const bearerToken=req.headers['authorization']
   if ( typeof bearerToken!== 'undefined')
   {
     const bearor=bearerToken.split(' ')
     const token=bearor[1]
     req.token=token
     next()
   }
   else{
    res.send('invalid token')
   }
}

app.listen(3000,()=>
{
    console.log('port is connected')
})