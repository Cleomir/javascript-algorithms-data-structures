const Stack = require("./stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("push method", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size()).toBe(3);
    expect(stack.peek()).toBe(3);
  });

  test("pop method", () => {
    stack.push(1);
    stack.push(2);
    const poppedElement = stack.pop();

    expect(poppedElement).toBe(2);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(1);
  });

  test("pop method with empty stack", () => {
    const poppedElement = stack.pop();

    expect(poppedElement).toBe("Underflow");
  });

  test("peek method", () => {
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
  });

  test("peek method with empty stack", () => {
    expect(stack.peek()).toBe("No elements in the stack");
  });

  test("isEmpty method", () => {
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);

    expect(stack.isEmpty()).toBe(false);
  });

  test("size method", () => {
    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);
  });

  test("clear method", () => {
    stack.push(1);
    stack.push(2);
    stack.clear();

    expect(stack.isEmpty()).toBe(true);
  });
});
