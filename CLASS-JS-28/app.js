var body = document.getElementById("body");
var button = document.getElementById("button");
var colors = ["red", "blue", "green", "yellow", "orange"];

button.addEventListener("click", changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
  console.log(colorIndex);
}

