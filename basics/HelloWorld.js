console.log("Hello World !!!");

let names = ["Tamil", "arun", "Saranya", "Balaji"];

console.log("Name sorting");

names
  .sort((name1, name2) =>
    name1.toLocaleLowerCase() > name2.toLocaleLowerCase()
      ? 1
      : name1.toLocaleLowerCase() < name2.toLocaleLowerCase()
      ? -1
      : 0
  )
  .forEach((name) => console.log(name));

let student = [
  {
    name: "Sasi",
    mark: 78,
  },
  {
    name: "Mani",
    mark: 45,
  },
  {
    name: "Tamil",
    mark: 66,
  },
];

// Order by Marks - High -> Low

student
  .sort((s1, s2) => s1.mark - s2.mark)
  .reverse((s) => s)
  .forEach((s) => console.log(s));
