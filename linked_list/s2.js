class Node{
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
        const newNode=new Node(data)
        this.top=newNode;
    }
    push(data)
    {
        const nNode=new Node(data);
        console.log("hey...",this)
        if(this.length==0)
        {
            this.top=nNode;   
        }
        else{
            nNode.next=this.top;
            this.top=nNode;
        }
        console.log(this)
    }
}

const obj=new Stack(2)
obj.push(3)
obj.push(4)
console.log(obj)