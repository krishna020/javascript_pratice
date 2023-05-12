/*
When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text)
You should use arrays when you want the element names to be numbers
*/

// convert array to string.
const arr=[]
for(let i=0;i<10;i++)
{
    arr.push(i)
}
console.log(arr) //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
console.log(arr.toString())  //0,1,2,3,4,5,6,7,8,9
console.log(arr.join(" "))