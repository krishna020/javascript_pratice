/*
A Promise is a JavaScript object that links producing code and consuming code
*/


//producing
const promise=new Promise(function(myreslove,myreject)
{
    myreslove();
    myreject();
})

//consuming
promise.then(()=>
{
    if(success)
    {

    }
    else{

    }
})