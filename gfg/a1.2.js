// optimize method for bubble sort  
// complexity= 0(n)

function bubble(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]>arr[i+1])
        {
           let temp=arr[i]
           arr[i]=arr[i+1]
           arr[i+1]=temp
            i=-1;
        }
    }
    console.log(arr)
}
let arr=[10,12,15,1,2,4,3,5,99,6,5,4,6,3,4,7,5,7]
bubble(arr)