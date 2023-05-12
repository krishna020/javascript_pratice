
class Node
{
   constructor(data)
   {
    this.data=data;
    this.next=null;
   }
}

class Stack
{
    constructor(data)
    {
       const new_node=new Node(data);
       this.top=new_node
    }
}

const obj=new Stack(11);
console.log(obj)