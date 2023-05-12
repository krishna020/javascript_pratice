function palindrom(s)
{
    let str=''
    for(let i=s.length-1;i>=0;i--)
    {
       str=str+s[i]
    }
    if(str==s)
    {
        return true
    }
    else{
        return false;
    }
}
let s='radar'
let result=palindrom(s)
console.log(result)