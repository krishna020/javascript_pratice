// how to create http server

// const http=require('http')

// http.createServer(function(req,res)
// {
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.end('krishna sahu')
// }).listen(3000)




const http=require('http')

http.createServer((req,res)=>
{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('krishna sahu')
}).listen(3000)







