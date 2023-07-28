function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  var arr = [1, 2, 3, 3, 4, 4, 5];
  var uniqueArr = unique(arr);
  console.log(uniqueArr);
