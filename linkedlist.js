class Node{
    constructor(val, next=null){
        this.val = val;
        this.next = next;
    }
}

class LinkedList{
    constructor(vals=[]){
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    push(val){
        const newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length+=1;
    }
}

module.exports = LinkedList;