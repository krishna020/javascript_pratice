const Person1=
{
    name:"krishna",
    last_name:"sahu",
    address:"Allahabad",
    Gender:"Male",
    fullName:function()
    {
      console.log(`Name is ${this.name} ${this.last_name}`)
    }
}
//
const Person2=
{
    name:"Rahul",
    last_name:"Gupta",
    address:"Nagpur",
    Gender:"Male",
}

Person1.fullName.call(Person2)
