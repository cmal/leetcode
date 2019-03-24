function maxProfit(arr, len) {
  // Arr is the stock price flow during a certain period.
  // You can buy or sell at any moment,
  // but you can do at most two buys and two sells,
  // give the max profit you can get during this period.
  var memo = {};
  return maxProfitAux(arr, 0, len - 1, memo);
}

function maxProfitAux(arr, start, end, memo) {
  // calc max profit from start to end - 1

  var key = '' + start + ',' + end;
  if (memo.hasOwnProperty(key)) return memo[key];

  if (end - start == 1) {
    var max = Math.max(0, arr[end] - arr[start]);
    memo[key] = max;
    return max;
  }

  var max = 0;
  for (var mid = start + 1; mid < end; mid ++) {
    var max1 = maxProfitAux(arr, start, mid, memo);
    var max2 = maxProfitAux(arr, mid, end, memo);
    max = Math.max(
      max,
      max1,
      max2,
      max1 + max2
    );
  }
  memo[key] = max;
  return max;
}


function fibonacci(n) {
  var results = new Array(n).fill(0);
  return fibonacciRecur(n, results);
}

function fibonacciRecur(n, results) {
  if (results[n]) return results[n];

  if (n === 0 || n == 1) {
    results[n] = 1;
    return 1;
  }

  var result = fibonacciRecur(n - 1, results) + fibonacciRecur(n - 2, results);
  results[n] = result;
  return result;
}


exports.maxProfit = maxProfit;
exports.fibonacci = fibonacci;
