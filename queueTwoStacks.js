/* Implement a queue with 2 stacks. Y our queue
should have an enqueue and dequeue function
and it should be "first in first out" (FIFO). */

class Queue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  };

  enqueue(n) {
    this.inStack.push(n)
  };

  dequeue() {
    let toDequeue = this.inStack.shift()
    this.outStack.push(toDequeue);
  };
}

let newQueue = new Queue();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
console.log(newQueue.inStack);
newQueue.dequeue();
console.log(newQueue.outStack);
newQueue.dequeue();
console.log(newQueue.dequeue());
console.log(newQueue.outStack);
