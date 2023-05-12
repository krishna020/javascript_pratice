//currying

function sum(a)
{
    return function(b)
    {
        return function(c)
        {
            return(a+b+c)
        }
    }
}
let result=sum(2)(4)(6)
console.log(result)