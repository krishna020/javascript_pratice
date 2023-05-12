// Find the minimum and maximum element in an array
const a=[1,4,2,7,8,0,4,5,6,8,3]

function max_mina(a) // how to take array as a parameter
{
  const sort_array=a.sort(function(a,b)
  {
    return (a-b)
  }
  )
  return [sort_array[0],sort_array[sort_array.length-1]] // how to return multiple ele.
  
}
console.log(max_mina(a))