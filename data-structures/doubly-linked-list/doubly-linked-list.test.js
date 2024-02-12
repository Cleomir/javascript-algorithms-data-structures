const DoublyLinkedList = require("./doubly-linked-list");

describe("DoublyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  test("push method", () => {
    list.push(1);
    list.push(2);
    list.push(3);

    expect(list.length).toBe(3);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(3);
  });

  test("pop method", () => {
    list.push(1);
    list.push(2);
    const poppedNode = list.pop();

    expect(poppedNode.value).toBe(2);
    expect(list.length).toBe(1);
    expect(list.tail.value).toBe(1);
  });

  test("shift method", () => {
    list.push(1);
    list.push(2);
    const oldHead = list.shift();

    expect(oldHead.value).toBe(1);
    expect(list.length).toBe(1);
    expect(list.head.value).toBe(2);
  });

  test("unshift method", () => {
    list.push(1);
    list.unshift(0);

    expect(list.length).toBe(2);
    expect(list.head.value).toBe(0);
  });

  test("get method", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    const node = list.get(1);

    expect(node.value).toBe(2);
  });

  test("get method with invalid index", () => {
    list.push(1);
    list.push(2);
    const node = list.get(3);

    expect(node).toBe(null);
  });
});
