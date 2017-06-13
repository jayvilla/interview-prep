/* HackerLand University has the following grading policy:

Every student receives a in the inclusive range from 0 to 100 .
Any less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's
grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3,
round grade up to the next multiple of 5.

If the value of grade is less than 38, no rounding occurs as the result will
still be a failing grade.
For example, grade = 84 will be rounded to 85 but grade 29 will not be rounded
because the rounding would result in a number that is less than 40.

Given the initial value of grade for each of Sam's n students, write code to
automate the rounding process. For each grade, round it according to the rules
above and print the result on a new line.

Input Format

The first line contains a single integer denoting n (the number of students).
Each line i of the n subsequent lines contains a single integer, grade, denoting
student's grade.

Constraints
1 <= n <= 60
0 <= grade <= 100
Output Format

For each grade of the n grades, print the rounded grade on a new line.

Sample Input 0

4
73
67
38
33
Sample Output 0

75
67
40
33 */

const nextMultipleOf5 = num => {
  while (num % 5 !== 0) num++;
  return num;
};

const gradingStudents = arr => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let nextMultiple = nextMultipleOf5(arr[i]);

    if (nextMultiple < 40) {
        result.push(arr[i])
        continue;
    }

    if ((nextMultiple - arr[i]) < 3) {
      result.push(nextMultiple)
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

let example = [4, 73, 67, 38, 33];
console.log(gradingStudents(example));
