/*
async and await make promises easier to write"
async makes a function return a Promise
await makes a function wait for a Promise
*/

async function greet(name)
{
   return name;
}
greet('krishna').then((data)=>
{
    console.log(data) 
})