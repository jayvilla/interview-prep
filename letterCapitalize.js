/* Using the JavaScript language, have the function LetterCapitalize(str) take
the str parameter being passed and capitalize the first letter of each word.
Words will be separated by only one space. */

const letterCapitalize = str => {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
};

console.log(letterCapitalize('hello world'));
console.log(letterCapitalize('i ran there'));
