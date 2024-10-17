console.log("Hello world !!!");

names = ["tamil", "arun", "sara", "anu"];

const addition = (...n) => n.reduce((n1, n2) => n1 + n2);

console.log(addition(23, 3, 34));

const getOnlyStartWithA = (...names) => names.filter((n) => n.startsWith("a"));

console.log(getOnlyStartWithA("tamil", "arun", "sara", "anu"));
