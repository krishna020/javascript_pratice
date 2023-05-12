/*
what will happen if you break the return statement in two lines like this:
The function will return undefined!
*/

function sum(a,b)
{
    return
    (a+b)
}
console.log(sum(1,2))