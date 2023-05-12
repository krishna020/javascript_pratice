// create a linkList
class LinkedList
{
    constructor(data)
    {
       this.head={
        value:data,
        next:null

       }
       this.tail=this.head
       this.length=1

    }
}

const list=new LinkedList(10);
console.log(list)