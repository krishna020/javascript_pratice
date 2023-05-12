const pr=new Promise((resolve,reject)=>
{
    console.log("promise hello")
    resolve("hey")
    reject("bye")
})
console.log("hello 2")
setTimeout(greet,3000);

function greet()
{
    console.log("hello3")
}
console.log(pr)