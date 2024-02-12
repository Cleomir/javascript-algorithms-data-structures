// Queue is a FIFO (First In First Out) data structure. The first element added to the queue will be the first one to be removed.
class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue function
  enqueue(element) {
    // Adding element to the queue
    this.items.push(element);
  }

  // Dequeue function
  dequeue() {
    // Removing element from the queue
    // Returns underflow when called on empty queue
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  // Front function
  front() {
    // Returns the Front element of the queue without removing it
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }

  // isEmpty function
  isEmpty() {
    // Return true if the queue is empty
    return this.items.length == 0;
  }

  // printQueue function
  printQueue() {
    let str = "";
    for (const element of this.items) {
      str += element + " ";
    }

    return str;
  }
}

module.exports = Queue;
