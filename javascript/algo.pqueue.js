class Heap {

  constructor(arr, compare) {
    this.arr = arr;
    this.compare = (a, b) => {
      return compare(this.arr[a], this.arr[b]);
    };
    this.init();
  }

  init() {
    this.buildHeap(arr);
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

  heapify(len, i) { // heapSinkkey(arr, len, i)
    const l = this.left(i);
    const r = this.right(i);
    let pole = (l < len && this.compare(l, i)) ? l : i;
    pole = (r < len && this.compare(r, pole)) ? r : pole;
    if (i != pole) {
      this.swap(i, pole);
      this.heapify(len, pole);
    }
  }

  buildHeap(arr) {
    const len = this.arr.length;
    let i = this.parent(len - 1);
    while(i >= 0) {
      this.heapify(len, i);
      i --;
    }
  }

  heapSwimKey(k, v) {
    this.arr[k] = v;
    let i = k;
    while(i > 0 && this.compare(i, this.parent(i))) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  heapInsert(x) {
    this.arr.push(0);
    this.heapSwimKey(this.arr.length, x);
  }

  peek() {
    return this.arr[0];
  }

  extractTop() {
    if (this.arr.length == 1) {
      return this.arr.pop();
    }
    let top = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.heapify(this.arr.length - 1, 0);
    return top;
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

  isEmpty() {
    return this.maxHeap.isEmpty();
  }

  peek() {
    return this.maxHeap.peek();
  }

  enqueue(item) {
    this.maxHeap.insert(item);
  }

  dequeue() {
    return this.maxHeap.extractTop();
  }

}


const arr = [2, 3, 1, 4, 9, 6, 7];
const compare = (a, b) => {

  // a < b for minHeap, sort asc
  // a > b for maxHeap, sort desc

  // for minheap, a < b
  // for maxheap, a > b

  return a > b;
};


const pq = new PQueue(arr, compare);
