class Maps {
  constructor() {
    this.store = {};
    this.length = 0;
  }

  has(key) {
    return this.store.hasOwnProperty(key);
  }

  set(key, value) {
    if (this.has(key)) return;

    this.store[key] = value;
    this.length++;
  }

  get(key) {}

  delete(key) {}

  key() {}
}

const map = new Maps();
console.log(map);
console.log(Object.getOwnPropertyNames(Maps.prototype));

map.set(1, 1);
map.set("two", "two");
map.set(0, 0);

console.log(map.has(1));
console.log(map);
