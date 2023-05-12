
// we can add any type data in set.
const set=new Set();

set.add(1)
set.add(2)
set.add(1)
set.add(13)
set.add({name:'krishna'})
let arr=[1,2,3,4]
set.add(arr)
console.log(set)
set.delete(2)
console.log(set)
// we can also clear the set
// set.clear()
// console.log(set)

console.log(set.has(13)) // check element exist or not.

//iterator
for(x of set)
{
    console.log(x)
}
