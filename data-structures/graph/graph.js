// Undirected graph using an adjacency list.
class Graph {
  constructor() {
    this.vertices = new Map(); // Map to store the vertices and their adjacent vertices
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, new Set()); // Create a new Set to store the adjacent vertices
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      // Check if both vertices exist in the graph
      this.vertices.get(vertex1).add(vertex2); // Add vertex2 to the adjacency set of vertex1
      this.vertices.get(vertex2).add(vertex1); // Add vertex1 to the adjacency set of vertex2
    }
  }

  // Remove a vertex from the graph
  removeVertex(vertex) {
    if (this.vertices.has(vertex)) {
      const adjacentVertices = this.vertices.get(vertex); // Get the adjacent vertices of the vertex
      for (const adjacentVertex of adjacentVertices) {
        this.vertices.get(adjacentVertex).delete(vertex); // Remove the vertex from the adjacency set of each adjacent vertex
      }
      this.vertices.delete(vertex); // Remove the vertex from the graph
    }
  }

  // Remove an edge between two vertices
  removeEdge(vertex1, vertex2) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      // Check if both vertices exist in the graph
      this.vertices.get(vertex1).delete(vertex2); // Remove vertex2 from the adjacency set of vertex1
      this.vertices.get(vertex2).delete(vertex1); // Remove vertex1 from the adjacency set of vertex2
    }
  }

  // Get all the vertices in the graph
  getVertices() {
    return Array.from(this.vertices.keys());
  }

  // Get all the adjacent vertices of a vertex
  getEdges(vertex) {
    if (this.vertices.has(vertex)) {
      return Array.from(this.vertices.get(vertex));
    }
    return [];
  }

  // Convert the graph to a string representation
  toString() {
    let result = "";
    for (const [vertex, adjacentVertices] of this.vertices) {
      result += `${vertex} -> ${Array.from(adjacentVertices).join(", ")}\n`;
    }
    return result;
  }

  // Perform depth-first traversal starting from a given vertex
  depthFirstTraversal(startVertex) {
    const visited = new Set(); // Set to keep track of visited vertices
    this.depthFirstTraversalHelper(startVertex, visited);
  }

  // Helper function for depth-first traversal
  depthFirstTraversalHelper(vertex, visited) {
    visited.add(vertex); // Mark the vertex as visited
    console.log(vertex); // Output the vertex

    const adjacentVertices = this.vertices.get(vertex); // Get the adjacent vertices of the current vertex
    for (const adjacentVertex of adjacentVertices) {
      if (!visited.has(adjacentVertex)) {
        // If the adjacent vertex has not been visited, recursively call the helper function
        this.depthFirstTraversalHelper(adjacentVertex, visited);
      }
    }
  }

  // Perform breadth-first traversal starting from a given vertex
  breadthFirstTraversal(startVertex) {
    const visited = new Set(); // Set to keep track of visited vertices
    const queue = [startVertex]; // Queue to store the vertices to be visited
    visited.add(startVertex); // Mark the start vertex as visited

    while (queue.length > 0) {
      const vertex = queue.shift(); // Dequeue a vertex from the queue
      console.log(vertex); // Output the vertex

      const adjacentVertices = this.vertices.get(vertex); // Get the adjacent vertices of the current vertex
      for (const adjacentVertex of adjacentVertices) {
        if (!visited.has(adjacentVertex)) {
          // If the adjacent vertex has not been visited, mark it as visited and enqueue it
          visited.add(adjacentVertex);
          queue.push(adjacentVertex);
        }
      }
    }
  }
}

module.exports = Graph;
