//JavaScript Program to Check Whether a String is Palindrome or Not

function reverse_string(string_input)
{
    let str=''
     for(let i=string_input.length-1;i>=0;i--)   //imp
     {
        str=str+string_input[i]
     }
     console.log(str)
}
reverse_string('krishna')

function rev(s)
{
   let result=''
   for(let i=s.length-1;i>=0;i--)
   {
      result=result+s[i]
   }
   console.log(result)
}
rev('krishna')