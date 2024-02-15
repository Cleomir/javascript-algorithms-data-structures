const Graph = require("./graph");

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test("addVertex method", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");

    expect(graph.getVertices()).toEqual(["A", "B", "C"]);
  });

  test("addEdge method", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addEdge("A", "B");
    graph.addEdge("B", "C");

    expect(graph.getEdges("A")).toEqual(["B"]);
    expect(graph.getEdges("B")).toEqual(["A", "C"]);
    expect(graph.getEdges("C")).toEqual(["B"]);
  });

  test("removeVertex method", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addEdge("A", "B");
    graph.addEdge("B", "C");
    graph.removeVertex("B");

    expect(graph.getVertices()).toEqual(["A", "C"]);
    expect(graph.getEdges("A")).toEqual([]);
    expect(graph.getEdges("C")).toEqual([]);
  });

  test("removeEdge method", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addEdge("A", "B");
    graph.addEdge("B", "C");
    graph.removeEdge("A", "B");

    expect(graph.getEdges("A")).toEqual([]);
    expect(graph.getEdges("B")).toEqual(["C"]);
    expect(graph.getEdges("C")).toEqual(["B"]);
  });

  test("depthFirstTraversal method", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addEdge("A", "B");
    graph.addEdge("B", "C");
    graph.addEdge("C", "D");

    const consoleOutput = [];
    const mockedConsoleLog = (output) => consoleOutput.push(output);
    console.log = mockedConsoleLog;

    graph.depthFirstTraversal("A");

    expect(consoleOutput).toEqual(["A", "B", "C", "D"]);
  });

  test("breadthFirstTraversal method", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addEdge("A", "B");
    graph.addEdge("B", "C");
    graph.addEdge("C", "D");

    const consoleOutput = [];
    const mockedConsoleLog = (output) => consoleOutput.push(output);
    console.log = mockedConsoleLog;

    graph.breadthFirstTraversal("A");

    expect(consoleOutput).toEqual(["A", "B", "C", "D"]);
  });
});
