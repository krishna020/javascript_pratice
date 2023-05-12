// reverse a number

function reverse_number(n)
{
    let rev=0
    while(n!=0)
    {
        let remender=n%10;    //imp
        rev=rev*10+remender
        n=parseInt(n/10);
    }
    console.log(rev)
}
reverse_number(123)

