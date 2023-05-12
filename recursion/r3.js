// print factorial of number n.

function fact(res,n,i)
{
  if(n==0 || n==1 || n<0)
  {
    return "please enter a positive number greater than 1"
  }
  else if(i==n)
  {
    res=res*n;
    console.log(res)
    return 
  }
  res=res*i;
  fact(res,n,i+1)
 
}
console.log(fact(1,5,1))