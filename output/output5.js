// job variable compare karate hai to value compare hoti hai.
// jab object compare karate hai to memory location compare hota hai.

const obj1={name:'krishna'}
const obj2={name:'krishna'}
console.log(obj1==obj2) // false
console.log(obj1===obj2); // false

// how to show both object are equal.
const a={}
const b=a
console.log(a==b) // true

