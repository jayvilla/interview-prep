/* Write a class TempTracker with these methods:
  1. insert()-records a new temperature
  2. get_max()-returns the highest temp we've seen so far
  3. get_min()-returns the lowest temp we've seen so far
  4. get_mean()-returns the mean of all temps we've seen so far
  5. get_mode()-returns the mode of all temps we've seen so far

Optimize for space and time. Favor speeding up the get_ functions over speeding
up the insert() function.

get_mean() should return a float, but hte fest of the get_ functions can return
integers. Temperatures will all be inserted as integers. We'll record our temperature
in Fahrenheit, so we can assume they'll all be in the range

If there is more than one mode, return any of the modes */

class TempTracker {
  constructor() {
    // for mode
    this.occurrences = {};
    this.maxOccurrences = 0;
    this.mode = null;
    // for mean
    this.totalNumbers = 0;
    this.totalSum = 0.0;
    this.mean = null;
    // for min and max
    this.minTemp = null;
    this.maxTemp = null;
  };

  insert(temp) {
    // for mode
    this.occurrences[temp] === undefined ?
      this.occurrences[temp] = 1 :
      this.occurrences[temp] += 1;
      
    if (this.occurrences[temp] > this.maxOccurrences) {
      this.mode = temp;
      this.maxOccurrences = this.occurrences[temp];
    }
    // for mean
    this.totalNumbers += 1;
    this.totalSum += temp;
    this.mean = this.totalSum / this.totalNumbers;
    // for min and max
    if (!this.maxTemp || temp > this.maxTemp) {
      this.maxTemp = temp;
    }
    if (!this.minTemp || temp < this.minTemp) {
      this.minTemp = temp;
    }
    return this.occurrences;
  };

  getMax() {
    return this.maxTemp;
  };

  getMin() {
    return this.minTemp;
  };

  getMean() {
    return this.mean;
  };

  getMode() {
    return this.mode;
  };
};

let Temps = new TempTracker();
console.log(Temps.insert(75));
console.log(Temps.insert(85));
console.log(Temps.insert(82));
console.log(Temps.insert(82));
console.log(Temps.insert(82));
console.log(Temps.insert(79));
console.log(Temps.insert(83));
console.log(Temps.getMax());
console.log(Temps.getMean());
console.log(Temps.getMode());
