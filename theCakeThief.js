/* While Queen ELizabeth has a limited number of types of cake, she has an unlimited
supply of each type.

Each type of cake has a weight and a value, stored in tuples with two positions:

  1. An integer representing the weight of the cake in kilograms
  2. An integer representing the monetary value of the cake in British pounds

For example:
// weighs 7 kilograms and has a value of 160 pounds
(7, 160)
// weighs 3 kilograms and has a value of 90 pounds

You brough a duffel bag that can hold limited weight, and you want to make off with
the most valuable haul possible

Write a function max_duffel_bag_value() that takes an array of cake tuples and a
weight capacity, and returns the maximum monetary value the duffel bag can
hold..

For example:

cake_tuples = [(7, 160), (3, 90), (2, 15)];
capacity = 20

max_duffel_bag_value(cake_tuples, capacity);
// returns 555 (6 of the middle type of cake and 1 of the last type of cake) */

const maxDuffelBagValue = (tuples, capacity) => {
  let maxValue = 0;
  let currentMaxValue = 0;

  if (capacity == 0) return Number.POSITIVE_INFINITY;

  /* todo */

  return maxValue;
};

const example1 = [
  [7, 160],
  [3, 90],
  [2, 15]
];

const example2 = 20;

console.log(maxDuffelBagValue(example1, example2));
