function outer() {
  var name = "Arun Ayyanar";
  function inner() {
    return "my name is " + name;
  }
  return inner;
}

const myRes = outer();
console.log(myRes());
