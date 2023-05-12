// promise use to handle asyncronous .
// finally will run with both of resolve,reject.

const promise=new Promise((resolve,reject)=>
{
    setTimeout(() => {
        resolve('done')
    },1000);
})
promise.finally(()=>
{
      console.log('finally')
})
.then((data)=>
{
    console.log(data)
}).catch((err)=>
{
   console.log('error is'+err)
})