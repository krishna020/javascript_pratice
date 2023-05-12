//Find common elements in three sorted arrays

const arr1=[1,2,3,4,5]
const arr2=[3,4,5,6,7]
const common_array=[]

function common_element(arr1,arr2,common_array)
{
   for(let i=0;i<arr1.length;i++)
   {
    for(j=0;j<arr2.length;j++)
    {
        if(arr1[i]==arr2[j])
        {
          common_array.push(arr2[j])
        }
    }
   }
   return common_array
}

console.log(common_element(arr1,arr2,common_array))