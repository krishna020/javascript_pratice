function sum(arr,target)
{
   let start=0;
   let end=arr.length-1
   while(end>start)
   {
      if((arr[start]+arr[end])==target)
      {
         console.log('meet.............')
      }
      else if((arr[start]+arr[end])>target)
      {
         end--
         console.log("end..."+end)
      }
      else
      {
         start++
         console.log("start..."+start)
      }
   }
  // return false
}
let arr=[1,2,3,-2,-1,6,4,-4,2,6,7]
let result=sum(arr,0)
console.log(result)