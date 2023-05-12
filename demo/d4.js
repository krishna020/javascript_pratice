// to avoid the complexity use lodash library.

const data={
    name:'krishna',
    branch:'cse',
    city:'Allahabad',
    Qualification:
    {
        graduation:'B.Tech'
    }
}
let copy=JSON.parse(JSON.stringify(data))
data.Qualification.graduation='B.E'
console.log(data)
console.log(copy)