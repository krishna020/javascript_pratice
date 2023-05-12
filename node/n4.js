const http=require('http')
var data=require('./n3')

http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'})
   // res.write(data.data('rahul sahu'))
   res.write(req.url)
    res.end('bye')
}).listen(3000)