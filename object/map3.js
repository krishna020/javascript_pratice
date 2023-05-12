// how to know size of map.

const map=new Map([['name','krishna'],['branch','cse']]);
console.log(map.size) // size property.

// delete any property
map.delete('branch')
console.log(map)

// how to check key exixt or not.

console.log(map.has('name'))