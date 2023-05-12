// queue constructor

class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}

class Queue{
    constructor(data)
    {
       const node=new Node(data)
       this.first=node
       this.last=node
    }

    enqueue(data)
    {
     const nNode=new Node(data);
     if(this.length==0)
     {
        this.first=nNode
        this.last=nNode
     } 
       this.last.next=nNode
       this.last=nNode
       console.log(this)
    }
   
}
const q=new Queue(2)
q.enqueue(3)
q.enqueue(5)