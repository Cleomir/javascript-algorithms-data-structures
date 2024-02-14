const MinBinaryHeap = require("./min-binary-heap");

describe("MinBinaryHeap", () => {
  let heap;

  beforeEach(() => {
    heap = new MinBinaryHeap();
  });

  test("inserts values correctly", () => {
    heap.insert(41);
    heap.insert(39);
    heap.insert(33);
    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    heap.insert(55);
    expect(heap.heap).toEqual([12, 27, 18, 41, 39, 33, 55]);
  });

  test("extracts minimum value correctly", () => {
    heap.insert(41);
    heap.insert(39);
    heap.insert(33);
    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    heap.insert(55);
    const min = heap.extractMin();
    expect(min).toBe(12);
    expect(heap.heap).toEqual([18, 27, 33, 41, 39, 55]);
  });
});
