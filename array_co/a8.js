//Find duplicates in an array

const arr=[1,2,3,2,3,4,5,4,5,6,5,6,7,8,9,0,88,0,0,77,6,6,5,5,444,33,33,12,12]
const duplicate=[];

function duplicate_elements(arr)
{
   for(let i=0;i<arr.length-2;i++)
   {
     for(let j=i+1;j<arr.length-1;j++)
     {
        if(arr[i]===arr[j])
        {
            duplicate.push(arr[i])
        }
     }
   }
   return [... new Set(duplicate)]
}
console.log(duplicate_elements(arr))