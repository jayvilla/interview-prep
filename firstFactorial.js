const firstFactorial = input => {
  let result = 1;
  let factorial = 1;

  while (factorial <= input) {
    result *= factorial;
    factorial += 1;
  };

  return result;
};

console.log(firstFactorial(4));
