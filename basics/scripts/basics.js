let name = "Arun";
console.log(name);
let age;
age = 34;
console.log(age);
let isAlive = true;
console.log(isAlive ? "he is alive" : "he is dead");
if (isAlive) {
  console.log("I'm alive");
} else {
  console.log("I'm Dead");
}
let familyMembers = [
  "ayyanar",
  "ananthajothi",
  "balaji",
  "saranya",
  "pranav",
  "karthik",
];
console.log(familyMembers);
let myObj = {
  myName: "arun",
  myAge: 34,
  myloc: "USA",
};

console.log(myObj);
console.log(myObj.myAge == "34"); // not strict with type
console.log(myObj.myAge === "34"); // strict with type

let employee = {
  name: "Arun",
  age: 30,
};

console.log(employee);
