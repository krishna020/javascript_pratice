//JavaScript Program to Check if the Numbers Have Same Last Digit
// palindrom of number.

function reverse_number(n1,n2)
{
   let remender1=n1%10;
   let remender2=n2%10;
   if(remender1===remender2)
   {
    console.log('last digit is equal')
   }
   else{
    console.log('not equal')
   }
  }

reverse_number(120,130)


