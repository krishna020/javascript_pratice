function foo()
{
    return {
        name:'krishna',
        desigination:'Software developer'
    }
}
console.log(foo()) //{ name: 'krishna', desigination: 'Software developer' }

function foo()
{
    return 
    {
        name:'krishna',
        desigination:'Software developer'
    }
}
console.log(foo())   // compiletime error.
// beause return ke bad hame kuch dena hoga otherwise vo accept nahi karata.

