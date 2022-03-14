const arrayLetters = ["a", "b", "c"];
const arrayNumbers = [1, 2, 3];

const arrayMerge = [];

console.log(arrayLetters);
console.log(arrayNumbers);

for (let i = 0; i < arrayLetters.length; i++) {
  arrayMerge.push(arrayLetters[i]);
  arrayMerge.push(arrayNumbers[i]);
}

console.log(arrayMerge);