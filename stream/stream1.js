const fs=require('fs')
const http=require('http')

const server=http.createServer();
server.on('request',(req,res)=>
{
    // fs.readFile('file.txt',(err,data)=>
    // {
    //     if(err)
    //     {
    //         return 'error'
    //     }
    //     else{
    //         res.end(data.toString());
    //     }
    // })
    //.......................using stream
    const data=fs.createReadStream('file.txt')
    data.on('data',(chunkData)=>
    {
        res.write(chunkData)
    })
    data.on('end',()=>
    {
        res.end();
    })
    data.on('error',(err)=>
    {
      res.end('file not found');
    })
})
server.listen(3000)