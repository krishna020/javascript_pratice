const salary={
    peter:100,
    sam:1200,
    subham:1100,
    pet:1000,
    priti:1020,
}
let sum=0;
for(let x in salary)
{
   sum=sum+salary[x]
}
console.log(sum)