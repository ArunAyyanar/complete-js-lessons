/* 
console.log("main.js");
const myHead = document.querySelector("h1");
myHead.textContent = "Hello world...";
const input = prompt("enter your name");
const pTag = document.querySelector("p");
pTag.textContent = "welcome " + input;
*/

document.querySelector("html").addEventListener("click", () => {
  console.log("you have clicked the page");
  document.querySelector("h1").textContent = "Hi Arun";
});
