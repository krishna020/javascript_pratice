// O(n^2)

let input=[1,5,2,3,7,8,9,0,4,5,6,7,8,9,8,5,3,5,7,8,9,7,5,3]

function Bubble(input)
{
   for(let i=0;i<input.length-1;i++)
   {
    for(let j=0;j<input.length-i-1;j++)
    {
        if(input[j]>input[j+1])
        {
            let temp=0;
            temp=input[j];
            input[j]=input[j+1]
            input[j+1]=temp
        }
    }
   }
   console.log(input)
}
Bubble(input)