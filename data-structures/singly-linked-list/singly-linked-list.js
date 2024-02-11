class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  // Constructor method to initialize the singly linked list
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // This method adds a new node to the end of the singly linked list
  push(value) {
    // Create a new node using the value passed to the function
    const newNode = new Node(value);
    // If there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // Increment the length by one
    this.length++;
    // Return the linked list
    return this;
  }

  // This method removes a node from the end of the singly linked list
  pop() {
    // If there are no nodes in the list, return undefined
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    // Loop through the list until the tail is reached
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // Set the tail to be the second to last node
    this.tail = newTail;
    // Set the next property of the second to last node to be null
    this.tail.next = null;
    // Decrement the length of the list by 1
    this.length--;
    // If the length of the list is 0, set the head and tail to be null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // Return the value of the node removed
    return current;
  }

  // This method removes a node from the beginning of the singly linked list
  shift() {
    // If there are no nodes, return undefined
    if (!this.head) return undefined;

    // Store the current head property in a variable
    const currentHead = this.head;
    // Set the head property to be the current head's next property
    this.head = currentHead.next;
    // Decrement the length by 1
    this.length--;
    // If the length of the list is 0, set the tail to be null
    if (this.length === 0) {
      this.tail = null;
    }

    // Return the value of the node removed
    return currentHead;
  }

  // This method adds a new node to the beginning of the singly linked list
  unshift(value) {
    // Create a new node using the value passed to the function
    const newNode = new Node(value);

    // If there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Set the newly created node's next property to be the current head property on the list
      newNode.next = this.head;
      // Set the head property on the list to be that newly created node
      this.head = newNode;
    }

    // Increment the length of the list by 1
    this.length++;

    // Return the linked list
    return this;
  }

  // This method retrieves a node by its position in the singly linked list
  get(index) {
    // If the index is less than 0 or greater or equal to the length of the list, return null
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    // Loop through the list until the index is reached
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    // Return the node at the specified index
    return current;
  }

  // This method changes the value of a node based on its position in the singly linked list
  set(index, value) {
    // Use the get method to find the specific node
    const foundNode = this.get(index);
    // If the node is not found, return false
    if (!foundNode) return false;
    // If the node is found, set the value of that node to be the value passed to the function and return true
    foundNode.value = value;

    return true;
  }

  // This method adds a node to the singly linked list at a specific position
  insert(index, value) {
    // If the index is less than 0 or greater than the length, return false
    if (index < 0 || index > this.length) return false;
    // If the index is the same as the length, push a new node to the end of the list
    if (index === this.length) return !!this.push(value);
    // If the index is 0, unshift a new node to the start of the list
    if (index === 0) return !!this.unshift(value);

    // Otherwise, use the get method to access the node at the index - 1
    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const temp = prev.next;

    // Set the next property on that node to be the new node
    prev.next = newNode;
    // Set the next property on the new node to be the previous next
    newNode.next = temp;
    // Increment the length
    this.length++;

    // Return true
    return true;
  }

  // This method removes a node from the singly linked list at a specific position
  remove(index) {
    // If the index is less than 0 or greater than the length, return undefined
    if (index < 0 || index >= this.length) return undefined;
    // If the index is the same as the length - 1, pop
    if (index === this.length - 1) return this.pop();
    // If the index is 0, shift
    if (index === 0) return this.shift();

    // Otherwise, use the get method to access the node at the index - 1
    const prev = this.get(index - 1);
    // Set the next property on that node to be the next of the next node
    const removed = prev.next;
    prev.next = removed.next;
    // Decrement the length
    this.length--;

    // Return the value of the node removed
    return removed;
  }

  // This method reverses the singly linked list in place
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
      // Move to the next node
      prev = node;
      node = next;
    }

    // Return the reversed list
    return this;
  }

  // This method prints the singly linked list
  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    console.log(arr);
  }

  // This method returns the singly linked list as an array
  toArray() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }

  // This method returns the singly linked list as a string
  toString() {
    return this.toArray().join(" -> ");
  }
}

module.exports = SinglyLinkedList;
