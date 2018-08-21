function msort(arr) {
  if (arr.length > 1) {
    mergeSort(arr, 0, arr.length - 1);
  }
  return arr;
}

function mergeSort(arr, p, r) {
  if (p < r) {
    var q = parseInt((p + r) / 2);
    mergeSort(arr, p, q);
    mergeSort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
}

function merge(arr, p, q, r) {
  var i, j;
  var a = [];
  var b = [];
  for (i = p; i <= q; i ++) {
    a[i - p] = arr[i];
  }
  for (j = q + 1; j <= r; j ++) {
    b[j - q - 1] = arr[j];
  }
  i = 0;
  j = 0;
  a.push(Number.MAX_VALUE);
  b.push(Number.MAX_VALUE);
  for (var k = p; k <= r; k ++) {
    if (a[i] <= b[j]) {
      arr[k] = a[i];
      i ++;
    } else {
      arr[k] = b[j];
      j ++;
    }
  }
}

exports.msort = msort;
