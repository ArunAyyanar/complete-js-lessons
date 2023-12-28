const buttonEle = document.querySelector("button");

buttonEle.addEventListener("click", () => {
  const name = prompt("Your name  : ");

  document.querySelector("p").textContent = "Welcome " + name;
});
