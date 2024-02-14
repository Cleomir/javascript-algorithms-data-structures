const HashTable = require("./hash-table");

describe("HashTable", () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  test("insert and get method", () => {
    hashTable.insert("name", "John");
    hashTable.insert("age", 30);

    expect(hashTable.get("name")).toBe("John");
    expect(hashTable.get("age")).toBe(30);
  });

  test("get method with non-existent key", () => {
    hashTable.insert("name", "John");

    expect(hashTable.get("age")).toBe(undefined);
  });

  test("remove method", () => {
    hashTable.insert("name", "John");
    hashTable.insert("age", 30);
    hashTable.remove("name");

    expect(hashTable.get("name")).toBe(undefined);
    expect(hashTable.get("age")).toBe(30);
  });
});
