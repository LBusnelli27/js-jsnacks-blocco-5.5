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

const arrayNumbers = [
  {
    number : 32,
    stri : 'Ciao'
  },
  {
    number : 23,
    stri : 'Come'
  },
  {
    number : 12,
    stri : 'Stai'
  },
  {
    number : 332,
    stri : 'Io'
  },
  {
    number : 3,
    stri : 'Tutto'
  },
  {
    number : 67,
    stri : 'Bene'
  },
  {
    number : 87,
    stri : 'Come'
  },
  {
    number : 9,
    stri : 'Va'
  },
  {
    number : 2,
    stri : 'La'
  },
  {
    number : 435,
    stri : 'Vita'
  },
]

arrayNumbers.forEach(element => {
  console.log(negativeInt(element.number));

  console.log(reverseString(element.stri));
});

console.log(reverseString(prompt("Scirvi la stringa da girare")));
console.log(negativeInt(parseInt(prompt("Scirvi un numero"))));