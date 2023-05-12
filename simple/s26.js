// remove the duplicate elements

const arr=[1,2,3,2,1,3,4,5,4,5,6,7,8,9,0,0,0]

let set=new Set(arr)
let result=[]

for(let x of set)
{
    result.push(x)
}
console.log(result)