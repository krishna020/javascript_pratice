/*
let var=createBase(6)
addsix(11) // 16
addsix(20) //26
*/

function createBase(a)
{
    return (b)=>
    {
       return a+b;
    }
}
var data=createBase(6)(11)
console.log(data)
