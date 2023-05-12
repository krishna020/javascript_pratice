// sort the string

function sort_string(str)
{
    let s=str.split('')
    let n=s.length;
   for(let i=0;i<n-1;i++)
   {
    for(j=0;j<n-i-1;j++)
    {
        let temp=0;
        if(s[j]>s[j+1])
        {
            temp=s[j]
            s[j]=s[j+1]
            s[j+1]=temp;
        }
    }
   }
   return s;

}

const result=sort_string('krishna')
console.log(result.join(''))