// he Node.js file system module allows you to work with the file system on your computer.

/*
readFunction, take two parameter file_name and callback function
callback function take 2 parameter err, data.
*/
const http=require('http')
const fs=require('fs')

http.createServer(function(req,res)
{
    fs.readFile('fs_data.html',function(err,data)
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end();
    })
}).listen(8080)