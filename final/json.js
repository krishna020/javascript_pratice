/*
JSON is a format for storing and transporting data. 
JSON is often used when data is sent from a server to a web page.

JSON stands for JavaScript Object Notation
JSON is a lightweight data interchange format
JSON is language independent *
JSON is "self-describing" and easy to understand

JSON Syntax Rules
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays
*/

const person={
    name:'krishna',
    city:'Prayagraj'
}
console.log(person) // { name: 'krishna', city: 'Prayagraj' }
const json=JSON.stringify(person) // convert object to json object
console.log(json)////{"name":"krishna","city":"Prayagraj"}
//console.log(json.name) // undefine
const obj=JSON.parse(json)
console.log(obj) //{ name: 'krishna', city: 'Prayagraj' }