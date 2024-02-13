// Node class represents a single node in the Binary Search Tree
class Node {
  constructor(data) {
    this.data = data; // holds the data of the node
    this.left = null; // holds the reference to the left child
    this.right = null; // holds the reference to the right child
  }
}

// BinarySearchTree class represents the Binary Search Tree
class BinarySearchTree {
  constructor() {
    this.root = null; // holds the reference to the root node
  }

  // insert method inserts a new node with the given data into the tree
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // insertNode method inserts a new node into the tree
  insertNode(node, newNode) {
    // If the data of the new node is less than the data of the current node
    if (newNode.data < node.data) {
      // If there's no left child for the current node
      if (node.left === null) {
        // Insert the new node as the left child
        node.left = newNode;
      } else {
        // If there's a left child, recursively call the insertNode method
        // The left child becomes the current node and the process repeats
        this.insertNode(node.left, newNode);
      }
    }
    // If the data of the new node is greater than or equal to the data of the current node
    else {
      // If there's no right child for the current node
      if (node.right === null) {
        // Insert the new node as the right child
        node.right = newNode;
      } else {
        // If there's a right child, recursively call the insertNode method
        // The right child becomes the current node and the process repeats
        this.insertNode(node.right, newNode);
      }
    }
  }

  // remove method removes a node with the given data from the tree
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  // removeNode method removes a node from the tree
  removeNode(node, key) {
    if (node === null) {
      return null;
    }

    // If the key is less than the node's data, go to the left subtree
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    // If the key is greater than the node's data, go to the right subtree
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // If the key is equal to the node's data, this is the node to be removed
    else {
      // If the node has no children, simply remove it by setting it to null
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // If the node has no left child, replace the node with its right child
      if (node.left === null) {
        node = node.right;
        return node;
      }

      // If the node has no right child, replace the node with its left child
      else if (node.right === null) {
        node = node.left;
        return node;
      }

      // If the node has two children, find the minimum node of the right subtree
      const aux = this.findMinNode(node.right);
      // Replace the node's data with the minimum data
      node.data = aux.data;
      // Remove the minimum node from the right subtree
      node.right = this.removeNode(node.right, aux.data);

      return node;
    }
  }

  // findMinNode method returns the node with the minimum data
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  // getRootNode method returns the root node of the tree
  getRootNode() {
    return this.root;
  }

  // search method searches for a node with the given data in the tree
  search(node, data) {
    if (node === null) {
      return null;
    }

    // If the data is less than the node's data, search the left subtree
    else if (data < node.data) {
      return this.search(node.left, data);
    }
    // If the data is greater than the node's data, search the right subtree
    else if (data > node.data) {
      return this.search(node.right, data);
    }
    // If the data is equal to the node's data, return the node
    else {
      return node;
    }
  }

  // inOrder method traverses the tree in in-order manner
  inOrder(node, callback) {
    if (node !== null) {
      this.inOrder(node.left, callback);
      callback(node.data);
      this.inOrder(node.right, callback);
    }
  }

  // preOrder method traverses the tree in pre-order manner
  preOrder(node, callback) {
    if (node !== null) {
      callback(node.data);
      this.preOrder(node.left, callback);
      this.preOrder(node.right, callback);
    }
  }

  // postOrder method traverses the tree in post-order manner
  postOrder(node, callback) {
    if (node !== null) {
      this.postOrder(node.left, callback);
      this.postOrder(node.right, callback);
      callback(node.data);
    }
  }
}

module.exports = BinarySearchTree;
