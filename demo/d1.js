// shallo copy and deep copy

// in object


const data={
    name:'krishna',
    branch:'cse',
    city:'Allahabad'
}
const copy=data;  // copy the memory location in object that's why
copy.city='Pune'
console.log(data)

let x=5;
let y=x;
x=10
console.log(x) // in variable it copy the value 
console.log(y)