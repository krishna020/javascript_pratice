// another method

let a=[-5,-4,-2,-3,0,2,-5,4,5,6,8]
let n=a.length-1
//console.log(a[n])

function searching(a,n)
{
   let left=0;
   let right=n
   while(right>left) 
   {
     if(a[left]+a[right]==0)
     {
        return [a[left],a[right]]
     }
     else if(a[left]+a[right]>0)
     {
        right--
     }  
     else{
        left++
     }
   }
}
console.log(searching(a,n))