function bubbleSort(arr) {

  var swapped = true;
  var end = arr.length - 1;

  while(swapped) {
    swapped = false;
    for (var i = 0; i < end; i ++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
    end --;
  }
  return arr;
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}


exports.bsort = bubbleSort;
