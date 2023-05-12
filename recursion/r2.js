// print sum of first n natural number.

//with loop
/*
function sum_number(n)
{
    let sum=0;
    for(let i=0;i<=n;i++)
    {
        sum=sum+i
    }
    console.log(sum)
}
sum_number(10)
*/


function sum_number(n,sum,i)
{
    if(i==n)
    {
        sum=sum+i;
        console.log(sum)
        return
    }
 sum=sum+i;
  sum_number(n,sum,i+1);
}
sum_number(10,0,1)