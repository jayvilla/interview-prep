/* Steve has a string, , consisting of  lowercase English alphabetic letters. In one operation, he can delete any pair of adjacent letters with same value. For example, string "aabcc" would become either "aab" or "bcc" after  operation.

Steve wants to reduce  as much as possible. To do this, he will repeat the above operation as many times as it can be performed. Help Steve out by finding and printing 's non-reducible form!

Note: If the final string is empty, print Empty String .

Input Format

A single string, .

Constraints

Output Format

If the final string is empty, print Empty String; otherwise, print the final non-reducible string.

Sample Input 0

aaabccddd
Sample Output 0

abd
Sample Case 0

Steve can perform the following sequence of operations to get the final string:

aaabccddd → abccddd
abccddd → abddd
abddd → abd
Thus, we print abd.

Sample Input 1

baab
Sample Output 1

Empty String */

const superReducedString = string => {
  let letters = string.split('');

  for (let i = 0; i < letters.length - 1; i++) {
    if (letters[i] == letters[i + 1]) {
      letters.splice(i, 2);
      letters = letters.join('').toString();
      return superReducedString(letters);
    }
  }
  letters = letters.join('').toString();
  return letters ? letters : 'Empty String';
};

let example = 'aaabccddd';
let example2 = 'baab';
let example3 = 'aa';

console.log(superReducedString(example));
console.log(superReducedString(example2));
console.log(superReducedString(example3));
