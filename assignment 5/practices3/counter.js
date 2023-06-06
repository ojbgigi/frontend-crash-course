
import { getNodes } from "./domHandler.js";

const { counterNum } = getNodes();
let counterSub;

export const counterStart = (num) => {
    counterSub = setInterval(() => {
        if (num !== 0) {
            num = num - 1;
            counterNum.textContent = num;
        } if (num == 0) {
            clearInterval(counterSub);
        }
    }, 1000)
}

export const counterKeep = (num) => {
    counterSub = setInterval(() => {
        if (num !== 0) {
            num = num - 1;
            counterNum.textContent = num;
        } if (num == 0) {
            clearInterval(counterSub);
        }
    }, 1000)
}

export const counterPause = () => {
    clearInterval(counterSub);
}



