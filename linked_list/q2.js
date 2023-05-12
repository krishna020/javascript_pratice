// Dequeue

class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class Queue{
    constructor(data)
    {
        const node=new Node(data);
        this.first=node
        this.last=node
    }
    Dequeue()
    {
        if(this.length==0)
        {
            return "underflow"
        }
         let temp=this.first;
      if(this.length==1)
      {
        this.first=null;
        this.last=null
      }
      else{
        this.first=this.first.next
        temp.next=null
      }
      console.log(temp)
    }
}

const data=new Queue(2)
data.Dequeue();