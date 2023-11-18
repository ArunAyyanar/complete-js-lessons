/*
function nArg(n1, n2, n3) {
  console.log("3 Args");
}

function nArg(n1, n2) {
  console.log("2 Args");
}

nArg(23, 3);

console.log(new Date());

function Date() {
  this.date = "It is overrided";
}
*/

// Demo program

const calcAverage = (n1, n2, n3) => (n1 + n2 + n3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (dol, kol) {
  if (dol >= 2 * kol) {
    return `Dolphins win ${dol} vs. ${kol}`;
  } else if (dol <= 2 * kol) {
    return `Koalas win (${kol} vs. ${dol})`;
  } else {
    return "No team wins...";
  }
};

console.log(checkWinner(scoreDolphins, scoreKoalas));
