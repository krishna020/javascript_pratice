//Find the Union and Intersection of the two sorted arrays

const first_array=[1,2,3]

const second_array=[2,3,4,5]

function union_data(first_array,second_array)
{
   const concat_array=first_array.concat(second_array)
   return [...new Set(concat_array)]
}

console.log(union_data(first_array,second_array))
