// Given an array_of_ints, find the highest_product
// you can get from three of the integers.

// The input array_of_ints will always have at least three integers.

const highestProductOfThree = arrayOfInts => {
  if (arrayOfInts.length < 3) throw Error('Less than 3 items!')

  // We're going to start at the 3rd item (at index 2)
  // so pre-populate highest and lowests based on the first 2 items
  // The alternative is starting these as None and checking beow if they're set
  // I Think thi sis a little cleaner, but it's debatable
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

  let highestProductOfTwo = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOfTwo = arrayOfInts[0] * arrayOfInts[1];

  // Except this one--we pre-populate it for the first /3/ items.
  // This means in our first pass it'll check against itself, which is fine.
  let highestProductOfThree = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  // walk through items, starting at index 2
  for (let i = 0; i < arrayOfInts.length; i++) {
    // do we have a highest product of 3?
    // it's either the current highest,
    // or the current times the highest product of two
    // or the current times the lowest product of two
    highestProductOfThree = Math.max(
      highestProductOfThree,
      arrayOfInts[i] * highestProductOfTwo,
      arrayOfInts[i] * lowestProductOfTwo);

    // do we have a highest product of two?
    highestProductOfTwo = Math.max(
      highestProductOfTwo,
      arrayOfInts[i] * highest,
      arrayOfInts[i] * lowest);

    // do we have a new lowest product of two?
    lowestProductOfTwo = Math.min(
      lowestProductOfTwo,
      arrayOfInts[i] * highest,
      arrayOfInts[i] * lowest);

    // do we have a new highest?
    highest = Math.max(highest, arrayOfInts[i]);

    // do we have a new lowest?
    lowest = Math.min(lowest, arrayOfInts[i]);
  }

  return highestProductOfThree;
};

const example = [-10, -10, 1, 3, 2];

console.log(highestProductOfThree(example));
