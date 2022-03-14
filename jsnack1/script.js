const arrayZucchine = [
  {
    varieta : 'romanesco',
    peso : 200,
    lunghezza : 10
  },
  {
    varieta : 'nera',
    peso : 300,
    lunghezza : 20
  },
  {
    varieta : 'romanesco',
    peso : 150,
    lunghezza : 5
  },
  {
    varieta : 'nera',
    peso : 280,
    lunghezza : 19
  },
  {
    varieta : 'tonda',
    peso : 220,
    lunghezza : 12
  },
  {
    varieta : 'tonda',
    peso : 300,
    lunghezza : 18
  },
  {
    varieta : 'trombetta',
    peso : 100,
    lunghezza : 10
  },
  {
    varieta : 'fiorentino',
    peso : 400,
    lunghezza : 25
  },
  {
    varieta : 'trombetta',
    peso : 210,
    lunghezza : 30
  },
  {
    varieta : 'fiorentino',
    peso : 230,
    lunghezza : 16
  }
]

let pesoTot = 0;
let pesoTotLunghe = 0;
let pesoTotCorte = 0;
const zucchineLunghe = [];
const zucchineCorte = [];

arrayZucchine.forEach(element => {
  pesoTot += element.peso;

  if(element.lunghezza > 15) {
    zucchineLunghe.push(element);
  } else {
    zucchineCorte.push(element)
  }
});

zucchineLunghe.forEach(element => {
  pesoTotLunghe += element.peso;
});

zucchineCorte.forEach(element => {
  pesoTotCorte += element.peso;
});



console.log(`Peso tot: ${pesoTot}`);
console.log(zucchineLunghe);
console.log(zucchineCorte);
console.log(`Peso tot lunghe: ${pesoTotLunghe}`);
console.log(`Peso tot corte: ${pesoTotCorte}`);