// Hash table is a data structure that stores key-value pairs.
//  It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
class HashTable {
  constructor() {
    this.table = {};
  }

  // Hash function to convert a key into an index
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37; // Modulo to limit the index within the table size
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
  }

  // Retrieve the value associated with a given key
  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (const element of this.table[index]) {
        if (element.key === key) {
          return element.value;
        }
      }
    }
    return undefined;
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i].key === key) {
          this.table[index].splice(i, 1);
          break;
        }
      }
    }
  }
}

module.exports = HashTable;
