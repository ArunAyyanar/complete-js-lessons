// Typescript - Lessons
console.log("welcome to typescript");
/*let myName: string = "arun";
let age: number = 34;
if (age > 30) {
  age = age + 1;
} else {
  age = age - 4;
}
console.log(age);
*/
let location1: any = "arun";
console.log(location1);
location1 = 1234;
console.log(location1);
console.log("The End");

function check(document) {
  console.log(document);
}

// Array

let num: number[] = [];
num[0] = 2;
num[1] = 3;

let emp: [number, string] = [1, "arun"]; // tuples
emp.push(2);
console.log(emp);

const enum Pizza {
  S = 10,
  M,
  L,
}

let myPizza: Pizza = Pizza.S;
console.log("my pizza size : ", myPizza);

function sum(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(sum(23, 33));

const sumArr = (n1: number, n2: number = 3): number => n1 + n2;
console.log(sumArr(3, 10));
