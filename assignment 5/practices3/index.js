import { counterStart, counterKeep, counterPause } from "./counter.js";
import { getNodes } from "./domHandler.js";

const { control, resetBtn, pauseBtn, startBtn, input, inputBox, counterNum } = getNodes();

let num = 0;

let keepBtn = document.createElement("button");
keepBtn.setAttribute("class", "keep-btn");
keepBtn.textContent = "繼續";
resetBtn.setAttribute("style", "display:none");
pauseBtn.setAttribute("style", "display:none");

startBtn.addEventListener("click", () => {
  if (input.value !== "") {
    num = Number(input.value);
    input.value = "";
    counterNum.textContent = num;
    counterStart(num);
    startBtn.remove();
    control.appendChild(keepBtn);
    inputBox.setAttribute("style", "display:none");
    resetBtn.setAttribute("style", "display:block");
    pauseBtn.setAttribute("style", "display:block");
  } else {
    alert("請輸入秒數");
  }
});

keepBtn.addEventListener("click", () => {
  num = Number(counterNum.textContent);
  counterKeep(num);
})

pauseBtn.addEventListener("click", () => {
  counterPause();
})

resetBtn.addEventListener("click", () => {
  num = 0;
  counterNum.textContent = "-";
  keepBtn.remove();
  control.appendChild(startBtn);
  inputBox.setAttribute("style", "display:block");
  resetBtn.setAttribute("style", "display:none");
  pauseBtn.setAttribute("style", "display:none");
})