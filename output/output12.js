// closure is similar to lexical scope but with little different.
// function execution and function return have differ things.


function outer()
{
    var a=10;
    function inner()
    {
        return a;
    }
    return inner;  // function return  
}
const result=outer();
console.log(result())