function addArray(arr1,arr2){
    let left=0,right=arr1.length-1
   let arrNew=[]
   let carry=0;
   let sum=0
     while(left<=right){
      sum=arr1[right]+arr2[right]+carry
      if(right==0){
       arrNew.unshift(sum)
       break
       }
     let rem=sum%10
     arrNew.unshift(rem);
      carry =Math.floor(sum/10)
        right--;
     }
     return arrNew
 }

 let arr1=[8,8,8]
 let arr2=[8,8,8]
 console.log(addArray(arr1,arr1))