// lexical scope-- inner function can access outer function scope
// this is lexical example.

function outer()
{
    var a=10;
    function inner()
    {
        return a;
    }
    return inner(); // function execute.
}
const result=outer();
console.log(result)