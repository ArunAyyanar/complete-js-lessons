"use strict";
console.log("welcome to typescript");
let location1 = "arun";
console.log(location1);
location1 = 1234;
console.log(location1);
console.log("The End");
function check(document) {
    console.log(document);
}
let num = [];
num[0] = 2;
num[1] = 3;
let emp = [1, "arun"];
emp.push(2);
console.log(emp);
let myPizza = 10;
console.log("my pizza size : ", myPizza);
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(23, 33));
const sumArr = (n1, n2 = 3) => n1 + n2;
console.log(sumArr(3, 10));
//# sourceMappingURL=hello.js.map