// we can store different type of data in object.

//there are two ways to create the object

const person={}
const member=new Object();

// add property in object

person.name='krishna'
person.branch='CSE'
person.roll_no=47
console.log(person)
// we can also write function in key value pair.

// how to access object inside object

const data={
    name:'Neha',
    address:{
            country:'India',
            city:'Allahabad'
    }
}
//console.log(data.address.city)

// how to delete property of object.

delete data.name
//console.log(data)
// object follow hoisting.

// how to write statement type key
data['my name is']='krishna'
console.log(data)
// access
console.log(data['my name is'])

//