function flattenRecursive(arr) {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenRecursive(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

function flattenIterative(arr) {
  const result = [];
  const stack = [...arr];
  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.unshift(item);
    }
  }
  return result;
}
function easiestSolving(arr)
{

let result = arr.flat(Infinity);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8]
}
function flatten(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));//连接两个数组
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

let arr = [1, [2, [3, [4, 5], 6], 7], 8];
console.log(flatten(arr)); // [1, 2, 3, 4, 5, 6, 7, 8]

const arr = [1, [2, [3, 4], 5], 6];
console.log(flattenRecursive(arr)); // [1, 2, 3, 4, 5, 6]
console.log(flattenIterative(arr)); // [1, 2, 3, 4, 5, 6]
