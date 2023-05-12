// how to iterate the object.

const person={
    name:'krishna',
    branch:'cse',
    roll_no:47
}
// for keys
for(let item in person)
{
    console.log(item)
}

// for values

for(let item in person)
{
    console.log(person[item])
}