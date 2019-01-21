function selectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i ++) {
    var minIndex = i;
    for (var j = i + 1; j < arr.length; j ++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}

function swap(arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

exports.ssort = selectionSort;
