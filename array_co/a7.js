//Find the missing integer
const a=[1,2,3,4,6]
const n=a.length;
const total=Math.floor((n+1)*(n+2)/2)

function missingElement(a,total)
{
    for(let i=0;i<a.length;i++)
    {
       total=total-a[i]
    }
    return total;
}

console.log(missingElement(a,total))
