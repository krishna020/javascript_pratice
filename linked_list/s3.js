// pop element in stak using linked list.

class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class Stack{
    constructor(data)
    {
        const node=new Node(data);
        this.top=node
    }
    push(data)
    {
        const newNode=new Node(data);
        if(this.length==0)
        {
            this.top=newNode;
        }
        else{
            newNode.next= this.top
            this.top=newNode
        }
        console.log(this)
    }
    pop()
    {
        if(this.length==0)
        {
            console.log('empty stack')
        }
       
             let temp=this.top;
             this.top=this.top.next;
             temp.next=null;

            console.log(temp)
    }
   
}

const data=new Stack(1)
console.log('pushing.....')
data.push(2)
data.push(3)
data.push(4)
console.log('poping....')
data.pop()