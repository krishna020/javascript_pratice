//[[2,3,4],[4,5,6]]-- sum
function sum_array(arr)
{
    let arr1=arr[0]
    let arr2=arr[1]
    let c=[]
    for(let i=0,j=0,k=0;i<arr1.length;i++,j++,k++)
    {
         c[k]=arr1[i]+arr2[j]     
    }
    console.log(c)
    
}
let arr=[[2,3,4],[4,5,6]]
sum_array(arr)