// function msort(arr) {
//   if (arr.length > 1) {
//     mergeSort(arr, 0, arr.length - 1);
//   }
//   return arr;
// }

// function mergeSort(arr, p, r) {
//   if (p < r) {
//     var q = parseInt((p + r) / 2);
//     mergeSort(arr, p, q);
//     mergeSort(arr, q + 1, r);
//     merge(arr, p, q, r);
//   }
// }

// function merge(arr, p, q, r) {
//   var i, j;
//   var a = [];
//   var b = [];
//   for (i = p; i <= q; i ++) {
//     a.push(arr[i]);
//   }
//   for (j = q + 1; j <= r; j ++) {
//     b.push(arr[j]);
//   }
//   i = 0;
//   j = 0;
//   a.push(Number.MAX_VALUE);
//   b.push(Number.MAX_VALUE);
//   for (var k = p; k <= r; k ++) {
//     if (a[i] <= b[j]) {
//       arr[k] = a[i];
//       i ++;
//     } else {
//       arr[k] = b[j];
//       j ++;
//     }
//   }
// }

// exports.msort = msort;


function mergeSort(arr) {
  msort(arr, 0, arr.length - 1);
  return arr;
}

function msort(arr, p, r) {
  if (p < r) {
    var q = parseInt((p + r) / 2);
    msort(arr, p, q);
    msort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
}

function merge(arr, p, q, r) {
  var a = arr.slice(p, q + 1);
  var b = arr.slice(q + 1, r + 1);
  a.push(Number.MAX_VALUE);
  b.push(Number.MAX_VALUE);
  var i = 0;
  var j = 0;
  for (var k = p; k <= r; k ++) {
    if (a[i] <= b[j]) {
      arr[k] = a[i++];
    } else {
      arr[k] = b[j++];
    }
  }
}

function swap(arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

exports.msort = mergeSort;
