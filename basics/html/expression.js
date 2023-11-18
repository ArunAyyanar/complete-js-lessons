const val = () => 23 + 33;
console.log(`expression demo : ${(() => 23 + 37)()}`);
console.log(`I'm ${2023 - 1988} year old`);

// Ternary operator / conditional operator

const age = 34;
const result = age >= 35 ? "Little old" : "Still Young";
console.log(result);

// Tip Calculator

const bill = 430;

const tip = bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

console.log(`Tip is ${tip} and the Total bill is ${bill + tip}`);
