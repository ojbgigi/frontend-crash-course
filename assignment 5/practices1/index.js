import { getNodes } from "./domHandler.js";
import { plus, minus, multiply, divide } from "./operation.js";

const {
  num1,
  num2,
  equals,
  operationBtn,
  result,
  plusBtn,
  minusBtn,
  multiplyBtn,
  divideBtn,
} = getNodes();

let operationFn;

operationBtn.addEventListener("click", (e) => {
  plusBtn.removeAttribute("class", "focus");
  minusBtn.removeAttribute("class", "focus");
  multiplyBtn.removeAttribute("class", "focus");
  divideBtn.removeAttribute("class", "focus");
  console.log(e.target.id);
  switch (e.target.id) {
    case "plus-btn":
      operationFn = plus;
      plusBtn.setAttribute("class", "focus");
      break;
    case "minus-btn":
      operationFn = minus;
      minusBtn.setAttribute("class", "focus");
      break;
    case "multiply-btn":
      operationFn = multiply;
      multiplyBtn.setAttribute("class", "focus");
      break;
    case "divide-btn":
      operationFn = divide;
      divideBtn.setAttribute("class", "focus");
      break;
    default:
      alert("請選擇如何運算!");
      break;
  }
});

equals.addEventListener("click", () => {
  if (num1.value !== "" && num2.value !== "") {
    let inputNum1 = Number(num1.value);
    let inputNum2 = Number(num2.value);
    result.textContent = operationFn(inputNum1, inputNum2);
  } else {
    alert("請輸入數字！");
  }
});
