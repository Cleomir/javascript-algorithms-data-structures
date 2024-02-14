const MaxBinaryHeap = require("./max-binary-heap");

describe("MaxBinaryHeap", () => {
  let heap;

  beforeEach(() => {
    heap = new MaxBinaryHeap();
  });

  test("inserts values correctly", () => {
    heap.insert(41);
    heap.insert(39);
    heap.insert(33);
    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    heap.insert(55);
    expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
  });

  test("extracts maximum value correctly", () => {
    heap.insert(41);
    heap.insert(39);
    heap.insert(33);
    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    heap.insert(55);
    const max = heap.extractMax();
    expect(max).toBe(55);
    expect(heap.values).toEqual([41, 39, 33, 18, 27, 12]);
  });
});
