class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  // Constructor method to initialize the doubly linked list
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // This method adds a new node to the end of the doubly linked list
  push(value) {
    // Create a new node using the value passed to the function
    const newNode = new Node(value);

    // If there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Otherwise, set the next property on the tail to be the new node and set the previous property on the new node to be the tail
      this.tail.next = newNode;
      newNode.prev = this.tail;
      // Set the tail property on the list to be the newly created node
      this.tail = newNode;
    }

    // Increment the length by one
    this.length++;

    // Return the linked list
    return this;
  }

  // This method removes a node from the end of the doubly linked list
  pop() {
    // If there are no nodes in the list, return undefined
    if (!this.head) return undefined;

    // Store the current tail in a variable to return later
    const poppedNode = this.tail;

    // If the length of the list is 1, set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Update the tail to be the previous node
      this.tail = poppedNode.prev;
      // Set the new tail's next to be null
      this.tail.next = null;
      // Set the poppedNode's previous to be null
      poppedNode.prev = null;
    }

    // Decrement the length of the list by 1
    this.length--;

    // Return the removed node
    return poppedNode;
  }

  // This method removes a node from the beginning of the doubly linked list
  shift() {
    // If there are no nodes in the list, return undefined
    if (!this.head) return undefined;

    // Store the current head in a variable to return later
    const oldHead = this.head;

    // If the length of the list is 1, set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Update the head to be the next of the old head
      this.head = oldHead.next;
      // Set the new head's previous to be null
      this.head.prev = null;
      // Set the old head's next to be null
      oldHead.next = null;
    }

    // Decrement the length of the list by 1
    this.length--;

    // Return the removed node
    return oldHead;
  }

  // This method adds a new node to the beginning of the doubly linked list
  unshift(value) {
    // Create a new node using the value passed to the function
    const newNode = new Node(value);

    // If there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Set the previous property on the head of the list to be the new node
      this.head.prev = newNode;
      // Set the next property on the new node to be the head property
      newNode.next = this.head;
      // Update the head to be the new node
      this.head = newNode;
    }

    // Increment the length by one
    this.length++;

    // Return the linked list
    return this;
  }

  // This method retrieves a node by its position in the doubly linked list
  get(index) {
    // If the index is less than 0 or greater or equal to the length of the list, return null
    if (index < 0 || index >= this.length) return null;

    // If the index is less than or equal to half the length of the list
    if (index <= this.length / 2) {
      // Loop through the list starting from the head and loop towards the middle
      let current = this.head;

      for (let i = 0; i < index; i++) {
        current = current.next;
      }

      return current;
    } else {
      // If the index is greater than half the length of the list
      // Loop through the list starting from the tail and loop towards the middle
      let current = this.tail;

      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }

      return current;
    }
  }

  // This method updates the value of a node in the doubly linked list at a specific position
  set(index, value) {
    // Use the get method to find the specific node
    const foundNode = this.get(index);
    // If the node is not found, return false
    if (!foundNode) return false;
    // If the node is found, set the value of that node to be the value passed to the function and return true
    foundNode.value = value;

    return true;
  }

  // This method adds a node in the doubly linked list at a specific position
  insert(index, value) {
    // If the index is less than zero or greater than the length, return false
    if (index < 0 || index > this.length) return false;
    // If the index is the same as the length, push a new node to the end of the list
    if (index === this.length) return !!this.push(value);
    // If the index is 0, unshift a new node to the start of the list
    if (index === 0) return !!this.unshift(value);

    // Use the get method to access the index - 1 node
    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    // Set the next and previous properties on the correct nodes to link everything together
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    // Increment the length of the list by 1
    this.length++;

    return true;
  }

  // This method removes a node in the doubly linked list at a specific position
  remove(index) {
    // If the index is less than zero or greater than or equal to the length, return undefined
    if (index < 0 || index >= this.length) return undefined;
    // If the index is 0, shift
    if (index === 0) return this.shift();
    // If the index is the same as the length - 1, pop
    if (index === this.length - 1) return this.pop();

    // Use the get method to retrieve the item to be removed
    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    // Update the next and previous properties to remove the found node from the list
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    // Set the next and previous of the removed node to null
    removedNode.next = null;
    removedNode.prev = null;

    // Decrement the length of the list by 1
    this.length--;

    return removedNode;
  }

  // This method prints the values of the doubly linked list
  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    console.log(arr);
  }

  // This method prints the values of the doubly linked list in reverse
  printReverse() {
    const arr = [];
    let current = this.tail;

    while (current) {
      arr.push(current.value);
      current = current.prev;
    }

    console.log(arr);
  }

  // This method reverses the doubly linked list in place
  reverse() {
    // Swap the head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    // Loop through the list
    for (let i = 0; i < this.length; i++) {
      // Store the next node
      next = node.next;
      // Set the next node to be the previous node
      node.next = prev;
      // Set the previous node to be the current node
      node.prev = next;
      // Move to the next node
      prev = node;
      node = next;
    }

    // Return the reversed list
    return this;
  }

  // This method returns the doubly linked list as an array
  toArray() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }

  // This method returns the doubly linked list as an array in reverse
  toArrayReverse() {
    const arr = [];
    let current = this.tail;

    while (current) {
      arr.push(current.value);
      current = current.prev;
    }

    return arr;
  }

  // This method returns the doubly linked list as a string
  toString() {
    return this.toArray().join(" ");
  }

  // This method returns the doubly linked list as a string in reverse
  toStringReverse() {
    return this.toArrayReverse().join(" ");
  }
}

module.exports = DoublyLinkedList;
