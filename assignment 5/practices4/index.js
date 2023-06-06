import { getNodes } from "./domHandlers.js";
import { getRandom } from "./getRandom.js";

const { numberDisplay, randomBtn, input, answerBtn, tip } = getNodes();

let num = 0;
let inputNum;

randomBtn.addEventListener("click", () => {
  const randomAnimate = setInterval(() => {
    num = getRandom(100);
    numberDisplay.textContent = num;
  }, 10);
  setTimeout(() => {
    clearInterval(randomAnimate);
    // console.log("最終產生的數字", num);
    numberDisplay.textContent = "???";
  }, 1000);
});

answerBtn.addEventListener("click", () => {
  if (num !== 0) {
    inputNum = Number(input.value);
    if (inputNum == num) {
      numberDisplay.textContent = num;
      tip.textContent = "恭喜你答對了！";
    }
    if (inputNum < num) {
      tip.textContent = "你猜測的數字太小哦！";
    }
    if (inputNum > num) {
      tip.textContent = "你猜測得太大哦！";
    }
    if (inputNum > 100 || inputNum < 1) {
      tip.textContent = "請輸入1-100間的數字喔！";
    }
  } else {
    alert("請先點選隨機生成數字按鈕！");
  }
});
