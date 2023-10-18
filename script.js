// const decButton = document.querySelector("#dec");
const value = document.querySelector("#num");
// const incButton = document.querySelector("#inc");

let val = parseInt(value.textContent);

function decrement() {
  val--;
  value.textContent = val;
}
function increment() {
  val++;
  value.textContent = val;
}

decButton.addEventListener("click", decrement);
incButton.addEventListener("click", increment);
