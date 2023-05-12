// print x^n (stack height =n

function print(x,n)
{
   if(n==0)
   {
    return 1
   }
   if(x==0)
   {
     return 0;
   }
   let output1=print(x,n-1)
   let output2=x*output1
   return output2
}
console.log(print(2,5))