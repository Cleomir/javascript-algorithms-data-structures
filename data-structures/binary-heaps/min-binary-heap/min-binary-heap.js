// Min Binary Heap is a binary tree where the parent nodes are always smaller than the child nodes.
class MinBinaryHeap {
  constructor() {
    this.heap = []; // Array to store the heap elements
  }

  // Insert a new value into the heap
  insert(value) {
    this.heap.push(value); // Add the value to the end of the heap
    this.bubbleUp(); // Restore the heap property by bubbling up the value
  }

  // Extract the minimum value from the heap
  extractMin() {
    const min = this.heap[0]; // Store the minimum value
    const last = this.heap.pop(); // Remove the last element from the heap

    if (this.heap.length > 0) {
      this.heap[0] = last; // Replace the root with the last element
      this.sinkDown(); // Restore the heap property by sinking down the root
    }

    return min; // Return the minimum value
  }

  // Restore the heap property by bubbling up the last inserted value
  bubbleUp() {
    let index = this.heap.length - 1; // Index of the last inserted value
    const element = this.heap[index]; // Last inserted value

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2); // Index of the parent node
      const parent = this.heap[parentIndex]; // Parent node value

      if (element >= parent) break; // If the element is greater or equal to the parent, stop bubbling up

      this.heap[parentIndex] = element; // Swap the element with its parent
      this.heap[index] = parent;
      index = parentIndex; // Update the index to the parent index
    }
  }

  // Restore the heap property by sinking down the root
  sinkDown() {
    let index = 0; // Index of the root
    const length = this.heap.length; // Length of the heap
    const element = this.heap[0]; // Root value

    while (true) {
      const leftChildIndex = 2 * index + 1; // Index of the left child
      const rightChildIndex = 2 * index + 2; // Index of the right child
      let leftChild, rightChild;
      let swap = null; // Index to swap with

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex]; // Left child value

        if (leftChild < element) {
          swap = leftChildIndex; // If the left child is smaller than the root, set swap index to leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]; // Right child value

        if (
          (swap === null && rightChild < element) || // If swap is null and right child is smaller than the root
          (swap !== null && rightChild < leftChild) // If swap is not null and right child is smaller than the left child
        ) {
          swap = rightChildIndex; // Set swap index to rightChildIndex
        }
      }

      if (swap === null) break; // If swap is null, the heap property is restored, break the loop

      this.heap[index] = this.heap[swap]; // Swap the root with the element at swap index
      this.heap[swap] = element;
      index = swap; // Update the index to the swap index
    }
  }
}

module.exports = MinBinaryHeap;
