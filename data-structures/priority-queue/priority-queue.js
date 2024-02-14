// Priority Queue is an extension of the queue with following properties.
// 1. Every item has a priority associated with it.
// 2. An element with high priority is dequeued before an element with low priority.
// 3. If two elements have the same priority, they are served according to their order in the queue.
class PriorityQueue {
  constructor() {
    this.queue = []; // Initialize an empty array to store the elements of the queue
  }

  // Method to add an element to the queue with a priority
  enqueue(element, priority) {
    const queueElement = { element, priority }; // Create an object with the element and its priority
    let added = false; // Flag to track if the element has been added to the queue

    // Iterate through the queue to find the correct position to insert the element based on its priority
    for (let i = 0; i < this.queue.length; i++) {
      if (queueElement.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, queueElement); // Insert the element at the correct position
        added = true; // Set the flag to true
        break; // Exit the loop
      }
    }

    // If the element has not been added to the queue, push it to the end
    if (!added) {
      this.queue.push(queueElement);
    }
  }

  // Method to remove and return the element with the highest priority from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty"; // If the queue is empty, return a message
    }
    return this.queue.shift().element; // Remove and return the first element in the queue
  }

  // Method to return the element with the highest priority without removing it from the queue
  front() {
    if (this.isEmpty()) {
      return "Queue is empty"; // If the queue is empty, return a message
    }
    return this.queue[0].element; // Return the first element in the queue
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.queue.length === 0; // Return true if the queue is empty, false otherwise
  }

  // Method to return the size of the queue
  size() {
    return this.queue.length; // Return the length of the queue
  }

  // Method to print the elements of the queue
  print() {
    let result = "";
    for (let i = 0; i < this.queue.length; i++) {
      result += `${this.queue[i].element} `; // Concatenate the elements of the queue to a string
    }
    return result.trim(); // Remove leading and trailing whitespace from the string
  }
}

module.exports = PriorityQueue;
