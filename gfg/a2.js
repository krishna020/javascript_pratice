// how to add two array.

function sum(arr1,arr2)
{
    let c=[]
    if(arr1.length==arr2.length)
    {
        for(let i=0,j=0,k=0;i<arr1.length;i++,j++,k++)
        {
            c[i]=arr1[i]+arr2[j]
        }
        console.log(c)
    }
}
let arr1=[8,8,8]
let arr2=[8,8,8]
sum(arr1,arr2)
