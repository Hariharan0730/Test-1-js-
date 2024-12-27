class Queue {
    constructor() {
        this.items = []
        this.frontIndex = 0
        this.lastIndex = 0
    }
    enqueue(item) {
        this.items[this.lastIndex] = item
        this.lastIndex++
        return item + " is inserted!"
    }
    dequeue(){
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item;
    }
    printQueue() {
        return this.items;
    }
}

const queue = new Queue()
queue.enqueue("A")
queue.enqueue("B")
queue.enqueue("C")
console.log(queue.printQueue())
console.log(queue.dequeue())
console.log(queue.printQueue())