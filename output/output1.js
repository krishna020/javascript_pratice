// immediately invoke function

(function()
{
  var a=b=3
})()
console.warn(typeof a)  //undefined
console.warn(typeof b) // number

//reason
/*
var a=b=3
simple form is b=3
var a=b
here b have global scope and a have local scope.
that's why.
*/
(function()
{
    x=y=10
})()
console.warn(typeof x) //number
console.warn(typeof y)  //number
