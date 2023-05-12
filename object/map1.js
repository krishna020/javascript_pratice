// map is similar to object
// map key can be any data type but object key must be string  .........imp, code fat jayega
// map have many functionality.
// map has better performance than object.

const data={
    name:'krishna',
    branch:'cse'
}
const map=new Map([['name','krishna'],['branch','cse']]);
console.log(data)
console.log(map)
/*
{ name: 'krishna', branch: 'cse' }
Map(2) { 'name' => 'krishna', 'branch' => 'cse' }
*/

// access the property in map.
console.log(map.get('name'))

