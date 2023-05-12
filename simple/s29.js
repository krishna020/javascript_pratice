// JavaScript Program to Check if An Array Contains a Specified Value

//optimize

const arr=[1,2,3,6,3,5,7,9,4,6,3,5]

// const result=arr.includes(0)

// if(result)
// {
//     console.log('contain')
// }
// else{
//     console.log('not contain')
// }

function check(arr,item)
{let counter=false
    for(let i=0;i<arr.length;i++)
    {
      if(item===arr[i])
      {
         counter=true;
      }
    }
    if(counter)
    {
        console.log('contain')
    }
    else{
        console.log('not contain')
    }
}
check(arr,1)