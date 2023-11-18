let thisYear = 2023;
let myAge = thisYear - 1988;
console.log("My age is ", myAge);

let marks = [23, 99, 45, 1];

marks.map((m) => m + 1);

console.log(marks);

let x = (y = 13 - 3 - 1);
console.log("x", x, ",", "y", y);

let name = "Arun";
let age = 35;
let staying = "US";
console.log("First line \n second line");
console.log(
  `My name is ${name} and 
my age is ${age} 
staying in ${staying}`
);

if (age >= 18) {
  console.log("You can take license");
} else {
  console.log("You are too young");
}
