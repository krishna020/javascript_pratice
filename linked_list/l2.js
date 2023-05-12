 class List1
 {
    constructor(data)
    {
       this.head=
        {
            value:data,
            next:null
        }
        this.tail=this.head
    }
    append(data)
    {
        const newNode=
        {
            value:data,
            next:null
        }
        this.tail.next=newNode
        this.tail=newNode;
    }
 }
 const new_list=new List1(23);
 new_list.append(11)
 new_list.append(22)
 console.log(new_list)