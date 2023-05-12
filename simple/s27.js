// JavaScript Program to Remove Duplicates From Array

function remove_element(arr)
{
   let set=new Set(arr)
   console.log(set)
   let result=[]
   for(let element of set)
   {
      result.push(element)
   }
   console.log(result)
}
const arr=[1,2,3,4,2,5,6,7,8,3,5,6,8,9,0]
remove_element(arr)

