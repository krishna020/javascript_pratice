// JavaScript Program to Check if An Array Contains a Specified Value

function isExist(arr,target)
{
     for(let i=0;i<arr.length;i++)
     {
        if(arr[i]==target)
        {
            return "found"
        }
     }
}

const arr=[1,4,2,5,7,9,8,3,6]
console.log(isExist(arr,0))

