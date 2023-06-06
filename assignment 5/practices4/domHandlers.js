export const getNodes = () => {
  const numberDisplay = document.querySelector(".number-box");
  const randomBtn = document.querySelector(".random-btn");
  const input = document.querySelector(".input-num");
  const answerBtn = document.querySelector(".answer-btn");
  const tip = document.querySelector(".tip");
  return { numberDisplay, randomBtn, input, answerBtn, tip };
};
