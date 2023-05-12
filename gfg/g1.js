// find missing element

  function MissingNumber(array,n){
    let sum=n*(n+1)/2
    for(let i=0;i<n-1;i++)
    {
        sum=sum-array[i]
    }
    console.log(sum)
}
let array=[1,2,3,5]
let n=5;
MissingNumber(array,n)