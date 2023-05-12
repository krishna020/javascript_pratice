/*
Associative Arrays:

Many programming languages support arrays with named indexes.
Arrays with named indexes are called associative arrays (or hashes).
JavaScript does not support arrays with named indexes.
In JavaScript, arrays always use numbered indexes.
*/

/*
WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.
After that, some array methods and properties will produce incorrect results.
*/
const associative=[]
associative["first_name"]="krishna"  // index should be in string formate
associative["last_name"]="Sahu"
console.log(associative) //[ first_name: 'krishna', last_name: 'Sahu' ]
console.log(associative.length) // 0

