let num = 0;
const resetBtn = document.querySelector(".reset-btn");
const pauseBtn = document.querySelector(".pause-btn");
const startBtn = document.querySelector(".start-btn");
const input = document.querySelector(".input-num");
const counterNum = document.querySelector(".counter-num");

startBtn.addEventListener("click", () => {
  num = Number(input.value);
  input.value = "";
  counterNum.textContent = num;
});
