function reverseString(str) {
  var newString = "";

  for (var i = str.length - 1; i >= 0; i--) { 
    newString += str[i];
  }
  return newString;
}


function negativeInt(num) {
  return num = num - (num * 2);
}

console.log(reverseString(prompt("Scirvi la stringa da girare")));
console.log(negativeInt(parseInt(prompt("Scirvi un numero"))));