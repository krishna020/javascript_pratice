/*
A callback function is called after a given task. It allows other code
 to be run in the meantime and prevents any blocking. 
  Being an asynchronous platform, Node.js heavily relies on callback.
   All APIs of Node are written to support callbacks.
*/

var fs=require('fs')
const data=fs.readFileSync('file_name')
console.log(data.toString())
console.log('program ended')
// file data then program ended statement.

var cs=require('fs')
cs.readFile('file_name',(err,data)=>
{
  if(err)
  {
    return new Error();
  }
  else{
    console.log(data.toString())
  }
})
console.log('ended program')
// ended program then print file data.
