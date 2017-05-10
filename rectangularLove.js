/* Write a functino to find the rectangular intersection of two given love
rectangles.

As with the example above, love rectangles are always "straight" and never "diagonal."
More rigorously: each side is parallel with either the x-axis or y-axis.

They are defined as hash maps like this:

my_rectangle = {

  # coordinates of bottom-left corner:
  'x': 1,
  'y': 1,

  # width and height
  'width': 10,
  'height': 4,
}

Your output rectangle should use this format as well */

const findRangeOverlap = (point1, length1, point2, length2) => {
  // Find the highest start point and lowest end point
  // The highest ("rightmost" or "upmost") start point is
  // the start point of the overlap.
  // The lowest end point is the end point of the overlap
  let highestStartPoint = Math.max(point1, point2);
  let lowestEndPoint = Math.min(point1 + length1, point2 + length2);

  // Return (None, none) if there is no overlap
  if (highestStartPoint >= lowestEndPoint) return { overlapPoint: 'none', overlapLength: 'none' }

  // Compute the overlap length
  let overlapLength = lowestEndPoint - highestStartPoint;

  return {
    overlapPoint: highestStartPoint,
    overlapLength: overlapLength
  }
};

const findRectangularOverlap = (rect1, rect2) => {
  // set the x and y overlap points and length
  let x = findRangeOverlap(rect1.x, rect1.width, rect2.x, rect2.width);
  let y = findRangeOverlap(rect1.y, rect1.height, rect2.y, rect2.height);

  if (x.overlapLength == 'none' || y.overlapLength == 'none') {
    return 'none'
  }

  return {
    'x': x.overlapPoint,
    'y': y.overlapPoint,
    'width': x.overlapLength,
    'height': y.overlapLength
  }
};

const example1 = {
  'x': 1,
  'y': 5,
  'width': 10,
  'height': 4,
}

const example2 = {
  'x': 0,
  'y': 0,
  'width': 10,
  'height': 10,
}

console.log(findRectangularOverlap(example1, example2));
