// anagram
function anagram(a,b)
{
    if(a.length==b.length)
    {
        let a1=a.split('').sort().join('')
        let a2=b.split('').sort().join('')
        if(a1===a2)
        {
        return'YES'
        }
        else{
        return "NO"
        }
    }
    else{
        return "NO"
    }
}
console.log(anagram("aabaa","baaaaa"))
