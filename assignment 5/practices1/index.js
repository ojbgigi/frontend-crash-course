import { getNodes } from "./domHandler.js";
import { plus, minus, multiply, divide } from "./operation.js";

const { num1, num2, equals, operationBtn } = getNodes();

operationBtn.addEventListener("click", (e) => {
    console.log(e);
})


equals.addEventListener("click", () => {
    if (num1.value !== "" && num2.value !== "") {
        let inputNum1 = Number(num1.value);
        let inputNum2 = Number(num2.value);

    } else {
        alert("請輸入數字！")
    }

})