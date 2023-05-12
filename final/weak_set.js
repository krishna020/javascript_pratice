const ws=new WeakSet();

//ws.add(1)
//console.log(ws) //error

// we can only add object in Weakset

ws.add({name:'krishna'})
ws.add({name:'Rahul'})
console.log(ws)
// we can't iterate
for(let x of ws)
{
    console.log(x)
}