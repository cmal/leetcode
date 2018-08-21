function qsort(arr) {
  if (arr.length) {
    quicksort(arr, 0, arr.length - 1);
  }
  return arr;
}

function quicksort(arr, p, r) {
  if (p < r) {
    var q = hpartition(arr, p, r);
    quicksort(arr, p, q - 1);
    quicksort(arr, q + 1, r);
  }
}

function partition(arr, p, r) {
  var pivot = arr[r];
  var i = p - 1;
  for (var j = p; j < r; j ++) {
    if (arr[j] <= pivot) {
      i ++;
      swap(arr, i, j);
    }
  }
  i ++;
  swap(arr, i, r);
  return i;
}

function hpartition(arr, p, r) {
  var pivot = arr[r];
  var i = p;
  var j = r - 1;
  while (i <= j) {
    if (arr[i] > pivot) {
      swap(arr, i, j);
      j --;
    } else {
      i ++;
    }
  }
  swap(arr, i, r);
  return i;
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

exports.qsort = qsort;
