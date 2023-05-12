// in gererator function 
//we can pause and resume the function at specific value

function* show()
{
    console.log('Hi...')
    yield(10)
    yield(20)
    yield(30)
    console.log('last')
}
let output=show()
console.log(output.next())
console.log(output.next())
console.log(output.next())
console.log(output.next())