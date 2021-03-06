function hsort(arr) {
  if (arr.length) {
    heapSort(arr, 0, arr.length - 1);
  }
  return arr;
}

function heapSort(arr, p, r) {
  buildHeap(arr);
  var i = arr.length - 1;
  while(i > 0) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
    i --;
  }
}

function parent(i) {
  if (!i) return -1;
  // return parseInt((i - 1) / 2);
  return (i - 1) >> 1; // more readable
}

function left(i) {
  // return i * 2 + 1;
  return 1 + (i << 1); // note << has low priority
}

function right(i) {
  // return 2 * (i + 1);
  return (i + 1) << 1;
}

function compare(a, b) {

  // a < b for minHeap, sort asc
  // a > b for maxHeap, sort desc

  // for minheap, a < b
  // for maxheap, a > b

  return a > b;
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function heapify(arr, len, i) { // heapSinkkey(arr, len, i)
  var l = left(i);
  var r = right(i);
  var pole = (l < len && compare(arr[l], arr[i])) ? l : i;
  pole = (r < len && compare(arr[r], arr[pole])) ? r : pole;
  if (i != pole) {
    swap(arr, i, pole);
    heapify(arr, len, pole);
  }
}

function buildHeap(arr) {
  var len = arr.length;
  var i = parent(len - 1);
  while(i >= 0) {
    heapify(arr, len, i);
    i --;
  }
}

function heapSwimKey(arr, k, v) {
  arr[k] = v;
  var i = k;
  while(i > 0 && compare(arr[i], arr[parent(i)])) {
    swap(arr, i, parent(i));
    i = parent(i);
  }
}

function heapInsert(arr, x) {
  arr.push(0);
  heapSwimKey(arr, arr.length - 1, x);
}

function heapTop(arr) {
  return arr[0];
}

function heapExtractTop(arr) {
  if (arr.length == 1) {
    return arr.pop();
  }
  var top = arr[0];
  arr[0] = arr.pop();
  heapify(arr, arr.length - 1, 0)
  return top;
}

// function heapExtractTopRemanents(arr) {
//   if (arr.length == 1) {
//     arr.pop();
//   }
//   arr[0] = arr[arr.length -1];
//   arr.pop();
//   heapify(arr, arr.length - 1, 0);
// }

function heapExtractTopRemanents(arr) {
  heapExtractTop(arr);
  return arr;
}

exports.parent = parent;
exports.left = left;
exports.right = right;
exports.heapTop = heapTop;
exports.heapInsert = heapInsert;
exports.heapExtractTop = heapExtractTop;
exports.hsort = hsort;

exports.heapPeek = heapTop;
exports.heapPop = heapExtractTop;
exports.heapExtractTopRemanents = heapExtractTopRemanents;
