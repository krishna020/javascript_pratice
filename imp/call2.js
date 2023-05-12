const Person1=
{
    name:"krishna",
    last_name:"sahu",
    address:"Allahabad",
    Gender:"Male",
}
//
const Person2=
{
    name:"Rahul",
    last_name:"Gupta",
    address:"Nagpur",
    Gender:"Male",
}

function fullName(branch)
{
   console.log(`${this.name} ${this.last_name} ${branch}`)
}
fullName.call(Person2,'CSE')
