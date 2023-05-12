//JavaScript Program to Check Prime Number

function prime(n)
{
    let prime_counter=true;
  for(let i=2;i<n;i++)
  {
    if(n%i==0)
    {
        prime_counter=false
    }
  }
  if(prime_counter)
  {
    console.log(' prime')
  }
  else{
    console.log('not prime')
  }
}
//prime(11)

function primez(x)
{
  let counter=true
  for(let i=2;i<x;i++)
  {
    if(x%i==0)
    {
        counter=false
  }
}
if(counter)
{
  console.log('prime')
}
else{
  console.log('not prime')
}

}
primez(77)


