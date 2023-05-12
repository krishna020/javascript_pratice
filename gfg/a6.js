// reverse word in given string

function reverse_word(input)
{
    let arr=input.split('.');
    console.log(arr)
    let rev=arr.reverse();
    console.log(rev)
    console.log(rev.join('.'))
}
reverse_word('i.like.this.program.very.much')