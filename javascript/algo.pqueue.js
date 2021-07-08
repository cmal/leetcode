const errNotFound = new Error('value not found');
const errNoElement = new Error('not enough element');

class Heap {

  constructor(arr, compare) {
    this.arr = arr;
    this.compare = (a, b) => {
      return compare(this.arr[a], this.arr[b]);
    };
    this.compareV = compare;
    this.init();
  }

  init() {
    this.build(arr);
  }

  sort() {
    let i = this.arr.length - 1;
    while(i > 0) {
      this.swap(0, i);
      this.heapify(i, 0);
      i --;
    }
  }

  parent(i) {
    if (!i) {
      return -1; 
    }
    return (i - 1) >> 1;
  }

  left(i) {
    return 1 + (i << 1); // note << has low priority
  }

  right(i) {
    return (i + 1) << 1;
  }

  swap(i, j) {
    const tmp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = tmp;
  }

  heapify(len, i) {
    const l = this.left(i);
    const r = this.right(i);
    let pole = (l < len && this.compare(l, i)) > 0 ? l : i;
    pole = (r < len && this.compare(r, pole)) > 0 ? r : pole;
    if (i != pole) {
      this.swap(i, pole);
      this.heapify(len, pole);
    }
  }

  build(arr) {
    const len = this.arr.length;
    let i = this.parent(len - 1);
    while(i >= 0) {
      this.heapify(len, i);
      i --;
    }
  }

  swimKey(k, v) {
    this.arr[k] = v;
    let i = k;
    while(i > 0 && this.compare(i, this.parent(i)) > 0) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  insert(x) {
    this.arr.push(null);
    this.swimKey(this.arr.length - 1, x);
  }

  findK(v, compare) {
    for (let i = 0; i < this.size(); i ++) {
      if (compare(this.arr[i], v)) {
        return i;
      }
    }
    return null;
  }

  sink(k) {
    const len = this.arr.length - 1;
    this.heapify(len, k);
  }

  swim(k) {
    let i = k;
    while(i > 0 && this.compare(i, this.parent(i)) > 0) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  delete(k) {
    if (!this.arr.length) {
      throw errNoElement;
    } else if (this.arr.length == 1) {
      return this.arr.pop();
    } else {
      const tmp = this.arr[k];
      const e = this.arr.pop();
      this.arr[k] = e;
      this.sink(k);
      return tmp;
    }
  }

  peek() {
    return this.arr[0];
  }

  // extractTop() {
  //   if (this.arr.length == 1) {
  //     return this.arr.pop();
  //   }
  //   let top = this.arr[0];
  //   this.arr[0] = this.arr.pop();
  //   this.heapify(this.arr.length - 1, 0);
  //   return top;
  // }
  extractTop() {
    return this.delete(0);
  }

  size() {
    return this.arr.length;
  }

// function heapExtractTopRemanents(arr) {
//   if (arr.length == 1) {
//     arr.pop();
//   }
//   arr[0] = arr[arr.length -1];
//   arr.pop();
//   heapify(arr, arr.length - 1, 0);
// }

}

class PQueue { // priority queue

  constructor(arr, compare) {
    this.maxHeap = new Heap(arr, compare);
  }

  size() {
    return this.maxHeap.size();
  }

  // isEmpty() {
  //   return this.maxHeap.isEmpty();
  // }

  delete(x, compare) {
    const k = this.maxHeap.findK(x, compare);
    this.maxHeap.delete(k);
  }

  peek() {
    return this.maxHeap.peek();
  }

  offer(item) { // enqueue
    this.maxHeap.insert(item);
  }

  poll() { // dequeue
    return this.maxHeap.extractTop();
  }

  // update(k, v) {
  //   this.maxHeap.swimKey(k, v);
  // }
  // update(newKV) {
  //   // console.log(this.maxHeap.arr)
  //   // console.log('newkv', newKV);
  //   const { ts, v } = newKV;
  //   const k = this.maxHeap.findK(newKV, (a, b) => a.v == b.v);
  //   if (k == null) {
  //     throw errNotFound;
  //   }
  //   this.maxHeap.delete(k);
  //   this.maxHeap.insert(newKV);
  // }
}

class TimePQueue {
  constructor(arr, compare) {
    this.pq = new PQueue(arr, compare);
  }

  getRecent() {
    const [_t, x] = this.pq.poll();
    return x;
  }

  insert(x) {
    this.pq.offer([+new Date(), x]);
  }

  update(x) {
    this.pq.delete(x, ([_tx, x], y) => x == y);
    this.pq.offer([+new Date(), x]);
  }

  size() {
    return this.pq.size();
  }
}

const compareTime = (v1, v2) => {
  if (v1[0] < v2[0]) {
    return 1;
  } else if (v1[0] > v2[0]) {
    return -1;
  } else {
    return 0;
  }
};

class LRUCache {
  constructor(size, compare) {
    this.size = size;
    this.hm = {};
    this.tpq = new TimePQueue([], compare);
  }

  put(k, v) {
    if (this.tpq.size() == this.size) {
      const k = this.tpq.getRecent();
      delete this.hm[k];
    }

    this.tpq.insert(k);
    this.hm[k] = v;
  }

  get(k) {
    if (this.hm.hasOwnProperty(k)) {
      const v = this.hm[k];
      this.tpq.update(k);
      return v;
    }
    return null;
  }
}

module.exports = {
  Heap,
  PQueue,
  LRUCache,
  errNotFound,
  errNoElement,
  compareTime
}
