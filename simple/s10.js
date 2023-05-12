// JavaScript Program to Check Armstrong Number
//JavaScript Program to Find the Sum of Natural Numbers

function sum_of_natural_number(n)
{
    if(n>0)
    {
        let sum=0;
        for(let i=1;i<=n;i++)
        {
            sum=sum+i;
        }
        console.log(sum)
    }
    else{
        console.log('please enter a positive number')
    }
}
sum_of_natural_number(-12)

