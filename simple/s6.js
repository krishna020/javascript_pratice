//JavaScript Program to Find the Largest Among Three Numbers
 
function Longest(n1,n2,n3)
{
    if(n1>n2 && n1>n3)
    {
        console.log(`${n1}  is the largest number`)
    }
    else if(n2>n1 && n2>n3)
    {
        console.log(`${n2}  is the largest number`) 
    }
    else{
        console.log(`${n3}  is the largest number`) 
    }
}
Longest(2,-5,0)