// Stack is a linear data structure that follows the Last In First Out (LIFO) principle.
class Stack {
  // Constructor initializes an empty array to store stack items
  constructor() {
    this.items = [];
  }

  // push method adds an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // pop method removes and returns the top element of the stack
  // If the stack is empty, it returns "Underflow"
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // peek method returns the top element of the stack without removing it
  // If the stack is empty, it returns "No elements in the stack"
  peek() {
    if (this.isEmpty()) {
      return "No elements in the stack";
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty method checks if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // size method returns the number of elements in the stack
  size() {
    return this.items.length;
  }

  // clear method removes all elements from the stack
  clear() {
    this.items = [];
  }
}

module.exports = Stack;
