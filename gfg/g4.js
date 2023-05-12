// find the leader of array

leaders(arr,n)
{
    let temp=arr[n-1]
    let b=[temp];

    for(let i=n-2;i>=0;i--)
    {
        if(arr[i]>temp)
        {
            b.push(arr[i])
            temp=arr[i]
        }
    }
    return(b.reverse())
}
let arr=[16,17,4,3,5,2]
let n=6
Leader(arr,n) 