const h1 = document.querySelector("h1");
const Decrement = document.querySelector(".Btn_1");
const Increment = document.querySelector(".Btn_2");
const Increase_7 = document.querySelector(".Btn_3");
const Decrease_5 = document.querySelector(".Btn_4");
const Reset = document.querySelector(".Btn_5");

Increment.addEventListener("click", () => {
  h1.textContent = +h1.textContent + 1;
  h1.style.color = "green";
});
Decrement.addEventListener("click", () => {
  h1.textContent = +h1.textContent - 1;
  h1.style.color = "red";
});
Increase_7.addEventListener("click", () => {
  h1.textContent = +h1.textContent + 7;
  h1.style.color = "green";
});
Decrease_5.addEventListener("click", () => {
  h1.textContent = +h1.textContent - 5;
  h1.style.color = "red";
});
Reset.addEventListener("click", () => {
  h1.textContent = 0;
  h1.style.color = "black";
  
});
