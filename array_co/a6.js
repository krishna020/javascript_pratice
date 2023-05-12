//Count number of occurrences (or frequency) in a sorted array

const arr=[1,2,3,4,3,2,1,5,6,7,8,9,0,9,8,9,8,9,8,9,89,3,3,3,3,4,4,4,5,5,5,7]

function Array_occurence(arr,x,res)
{
    for(let i=0;i<arr.length-1;i++)
    {
        if(x==arr[i])
        {
            res++
        }
    }
   
    return res;
}

const x=8;
const res=0;
console.log(Array_occurence(arr,x,res))
