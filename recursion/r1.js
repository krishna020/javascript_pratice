// recurison is like loop
// we are using recursion to avoid complexity in loop.

/*
function Print(n)
{
    for(let i=1;i<=n;i++)
    {
        console.log(i)
    }
}
Print(5)
*/

// using recursion

function Print(n)
{
    if(n===6)
    {
        return
    }
    console.log(n)
    Print(n+1)
}

Print(1)