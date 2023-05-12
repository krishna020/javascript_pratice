// get max and min in array

function getMinMax(arr,n){
   arr.sort(function(a,b)
   {
    return a-b
   })
   console.log(arr)
    console.log(`${arr[0]} ${arr[n-1]}`)
}
console.log(getMinMax([3,2,1,56,1000,167],6))
