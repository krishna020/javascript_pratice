//JavaScript Program to Reverse a String

function reverse_string(input)
{
    let str='';
    for(let i=input.length-1;i>=0;i--)
    {
        str=str+input[i]   //imp
    }
    console.log(str)
}
reverse_string("Priya")