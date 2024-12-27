class QuS {
    constructor() {
        this.stack = []
    }
    enqueue(elem) {
        return this.stack.push(elem)
    }
    dequeue() {
        return this.stack.shift()
    }
    printStack(){
        return this.stack;
    }
}

const queueStack = new QuS()
queueStack.enqueue("A")
queueStack.enqueue("B")
queueStack.enqueue("C")
queueStack.enqueue("D")
console.log(queueStack.dequeue())
console.log(queueStack.printStack())
