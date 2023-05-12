

// function sum(a,b,...other)
// {
//     let s=0
//    // console.log(other)
// for(let i=0;i<other.length;i++)
// {
//     s=s+other[i]
// }
// console.log(s+a+b)

// }

















function sum(a,b,...other)
{
    let sum=0;
    for(let x=0;x<other.length;x++)
    {
        sum=sum+other[x]
    }
    console.log(sum+a+b);
    

}


sum(2,4,2,3,4,5,6,2,2,2,2,1,1,1,1,7,7,7,0)