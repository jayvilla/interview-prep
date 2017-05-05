/* You have an array of integers, and for each index
you want to find the product of every integer
except the integer at that index.

Write a function get_products_of_all_ints_except_at_index() that takes an array of
integers and returns an array of the products

For example, given:
[1, 7, 3, 4]

your function would return:
[84 12, 28, 21]

by calculating:

[7*3*4, 1*3*4, 1*7*4, 1*7*3]

Do not use division in your solution. */

const getProductsOfAllIntsExceptAtIndex = numbers => {
  // we make an array with the length of the input array to
  // hold our products
  let productsOfAllIntsExceptAtIndex = Array(numbers.length).fill(1);
  // for each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let product, i;

  product = 1;
  i = 0;

  while (i < numbers.length) {
    productsOfAllIntsExceptAtIndex[i] = product;
    product *= numbers[i];
    i += 1;
  }
  // for each integer, we find the product of all the integers
  // after it, since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  product = 1;
  i = numbers.length - 1;
  while (i >= 0) {
    productsOfAllIntsExceptAtIndex[i] *= product;
    product *= numbers[i];
    i -= 1;
  }
  return productsOfAllIntsExceptAtIndex;
}

const example1 = [1, 7, 3, 4];

console.log(getProductsOfAllIntsExceptAtIndex(example1));
