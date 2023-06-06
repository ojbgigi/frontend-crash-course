export const getNodes = () => {
    const control = document.querySelector(".control-btn");
    const resetBtn = document.querySelector(".reset-btn");
    const pauseBtn = document.querySelector(".pause-btn");
    const startBtn = document.querySelector(".start-btn");
    const input = document.querySelector(".input-num");
    const inputBox = document.querySelector(".input-box");
    const counterNum = document.querySelector(".counter-num");
    return { control, resetBtn, pauseBtn, startBtn, input, inputBox, counterNum };
}