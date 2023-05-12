// JavaScript Program to Split Array into Smaller Chunks

// program to split array into smaller chunks
// here we are using splice beacause it change the original content.

// function chunk(arr,chunk_number)
// {
//    while(arr.length!=0){

//     let result=arr.splice(0,chunk_number)
//     console.log(result)
    
//    }    
// }
let arr=[1,2,6,5,3,7,8,9,0,4,5]
//chunk(arr,3)

function data(arr,chunk)
{
   
   while(arr.length!=0)
   {
      let output=arr.splice(0,chunk)
      console.log(output)
   }
   
}
data(arr,3)


