var counter = document.getElementById("number");
var increase = document.getElementById("increase");
var reset = document.getElementById("reset");
var decrease = document.getElementById("decrease");

let number = 0;

const buttons = document.querySelectorAll(".btn");
buttons.forEach((e) => {
  e.addEventListener("click", () => {
    switch (e) {
      case increase:
        number += 1;
        break;
      case reset:
        number = 0;
        break;
      case decrease:
        number -= 1;
        break;
      default:
        break;
    }
    counter.innerHTML = number;
  });
});

//increase.addEventListener("click", () => {
//   increaseCounter();
// });
// const increaseCounter = () => {
//   number += 1;
//   counter.innerHTML = number;
// };
// reset.addEventListener("click", () => {
//   resetCounter();
// });
// const resetCounter = () => {
//   number = 0;
//   counter.innerHTML = number;
// };
// decrease.addEventListener("click", () => {
//   decreaseCounter();
// });
// const decreaseCounter = () => {
//   number -= 1;
//   counter.innerHTML = number;
// };
