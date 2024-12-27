class SuQ {
    constructor() {
        this.queue = []
    }

    push(elem) {
        this.queue.push(elem)
    }

    pop() {
        return this.queue.pop()
    }
    
    printQueue() {
        return this.queue;
    }
}

const stackQueue = new SuQ()
stackQueue.push("A")
stackQueue.push("B")
stackQueue.push("C")
stackQueue.push("D")
console.log(stackQueue.pop())
console.log(stackQueue.pop())
console.log(stackQueue.printQueue())