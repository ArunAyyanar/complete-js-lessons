var namesArr = [
  {
    name: "arun",
    age: 34,
  },
  {
    name: "mani",
    age: 24,
  },
  {
    name: "anbu",
    age: 36,
  },
  {
    name: "sara",
    age: 29,
  },
];

namesArr
  .filter((nameObj) => nameObj.age > 30)
  .forEach((nameObj) => console.log(nameObj));
