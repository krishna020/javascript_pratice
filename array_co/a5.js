//Move all the negative elements to one side of the array

const arr=[1,2,3,-2,0,4,-9,-5,-1,3,-2,6,-3]

function array_function(arr)
{
   const result= arr.sort(function(a,b)
   {
    return a-b
   }
   )
   return result
}
console.log(array_function(arr))