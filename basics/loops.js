const grades = ["A1", "A2", "B1", "B2"];

for (let i = 0; i < grades.length; i++) {
  console.log(`${i + 1} -- ${grades[i]}`);
}

grades.forEach((grade, i) => {
  console.log(`${i + 1} -- ${grade}`);
});
