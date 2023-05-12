// find the largest consutive sum.
let input=[1,2,3,4,5,6,7,8,9]
let n=4;

function largest_sum(input,n)
{
    let max=0;
    
   for(let i=0;i<input.length-n+1;i++) 
   {
    let temp=0;  
     for(let j=0;j<n;j++)
     {
      temp=temp+input[i+j]
     }
     if(temp>max)
     {
        max=temp;
     }    
   }
   return max;
}

const data=largest_sum(input,n)
console.log(data)
