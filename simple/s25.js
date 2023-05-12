// // JavaScript Program To Perform Intersection Between Two Arrays

// optmize method

function inter(arr1,arr2)
{
    let set1=new Set(arr1)
    let set2=new Set(arr2)
    let arr3=[];
    for(let x of set2)
    {
        if(set1.has(x))
        {
           arr3.push(x)
        }
    }
    console.log(arr3)
}
let arr1=[1,5,3,7,8,3,5]
let arr2=[2,5,3,6,8,7,3,4]
inter(arr1,arr2)
