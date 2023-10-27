// Type conversion

let year = "1989";
console.log(Number(year), year);
console.log(Number(year) + 34);
console.log(String(23));
console.log(Number("arun"));

// Type Coercion
console.log("I am " + 34 + " years old");
console.log("23" - "3" - 5);
console.log("23" - 5);
console.log("23" - "3" + 80);
console.log("1" + 1 - 1);

// Falsy 5 - 0,'',null,undefined,NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("5" - "arun")); // NaN

// Truthy
console.log("Truthy");
console.log(Boolean(1));
console.log(Boolean("arun"));
console.log(Boolean({}));

// Combination if Truthy & falsy
console.log("Combination if Truthy & falsy");
console.log("Truthy" && "arun");
console.log("" || "arun"); // Falsy

// == Vs ===
console.log("Equality operator");
let n1 = 100;
let n2 = "100";
console.log(n1 == n2);
console.log(n1 === n2);

//const num = prompt("Enter the number =>");
//console.log(num);

// Logical operators

const dolphinsScores = [97, 112, 101];
const koalasScores = [109, 95, 123];

const dolAvg = dolphinsScores.reduce((n1, n2) => n1 + n2) / 3;
const kolaAvg = koalasScores.reduce((n1, n2) => n1 + n2) / 3;
console.log(dolAvg, kolaAvg);
if (dolAvg > kolaAvg) {
  console.log("Dolphins win the trophy");
} else if (dolAvg < kolaAvg) {
  console.log("koalas win the trophy");
} else {
  console.log("Both win the trophy");
}
