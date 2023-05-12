// how to use foreach in map

const map=new Map([['name','krishna'],['branch','cse']]);

map.forEach((value,key)=>
{ 
    console.log(key)
    console.log(value)
    
})
// for of return key value pair.
for(let x of map)
{
    console.log(x)
}