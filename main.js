let counter = 0;
let firstClick = true;

function numIncrement() {
  counter++;
  document.getElementById("number").innerHTML = counter;
  firstClick = false;
}

function numDecrement() {
  counter--;
  document.getElementById("number").innerHTML = counter;
  firstClick = false;
}

function setValue() {
  const val = document.getElementById("input").value;
  counter = parseInt(val);
}
