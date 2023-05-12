const data={
    name:'krishna',
    branch:'cse',
    city:'Allahabad',
    Qualification:
    {
        graduation:'B.Tech'
    }
}
let copy={...data}
data.Qualification.graduation='B.E'
console.log(data) 
//{name: 'krishna',branch: 'cse', city: 'Allahabad', Qualification: { graduation: 'B.E' }}
      
console.log(copy)
//{name: 'krishna',branch: 'cse', city: 'Allahabad', Qualification: { graduation: 'B.E' }}

// how to resolve this issue


