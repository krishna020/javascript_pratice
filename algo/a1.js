function sum(arr,target)
{
    let a=[]
    for(let i=0;i<arr.length;i++)
    {
        for(j=i;j<arr.length;j++)
        {
            if(arr[i]+arr[j]==target)
            {
               a.push([i,j]) 
            }
        }
    }
    return a;
}
let arr=[1,2,3,-2,-1,6,4,-4,2,6,7]
let result=sum(arr,0)
console.log(result)