// Max Binary Heap is a binary tree where the parent nodes are always larger than the child nodes.
class MaxBinaryHeap {
  constructor() {
    // Initialize an empty array to store the values
    this.values = [];
  }

  // insert method inserts a new value into the heap
  insert(value) {
    // Add the new value to the end of the array
    this.values.push(value);
    // Bubble up the new value to its correct position
    this.bubbleUp();
  }

  // bubbleUp method moves the new value to its correct position after insertion
  bubbleUp() {
    // Start with the last inserted value
    let index = this.values.length - 1;
    const element = this.values[index];

    // Continue until the element is at the root or is no longer greater than its parent
    while (index > 0) {
      // Find the parent's index
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      // If the element is not greater than the parent, break the loop
      if (element <= parent) break;

      // Swap the element with the parent
      this.values[parentIndex] = element;
      this.values[index] = parent;
      // Update the index to the parent's index
      index = parentIndex;
    }
  }

  // extractMax method removes the maximum value from the heap
  extractMax() {
    // Remove the maximum value from the heap
    const max = this.values[0];
    // Remove the last value from the heap
    const end = this.values.pop();

    // If there are still values in the heap
    if (this.values.length > 0) {
      // Move the last value to the root
      this.values[0] = end;
      // Sink down the root value to its correct position
      this.sinkDown();
    }

    // Return the maximum value
    return max;
  }

  // sinkDown method moves the root value to its correct position after extraction
  sinkDown() {
    // Start with the root element
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    // Continue until the element is no longer less than its children
    while (true) {
      // Find the indices of the element's children
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      // If the left child exists, and is greater than the element, plan to swap with the left child
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      // If the right child exists
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        // And if the right child is greater than the element and the left child, plan to swap with the right child
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      // If no swap is planned, break the loop
      if (swap === null) break;

      // Swap the element with the child
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      // Update the index to the child's index
      index = swap;
    }
  }
}

module.exports = MaxBinaryHeap;
