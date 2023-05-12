/*
Functions running in parallel with other functions are called asynchronous

A good example is JavaScript setTimeout()

When you pass a function as an argument, remember not to use parenthesis.
Right: setTimeout(myFunction, 3000);
Wrong: setTimeout(myFunction(), 3000);
*/
setTimeout(greet,3000);

function greet(name)
{
    console.log(`Hii...krishna`)
}