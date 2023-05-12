// anagram

function anagram(s1,s2)
{
   let data1=s1.split('').sort().join('')
   let data2=s2.split('').sort().join('')
   console.log(data1)
   console.log(data2)
   if(data1===data2)
   {
    console.log('anagram')
   }
   else{
    console.log('not anagram')
   }
}
anagram('krishna','nakrish')