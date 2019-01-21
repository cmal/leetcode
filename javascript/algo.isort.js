function insertionSort(arr) {
  for (var j = 1; j < arr.length; j ++) {
    for (var i = j - 1; i >= 0; i --) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}


exports.isort = insertionSort;
