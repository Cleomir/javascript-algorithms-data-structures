const Queue = require("./queue");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("enqueue method", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.printQueue()).toBe("1 2 3 ");
  });

  test("dequeue method", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    const dequeuedElement = queue.dequeue();

    expect(dequeuedElement).toBe(1);
    expect(queue.printQueue()).toBe("2 ");
  });

  test("dequeue method with empty queue", () => {
    const dequeuedElement = queue.dequeue();

    expect(dequeuedElement).toBe("Underflow");
  });

  test("front method", () => {
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.front()).toBe(1);
  });

  test("front method with empty queue", () => {
    expect(queue.front()).toBe("No elements in Queue");
  });

  test("isEmpty method", () => {
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
  });

  test("printQueue method", () => {
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.printQueue()).toBe("1 2 ");
  });
});
