const fs=require('fs')
const person={
    name:'krishna',
    city:'Prayagraj'
}

const json=JSON.stringify(person)
// fs.writeFile('json.json',json,(err)=>
// {
//     if(err)
//     {
//         console.log('error')
//     }
//     else{
//         console.log('done')
//     }
// })

// read file

fs.readFile('json.json',(err,data)=>
{
    if(err)
    {
        console.log('error')
    }
    else{
        console.log(data.toString())
    }
})
