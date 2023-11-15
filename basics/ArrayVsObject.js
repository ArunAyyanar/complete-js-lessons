const arunArr = [
  "arun",
  "ayyanar",
  2023 - 1989,
  ["prabha", "arunkumar", "siva"],
];

console.log(arunArr[3]);

const arunObj = {
  firstName: "arun",
  lastName: "ayyanar",
  age: 2023 - 1989,
  friends: ["prabha", "arunkumar", "siva"],
};

console.log(arunObj.firstName);
console.log(arunObj["lastName"]);

const key = "friends";

console.log(arunObj.key);
console.log(arunObj[key]);
