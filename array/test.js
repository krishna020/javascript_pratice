// arr=[2,3,8,15,6,9,25,29,21]
// k=4

function search(arr,k)
{
    for(let i=0;i<arr.length-1;i++)
    {
        for(j=0;j<arr.length-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp;
            }
        }
    }
    return[arr[arr.length-4],arr[3]]
}
let arr=[1,2,4,7,3,7,9,0,3,4,6,8]
let result=search(arr,4)
console.log(result)