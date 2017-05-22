const { range } = require('lodash')

/* Write a function fib() that takes an integer n and
returns the nth fibonacci number. */

const nthFibonacci = n => {
  // edge cases
  if (n < 0) throw Error('Index was negative. No such thing as a negative index in a series.');

  else if (n == 0 || n == 1) return

  let prev = 0;
  let prevPrev = 1;
  let current;

  for (let index of range(n)) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
};

const example = -5;
console.log(nthFibonacci(example));
