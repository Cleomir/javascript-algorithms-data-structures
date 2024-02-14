const PriorityQueue = require("./priority-queue");

describe("PriorityQueue", () => {
  let priorityQueue;

  beforeEach(() => {
    priorityQueue = new PriorityQueue();
  });

  test("enqueue method", () => {
    priorityQueue.enqueue("A", 2);
    priorityQueue.enqueue("B", 1);
    priorityQueue.enqueue("C", 3);

    expect(priorityQueue.print()).toBe("B A C");
  });

  test("dequeue method", () => {
    priorityQueue.enqueue("A", 2);
    priorityQueue.enqueue("B", 1);
    const dequeuedElement = priorityQueue.dequeue();

    expect(dequeuedElement).toBe("B");
    expect(priorityQueue.print()).toBe("A");
  });

  test("dequeue method with empty queue", () => {
    const dequeuedElement = priorityQueue.dequeue();

    expect(dequeuedElement).toBe("Queue is empty");
  });

  test("front method", () => {
    priorityQueue.enqueue("A", 2);
    priorityQueue.enqueue("B", 1);

    expect(priorityQueue.front()).toBe("B");
  });

  test("front method with empty queue", () => {
    expect(priorityQueue.front()).toBe("Queue is empty");
  });

  test("isEmpty method", () => {
    expect(priorityQueue.isEmpty()).toBe(true);

    priorityQueue.enqueue("A", 2);

    expect(priorityQueue.isEmpty()).toBe(false);
  });

  test("size method", () => {
    expect(priorityQueue.size()).toBe(0);

    priorityQueue.enqueue("A", 2);
    priorityQueue.enqueue("B", 1);

    expect(priorityQueue.size()).toBe(2);
  });

  test("print method", () => {
    priorityQueue.enqueue("A", 2);
    priorityQueue.enqueue("B", 1);

    expect(priorityQueue.print()).toBe("B A");
  });
});
