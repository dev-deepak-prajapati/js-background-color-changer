let container = document.querySelector(".container");
let inputColor = document.querySelector("#inputColor");
let applyColorBtn = document.querySelector("#applyColorBtn");
let randomColorBtn = document.querySelector("#randomColorBtn");
let colorValueName = document.querySelector("#colorValueName");

const bgColors = [
  "crimson", // Vibrant deep red
  "coral", // Warm, bright orange-pink
  "gold", // Rich yellow
  "hotpink", // Bright, energetic pink
  "rebeccapurple", // Elegant, deep purple
  "slateblue", // Cool, medium blue-purple
  "royalblue", // Intense, bright blue
  "deepskyblue", // Vivid, clear light blue
  "teal", // Classic dark greenish-blue
  "seagreen", // Refreshing, natural green
  "forestgreen", // Dark, organic green
  "olive", // Muted earthy green
  "darkorange", // Strong, clear orange
  "peru", // Warm, sandy brown
  "chocolate", // Rich, deep brown
  "silver", // Clean, neutral light grey
  "slategray", // Cool, blue-tinted grey
  "darkslategray", // Moody, near-black teal-grey
  "charcoal", // Modern, dark grey (use "dimgray" or "darkgray" in standard CSS)
  "navy", // Deep, classic dark blue
];

const changeColor = function (color) {
  container.style.backgroundColor = color;
  colorValueName.textContent = color;
  inputColor.value = "";
};

const randomColor = function () {
  const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  changeColor(randomColor);
};


const applyColor = function (e) {
  const colorName = inputColor.value;
  changeColor(colorName);
};

randomColorBtn.addEventListener("click", randomColor);
applyColorBtn.addEventListener("click", applyColor);
