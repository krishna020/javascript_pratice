// JavaScript Program To Perform Intersection Between Two Arrays

function Intersection_array(arr1,arr2)
{
    let arr=[]
   for(let i=0;i<arr1.length;i++)
   {
    for(let j=0;j<arr2.length;j++)
    {
        if(arr1[i]==arr2[j])
        {
            arr.push(arr1[i])
        }
    }
   }
   console.log(arr)
}
let arr1=[1,2,3,4,5,6]
let arr2=[4,5,6,7,8]
Intersection_array(arr1,arr2)