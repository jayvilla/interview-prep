const equilibriumIndex = arr => {
  let sum, left = 0, right, result = [];;

  if (!arr || arr.length == 0) {
    sum = 0;
  } else if (arr.length ==1) {
    sum = arr[0];
  } else {
    sum = arr.reduce( (a, b) => a + b );
  }

  for (let i = 0; i < arr.length; i++) {
    right = sum - arr[i] - left;

    if (left == right) result.push(i);

    left += arr[i];
  }

  return result ? result : -1
};

const example = [-1, 3, -4, 5, 1, -6, 2, 1];

console.log(equilibriumIndex(example));
