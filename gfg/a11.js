// remove the duplicate
// number of occurence
// return the duplicate
// [2,3,3,4,4,5,6,6,6,7]

/*
function duplicate(arr)
{
    let set=new Set(arr)
    let result=[]
    for(let ele of set)
    {
        result.push(ele)
    }
    return result
}
let arr=[2,3,3,4,4,5,6,6,6,7]
console.log(duplicate(arr))
*/
function occurence_element(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i]===arr[j])
            {
               console.log(arr[j]) 
            }
        }
    }
}
let arr=[2,3,3,4,4,5,6,6,6,7]
occurence_element(arr)
