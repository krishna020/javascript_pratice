//[2,2,3,4,5,5] ,6

function sum1(arr,sum)
{
    let result=[]
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[j]+arr[j+1]==sum)
            {
                result.push(j,j+1)
            }
           
        }
        console.log(result)
    }
}
let arr=[2,2,3,4,5,5]
let sum=6
console.log(sum1(arr,sum))