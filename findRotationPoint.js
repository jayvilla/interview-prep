/* Write a function for finding the index of the 'rotation point,' which is where I
started working from the beginning of the dictionary. This array is huge (there are
lots of words I don't know) so we want to be efficient here. */

const findRotationPoint = arr => {
  let firstWord = arr[0];
  let floorIndex = 0;
  let ceilingIndex = arr.length - 1;

  while (floorIndex < ceilingIndex) {

    let guessIndex = floorIndex + Math.floor((ceilingIndex - floorIndex) / 2);

    if (arr[guessIndex] > firstWord) {
      floorIndex = guessIndex;
    } else {
      ceilingIndex = guessIndex;
    }

    if ((floorIndex + 1) == ceilingIndex) {
      return ceilingIndex;
    }
  }
};

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage'
];

console.log(findRotationPoint(words));
