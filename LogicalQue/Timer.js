class Counter {
  constructor() {
    this.data = new Map();
    this.count = this.count.bind(this); // 🔥 bind once
  }

  count(item) {
    this.data.set(item, (this.data.get(item) || 0) + 1);
  }
}

const counter = new Counter();

counter.count("foo");
setTimeout(counter.count, 1000, "bar"); // ✅ now works