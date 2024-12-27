class Stack{
    constructor(){
        this.items = [];
    }
    push(elem){
        return this.items.push(elem)
    }
    pop(){
        if(this.items.length===0){
            return "Undefined"
        }
        else{
            return this.items.pop();
        }
    }
    peek(){
        return this.items[this.items.length-1]
    }
    printStack(){
        return this.items;
    }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");
console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.printStack());