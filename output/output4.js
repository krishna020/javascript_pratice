
//[2,3,3,3,4,4,4,5,6,6,7,8,8]

function duplicate_element(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            if(arr[i]=arr[j])
            {
                console.log(arr[i])
            }
        }
    }
}
let arr=[2,3,3,3,4,4,4,5,6,6,7,8,8]
duplicate_element(arr)