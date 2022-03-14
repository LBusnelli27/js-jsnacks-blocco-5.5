const arrayNum = [1, 2, 3, 4, 5, 6, 7];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let currentNum = getRandomInt((arrayNum.length - 1))

console.log(currentNum);
console.log(currentNum - (1));