/*
A callback is a function passed as an argument to another function.
Where callbacks really shine are in asynchronous functions,
where one function has to wait for another function (like waiting for a file to load).
*/
function Name(name)
{
    console.log(name)
}
function greet(Name)
{
    console.log("Hii....")
    Name("krishna")
}
greet(Name)