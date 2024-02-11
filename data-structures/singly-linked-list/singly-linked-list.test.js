const SinglyLinkedList = require("./singly-linked-list");

describe("SinglyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  test("get method with invalid index", () => {
    list.push(1);
    list.push(2);
    const node = list.get(3);

    expect(node).toBe(null);
  });

  test("set method with invalid index", () => {
    list.push(1);
    list.push(2);
    const result = list.set(3, 3);

    expect(result).toBe(false);
  });

  test("insert method", () => {
    list.push(1);
    list.push(3);
    const result = list.insert(1, 2);

    expect(result).toBe(true);
    expect(list.get(1).value).toBe(2);
    expect(list.length).toBe(3);
  });

  test("insert method with invalid index", () => {
    list.push(1);
    list.push(2);
    const result = list.insert(3, 3);

    expect(result).toBe(false);
  });

  test("remove method", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    const removedNode = list.remove(1);

    expect(removedNode.value).toBe(2);
    expect(list.get(1).value).toBe(3);
    expect(list.length).toBe(2);
  });

  test("remove method with invalid index", () => {
    list.push(1);
    list.push(2);
    const removedNode = list.remove(3);

    expect(removedNode).toBe(undefined);
  });

  test("reverse method", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.reverse();

    expect(list.head.value).toBe(3);
    expect(list.tail.value).toBe(1);
    expect(list.get(1).value).toBe(2);
  });
});
