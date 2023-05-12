const data={
    name:'krishna',
    branch:'cse',
    city:'Allahabad'
}
//let copy=Object.assign({},data) // only copy the value not memory location.
//or
let copy={...data}
data.name='rahul'  // shallo copy.
console.log(copy)
console.log(data)