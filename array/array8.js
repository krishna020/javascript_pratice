// every method

const numbers=[1,2,3,4,5,6,7,8,9,0]
numbers.every((ele)=>
{

})

/*The find() method returns the value of the first array
 element that passes a test function.
*/
const data=numbers.find((val)=>
{
    if(val===5)
    {
        return val
    } 
})
console.log(data)