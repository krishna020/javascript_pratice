// reverse an array

const array_ele=[1,4,2,7,8,0,3,6]
const rev_array=[];

function reverse_array(array_ele)
{
   for(let i=array_ele.length-1;i>=0;i--)
   {
      rev_array.push(array_ele[i])
   }  
   return rev_array
}
console.log(reverse_array(array_ele))