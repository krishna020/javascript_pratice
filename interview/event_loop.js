const fun2=()=>
{
    setTimeout(()=>
    {
        console.log('fun2 is starting..')
    },3000)
}

const fun1=()=>
{
  console.log('fun1 is starting.....')
  fun2();
  console.log('fun1 is ending...')
}
fun1();