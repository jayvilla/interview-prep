/* Suppose we had an array of n integers in sorted order.
How quickly could we check if a given integer is in the
array? */

const findInOrderedSet = (arr, target) => {
  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === target) return true;

  let newArr;

  if (target < arr[mid]) {
    newArr = arr.slice(0, mid);
    console.log(newArr)
    return findInOrderedSet(newArr, target);
  } else if (target > arr[mid]) {
    newArr = arr.slice(mid + 1, arr.length);
    return findInOrderedSet(newArr, target);
  }

  return false;
};

const example = [1, 3, 4, 6, 10, 12, 23, 40];

console.log(findInOrderedSet(example, 40));
