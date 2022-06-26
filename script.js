const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const h1 = document.querySelector("h1");
const body = document.body;
const currentColor1 = document.querySelector(".current-color1");
const currentColor2 = document.querySelector(".current-color2");

function copyText(color) {

  navigator.clipboard.writeText(color)

}
function randomColorGenerator() {

  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = ` rgb(${red},${green},${blue})`;

  copyText(randomColor);
  return randomColor;

}

function randomSmoothColorGenerator() {

  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  // const alpha = Math.round(Math.random());
  const alpha = Math.random().toFixed(1);
  const randomColor = ` rgba(${red},${green},${blue},${alpha})`;

  copyText(randomColor);
  return randomColor;

}

btn1.addEventListener("click", () => {

  const randomColor = randomColorGenerator();
  body.style.backgroundColor = randomColor;
  currentColor1.textContent = randomColor;

});

btn2.addEventListener("click", () => {

  const randomColor = randomSmoothColorGenerator();
  body.style.backgroundColor = randomColor;
  currentColor2.textContent = randomColor;

});
