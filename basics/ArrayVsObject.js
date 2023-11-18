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
  birthYear: 1988,
  friends: ["prabha", "arunkumar", "siva"],
  calcAge: function () {
    console.log("this --> ", this);
    return 2023 - this.birthYear;
  },
};

console.log(arunObj.firstName);
console.log(arunObj["lastName"]);

const key = "friends";

console.log(arunObj.key);
console.log(arunObj[key]);

// Task

console.log(
  `${arunObj.firstName} has ${arunObj.friends.length} friends, and his best friend is called ${arunObj["friends"][0]}`
);

console.log(arunObj["calcAge"]());
