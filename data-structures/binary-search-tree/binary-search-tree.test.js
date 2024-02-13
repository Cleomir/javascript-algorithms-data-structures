const BinarySearchTree = require("./binary-search-tree");

describe("BinarySearchTree", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test("insert method", () => {
    bst.insert(15);
    bst.insert(25);
    bst.insert(10);

    expect(bst.getRootNode().data).toBe(15);
    expect(bst.getRootNode().left.data).toBe(10);
    expect(bst.getRootNode().right.data).toBe(25);
  });

  test("remove method", () => {
    bst.insert(15);
    bst.insert(25);
    bst.insert(10);
    bst.remove(25);

    expect(bst.getRootNode().right).toBeNull();
  });

  test("findMinNode method", () => {
    bst.insert(15);
    bst.insert(25);
    bst.insert(10);

    expect(bst.findMinNode(bst.getRootNode()).data).toBe(10);
  });

  test("getRootNode method", () => {
    bst.insert(15);

    expect(bst.getRootNode().data).toBe(15);
  });

  test("search method", () => {
    bst.insert(15);
    bst.insert(25);
    bst.insert(10);

    expect(bst.search(bst.getRootNode(), 25).data).toBe(25);
    expect(bst.search(bst.getRootNode(), 100)).toBeNull();
  });

  test("inOrder method", () => {
    bst.insert(15);
    bst.insert(25);
    bst.insert(10);
    const array = [];
    bst.inOrder(bst.getRootNode(), (data) => array.push(data));

    expect(array).toEqual([10, 15, 25]);
  });

  test("preOrder method", () => {
    bst.insert(15);
    bst.insert(25);
    bst.insert(10);
    const array = [];
    bst.preOrder(bst.getRootNode(), (data) => array.push(data));

    expect(array).toEqual([15, 10, 25]);
  });

  test("postOrder method", () => {
    bst.insert(15);
    bst.insert(25);
    bst.insert(10);
    const array = [];
    bst.postOrder(bst.getRootNode(), (data) => array.push(data));

    expect(array).toEqual([10, 25, 15]);
  });
});
