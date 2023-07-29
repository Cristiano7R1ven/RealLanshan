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

const arr = [1, [2, [3, 4], 5], 6];
console.log(flattenRecursive(arr)); // [1, 2, 3, 4, 5, 6]
console.log(flattenIterative(arr)); // [1, 2, 3, 4, 5, 6]
