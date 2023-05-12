// check for palindrom.

function palindrom(s)
{
    let n=s.length-1;
    let str=''
   for(let i=n;i>=0;i--)
   {
       str=str+s[i]
   }
   //console.log(s)
   if(s===str)
   {
    return 'palindrom'
   }  
   else{
    return 'not palindrom'
   }
}
const result=palindrom('abcdcba')
console.log(result)