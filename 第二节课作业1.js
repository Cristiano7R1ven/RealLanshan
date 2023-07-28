function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  var arr = [3, 9, 1, 4, 7, 5];
  console.log("排序前：" + arr);
  arr = bubbleSort(arr);
  console.log("排序后：" + arr);
