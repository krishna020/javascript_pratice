// remobe duplicate

function duplicate(str)
{  let result=[]
    let data=str.split('')
    let s=new Set(data)
    for(let ele of s)
    {
        result.push(ele)
    }
    return result.join('')
}
let data='krishnasahukumar'
console.log(duplicate(data))
