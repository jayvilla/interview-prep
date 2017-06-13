const ascii_deletion_distance = (str1, str2) => {
  let letters = {};
  let deletionDistance = 0;

  for (let i = 0; i < str1.length; i++) {
    letters[str1[i]] == undefined ?
      letters[str1[i]] = 1 :
      letters[str1[i]] += 1;
  }

  for (let i = 0; i < str2.length; i++) {
    letters[str2[i]] == undefined ?
      letters[str2[i]] = 1 :
      letters[str2[i]] += 1;
  }


  for (letter in letters) {
    letters[letter] = letters[letter] % 2;

    let distance = letter.charCodeAt(0);

    if (letters[letter] == 1) {
      deletionDistance += distance;
    }
  }
  return deletionDistance;
}

console.log(ascii_deletion_distance('at', 'cat'))
console.log(ascii_deletion_distance('boat', 'got'))
console.log(ascii_deletion_distance('thought', 'sloughs'))
