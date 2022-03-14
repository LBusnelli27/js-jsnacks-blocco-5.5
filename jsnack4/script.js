function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ciao(smallerNum, biggerNum) {
  for (let i = smallerNum; i <= biggerNum; i++) {
    newArray.push(arrayNum[i]);
  }
}



const arrayNum = [1, 2, 3, 4, 5, 6, 7];
const newArray = [];


let currentNum = getRandomInt(0, (arrayNum.length - 1));
let smallCurrent = getRandomInt(0, (currentNum - 1));
ciao(currentNum, smallCurrent);

console.log(currentNum);
console.log(smallCurrent);
console.log(newArray);
