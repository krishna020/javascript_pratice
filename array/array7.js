// filter return new array with array elements that pass a test.

const numbers=[1,2,3,4,5,6,7,8,9,0]
const result=numbers.filter((ele)=>
{
    if(ele%2==0)
    {
        return ele
    }
})
console.log(result)

/* the reduce() method runs a function on each array element to
produce (reduce it to) a single value.
*/

/*
Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself
*/
const so=numbers.reduce((total,value)=>
{
   return total+value
})
console.log(so)