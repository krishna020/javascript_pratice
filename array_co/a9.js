//Count pairs with given sum

const arr=[1,2,3,4,5,6]
const sum=6

function pair(arr,sum)
{
 for(let i=0;i<arr.length-2;i++)
 {
    for(let j=0;j<arr.length-1;j++)
    {
       if(arr[i]+arr[j]==sum)
       {
        console.log(`index of ${arr[i]} and index of ${arr[j]}`)
       }
    }
 }
 
}
pair(arr,sum)